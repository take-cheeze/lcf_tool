module.exports = [
  {"type": "array2d", "name": "global", "value": [
    {"index": 1, "type": "string", "name": "name"},
    {"index": 2, "type": "integer", "name": "parent_map_id"},

    {"index": 3, "type": "integer", "name": "indentation"},
    {"index": 4, "type": "integer", "name": "type"},
    {"index": 5, "type": "integer", "name": "unknown0"},
    {"index": 6, "type": "integer", "name": "unknown1"},
    {"index": 7, "type": "bool", "name": "isOpen", "value": false}, // relate with nest?

    {"index": 11, "type": "integer", "name": "music_type"},
    {"index": 12, "type": "music", "name": "music"},

    {"index": 21, "type": "integer", "name": "backdrop_type"},
    {"index": 22, "type": "string", "name": "backdrop"},

    {"index": 31, "type": "integer", "name": "teleport"},
    {"index": 32, "type": "integer", "name": "escape"},
    {"index": 33, "type": "integer", "name": "save"},

    {"index": 41, "type": "array2d", "name": "encount", "value": [
      {"index": 1, "type": "integer", "name": "enemyGroup_id"},
    ]},
    {"index": 44, "type": "integer", "name": "encuntStep", "value": 25},

    {"index": 51, "type": "binary", "name": "areaRange"}, // uint32t[4] = { startx, starty, endx, endy };
  ]},

  {"type": "ber_enum", "name": "map_exist"},

  {"type": "array1d", "name": "start_point", "value": [
    {"index": 1, "type": "integer", "name": "party_map_id"},
    {"index": 2, "type": "integer", "name": "partyX", "value": 0},
    {"index": 3, "type": "integer", "name": "partyY", "value": 0},

    {"index": 11, "type": "integer", "name": "boat_map_id", "value": 0},
    {"index": 12, "type": "integer", "name": "boatX", "value": 0},
    {"index": 13, "type": "integer", "name": "boatY", "value": 0},

    {"index": 21, "type": "integer", "name": "ship_map_id", "value": 0},
    {"index": 22, "type": "integer", "name": "shipX", "value": 0},
    {"index": 23, "type": "integer", "name": "shipY", "value": 0},

    {"index": 31, "type": "integer", "name": "airship_map_id", "value": 0},
    {"index": 32, "type": "integer", "name": "airshipX", "value": 0},
    {"index": 33, "type": "integer", "name": "airshipY", "value": 0},
  ]},
];

module.exports.signature = 'LcfMapTree';
