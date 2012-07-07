module.exports =
  {
    'signature': 'LcfDataBase',
    "type": "array1d", "name": "global", "value": [
      {"index": 11, "type": "array2d", "name": "character", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "string", "name": "title"},
        {"index": 3, "type": "string", "name": "char_set"},
        {"index": 4, "type": "integer", "name": "char_set_pos", "value": 0},
        {"index": 5, "type": "bool", "name": "semi_trans", "value": false},

        {"index": 7, "type": "integer", "name": "start_level", "value": 1},
        {"index": 8, "type": "integer", "name": "max_level", "value": 50},
        {"index": 9, "type": "bool", "name": "critical", "value": true},
        {"index": 10, "type": "integer", "name": "critical_rate", "value": 30 },

        {"index": 15, "type": "string", "name": "face_set"},
        {"index": 16, "type": "integer", "name": "face_set_pos", "value": 0},

        {"index": 21, "type": "bool", "name": "double_hand", "value": false},
        {"index": 22, "type": "bool", "name": "equip_fix", "value": false},
        {"index": 23, "type": "bool", "name": "ai_action", "value": false},
        {"index": 24, "type": "bool", "name": "strong_defence", "value": false},

        {"index": 31, "type": "binary", "name": "status"}, // std::array<std::array<uint16_t, 6>, max_level>

        {"index": 41, "type": "integer", "name": "exp_basic"},
        {"index": 42, "type": "integer", "name": "exp_increase"},
        {"index": 43, "type": "integer", "name": "exp_correction", "value": 0},

        {"index": 51, "type": "binary", "name": "equipment"}, // std::array<uint16_t, 5>

        {"index": 56, "type": "integer", "name": "unarmed_attack", "value": 1}, // battle anime id
        {"index": 57, "type": "integer", "name": "job", "value": 0},
        {"index": 58, "type": "integer", "name": "battle_anime", "value": 0},

        {"index": 60, "type": "integer", "name": "battle_x", "value": 0},
        {"index": 61, "type": "integer", "name": "battle_y", "value": 0},
        {"index": 62, "type": "integer", "name": "attackAnime", "value": 0},
        {"index": 63, "type": "array2d", "name": "skill", "value": [
          {"index": 1, "type": "integer", "name": "level"},
          {"index": 2, "type": "integer", "name": "skill_id", "value": 1},
        ]},
        {"index": 66, "type": "bool", "name": "useOriginalCommand", "value": false},
        {"index": 67, "type": "string", "name": "originalCommand"},

        {"index": 71, "type": "integer", "name": "condition_data_num", "value": 0},
        {"index": 72, "type": "binary", "name": "condition_data"},
        {"index": 73, "type": "integer", "name": "attrib_data_num", "value": 0},
        {"index": 74, "type": "binary", "name": "attrib_data"},

        {"index": 80, "type": "binary", "name": "battle_command"}, // std::array<uint32_t, 6>
      ]},
      {"index": 12, "type": "array2d", "name": "skill", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "string", "name": "comment"},
        {"index": 3, "type": "string", "name": "message_l1"},
        {"index": 4, "type": "string", "name": "message_l2"},
        {"index": 7, "type": "integer", "name": "message_failed"},
        {"index": 8, "type": "integer", "name": "type", "value": 0},

        {"index": 11, "type": "integer", "name": "using_mp_amount", "value": 0},
        {"index": 12, "type": "integer", "name": "range", "value": 0},
        {"index": 13, "type": "integer", "name": "switch_id", "value": 1},
        {"index": 14, "type": "integer", "name": "anime_id", "value": 1},
        {"index": 16, "type": "sound", "name": "sound"},
        {"index": 18, "type": "bool", "name": "use_at_field", "value": true},
        {"index": 19, "type": "bool", "name": "use_at_battle", "value": false},
        {"index": 20, "type": "bool", "name": "condition_effect", "value": false},
        {"index": 21, "type": "integer", "name": "blow_relation", "value": 0},
        {"index": 22, "type": "integer", "name": "mental_relation", "value": 3},
        {"index": 23, "type": "integer", "name": "effect_variance", "value": 4},
        {"index": 24, "type": "integer", "name": "basic_effect", "value": 0},
        {"index": 25, "type": "integer", "name": "succeed_rate", "value": 100},

        {"index": 31, "type": "bool", "name": "affect_hp", "value": false},
        {"index": 32, "type": "bool", "name": "affect_mp", "value": false},
        {"index": 33, "type": "bool", "name": "affect_attack", "value": false},
        {"index": 34, "type": "bool", "name": "affect_defence", "value": false},
        {"index": 35, "type": "bool", "name": "affect_mental", "value": false},
        {"index": 36, "type": "bool", "name": "affect_speed", "value": false},
        {"index": 37, "type": "bool", "name": "absorption", "value": false},
        {"index": 38, "type": "bool", "name": "ignore_defence", "value": false},

        {"index": 41, "type": "integer", "name": "condition_data_num", "value": 0},
        {"index": 42, "type": "binary", "name": "condition_data"}, // std::vector<uint8_t> (as bool)
        {"index": 43, "type": "integer", "name": "attrib_data_num", "value": 0},
        {"index": 44, "type": "binary", "name": "attrib_data"}, // std::vector<uint8_t> (as bool)
        {"index": 45, "type": "bool", "name": "change_attrib"},
      ]},
      {"index": 13, "type": "array2d", "name": "item", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "string", "name": "comment"},
        {"index": 3, "type": "integer", "name": "type", "value": 0},
        {"index": 5, "type": "integer", "name": "price", "value": 0},
        {"index": 6, "type": "integer", "name": "usable_time", "value": 1},

        {"index": 11, "type": "integer", "name": "attack", "value": 0},
        {"index": 12, "type": "integer", "name": "defence", "value": 0},
        {"index": 13, "type": "integer", "name": "mind", "value": 0},
        {"index": 14, "type": "integer", "name": "speed", "value": 0},

        {"index": 15, "type": "integer", "name": "hand", "value": 0},
        {"index": 16, "type": "integer", "name": "using_mp", "value": 0},
        {"index": 17, "type": "integer", "name": "hit_rate", "value": 0},
        {"index": 18, "type": "integer", "name": "critical_rate", "value": 0},

        {"index": 20, "type": "integer", "name": "anime_id", "value": 1},

        {"index": 21, "type": "bool", "name": "first_strike", "value": false},
        {"index": 22, "type": "bool", "name": "double_attack", "value": false},
        {"index": 23, "type": "bool", "name": "attack_all", "value": false},
        {"index": 24, "type": "bool", "name": "ignore_evasion_rate", "value": false},
        {"index": 25, "type": "bool", "name": "prevent_critical", "value": false},
        {"index": 26, "type": "bool", "name": "increase_evasion_rate", "value": false},
        {"index": 27, "type": "bool", "name": "half_using_mp_", "value": false},
        {"index": 28, "type": "bool", "name": "ignore_terrain_damage", "value": false},
        {"index": 29, "type": "bool", "name": "fix_equipment", "value": false},

        {"index": 31, "type": "integer", "name": "effect_range", "value": 0},
        {"index": 32, "type": "integer", "name": "hp_amount", "value": 0},
        {"index": 33, "type": "integer", "name": "hp_rate", "value": 0},
        {"index": 34, "type": "integer", "name": "mp_amount", "value": 0},
        {"index": 35, "type": "integer", "name": "mp_rate", "value": 0},

        {"index": 37, "type": "bool", "name": "only_at_field", "value": false},
        {"index": 38, "type": "bool", "name": "only_for_knockouts", "value": false},

        {"index": 41, "type": "integer", "name": "increase_hp", "value": 0},
        {"index": 42, "type": "integer", "name": "increase_mp", "value": 0},
        {"index": 43, "type": "integer", "name": "increase_attack", "value": 0},
        {"index": 44, "type": "integer", "name": "increase_defence", "value": 0},
        {"index": 45, "type": "integer", "name": "increase_mind", "value": 0},
        {"index": 46, "type": "integer", "name": "increase_speed", "value": 0},

        {"index": 51, "type": "integer", "name": "message_type", "value": 0},
        {"index": 53, "type": "integer", "name": "skill_id", "value": 1},
        {"index": 55, "type": "integer", "name": "switch_id", "value": 1},
        {"index": 57, "type": "bool", "name": "use_at_field", "value": true },
        // [58]: bool
        {"index": 59, "type": "bool", "name": "use_at_battle", "value": false},

        {"index": 61, "type": "integer", "name": "equip_data_num", "value": 0},
        {"index": 62, "type": "binary", "name": "equip_data"}, // std::vector<uint8_t> (as bool)
        {"index": 63, "type": "integer", "name": "condition_data_num", "value": 0},
        {"index": 64, "type": "binary", "name": "condition_data"}, // std::vector<uint8_t> (as bool)
        {"index": 65, "type": "integer", "name": "attrib_data_num", "value": 0},
        {"index": 66, "type": "binary", "name": "attrib_data"}, // std::vector<uint8_t> (as bool)
        {"index": 67, "type": "integer", "name": "condition_rate", "value": 0},
        {"index": 68, "type": "bool", "name": "condition_flip", "value": false},
        {"index": 69, "type": "integer", "name": "use_anime_id"},

        {"index": 71, "type": "bool", "name": "use_skill_as_item", "value": false},
        {"index": 72, "type": "integer", "name": "job_data_num", "value": 0},
        {"index": 73, "type": "binary", "name": "job_data"},
      ]},
      {"index": 14, "type": "array2d", "name": "enemy", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "string", "name": "monster"},
        {"index": 3, "type": "integer", "name": "hue", "value": 0},
        {"index": 4, "type": "integer", "name": "hp", "value": 10},
        {"index": 5, "type": "integer", "name": "mp", "value": 10},
        {"index": 6, "type": "integer", "name": "attack", "value": 10},
        {"index": 7, "type": "integer", "name": "defence", "value": 10},
        {"index": 8, "type": "integer", "name": "mind", "value": 10},
        {"index": 9, "type": "integer", "name": "speed", "value": 10},
        {"index": 10, "type": "bool", "name": "semi_trans", "value": false},
        {"index": 11, "type": "integer", "name": "exp", "value": 0},
        {"index": 12, "type": "integer", "name": "money", "value": 0},
        {"index": 13, "type": "integer", "name": "dropping_item_id", "value": 0},
        {"index": 14, "type": "integer", "name": "item_drop_rate", "value": 100},

        {"index": 21, "type": "bool", "name": "critical", "value": false},
        {"index": 22, "type": "integer", "name": "critical_rate", "value": 30},

        {"index": 26, "type": "bool", "name": "increase_miss", "value": false},
        {"index": 28, "type": "bool", "name": "in_the_air", "value": false},

        {"index": 31, "type": "integer", "name": "condition_data_num", "value": 0},
        {"index": 32, "type": "binary", "name": "condition_data"},
        {"index": 33, "type": "integer", "name": "attrib_data_num", "value": 0},
        {"index": 34, "type": "binary", "name": "attrib_data"},

        {"index": 42, "type": "array2d", "name": "action_pattern", "value": [
          {"index": 1, "type": "integer", "name": "action_type"},
          {"index": 2, "type": "integer", "name": "basic_action", "value": 1},
          {"index": 3, "type": "integer", "name": "skill_id", "value": 1},
          {"index": 4, "type": "integer", "name": "enemy_id", "value": 1},
          {"index": 5, "type": "integer", "name": "action_term", "value": 0},
          {"index": 6, "type": "integer", "name": "a", "value": 0},
          {"index": 7, "type": "integer", "name": "b", "value": 0},
          {"index": 8, "type": "integer", "name": "switch_id", "value": 1},
          {"index": 9, "type": "bool", "name": "on_after_action", "value": false},
          {"index": 10, "type": "integer", "name": "on_switch_id", "value": 1},
          {"index": 11, "type": "bool", "name": "off_after_action", "value": false},
          {"index": 12, "type": "integer", "name": "off_switch_id", "value": 1},
          {"index": 13, "type": "integer", "name": "priority", "value": 50},
        ]},
      ]},
      {"index": 15, "type": "array2d", "name": "enemy_group", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "array2d", "name": "enemy_enum", "value": [
          {"index": 1, "type": "integer", "name": "enemy_id", "value": 1},
          {"index": 2, "type": "integer", "name": "x", "value": 0},
          {"index": 3, "type": "integer", "name": "y", "value": 0},
          {"index": 4, "type": "bool", "name": "invisible", "value": false},
        ]},
        {"index": 4, "type": "integer", "name": "terrain_data_num"},
        {"index": 5, "type": "binary", "name": "terrain_data"},

        {"index": 11, "type": "array2d", "name": "battle_event", "value": [
          {"index": 2, "type": "array1d", "name": "term", "value": [
            {"index": 1, "type": "integer", "name": "flag", "value": 0},
            /*
               [bit]
               [0]: switch_1
               [1]: switch_2
               [2]: variable
               [3]: turn
               [4]: consume
               [5]: enemy_state
               [6]: char_state
               */
              {"index": 2, "type": "integer", "name": "switch_id_1", "value": 1},

              {"index": 3, "type": "integer", "name": "switch_id_2", "value": 1},

              {"index": 4, "type": "integer", "name": "variable_id", "value": 1},
              {"index": 5, "type": "integer", "name": "value", "value": 0},

              {"index": 6, "type": "integer", "name": "trun_freq", "value": 0},
              {"index": 7, "type": "integer", "name": "turn_offset", "value": 0},

              {"index": 8, "type": "integer", "name": "consume_from", "value": 0},
              {"index": 9, "type": "integer", "name": "consume_to", "value": 100},

              {"index": 10, "type": "integer", "name": "enemy_id", "value": 0},
              {"index": 11, "type": "integer", "name": "enemy_hp_from", "value": 0},
              {"index": 12, "type": "integer", "name": "enemy_hp_to", "value": 100},

              {"index": 13, "type": "integer", "name": "char_id", "value": 1},
              {"index": 14, "type": "integer", "name": "char_hp_from", "value": 0},
              {"index": 15, "type": "integer", "name": "char_hp_to", "value": 100},
            ]},

           {"index": 11, "type": "integer", "name": "event_length", "value": 0},
           {"index": 12, "type": "event", "name": "event"},
         ]},
      ]},
     {"index": 16, "type": "array2d", "name": "terrain", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "integer", "name": "damage", "value": 0},
        {"index": 3, "type": "integer", "name": "rate", "value": 100},
        {"index": 4, "type": "string", "name": "backdrop"},
        {"index": 5, "type": "bool", "name": "boat", "value": false},
        {"index": 6, "type": "bool", "name": "ship", "value": false},
        {"index": 7, "type": "bool", "name": "airship", "value": true},
        {"index": 9, "type": "bool", "name": "airship_land", "value": true},

        {"index": 11, "type": "integer", "name": "char_view_type", "value": 0},

        {"index": 15, "type": "sound", "name": "footstep"},
        {"index": 16, "type": "bool", "name": "on_damage_se"},
        {"index": 17, "type": "integer", "name": "background_type"},

        {"index": 21, "type": "string", "name": "background_a_name"},
        {"index": 22, "type": "bool", "name": "background_a_scrollh"},
        {"index": 23, "type": "bool", "name": "background_a_scrollv"},
        {"index": 24, "type": "integer", "name": "background_a_scrollh_speed"},
        {"index": 25, "type": "integer", "name": "background_a_scrollv_speed"},

        {"index": 30, "type": "bool", "name": "background_b"},
        {"index": 31, "type": "string", "name": "background_b_name"},
        {"index": 32, "type": "bool", "name": "background_b_scrollh"},
        {"index": 33, "type": "bool", "name": "background_b_scrollv"},
        {"index": 34, "type": "integer", "name": "background_b_scrollh_speed"},
        {"index": 35, "type": "integer", "name": "background_b_scrollv_speed"},

        {"index": 40, "type": "integer", "name": "special_flags"},
        {"index": 41, "type": "integer", "name": "special_back_party"},
        {"index": 42, "type": "integer", "name": "special_back_enemies"},
        {"index": 43, "type": "integer", "name": "special_lateral_party"},
        {"index": 44, "type": "integer", "name": "special_lateral_enemies"},
        {"index": 45, "type": "integer", "name": "grid_location"},
        {"index": 46, "type": "integer", "name": "grid_a"},
        {"index": 47, "type": "integer", "name": "grid_b"},
        {"index": 48, "type": "integer", "name": "grid_c"},
      ]},
     {"index": 17, "type": "array2d", "name": "attribute", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "integer", "name": "type", "value": 0},

        {"index": 11, "type": "integer", "name": "rate_a", "value": 300},
        {"index": 12, "type": "integer", "name": "rate_b", "value": 200},
        {"index": 13, "type": "integer", "name": "rate_c", "value": 100},
        {"index": 14, "type": "integer", "name": "rate_d", "value": 50},
        {"index": 15, "type": "integer", "name": "rate_e", "value": 0},
      ]},
     {"index": 18, "type": "array2d", "name": "condition", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "integer", "name": "type", "value": 0},
        {"index": 3, "type": "integer", "name": "color", "value": 6},
        {"index": 4, "type": "integer", "name": "priority", "value": 50},
        {"index": 5, "type": "integer", "name": "restrict", "value": 0},

        {"index": 11, "type": "integer", "name": "rate_a", "value": 100},
        {"index": 12, "type": "integer", "name": "rate_b", "value": 80},
        {"index": 13, "type": "integer", "name": "rate_c", "value": 60},
        {"index": 14, "type": "integer", "name": "rate_d", "value": 30},
        {"index": 15, "type": "integer", "name": "rate_e", "value": 0},

        {"index": 21, "type": "integer", "name": "cure_turn", "value": 0},
        {"index": 22, "type": "integer", "name": "cure_rate", "value": 0},
        {"index": 23, "type": "integer", "name": "shock_cure_rate", "value": 0},

        {"index": 31, "type": "bool", "name": "attack", "value": false},
        {"index": 32, "type": "bool", "name": "defence", "value": false},
        {"index": 33, "type": "bool", "name": "mind", "value": false},
        {"index": 34, "type": "bool", "name": "speed", "value": false},
        {"index": 35, "type": "integer", "name": "hit_rate", "value": 100},

        {"index": 41, "type": "bool", "name": "disable_blow_skill", "value": false},
        {"index": 42, "type": "integer", "name": "blow_relation", "value": 0},
        {"index": 43, "type": "bool", "name": "disable_mind_skill", "value": false},
        {"index": 44, "type": "integer", "name": "mind_relation", "value": 0},

        {"index": 51, "type": "string", "name": "message_member"},
        {"index": 52, "type": "string", "name": "message_enemy"},
        {"index": 53, "type": "string", "name": "message_already"},
        {"index": 54, "type": "string", "name": "message_last"},
        {"index": 55, "type": "string", "name": "message_cure"},

        {"index": 61, "type": "integer", "name": "turn_hp_amount", "value": 0},
        {"index": 62, "type": "integer", "name": "turn_hp_rate", "value": 0},
        {"index": 63, "type": "integer", "name": "field_hp_step", "value": 0},
        {"index": 64, "type": "integer", "name": "field_hp_amount", "value": 0},
        {"index": 65, "type": "integer", "name": "turn_mp_amount", "value": 0},
        {"index": 66, "type": "integer", "name": "turn_mp_rate", "value": 0},
        {"index": 67, "type": "integer", "name": "field_mp_step", "value": 0},
        {"index": 68, "type": "integer", "name": "field_mp_amount", "value": 0},
      ]},
     {"index": 19, "type": "array2d", "name": "battle_anime", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "string", "name": "battle"},
        {"index": 6, "type": "array2d", "name": "Effect", "value": [
           {"index": 1, "type": "integer", "name": "frame_id", "value": 0},
           {"index": 2, "type": "sound", "name": "sound"},
           {"index": 3, "type": "integer", "name": "range", "value": 0},
           {"index": 4, "type": "integer", "name": "red", "value": 31},
           {"index": 5, "type": "integer", "name": "green", "value": 31},
           {"index": 6, "type": "integer", "name": "blue", "value": 31},
           {"index": 7, "type": "integer", "name": "flash", "value": 31},
         ]},
        {"index": 9, "type": "integer", "name": "range", "value": 0},
        {"index": 10, "type": "integer", "name": "y_base", "value": 0},
        {"index": 11, "type": "integer", "name": "use_grid", "value": 0},
        {"index": 12, "type": "array2d", "name": "frame", "value": [
           {"index": 1, "type": "array2d", "name": "cell", "value": [
              {"index": 1, "type": "bool", "name": "visible", "value": true},
              {"index": 2, "type": "integer", "name": "battle_pos"}, // or pattern
              {"index": 3, "type": "integer", "name": "x", "value": 0},
              {"index": 4, "type": "integer", "name": "y", "value": 0},
              {"index": 5, "type": "integer", "name": "zoom", "value": 0},
              {"index": 6, "type": "integer", "name": "red", "value": 100},
              {"index": 7, "type": "integer", "name": "green", "value": 100},
              {"index": 8, "type": "integer", "name": "blue", "value": 100},
              {"index": 9, "type": "integer", "name": "chroma", "value": 100},
              {"index": 10, "type": "integer", "name": "transparency", "value": 0},
            ]},
         ]},
      ]},
     {"index": 20, "type": "array2d", "name": "chip_set", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "string", "name": "chip_set"},
        {"index": 3, "type": "binary", "name": "terrain_id"}, // std::vector<uint16_t>
        {"index": 4, "type": "binary", "name": "lower"}, // std::vector<uint8_t>
        {"index": 5, "type": "binary", "name": "upper"}, // std::vector<uint8_t>

        {"index": 11, "type": "integer", "name": "ocean_sequence", "value": 0},
        {"index": 12, "type": "integer", "name": "ocean_speed", "value": 0},
      ]},
     {"index": 21, "type": "array1d", "name": "vocabulary", "value": [
        {"index": 1, "type": "string", "name": "battle_start"},
        {"index": 2, "type": "string", "name": "first_strike"},
        {"index": 3, "type": "string", "name": "escape_success"},
        {"index": 4, "type": "string", "name": "escape_failure"},
        {"index": 5, "type": "string", "name": "battle_won"},
        {"index": 6, "type": "string", "name": "battle_lost"},
        {"index": 7, "type": "string", "name": "gain_exp"},
        {"index": 8, "type": "string", "name": "earn_money_begin"},
        {"index": 9, "type": "string", "name": "earn_money_end"},
        {"index": 10, "type": "string", "name": "item_get"},
        {"index": 11, "type": "string", "name": "normalAttack"},
        {"index": 12, "type": "string", "name": "criticalAttackParty"},
        {"index": 13, "type": "string", "name": "criticalAttackEnemy"},
        {"index": 14, "type": "string", "name": "defended"},
        {"index": 15, "type": "string", "name": "do_nothing"},
        {"index": 16, "type": "string", "name": "charge_power"},
        {"index": 17, "type": "string", "name": "self_destruct"},
        {"index": 18, "type": "string", "name": "run_away"},
        {"index": 19, "type": "string", "name": "transform"},
        {"index": 20, "type": "string", "name": "damage_to_enemy"},
        {"index": 21, "type": "string", "name": "no_damage_to_enemy"},
        {"index": 22, "type": "string", "name": "damage_to_party"},
        {"index": 23, "type": "string", "name": "no_damage_to_party"},
        {"index": 24, "type": "string", "name": "skill_failure_a"},
        {"index": 25, "type": "string", "name": "skill_failure_b"},
        {"index": 26, "type": "string", "name": "skill_failure_c"},
        {"index": 27, "type": "string", "name": "physical_atrack_failure"},
        {"index": 28, "type": "string", "name": "item_use"},
        {"index": 29, "type": "string", "name": "parameterRecovery"},
        {"index": 30, "type": "string", "name": "parameer_up"},
        {"index": 31, "type": "string", "name": "parameerDown"},
        {"index": 32, "type": "string", "name": "partyAbusorbParameter"},
        {"index": 33, "type": "string", "name": "enemyAbusorbParameter"},
        {"index": 34, "type": "string", "name": "attributeGaurd_up"},
        {"index": 35, "type": "string", "name": "attributeGaurdDown"},
        {"index": 36, "type": "string", "name": "level_up"},
        {"index": 37, "type": "string", "name": "skillMastered"},

        {"index": 41, "type": "string", "name": "select_action"}, // shop A
        {"index": 42, "type": "string", "name": "select_action_second"},
        {"index": 43, "type": "string", "name": "buy"},
        {"index": 44, "type": "string", "name": "sell"},
        {"index": 45, "type": "string", "name": "cancel"},
        {"index": 46, "type": "string", "name": "select_buying_item"},
        {"index": 47, "type": "string", "name": "buying_item_num"},
        {"index": 48, "type": "string", "name": "end_buy"},
        {"index": 49, "type": "string", "name": "select_selling_item"},
        {"index": 50, "type": "string", "name": "selling_item_num"},
        {"index": 51, "type": "string", "name": "end_sell"},

        {"index": 54, "type": "string", "name": "v54"}, // shop B
        {"index": 55, "type": "string", "name": "v55"},
        {"index": 56, "type": "string", "name": "v56"},
        {"index": 57, "type": "string", "name": "v57"},
        {"index": 58, "type": "string", "name": "v58"},
        {"index": 59, "type": "string", "name": "v59"},
        {"index": 60, "type": "string", "name": "v60"},
        {"index": 61, "type": "string", "name": "v61"},
        {"index": 62, "type": "string", "name": "v62"},
        {"index": 63, "type": "string", "name": "v63"},
        {"index": 64, "type": "string", "name": "v64"},

        {"index": 67, "type": "string", "name": "v67"}, // shop C
        {"index": 68, "type": "string", "name": "v68"},
        {"index": 69, "type": "string", "name": "v69"},
        {"index": 70, "type": "string", "name": "v70"},
        {"index": 71, "type": "string", "name": "v71"},
        {"index": 72, "type": "string", "name": "v72"},
        {"index": 73, "type": "string", "name": "v73"},
        {"index": 74, "type": "string", "name": "v74"},
        {"index": 75, "type": "string", "name": "v75"},
        {"index": 76, "type": "string", "name": "v76"},
        {"index": 77, "type": "string", "name": "v77"},

        {"index": 80, "type": "string", "name": "mes0"}, // hotel A
        {"index": 81, "type": "string", "name": "mes1"},
        {"index": 82, "type": "string", "name": "mes2"},
        {"index": 83, "type": "string", "name": "hotel_yes"},
        {"index": 84, "type": "string", "name": "hotel_no"},
        {"index": 85, "type": "string", "name": "v85"}, // hotel B
        {"index": 86, "type": "string", "name": "v86"},
        {"index": 87, "type": "string", "name": "v87"},
        {"index": 88, "type": "string", "name": "v88"},
        {"index": 89, "type": "string", "name": "v89"},

        {"index": 92, "type": "string", "name": "item_owned_num"},
        {"index": 93, "type": "string", "name": "item_equiped_num"},

        {"index": 95, "type": "string", "name": "money_name"},

        {"index": 101, "type": "string", "name": "battle"},
        {"index": 102, "type": "string", "name": "auto_action"},
        {"index": 103, "type": "string", "name": "escape"},
        {"index": 104, "type": "string", "name": "attackCommand"},
        {"index": 105, "type": "string", "name": "defend"},
        {"index": 106, "type": "string", "name": "use_item"},
        {"index": 107, "type": "string", "name": "use_skill"},
        {"index": 108, "type": "string", "name": "equip"},

        {"index": 110, "type": "string", "name": "save"},

        {"index": 112, "type": "string", "name": "discardCurrent"},

        {"index": 114, "type": "string", "name": "newGame"},
        {"index": 115, "type": "string", "name": "continue"},

        {"index": 117, "type": "string", "name": "quit"},

        {"index": 123, "type": "string", "name": "level"},
        {"index": 124, "type": "string", "name": "hp"},
        {"index": 125, "type": "string", "name": "mp"},
        {"index": 126, "type": "string", "name": "normalCondition"},
        {"index": 127, "type": "string", "name": "expShort"},
        {"index": 128, "type": "string", "name": "levelShort"},
        {"index": 129, "type": "string", "name": "hpShort"},
        {"index": 130, "type": "string", "name": "mpShort"},
        {"index": 131, "type": "string", "name": "usingMp"},
        {"index": 132, "type": "string", "name": "attack"},
        {"index": 133, "type": "string", "name": "defence"},
        {"index": 134, "type": "string", "name": "mind"},
        {"index": 135, "type": "string", "name": "speed"},
        {"index": 136, "type": "string", "name": "weapon"},
        {"index": 137, "type": "string", "name": "shield"},
        {"index": 138, "type": "string", "name": "armor"},
        {"index": 139, "type": "string", "name": "helmet"},
        {"index": 140, "type": "string", "name": "other"},

        {"index": 146, "type": "string", "name": "saveSelectMessage"},
        {"index": 147, "type": "string", "name": "loadSelectMessage"},
        {"index": 148, "type": "string", "name": "save_dataPrefix"},

        {"index": 151, "type": "string", "name": "remindDiscarding"},
        {"index": 152, "type": "string", "name": "yes"},
        {"index": 153, "type": "string", "name": "no"},
      ]},
     {"index": 22, "type": "array1d", "name": "system", "value": [
        {"index": 10, "type": "integer", "name": "version", "value": 2000},

        {"index": 11, "type": "string", "name": "boat"},
        {"index": 12, "type": "string", "name": "ship"},
        {"index": 13, "type": "string", "name": "airship"},
        {"index": 14, "type": "integer", "name": "boat_pos"},
        {"index": 15, "type": "integer", "name": "ship_pos"},
        {"index": 16, "type": "integer", "name": "airship_pos"},
        {"index": 17, "type": "string", "name": "title"},
        {"index": 18, "type": "string", "name": "game_over"},
        {"index": 19, "type": "string", "name": "system"},
        {"index": 20, "type": "string", "name": "system_2"},

        {"index": 21, "type": "integer", "name": "member_num", "value": 0},
        {"index": 22, "type": "binary", "name": "member"}, // std::vector<uint16_t>

        {"index": 26, "type": "integer", "name": "menuCommandSize"},
        {"index": 27, "type": "binary", "name": "menuCommand"},

        {"index": 31, "type": "music", "name": "tite_bgm"},
        {"index": 32, "type": "music", "name": "battle_bgm"},
        {"index": 33, "type": "music", "name": "battleEnd_bgm"},
        {"index": 34, "type": "music", "name": "inn_bgm"},
        {"index": 35, "type": "music", "name": "boat_bgm"},
        {"index": 36, "type": "music", "name": "ship_bgm"},
        {"index": 37, "type": "music", "name": "airship_bgm"},
        {"index": 38, "type": "music", "name": "gameOver_bgm"},

        {"index": 41, "type": "sound", "name": "cursormove_se"},
        {"index": 42, "type": "sound", "name": "enter_se"},
        {"index": 43, "type": "sound", "name": "cancel_se"},
        {"index": 44, "type": "sound", "name": "buzzer_se"},
        {"index": 45, "type": "sound", "name": "battleStart_se"},
        {"index": 46, "type": "sound", "name": "escape_se"},
        {"index": 47, "type": "sound", "name": "enemyAttack_se"},
        {"index": 48, "type": "sound", "name": "enemyDamaged_se"},
        {"index": 49, "type": "sound", "name": "memberDamaged_se"},
        {"index": 50, "type": "sound", "name": "evasion_se"},
        {"index": 51, "type": "sound", "name": "enemyDefeat_se"},
        {"index": 52, "type": "sound", "name": "use_item_se"},

        {"index": 61, "type": "integer", "name": "moveErace", "value": 0},
        {"index": 62, "type": "integer", "name": "moveDisplay", "value": 0},
        {"index": 63, "type": "integer", "name": "battleStartErace", "value": 0},
        {"index": 64, "type": "integer", "name": "battleStartDisplay", "value": 0},
        {"index": 65, "type": "integer", "name": "battleEndErace", "value": 0},
        {"index": 66, "type": "integer", "name": "battleEndDisplay", "value": 0},

        {"index": 71, "type": "integer", "name": "wallpaper", "value": 0},
        {"index": 72, "type": "integer", "name": "font", "value": 0},

        {"index": 81, "type": "integer", "name": "dummy"},
        {"index": 82, "type": "bool", "name": "dummy"},
        {"index": 83, "type": "integer", "name": "dummy"},
        {"index": 84, "type": "string", "name": "defBackdrop"},
        {"index": 85, "type": "array2d", "name": "dummy", "value": [
          /*
           {"index": 1, "type": "integer", "name": "dummy"},
           {"index": 2, "type": "integer", "name": "dummy"},

           {"index": 11, "type": "integer", "name": "dummy"},
           {"index": 12, "type": "integer", "name": "dummy"},
           {"index": 13, "type": "integer", "name": "dummy"},
           {"index": 14, "type": "integer", "name": "dummy"},
           {"index": 15, "type": "integer", "name": "dummy"},
           */
        ]},

       {"index": 91, "type": "integer", "name": "saveTime"},
     ]},
      {"index": 23, "type": "array2d", "name": "Switch", "value": [
        {"index": 1, "type": "string", "name": "name"},
      ]},
      {"index": 24, "type": "array2d", "name": "Variable", "value": [
        {"index": 1, "type": "string", "name": "name"},
      ]},
      {"index": 25, "type": "array2d", "name": "common_event", "value": [
        {"index": 1, "type": "string", "name": "name"},

        {"index": 11, "type": "integer", "name": "start_type", "value": 5},
        {"index": 12, "type": "bool", "name": "needSwitch", "value": false},
        {"index": 13, "type": "integer", "name": "switch_id", "value": 1},

        {"index": 21, "type": "integer", "name": "event_length"},
        {"index": 22, "type": "event", "name": "event"},
      ]},
      {"index": 26, "type": "array2d", "name": "common_event_2", "value": [
        {"index": 1, "type": "string", "name": "name"},

        {"index": 11, "type": "integer", "name": "start_type", "value": 5},
        {"index": 12, "type": "bool", "name": "needSwitch", "value": false},
        {"index": 13, "type": "integer", "name": "switch_id", "value": 1},

        {"index": 21, "type": "integer", "name": "event_length"},
        {"index": 22, "type": "event", "name": "event"},
      ]},
      {"index": 27, "type": "array2d", "name": "common_event_3", "value": [
        {"index": 1, "type": "string", "name": "name"},

        {"index": 11, "type": "integer", "name": "start_type", "value": 5},
        {"index": 12, "type": "bool", "name": "needSwitch", "value": false},
        {"index": 13, "type": "integer", "name": "switch_id", "value": 1},

        {"index": 21, "type": "integer", "name": "event_length"},
        {"index": 22, "type": "event", "name": "event"},
      ]},
      {"index": 28, "type": "array2d", "name": "common_event_4", "value": [
        {"index": 1, "type": "string", "name": "name"},

        {"index": 11, "type": "integer", "name": "start_type", "value": 5},
        {"index": 12, "type": "bool", "name": "needSwitch", "value": false},
        {"index": 13, "type": "integer", "name": "switch_id", "value": 1},

        {"index": 21, "type": "integer", "name": "event_length"},
        {"index": 22, "type": "event", "name": "event"},
      ]},
      {"index": 29, "type": "array2d", "name": "battle_command", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "integer", "name": "type"},
      ]},
      {"index": 30, "type": "array2d", "name": "class_1", "value": [
        {"index": 1, "type": "string", "name": "name"},

        {"index": 21, "type": "bool", "name": "double_hand", "value": false},
        {"index": 22, "type": "bool", "name": "fixed_equipment", "value": false},
        {"index": 23, "type": "bool", "name": "forced_ai_action"},
        {"index": 24, "type": "bool", "name": "strong_defence"},

        {"index": 31, "type": "binary", "name": "parameter"}, // std::array<std::array<uint16_t, 6>, max_level>

        {"index": 41, "type": "integer", "name": "exp_basic"},
        {"index": 42, "type": "integer", "name": "exp_increase"},
        {"index": 43, "type": "integer", "name": "exp_correction", "value": 0},

        {"index": 51, "type": "binary", "name": "equipment"}, // std::array<uint16_t, 5>

        {"index": 56, "type": "integer", "name": "unarmed_attack", "value": 1}, // battle anime id

        {"index": 62, "type": "integer", "name": "attack_anime", "value": 0},
        {"index": 63, "type": "array2d", "name": "skill", "value": [
          {"index": 1, "type": "integer", "name": "level"},
          {"index": 2, "type": "integer", "name": "skill_id", "value": 1},
        ]},
        {"index": 66, "type": "bool", "name": "useOriginalCommand", "value": false},
        {"index": 67, "type": "string", "name": "originalCommand"},

        {"index": 71, "type": "integer", "name": "condition_data_num", "value": 0},
        {"index": 72, "type": "binary", "name": "condition_data"},
        {"index": 73, "type": "integer", "name": "attrib_data_num", "value": 0},
        {"index": 74, "type": "binary", "name": "attrib_data"},

        {"index": 80, "type": "binary", "name": "battle_command"}, // std::array<uint32_t, 6>
      ]},
      {"index": 31, "type": "array2d", "name": "class_2", "value": [
        {"index": 1, "type": "string", "name": "name"},

        {"index": 21, "type": "bool", "name": "double_hand", "value": false},
        {"index": 22, "type": "bool", "name": "fixed_equipment", "value": false},
        {"index": 23, "type": "bool", "name": "forced_ai_action"},
        {"index": 24, "type": "bool", "name": "strong_defence"},

        {"index": 31, "type": "binary", "name": "parameter"}, // std::array<std::array<uint16_t, 6>, max_level>

        {"index": 41, "type": "integer", "name": "exp_basic"},
        {"index": 42, "type": "integer", "name": "exp_increase"},
        {"index": 43, "type": "integer", "name": "exp_correction", "value": 0},

        {"index": 51, "type": "binary", "name": "equipment"}, // std::array<uint16_t, 5>

        {"index": 56, "type": "integer", "name": "unarmed_attack", "value": 1}, // battle anime id

        {"index": 62, "type": "integer", "name": "attack_anime", "value": 0},
        {"index": 63, "type": "array2d", "name": "skill", "value": [
          {"index": 1, "type": "integer", "name": "level"},
          {"index": 2, "type": "integer", "name": "skill_id", "value": 1},
        ]},
        {"index": 66, "type": "bool", "name": "useOriginalCommand", "value": false},
        {"index": 67, "type": "string", "name": "originalCommand"},

        {"index": 71, "type": "integer", "name": "condition_data_num", "value": 0},
        {"index": 72, "type": "binary", "name": "condition_data"},
        {"index": 73, "type": "integer", "name": "attrib_data_num", "value": 0},
        {"index": 74, "type": "binary", "name": "attrib_data"},

        {"index": 80, "type": "binary", "name": "battle_command"}, // std::array<uint32_t, 6>
      ]},
      {"index": 32, "type": "array2d", "name": "battle_anime2", "value": [
        {"index": 1, "type": "string", "name": "name"},
        {"index": 2, "type": "integer", "name": "attack_motion"},

        {"index": 11, "type": "array2d", "name": "basic", "value": [
          {"index": 1, "type": "string", "name": "name"},
          {"index": 2, "type": "string", "name": "battle"},
          {"index": 3, "type": "integer", "name": "battle_pos"},
          {"index": 4, "type": "bool", "name": "use_extended_animation"},
          {"index": 5, "type": "integer", "name": "extended_animation_id"},
        ]},
        {"index": 12, "type": "array2d", "name": "weapon", "value": [
          {"index": 1, "type": "string", "name": "name"},
          {"index": 2, "type": "string", "name": "file"},
          {"index": 3, "type": "integer", "name": "index"},
          {"index": 4, "type": "bool", "name": "use_extended_animation"},
          {"index": 5, "type": "integer", "name": "extended_animation_id"},
        ]},
      ]}
    ]};
