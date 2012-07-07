#!/usr/bin/env node

var Model = require('./main').Model;

if(Buffer && __filename && __dirname) {
  function buffer2arraybuffer(buf) {
    console.assert(Buffer.isBuffer(buf));

    var ret = new ArrayBuffer(buf.length);
    var ary = new Uint8Array(ret);
    for(var i = 0; i < buf.length; ++i) {
      ary[i] = buf[i]
    }
    return ret;
  }

  var fs = require('fs');

  function print_model(file) {
    console.log(file);
    console.log(JSON.stringify(new Model(buffer2arraybuffer(fs.readFileSync(file)))));
  }

  print_model('./TestGame/TestGame/RPG_RT.ldb');
  print_model('./TestGame/TestGame/RPG_RT.lmt');
  for(var i = 1; i <= 47; ++i) {
    print_model('./TestGame/TestGame/Map' + (i < 10? '000' : '00') + i + '.lmu');
  }
} else {
  $.get('./TestGame/TestGame/RPG_RT.ldb', function (data) {
    var m = new Model(data);
    $('#ldb').text(JSON.stringify(m));
  }, 'binary');

  $.get('./TestGame/TestGame/RPG_RT.lmt', function (data) {
    var m = new Model(data);
    $('#lmt').text(JSON.stringify(m));
  }, 'binary');

  for(var i = 1; i <= 47; ++i) {
    $.get('./TestGame/TestGame/Map' + (i < 10? '000' : '00') + i + '.lmu', function (data) {
      var m = new Model(data);
      $('#lmu').append($(document.createElement('div')).text(JSON.stringify(m)).addClass('Map' + i));
    }, 'binary');
  }
}
