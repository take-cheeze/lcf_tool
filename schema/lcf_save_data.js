module.exports =
    {
      'signature': 'LcfSaveData',
      "type": "array1d", "name": "global", "value": [
        {"index": 100, "type": "array1d", "name": "Preview", "value": [
                {"index": 1, "type": "float", "name": "timeStamp"},

                {"index": 11, "type": "string", "name": "name"},
                {"index": 12, "type": "integer", "name": "level", "value": 1},
                {"index": 13, "type": "integer", "name": "hp_"},

                {"index": 21, "type": "string", "name": "face_set1"},
                {"index": 22, "type": "integer", "name": "face_set_pos1", "value": 0},
                {"index": 23, "type": "string", "name": "face_set2"},
                {"index": 24, "type": "integer", "name": "face_set_pos2", "value": 0},
                {"index": 25, "type": "string", "name": "face_set3"},
                {"index": 26, "type": "integer", "name": "face_set_pos3", "value": 0},
                {"index": 27, "type": "string", "name": "face_set4"},
                {"index": 28, "type": "integer", "name": "face_set_pos4", "value": 0},
            ]}
        {"index": 101, "type": "array1d", "name": "System", "value": [
                {"index": 1, "type": "integer", "name": "dummy"},

                {"index": 11, "type": "integer", "name": "dummy"},

                {"index": 21, "type": "string", "name": "system"},
                {"index": 22, "type": "integer", "name": "wallpaper"},
                {"index": 23, "type": "integer", "name": "font"},

                {"index": 31, "type": "integer", "name": "switch_data_num", "value": 0},
                {"index": 32, "type": "binary", "name": "switch_data"},
                {"index": 33, "type": "integer", "name": "variable_data_num", "value": 0},
                {"index": 34, "type": "binary", "name": "variable_data"},

                {"index": 41, "type": "integer", "name": "window_type", "value": 0},
                {"index": 42, "type": "integer", "name": "windowViewPoint", "value": 2},
                {"index": 43, "type": "bool", "name": "do_notHideParty", "value": true},
                {"index": 44, "type": "bool", "name": "moveWhenWait", "value": false},

                {"index": 51, "type": "string", "name": "face_set"},
                {"index": 52, "type": "integer", "name": "face_set_pos", "value": 0},
                {"index": 53, "type": "integer", "name": "side", "value": 0},
                {"index": 54, "type": "bool", "name": "flip", "value": false},
                {"index": 55, "type": "bool", "name": "partyTransparent", "value": false},

                {"index": 71, "type": "music", "name": "dummy"},
                {"index": 72, "type": "music", "name": "battle"},
                {"index": 73, "type": "music", "name": "battleEnd"},
                {"index": 74, "type": "music", "name": "hotel"},
                {"index": 75, "type": "music", "name": "current"},
                {"index": 76, "type": "music", "name": "dummy"},
                {"index": 77, "type": "music", "name": "dummy"},
                {"index": 78, "type": "music", "name": "memorized"},
                {"index": 79, "type": "music", "name": "boat"},
                {"index": 80, "type": "music", "name": "ship"},
                {"index": 81, "type": "music", "name": "airShip"},
                {"index": 82, "type": "music", "name": "gameOver"},

                {"index": 91, "type": "sound", "name": "cursormove"},
                {"index": 92, "type": "sound", "name": "enter"},
                {"index": 93, "type": "sound", "name": "cancel"},
                {"index": 94, "type": "sound", "name": "buzzer"},
                {"index": 95, "type": "sound", "name": "battleStart"},
                {"index": 96, "type": "sound", "name": "runAway"},
                {"index": 97, "type": "sound", "name": "enemyAttack"},
                {"index": 98, "type": "sound", "name": "enemyDamaged"},
                {"index": 99, "type": "sound", "name": "partyDamaged"},
                {"index": 100, "type": "sound", "name": "evasion"},
                {"index": 101, "type": "sound", "name": "enamyDead"},
                {"index": 102, "type": "sound", "name": "item_use"},

                {"index": 111, "type": "binary", "name": "moveErase"},
                {"index": 112, "type": "binary", "name": "moveShow"},
                {"index": 113, "type": "binary", "name": "battleStartErase"},
                {"index": 114, "type": "binary", "name": "battleStartShow"},
                {"index": 115, "type": "binary", "name": "battleEndErase"},
                {"index": 116, "type": "binary", "name": "battleEndShow"},

                {"index": 121, "type": "bool", "name": "canTeleport"},
                {"index": 122, "type": "bool", "name": "canEscape"},
                {"index": 123, "type": "bool", "name": "canSave"},
                {"index": 124, "type": "bool", "name": "canOpenMenu"},
                {"index": 125, "type": "string", "name": "backdrop"},

                {"index": 131, "type": "integer", "name": "saveTime"},
            ]}
        {"index": 102, "type": "array1d", "name": "dummy", "value": [
                {"index": 1, "type": "binary", "name": "dummy"},

                {"index": 11, "type": "binary", "name": "dummy"},

                {"index": 31, "type": "binary", "name": "dummy"},
                {"index": 32, "type": "binary", "name": "dummy"},

                {"index": 41, "type": "binary", "name": "dummy"},
                {"index": 42, "type": "binary", "name": "dummy"},
                {"index": 43, "type": "binary", "name": "dummy"},
                {"index": 44, "type": "binary", "name": "dummy"},
                {"index": 45, "type": "binary", "name": "dummy"},

                {"index": 49, "type": "binary", "name": "dummy"},
            ]}
        {"index": 103, "type": "array2d", "name": "Picture", "value": [
                {"index": 1, "type": "string", "name": "picture"},
                {"index": 2, "type": "float", "name": "startX", "value": 160},
                {"index": 3, "type": "float", "name": "startY", "value": 120},
                {"index": 4, "type": "float", "name": "currentX", "value": 160},
                {"index": 5, "type": "float", "name": "currentY", "value": 120},
                {"index": 6, "type": "bool", "name": "scroll", "value": false},
                {"index": 8, "type": "float", "name": "dummy"},
                {"index": 9, "type": "bool", "name": "isTrans", "value": false},

                {"index": 11, "type": "float", "name": "red"},
                {"index": 12, "type": "float", "name": "green"},
                {"index": 13, "type": "float", "name": "blue"},
                {"index": 14, "type": "float", "name": "chroma"},
                {"index": 15, "type": "integer", "name": "effect"},
                {"index": 16, "type": "float", "name": "speedOrPowerVal"},

                {"index": 31, "type": "float", "name": "goalX"},
                {"index": 32, "type": "float", "name": "goalY"},
                {"index": 33, "type": "integer", "name": "magnify", "value": 100},
                {"index": 34, "type": "integer", "name": "trans", "value": 0},

                {"index": 41, "type": "integer", "name": "goalRed", "value": 100},
                {"index": 42, "type": "integer", "name": "goalGreen", "value": 100},
                {"index": 43, "type": "integer", "name": "goalBlue", "value": 100},
                {"index": 44, "type": "integer", "name": "goalChroma", "value": 100},
                {"index": 46, "type": "integer", "name": "speedOrPower"},

                {"index": 51, "type": "integer", "name": "countDown", "value": 0},
                {"index": 52, "type": "float", "name": "degree"},
                {"index": 53, "type": "integer", "name": "dummy"},
            ]}
        {"index": 104, "type": "event_state", "name": "party"},
        {"index": 105, "type": "event_state", "name": "boat"},
        {"index": 106, "type": "event_state", "name": "ship"},
        {"index": 107, "type": "event_state", "name": "Airship"},
        {"index": 108, "type": "array2d", "name": "character", "value": [
                {"index": 1, "type": "string", "name": "name"},
                {"index": 2, "type": "string", "name": "title"},
                {"index": 3, "type": "bool", "name": "semiTrans"},

                {"index": 11, "type": "string", "name": "char_set"},
                {"index": 12, "type": "integer", "name": "char_set_pos"},
                {"index": 13, "type": "bool", "name": "trans"},

                {"index": 21, "type": "string", "name": "face_set"},
                {"index": 22, "type": "integer", "name": "face_set_pos"},

                {"index": 31, "type": "integer", "name": "level"},
                {"index": 32, "type": "integer", "name": "exp"},
                {"index": 33, "type": "integer", "name": "hp_"},
                {"index": 34, "type": "integer", "name": "mp_"},

                {"index": 41, "type": "integer", "name": "attack", "value": 0},
                {"index": 42, "type": "integer", "name": "gaurd", "value": 0},
                {"index": 43, "type": "integer", "name": "mind", "value": 0},
                {"index": 44, "type": "integer", "name": "speed", "value": 0},

                {"index": 51, "type": "integer", "name": "skill_data_num", "value": 0},
                {"index": 52, "type": "binary", "name": "skill_data"}, // std::set<uint16t>

                {"index": 61, "type": "binary", "name": "equipment"}, // std::array<uint16t, 5>

                {"index": 71, "type": "integer", "name": "cur_hp_", "value": 0},
                {"index": 72, "type": "integer", "name": "cur_mp_", "value": 0},

                {"index": 81, "type": "integer", "name": "conditionStep_num", "value": 0},
                {"index": 82, "type": "binary", "name": "conditionStep"}, // std::vector<uint16t>
                {"index": 83, "type": "integer", "name": "condition_num", "value": 0},
                {"index": 84, "type": "binary", "name": "condition"}, // std::vector<uint8t>

                {"index": 90, "type": "integer", "name": "job"},
                {"index": 91, "type": "bool", "name": "doubleHand"},
            ]}
        {"index": 109, "type": "array1d", "name": "Status", "value": [
                {"index": 1, "type": "integer", "name": "member_num", "value": 0},
                {"index": 2, "type": "binary", "name": "member"},

                {"index": 11, "type": "integer", "name": "item_type_num", "value": 0},
                {"index": 12, "type": "binary", "name": "item_id"},
                {"index": 13, "type": "binary", "name": "item_num"},
                {"index": 14, "type": "binary", "name": "item_use"},

                {"index": 21, "type": "integer", "name": "money", "value": 0},
                // [23]:

                {"index": 32, "type": "integer", "name": "battle", "value": 0},
                {"index": 33, "type": "integer", "name": "loss", "value": 0},
                {"index": 34, "type": "integer", "name": "win", "value": 0},
                {"index": 35, "type": "integer", "name": "escape", "value": 0},

                {"index": 41, "type": "integer", "name": "dummy"},
                {"index": 42, "type": "binary", "name": "dummy"},
            ]}
        {"index": 110, "type": "array2d", "name": "Teleport", "value": [
                {"index": 1, "type": "integer", "name": "map_id", "value": 0},
                {"index": 2, "type": "integer", "name": "x", "value": 0},
                {"index": 3, "type": "integer", "name": "y", "value": 0},
                {"index": 4, "type": "bool", "name": "onAfterTeleport", "value": false},
                {"index": 5, "type": "integer", "name": "switch_id", "value": 1},
            ]}
        {"index": 111, "type": "array1d", "name": "event_data", "value": [
                {"index": 1, "type": "integer", "name": "dummy"},
                {"index": 3, "type": "integer", "name": "encountRate"},

                {"index": 5, "type": "integer", "name": "chip_set_id"},

                {"index": 11, "type": "array2d", "name": "info", "value": event_state},

                {"index": 21, "type": "binary", "name": "replaceLower"},
                {"index": 22, "type": "binary", "name": "replace_upper"},

                {"index": 31, "type": "bool", "name": "usePanorama"},
                {"index": 32, "type": "string", "name": "panorama"},
                {"index": 33, "type": "bool", "name": "horizontalScroll"},
                {"index": 34, "type": "bool", "name": "verticalScroll"},
                {"index": 35, "type": "bool", "name": "horizontalScrollAuto"},
                {"index": 36, "type": "integer", "name": "horizontalScrollSpeed"},
                {"index": 37, "type": "bool", "name": "verticalScrollAuto"},
                {"index": 38, "type": "integer", "name": "verticalScrollSpeed"},
            ]}
        {"index": 112, "type": "array1d", "name": "dummy", "value": [
            ]}
        {"index": 113, "type": "array1d", "name": "dummy", "value": [
                {"index": 1, "type": "array2d", "name": "dummy", "value": [
                        {"index": 1, "type": "integer", "name": "eventLength"},
                        {"index": 2, "type": "event", "name": "dummy"},

                        {"index": 11, "type": "integer", "name": "dummy"},
                        {"index": 12, "type": "integer", "name": "dummy"},
                        {"index": 13, "type": "event", "name": "dummy"},

                        {"index": 21, "type": "integer", "name": "dummy"},
                        {"index": 22, "type": "integer", "name": "dummy"},

                        // [31]:
                    ]}
                {"index": 4, "type": "integer", "name": "dummy"},
            ]}
        {"index": 114, "type": "array2d", "name": "dummy", "value": [
                {"index": 1, "type": "array1d", "name": "dummy", "value": [
                        {"index": 1, "type": "binary", "name": "dummy"},
                    ]}
            ]}
    ]};
