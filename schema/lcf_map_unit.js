module.exports =
  {
    'signature': 'LcfMapUnit',
    "type": "array1d", "name": "global", "value": [
      {"index": 1, "type": "integer", "name": "chip_set_id", "value": 1},
      {"index": 2, "type": "integer", "name": "width", "value": 20},
      {"index": 3, "type": "integer", "name": "height", "value": 15},

      {"index": 11, "type": "integer", "name": "scroll_type"},

      {"index": 31, "type": "bool", "name": "usePanorama", "value": false},
      {"index": 32, "type": "string", "name": "panorama"},
      {"index": 33, "type": "bool", "name": "scrollPanoramaH", "value": false},
      {"index": 34, "type": "bool", "name": "scrollPanoramaV", "value": false},
      {"index": 35, "type": "bool", "name": "autoScrollPanoramaH", "value": false},
      {"index": 36, "type": "integer", "name": "autoScrollPanoramaSpeedH", "value": 0},
      {"index": 37, "type": "bool", "name": "autoScrollPanoramaV", "value": false},
      {"index": 38, "type": "integer", "name": "autoScrollPanoramaSpeedV", "value": 0},

      {"index": 71, "type": "binary", "name": "lower"},
      {"index": 72, "type": "binary", "name": "upper"},

      {"index": 81, "type": "array2d", "name": "event", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "integer", "name": "x", "value": 0},
        {"index": 3, "type": "integer", "name": "y", "value": 0},
        // [4]:
        {"index": 5, "type": "array2d", "name": "Page", "value": [
          {"index": 2, "type": "array1d", "name": "Term", "value": [
            {"index": 1, "type": "integer", "name": "flag", "value": 0},
            {"index": 2, "type": "integer", "name": "switch_id1", "value": 1},
            {"index": 3, "type": "integer", "name": "switch_id2", "value": 1},
            {"index": 4, "type": "integer", "name": "variable_id", "value": 1},
            {"index": 5, "type": "integer", "name": "value", "value": 0},
            {"index": 6, "type": "integer", "name": "item_id", "value": 1},
            {"index": 7, "type": "integer", "name": "char_id", "value": 1},
            {"index": 8, "type": "integer", "name": "timerLeft", "value": 0},
            {"index": 9, "type": "integer", "name": "timerLeft2", "value": 0},
            {"index": 10, "type": "integer", "name": "compare_type", "value": 0},
          ]},

          {"index": 21, "type": "string", "name": "char_set"},
          {"index": 22, "type": "integer", "name": "char_set_pos", "value": 0},
          {"index": 23, "type": "integer", "name": "char_setdir", "value": 2},
          {"index": 24, "type": "integer", "name": "char_setPat", "value": 1},
          {"index": 25, "type": "bool", "name": "semiTrans", "value": false},

          {"index": 31, "type": "integer", "name": "action", "value": 0},
          {"index": 32, "type": "integer", "name": "freq", "value": 3},
          {"index": 33, "type": "integer", "name": "start_type", "value": 0},
          {"index": 34, "type": "integer", "name": "priority_type", "value": 0},
          {"index": 35, "type": "bool", "name": "noPile", "value": false},
          {"index": 36, "type": "integer", "name": "anime_type", "value": 0},
          {"index": 37, "type": "integer", "name": "speed", "value": 3},

          {"index": 41, "type": "array1d", "name": "move", "value": [
            {"index": 11, "type": "integer", "name": "length", "value": 0},
            {"index": 12, "type": "binary", "name": "data"},

            {"index": 21, "type": "bool", "name": "repeat", "value": true},
            {"index": 22, "type": "bool", "name": "pass", "value": false},
          ]},

          {"index": 51, "type": "integer", "name": "eventLength", "value": 0},
          {"index": 52, "type": "event", "name": "event"},
        ]},
      ]},

      {"index": 91, "type": "integer", "name": "saveTime"},
    ]};
