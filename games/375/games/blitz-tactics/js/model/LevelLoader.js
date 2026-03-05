function LevelLoader() {};
LevelLoader.Load = function(index, gameplayState) {
    switch (index) {
        case 1:
            // 1 diff - 1
            GameplayState.TimePerLevel = 11500;
            LevelLoader.Internal_LoadFromString(
                "......." +
                "..'^,^'" +
                ".^',..'" +
                "..'&..," +
                "....'!'" +
                "..,'.,." +
                "......." +
                ".^^&,.'" +
                ".&^^^'^",
                gameplayState.map
            );
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_Guard, "Left");
            break;
        case 2:
            // 2 diff - 2
            GameplayState.TimePerLevel = 17500;
            LevelLoader.Internal_LoadFromString(
                "....''." +
                "~~~~~~~" +
                ".^.!~^'" +
                ".,.,..'" +
                "...',.." +
                ".'.^.^'" +
                ".^'..'." +
                "~~~,'.~" +
                "~~~~~~~",
                gameplayState.map
            );
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 1, 1, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 3, MODEL_Unit.Enemy_Guard, "Left");
            break;
        case 3:
            // 3 diff - 2
            GameplayState.TimePerLevel = 16500;
            LevelLoader.Internal_LoadFromString(
                "......." +
                "#######" +
                "...&.^'" +
                "...',.." +
                ".^.^&!'" +
                ".^'...." +
                ".,..,^~" +
                "~...^~~" +
                "^^&^&~~",
                gameplayState.map
            );
            gameplayState.spawnUnit.call(gameplayState, 1, 1, MODEL_Unit.Player_Marines, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 6, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Player_Marines, "Right");

            gameplayState.spawnUnit.call(gameplayState, 0, 2, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_Guard, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 4, MODEL_Unit.Enemy_Tank, "Down");
            break;
        case 4:
            // 6 diff - 3
            GameplayState.TimePerLevel = 18500;
            LevelLoader.Internal_LoadFromString(
                "..~~~~~" +
                ".&~~~~'" +
                ".^^&..'" +
                "...',!." +
                ".'.#','" +
                ".,'..&." +
                "~~~,,.." +
                "~&~'~~~" +
                "'^~~~~~",
                gameplayState.map
            );
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 3, MODEL_Unit.Enemy_Guard, "Left");

            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_Guard, "Left");
            break;
        case 5:
            // 5 diff - 2
            GameplayState.TimePerLevel = 16500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~~~~~" +
                "~~'&'^'" +
                ".','.&'" +
                "..~~,#." +
                ".'~~','" +
                ".,!~~'." +
                "',',,.." +
                "~~&~&~~",
                gameplayState.map
            );
            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Player_Marines, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 4, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 6, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Enemy_Guard, "Up");
            break;
        case 6:
            // 4 diff - 2
            GameplayState.TimePerLevel = 24000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~^" +
                "~~~~~^," +
                "~~~~^,'" +
                "~~~^,'," +
                "~~^,',^" +
                "~&,',^~" +
                "&,',^~~" +
                "^!,&~~~" +
                "^.&~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Player_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 3, MODEL_Unit.Player_Tank, "Down");

            gameplayState.spawnUnit.call(gameplayState, 1, 4, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Enemy_Tank, "Right");
            break;
        case 7:
            // 7 diff - 2
            GameplayState.TimePerLevel = 19000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~''~~~" +
                "','.'.'" +
                ".^~~..'" +
                ".~!,,'." +
                ".^~~','" +
                ".^.','." +
                "',','^." +
                "'..',.~",
                gameplayState.map
            );
            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 4, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 3, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Enemy_Guard, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 2, MODEL_Unit.Enemy_Guard, "Down");
            break;
        case 8:
            // 8 diff - 3
            GameplayState.TimePerLevel = 28600;
            LevelLoader.Internal_LoadFromString(
                ".,.,.,." +
                "~~~~~~~" +
                "','.'.'" +
                "..',..'" +
                "..^~~#." +
                "..^~~~~" +
                ".'.^~~~" +
                "',!^~~~" +
                "~~~^~~~",
                gameplayState.map
            );
            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Bomber, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 1, MODEL_Unit.Player_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Enemy_AntiAir, "Up");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Enemy_Guard, "Up");
            break;
        case 9:
            // 9 diff - 4
            GameplayState.TimePerLevel = 23200;
            LevelLoader.Internal_LoadFromString(
                "~~~~~,." +
                "~~~~~^~" +
                "'^'!'.'" +
                "..',..'" +
                ".'.,..." +
                ".^'..^." +
                ".'#~#,'" +
                "~~~~~~~" +
                "~~~~~~~",
                gameplayState.map
            );
            gameplayState.spawnUnit.call(gameplayState, 1, 4, MODEL_Unit.Player_Bomber, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_AntiAir, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 1, MODEL_Unit.Enemy_AntiAir, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Enemy_AntiAir, "Down");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 3, MODEL_Unit.Enemy_Guard, "Left");
            break;
        case 10:
            // 10 diff - 4
            GameplayState.TimePerLevel = 36000;
            LevelLoader.Internal_LoadFromString(
                "'..~~~~" +
                ".,,.~~~" +
                "','.'^'" +
                "^^&#&''" +
                ".'...'." +
                "..,..,.." +
                "~~~^,.." +
                "~~!#.~~" +
                "~~~^~~~",
                gameplayState.map
            );
            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Player_Bomber, "Left");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 4, MODEL_Unit.Enemy_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Enemy_AntiAir, "Left");
            break;
        case 11:
            // 11 diff - 3
            GameplayState.TimePerLevel = 27500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~~~~~" +
                "~~'.'^'" +
                ".,#'#''" +
                ".....^." +
                "..^.^'." +
                "~~,',''" +
                "~~^,,!~" +
                "~~~^~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Player_Bomber, "Down");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Player_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_Guard, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_Guard, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 4, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Enemy_AntiAir, "Up");
            break;

        case 12:
            // 12 diff - 3
            GameplayState.TimePerLevel = 22000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~.....~" +
                "~.!^.'." +
                "''^...'" +
                "..,.'.." +
                ".^...~~" +
                "~..^~~~" +
                "~.,...." +
                "~~~~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 4, 3, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Player_Marines, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 2, MODEL_Unit.Player_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 6, MODEL_Unit.Player_Fighter, "Up");

            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_AntiAir, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Helicopter, "Down");
            break;

        case 13:
            // 13 diff - 5
            GameplayState.TimePerLevel = 37200;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~.....~" +
                "~.''.'." +
                "''^^..'" +
                "..^!^.." +
                "..~#^.~" +
                "~...^^~" +
                "~.,...." +
                "~~~~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Marines, "Down");
            gameplayState.spawnUnit.call(gameplayState, 0, 6, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 4, MODEL_Unit.Player_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 1, MODEL_Unit.Player_Bomber, "Down");

            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Enemy_Guard, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Enemy_Guard, "Down");

            break;

        case 14:
            // 14 diff - 5
            GameplayState.TimePerLevel = 47000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~~^^~" +
                "~^'.^!." +
                "''#^&.'" +
                ".'.~'.." +
                "..&~.,~" +
                "~,.'..~" +
                "~.^.,.." +
                ".~~~~~.",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Player_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Player_Tank, "Left");

            gameplayState.spawnUnit.call(gameplayState, 0, 6, MODEL_Unit.Player_Fighter, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 2, MODEL_Unit.Player_Bomber, "Down");

            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Enemy_AntiAir, "Down");
            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Enemy_Tank, "Down");

            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_Helicopter, "Down");

            break;

        case 15:
            // 15 diff - 4
            GameplayState.TimePerLevel = 30500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~^~.~" +
                "~.'.^.." +
                "'^.^^!'" +
                ".&.&'.." +
                ".....&~" +
                "~,.&#^~" +
                "~..^,^." +
                "~~~^~~.",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Player_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Player_Bomber, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Player_Marines, "Up");

            gameplayState.spawnUnit.call(gameplayState, 3, 4, MODEL_Unit.Enemy_AntiAir, "Left");
            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Enemy_Tank, "Right");

            break;

        case 16:
            // 16 diff - 5
            GameplayState.TimePerLevel = 29500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~^&^~" +
                "~^^!..." +
                "'.....'" +
                "...^'.." +
                "...^^.~" +
                "~^....~" +
                "~^^^^^." +
                "~~~~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 4, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Player_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Player_Tank, "Up");

            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 1, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 2, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_Guard, "Down");

            break;

        case 17:
            // 17 diff - 5
            GameplayState.TimePerLevel = 30500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~~~^~" +
                "~^',#!." +
                "'^.^#.'" +
                ".''.'.." +
                ".^.^,,~" +
                "~^'.^^~" +
                "~,.'..." +
                "~~~~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 4, 3, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 4, MODEL_Unit.Player_Bomber, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Player_Tank, "Left");

            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 2, MODEL_Unit.Enemy_AntiAir, "Down");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Enemy_Helicopter, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Enemy_Guard, "Left");

            break;

        case 18:
            // 18 diff - 6
            GameplayState.TimePerLevel = 47500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~~~^~" +
                "~^&#..." +
                "',..^^'" +
                ".''.'.." +
                ".^^^,,~" +
                "~.'...~" +
                "~!.'..." +
                "~##~~~^",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 1, MODEL_Unit.Player_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 6, MODEL_Unit.Player_Bomber, "Left");

            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 6, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Enemy_AntiAir, "Down");

            break;

        case 19:
            // 19 diff - 6
            GameplayState.TimePerLevel = 36200;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~~~~~" +
                "~~~^!.." +
                "~~~~..'" +
                "~~'.'#." +
                ".,.',,~" +
                "~^#~..~" +
                "~.#'.,." +
                "~^^~~^^",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 6, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Bomber, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Player_Tank, "Left");

            gameplayState.spawnUnit.call(gameplayState, 2, 6, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Enemy_AntiAir, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 2, MODEL_Unit.Enemy_Guard, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Enemy_Tank, "Right");

            break;
        case 20:
            // 20 diff - 5
            GameplayState.TimePerLevel = 24900;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~.^&^~" +
                "~.,.,'." +
                "~,.'.,'" +
                "~.#!#.." +
                "#,.~..~" +
                "~..,.^~" +
                "~^..^^." +
                "#######",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Player_Bomber, "Up");

            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 4, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_AntiAir, "Up");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Enemy_AntiAir, "Right");

            break;

        case 21:
            // 21 diff - 4
            GameplayState.TimePerLevel = 21000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~^^^^^~" +
                "~..!..." +
                "~.^...'" +
                "~......" +
                ".^....." +
                "~~#..^." +
                "~~~~~~~" +
                "~~~~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 0, 2, MODEL_Unit.Player_Fighter, "Down");

            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Helicopter, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_AntiAir, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 1, MODEL_Unit.Enemy_AntiAir, "Left");

            break;

        case 22:
            // 22 diff - 4
            GameplayState.TimePerLevel = 31000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                ".~~~^^~" +
                "~,.,.^." +
                "~.~.!.'" +
                "~.~^.~~" +
                "#.'#.~~" +
                "~,.,.~~" +
                "~~~~~~." +
                "#~~~~~#",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 1, 4, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Player_Tank, "Right");

            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Enemy_Guard, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_Guard, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 4, MODEL_Unit.Enemy_AntiAir, "Down");

            break;

        case 23:
            // 23 diff - 4
            GameplayState.TimePerLevel = 29500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~...~~~" +
                "~##...." +
                "~.~^.^'" +
                "~.~...." +
                "#!~^.^." +
                "~......" +
                "~&^..&&" +
                "^,&^&^^",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Player_Bomber, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 3, MODEL_Unit.Player_Tank, "Left");

            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 2, MODEL_Unit.Enemy_Tank, "Right");

            break;

        case 24:
            // 24 diff - 5
            GameplayState.TimePerLevel = 32500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~,.,.^~" +
                "~~#~~~~" +
                "~.,.,.'" +
                "~..''.." +
                "','.,.." +
                "~###^,'" +
                "~#!^.,." +
                "~~~~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 6, MODEL_Unit.Player_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Player_Bomber, "Up");

            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 4, MODEL_Unit.Enemy_Guard, "Right");

            break;

        case 25:
            // 25 diff - 5
            GameplayState.TimePerLevel = 26000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~.~~~.~" +
                ".,.,.~~" +
                "~'^..^'" +
                "~'~,!^." +
                "#'~,.^." +
                "~'.',.." +
                "~..~~''" +
                "#~~~'~#",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Player_Tank, "Right");

            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_AntiAir, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 4, MODEL_Unit.Enemy_Guard, "Down");

            break;

        case 26:
            // 26 diff - 4
            GameplayState.TimePerLevel = 20500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~.....~" +
                "~'''.~~" +
                "~###~~~" +
                "~.,..~~" +
                "#..!.^." +
                "~.^.,.." +
                "~.,..'." +
                "#.....#",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Player_Fighter, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 6, MODEL_Unit.Player_Bomber, "Left");

            gameplayState.spawnUnit.call(gameplayState, 1, 4, MODEL_Unit.Enemy_Guard, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Helicopter, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 4, MODEL_Unit.Enemy_Helicopter, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_AntiAir, "Right");

            break;

        case 27:
            // 27 diff - 4
            GameplayState.TimePerLevel = 44000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~^#.#^~" +
                "~^,!.^." +
                "~^..,^'" +
                "~^.'.^." +
                "#^&.&^." +
                "~&..,&." +
                "~.,..'~" +
                "~~.~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 6, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 6, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 6, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 6, MODEL_Unit.Player_Marines, "Up");

            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Guard, "Down");

            gameplayState.spawnUnit.call(gameplayState, 1, 1, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Enemy_Tank, "Down");

            break;

        case 28:
            // 28 diff - 3
            GameplayState.TimePerLevel = 33500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~.....~" +
                "~.~.~.." +
                "~..!..'" +
                "~.~.~.." +
                "#......" +
                "~.~^~.." +
                "~......" +
                "#.....#",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 6, MODEL_Unit.Player_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Player_Bomber, "Right");


            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 2, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 2, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Helicopter, "Down");

            break;

        case 29: // NEEDS 2 B BALANCED
            // 29 diff - 6
            GameplayState.TimePerLevel = 40500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~~~~~" +
                "~~'..,." +
                "~.,.#.'" +
                "~!.^.'." +
                "#.'.#.." +
                "~,...,." +
                ".^,^~~~" +
                "~~.~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 4, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 2, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Player_Fighter, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 6, MODEL_Unit.Player_Bomber, "Up");

            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_Helicopter, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 4, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 2, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Enemy_Guard, "Down");

            break;

        case 30:
            // 30 diff - 6
            GameplayState.TimePerLevel = 48500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~&^^^&~" +
                "~..^#.." +
                "~..#..'" +
                "~#....." +
                "#...#.." +
                "~..^!^." +
                "~...#.." +
                "#.....#",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 4, 1, MODEL_Unit.Player_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Player_Bomber, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Player_Marines, "Right");

            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_AntiAir, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 6, MODEL_Unit.Enemy_AntiAir, "Left");

            break;

        case 31:
            // 31 diff - 3
            GameplayState.TimePerLevel = 20400;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~^^^~~" +
                "~..'!^." +
                "~'.^,.'" +
                "~..#..." +
                "#^'.,.." +
                "~~.,.^." +
                "~~^.~~~" +
                "~~~~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Player_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 5, MODEL_Unit.Player_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Player_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 6, MODEL_Unit.Player_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Player_Marines, "Right");

            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 1, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Tank, "Down");

            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Enemy_Guard, "Left");

            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 2, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_Tank, "Down");

            break;

        case 32:
            // 32 diff - 7
            GameplayState.TimePerLevel = 35000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~..'..~" +
                "~.',.,." +
                "~~~#~~~" +
                "~,..,.'" +
                "#.,'.,." +
                "~.^'^.." +
                "~#.!'#." +
                "#&###~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Player_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 1, MODEL_Unit.Player_Fighter, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 1, MODEL_Unit.Player_Marines, "Down");
            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Bomber, "Down");

            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Enemy_Guard, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Enemy_Guard, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_Guard, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Enemy_Helicopter, "Up");

            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Enemy_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 6, MODEL_Unit.Enemy_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_Tank, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_AntiAir, "Up");

            break;

        case 33:
            // 33 diff - 5
            GameplayState.TimePerLevel = 43500;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~~~~~~~" +
                "~^^^.#'" +
                "~'.,.!." +
                "#.^'.^." +
                "~,'.^~~" +
                "~.,.'^." +
                "#.^^^^#" +
                "~~~~~~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 6, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 0, 5, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 4, MODEL_Unit.Player_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Player_Tank, "Right");

            gameplayState.spawnUnit.call(gameplayState, 3, 5, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 2, 3, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_AntiAir, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_Guard, "Left");

            break;

        case 34:
            // 34 diff - 6
            GameplayState.TimePerLevel = 50000;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~^^^.^^" +
                "~,,',,." +
                "~~~'~~~" +
                "~~,#.~~" +
                "~~~'~~~" +
                "~~.#.~~" +
                "~.#!#,." +
                "#^###^#",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 0, 1, MODEL_Unit.Player_Marines, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 1, MODEL_Unit.Player_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Player_Fighter, "Down");
            gameplayState.spawnUnit.call(gameplayState, 4, 1, MODEL_Unit.Player_Bomber, "Down");

            gameplayState.spawnUnit.call(gameplayState, 2, 4, MODEL_Unit.Enemy_Guard, "Up");
            gameplayState.spawnUnit.call(gameplayState, 0, 6, MODEL_Unit.Enemy_Guard, "Up");
            gameplayState.spawnUnit.call(gameplayState, 4, 6, MODEL_Unit.Enemy_Guard, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 5, MODEL_Unit.Enemy_AntiAir, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Enemy_AntiAir, "Up");
            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_AntiAir, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 3, MODEL_Unit.Enemy_AntiAir, "Up");

            break;

        case 35:
            // 35 diff - 7
            GameplayState.TimePerLevel = 48900;
            LevelLoader.Internal_LoadFromString(
                "~~~~~~~" +
                "~^^^^^~" +
                "~^.'..." +
                "~!,..^'" +
                "~..^..." +
                "#.^^..," +
                "~.'.^,." +
                "~.,.'.." +
                "#~~~~~#",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 4, 4, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 2, 6, MODEL_Unit.Player_Marines, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 6, MODEL_Unit.Player_Tank, "Left");
            gameplayState.spawnUnit.call(gameplayState, 4, 5, MODEL_Unit.Player_Bomber, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 6, MODEL_Unit.Player_Fighter, "Left");

            gameplayState.spawnUnit.call(gameplayState, 1, 1, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 2, MODEL_Unit.Enemy_Tank, "Right");
            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_AntiAir, "Right");
            gameplayState.spawnUnit.call(gameplayState, 0, 3, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 0, 4, MODEL_Unit.Enemy_AntiAir, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 5, MODEL_Unit.Enemy_Guard, "Right");
            gameplayState.spawnUnit.call(gameplayState, 1, 3, MODEL_Unit.Enemy_Helicopter, "Right");

            break;

        case 36:
            // 36 diff - 3
            GameplayState.TimePerLevel = 21500;
            LevelLoader.Internal_LoadFromString(
                "......." +
                ".,'...." +
                "...!'.." +
                "'.^..,." +
                "..,,.'." +
                ".^.,..." +
                "###..^." +
                ".~~~~~." +
                "~~###~~",
                gameplayState.map
            );

            gameplayState.spawnUnit.call(gameplayState, 2, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 5, MODEL_Unit.Player_Marines, "Up");
            gameplayState.spawnUnit.call(gameplayState, 3, 4, MODEL_Unit.Player_Fighter, "Up");

            gameplayState.spawnUnit.call(gameplayState, 2, 2, MODEL_Unit.Enemy_Tank, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 1, MODEL_Unit.Enemy_Guard, "Down");
            gameplayState.spawnUnit.call(gameplayState, 3, 2, MODEL_Unit.Enemy_Helicopter, "Down");
            gameplayState.spawnUnit.call(gameplayState, 1, 1, MODEL_Unit.Enemy_AntiAir, "Right");


    }
};
LevelLoader.Internal_LoadFromString = function(mapString, map) {
    var sizeX = map.length;
    var sizeY = map[0].length;
    for (var j = 0; j < sizeY; j++) {
        for (var i = 0; i < sizeX; i++) {
            map[i][j].type = LevelLoader._Internal_ASCII_To_MapType(mapString[j * sizeX + i]);
        }
    }
};
LevelLoader._Internal_ASCII_To_MapType = function(char) {
    var type = null;
    switch (char) {
        case ".":
            type = MODEL_MapCell.Grass_0;
            break;
        case "'":
            type = MODEL_MapCell.Grass_1;
            break;
        case ",":
            type = MODEL_MapCell.Grass_2;
            break;
        case "^":
            type = MODEL_MapCell.Mountain;
            break;
        case "&":
            type = MODEL_MapCell.Mountain_2;
            break;
        case "~":
            type = MODEL_MapCell.Water;
            break;
        case "#":
            type = MODEL_MapCell.Barricade;
            break;
        case "!":
            type = MODEL_MapCell.Flag;
            break;
    }
    return type;
};