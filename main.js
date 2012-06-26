
var schema_map = {};
var signature_map = {}

var schema_list = [
  'lcf_database', 'lcf_save_data', 'lcf_map_unit',
  'lcf_map_tree', 'event_state', 'sound', 'music'];
schema_list.forEach(function(v) {
  var s = require('./schema/' + v);

  schema_map[v] = s;
  if(s.hasOwnProperty('signature')) {
    signature_map[v] = s;
  }
});

function ReadStream(bin, offset, length) {
  assert(bin instanceof ArrayBuffer);

  this.position = 0;
  this.source = bin;
  this.length = bin.byteLength;
  this.view = offset && length?
    DataView(bin, offset, length) : DataView(bin);
}

ReadStream.prototype = {
  'read_octed': function() {
    assert(!is_eof());
    return this.view.getUint8(this.position++);
  },
  'read_float': function() {
    assert(!is_eof());
    var ret = this.view.getFloat64(this.position, true);
    this.position += 64 / 8;
    return ret;
  },
  'read_ber': function() {
    var ret = 0x0;
    var current_byte = 0x0;
    do {
      current_byte = this.read_octed();
      ret = (ret << 7) | (current_byte & 0x7f);
    } while(current_byte & 0x80);
    return ret;
  },

  'slice': function(len) {
    var offset = this.view.byteOffset + this.position;
    return this.source.slice(offset, offset + len);
  },
  'is_root': function() {
    return (this.view.byteOffset === 0) &&
      (this.view.byteLength === this.source.byteLength);
  },

  'read_string': function(len) {
    len = len || this.read_ber();
    var ret = Encoding.convert(this.slice(len), 'UTF8', 'SJIS');
    this.position += len;
    return ret;
  },
  'read_signature': function() {
    // check this stream is the root
    assert(this.position === 0);
    assert(this.is_root());

    return this.read_string();
  },

  'seek': function(pos) { this.position = pos; },
  'is_eof': function() {
    return(this.position >= this.source.byteLength);
  },
  'create_range': function(length) {
    return new ReadStream(this.source, this.position, length);
  },
};

// define read_uint16, read_uint32, read_int16, read_int32
[16, 32].forEach(function(v) {
  ReadStream.prototype['read_uint' + v] = function() {
    assert(!is_eof());
    var ret = this.view['getUint' + v](this.position, true);
    this.position += v / 8;
    return ret;
  };
  ReadStream.prototype['read_int' + v] = function() {
    assert(!is_eof());
    var ret = this.view['getInt' + v](this.position, true);
    this.position += v / 8;
    return ret;
  };
});

function DefineMap(ary) {
  assert(ary instanceof Array);

  this.index = {};
  this.name = {};
  ary.forEach(function(v) {
    assert(typeof v.index === 'number');
    assert(typeof v.name === 'string');
    assert(!this.index.hasOwnProperty(v.index.toString()));
    assert(!this.name.hasOwnProperty(v.name));

    this.index[v.index.toString()] = v;
    this.name[v.name] = v;
  });
}
DefineMap.prototype = {
  'get': function(idx) {
    switch(typeof idx) {
      case 'string':
      assert(this.name.hasOwnProperty(idx));
      return this.name[idx];

      case 'number':
      assert(this.index.hasOwnProperty(idx.toString()));
      return this.index[idx.toString()];

      default: assert(false);
    }
  },
};

var read_element;
var create_element;

function Array1D(schema) {
  this.schema = schema;
  if(this.schema.value instanceof Array) {
    this.schema.value = new DefineMap(schema.value);
  }

  this.index = {};
  this.name = {};
}
Array1D.prototype = {
  'load_stream': function(stream) {
    var idx = stream.read_ber();
    while(idx != 0) {
      var size = stream.read_ber();
      var sch = this.schema.get(idx);
      var elm = read_element(stream.create_range(size), sch);
      this.name[sch.name] = elm;
      this.index[idx.toString()] = elm;

      if(stream.is_eof() && stream.is_root()) { return; }
      idx = stream.read_ber();
    }
  },

  'get': function(idx) {
    switch(typeof idx) {
      case 'string':
      if(this.name.hasOwnProperty(idx)) {
        return this.name[idx];
      } else {
        var s = this.schema.value.get(idx);
        var ret = create_element(s);
        this.name[idx] = ret;
        this.index[s.index.toString()] = ret;
        return ret;
      }

      case 'number':
      if(this.index.hasOwnProperty(idx.toString())) {
        return this.index[idx.toString()];
      } else {
        var s = this.schema.value.get(idx);
        var ret = create_element(s);
        this.name[s.name] = ret;
        this.index[idx.toString()] = ret;
        return ret;
      }

      default: assert(false);
    }
  },
};

function Array2D(stream, schema) {
  this.schema = schema;
  if(this.schema.value instanceof Array) {
    this.schema.value = new DefineMap(schema.value);
  }

  this.index = {};
}
Array2D.prototype = {
  'load_stream': function(stream) {
    var elm_num = stream.read_ber();
    for(var i = 0; i < elm_num; ++i) {
      var idx = stream.read_ber();
      var elm = Array1D(this.schema);
      elm.load_stream(stream);
      this.index[idx.toString()] = elm;
    }
  },

  'get': function(idx) {
    assert(typeof idx === 'string');
    assert(this.index.hasOwnProperty(idx.toString()));
    return this.index[idx.toString()];
  },
};

function EventCommand(stream) {
  if(stream) {
    this.code = stream.read_ber();
    this.nest = stream.read_ber();
    this.string = stream.read_string();

    var arg_len = stream.read_ber();
    this.args = [];
    for(var i = 0 ; i < this.arg_len; ++i) {
      this.args.push(stream.read_ber());
    }
  } else {
    this.code = 0;
    this.nest = 0;
    this.string = '';
    this.args = [];
  }
}
function Event(stream) {
  this.command_list = [];
  while(!stream.is_eof()) {
    this.command_list.push(new EventCommand(stream));
  }
}

function create_element(schema) {
  switch(schema.type) {
    case 'integer':
    case 'string':
    case 'bool':
    assert(schema.hasOwnProperty('value'));
    return schema.value;

    default:
    assert(schema_map.hasOwnProperty(schema.type));
    return create_element(schema_map[schema.type]);

    case 'ber_enum': return [];
    case 'binary': return new ArrayBuffer(0);
    case 'event': return new Event();
    case 'array1d': return Array1D(schema);
    case 'array2d': return Array2D(schema);
  }
}
function read_element(stream, schema) {
  var ret;
  switch(schema.type) {
    case 'integer':
    ret = stream.read_ber();
    break;

    case 'string':
    ret = stream.read_string(stream.length);
    break;

    case 'bool':
    ret = stream.read_ber();
    assert(ret === 0 || ret === 1);
    ret = ret? true : false;
    break;

    case 'binary':
    ret = stream.slice(stream.length);
    break;

    case 'event':
    ret = new Event(stream);
    break;

    case 'ber_enum':
    ret = [];
    var ber_enum_size = stream.read_ber(s);
    for(var i = 0; i <= ber_enum_size; ++i) {
      ret.push(stream.read_ber());
    }

    case 'array1d':
    ret = new Array1D(schema);
    ret.load_stream(stream);
    break;

    case 'array2d':
    ret = new Array2D(schema);
    ret.load_stream(stream);
    break;

    default:
    assert(schema_map.hasOwnProperty(schema.type));
    return read_element(stream, schema_map[schema.type]);
  }
  assert(stream.is_eof());
  return ret;
}

function Model(bin) {
  var stream = new ReadStream(bind);
  this.source = bin;

  this.signature = stream.read_signature();
  assert(signature_map.hasOwnProperty(this.signature));
  this.schema = signature_map[this.signature];

  if(this.schema instanceof Array) {
    this.value = [];
    this.schema.forEach(function(v) {
      this.value.push(read_element(stream, v));
    });
  } else { this.value = read_element(stream, v); }

  assert(stream.is_eof());
}
Model.prototype = {
  'get': function(idx) {
    if(this.schema instanceof Array) {
      assert(typeof idx === 'number');
      assert(idx < this.schema.length);
      return this.value[idx];
    } else switch(typeof idx) {
      case 'string':
      assert(this.name.hasOwnProperty(v.name));
      return this.name[idx];

      case 'number':
      assert(this.index.hasOwnProperty(v.index.toString()));
      return this.index[idx.toString()];

      default: assert(false);
    }
  },
};

require('./test');
