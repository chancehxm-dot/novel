function GameplayState() {};
GameplayState.prototype = {
    pathViewer: null,
    pathViewerGroup: null,
    map: null,
    mapSizeX: 0,
    mapSizeY: 0,
    mapSprites: null,
    mapSpritesGroup: null,
    mapTopSpritesGroup: null,
    bottomEffectsGroup: null,
    effectsGroup: null,
    units: null,
    unitSprites: null,
    unitSpritesGroup: null,
    flyingUnitSprites: null,
    flyingUnitSpritesGroup: null,
    flyingUnitEffectsGroup: null,
    cloudGroup: null,
    cloudWindSpeed: -1.0,
    gridSpriteTexture: null,
    gridSprite: null,
    decalRenderTexture: null,
    decalSprite: null,
    gibs: [],
    bloodDecalSprite: null,
    tankHitHoleSprite: null,
    bBuildingPath: false,
    bPerformingTurn: false,
    fpsTF: null,
    rockets: [],
    rocketTrailParticles: null,
    rocketTrailGroup: null,
    bTurnIsLast: false,
    flagSprite: null,
    flagPosition: null,

    bMadeFirstTurn: false,

    pauseScreenCollider: null,
    pausePanel: null,

    overlayGroup: null,
    menuButton: null,
    muteButton: null,
    pauseButton: null,
    restartButton: null,
    resumeButton: null,

    timeBar: null,
    timeBarGlass: null,
    timeBarStars: null,
    timeBarStripe: null,

    startTime: null,
    timeSincePaused: null,
    starsPresented: 3,

    bHasStarted: false,
    beforeStartTime: null,

    addTime: 0,

    amountOfStars: 3,

    initMap: function(sizeX, sizeY) {
        this.mapSizeX = sizeX;
        this.mapSizeY = sizeY;
        this.map = [];
        for (var i = 0; i < sizeX; i++) {
            this.map[i] = [];
            for (var j = 0; j < sizeY; j++) {
                this.map[i][j] = new MODEL_MapCell(MODEL_MapCell.Grass_0);
            }
        }
    },
    loadLevel: function(levelIndex) {
        LevelLoader.Load(levelIndex, this);
    },
    prepareTutorial: function(levelIndex) {

        if (levelIndex == 1 && LevelStats.unlocked[1] == false) {

            var touch = this.overlayGroup.create(70, 450, "Lvl_0_0_touch");
            var hint = this.overlayGroup.create(60, 360, "Lvl_0_0_hint");

            touch.alpha = 0;
            hint.visible = false;

            this.game.add.tween(hint).to({
                alpha: 0.5
            }, 1000, Phaser.Easing.Linear.None, true, 0, 999999, true).loop();

            this.game.add.tween(touch).to({
                alpha: 1
            }, 1000, Phaser.Easing.Linear.None, true, 1200).onComplete.add(function() {
                this.game.add.tween(touch).to({
                    alpha: 0.5
                }, 1000, Phaser.Easing.Linear.None, true, 0, 999999, true).loop();
            }, this);

            this.units[0]._sprite._visibleSprite.inputEnabled = true;
            this.units[0]._sprite._visibleSprite.events.onInputDown.add(function() {
                touch.visible = false;
                hint.visible = true;
            }, this);

            this.units[0]._sprite._visibleSprite.events.onInputUp.add(function() {
                touch.visible = true;
                hint.visible = false;
                if (this.bMadeFirstTurn) {
                    this.units[0]._sprite._visibleSprite.inputEnabled = false;
                    touch.destroy();
                    hint.destroy();
                }
            }, this);

            GameApplication.b0LvlHintWatched = true;
        }

        if (levelIndex == 4 && LevelStats.unlocked[4] == false) {

            var hint = this.overlayGroup.create(122, 280, "Lvl_0_2_hint");
            hint.alpha = 0;

            this.game.add.tween(hint).to({
                alpha: 1
            }, 1000, Phaser.Easing.Linear.None, true, 1200).onComplete.add(function() {
                this.game.add.tween(hint).to({
                    alpha: 0.5
                }, 1000, Phaser.Easing.Linear.None, true, 0, 999999, true).loop();
            }, this);

            this.units[2]._sprite._visibleSprite.inputEnabled = true;
            this.units[2]._sprite._visibleSprite.events.onInputDown.addOnce(function() {
                hint.destroy();
            }, this);

            GameApplication.b2LvlHintWatched = true;
        }

        if (levelIndex == 8 && LevelStats.unlocked[8] == false) {

            var hint = this.overlayGroup.create(11, 74, "Lvl_0_5_hint");
            hint.alpha = 0;

            this.game.add.tween(hint).to({
                alpha: 1
            }, 1000, Phaser.Easing.Linear.None, true, 1200).onComplete.add(function() {
                this.game.add.tween(hint).to({
                    alpha: 0.5
                }, 1000, Phaser.Easing.Linear.None, true, 0, 999999, true).loop();
            }, this);

            this.units[0]._sprite._visibleSprite.inputEnabled = true;
            this.units[0]._sprite._visibleSprite.events.onInputDown.addOnce(function() {
                hint.destroy();
            }, this);

            GameApplication.b5LvlHintWatched = true;
        }
    },
    spawnUnit: function(atX, atY, type, directionString) {
        var unit = new MODEL_Unit(atX, atY, type);
        this.units.push(unit);
        if (unit.isFlying()) {
            this.flyingUnitSprites.push(new VIEW_UnitSprite(this.flyingUnitSpritesGroup, unit, this.effectsGroup, this.bottomEffectsGroup, this.game, this.map, directionString, this));
        } else {
            this.unitSprites.push(new VIEW_UnitSprite(this.unitSpritesGroup, unit, this.effectsGroup, this.bottomEffectsGroup, this.game, this.map, directionString, this));
        }
    },
    startMapDisplay: function() {
        this.mapSprites = [];
        for (var i = 0; i < this.map.length; i++) {
            this.mapSprites[i] = [];
            for (var j = 0; j < this.map[i].length; j++) {
                var x = i * GameplayState.STD_CELL_SIZE - GameplayState.STD_CELL_SIZE;
                var y = j * GameplayState.STD_CELL_SIZE - GameplayState.STD_CELL_SIZE;
                var bOutOfBounds = (x <= -GameplayState.STD_CELL_SIZE || x > GameApplication.NATIVE_WIDTH ||
                    y <= -GameplayState.STD_CELL_SIZE || y > GameplayState.NATIVE_HEIGHT);
                if (bOutOfBounds) {
                    continue;
                }
                var connectionFlags = 0x0;
                var bThisCellIsWater = (this.map[i][j].type == MODEL_MapCell.Water);
                if (bThisCellIsWater) {
                    // Unreadable. Sorry :(

                    if (i >= 1) {
                        if (this.map[i - 1][j].type == MODEL_MapCell.Water) {
                            connectionFlags |= VIEW_MapSprite.Connection_W;
                        }
                    } else connectionFlags |= VIEW_MapSprite.Connection_W;

                    if (j >= 1) {
                        if (this.map[i][j - 1].type == MODEL_MapCell.Water) {
                            connectionFlags |= VIEW_MapSprite.Connection_N;
                        }
                    } else connectionFlags |= VIEW_MapSprite.Connection_N;

                    if (i < this.mapSizeX - 1) {
                        if (this.map[i + 1][j].type == MODEL_MapCell.Water) {
                            connectionFlags |= VIEW_MapSprite.Connection_E;
                        }
                    } else connectionFlags |= VIEW_MapSprite.Connection_E;

                    if (j < this.mapSizeY - 1) {
                        if (this.map[i][j + 1].type == MODEL_MapCell.Water) {
                            connectionFlags |= VIEW_MapSprite.Connection_S;
                        }
                    } else connectionFlags |= VIEW_MapSprite.Connection_S;

                    if (i >= 1 && j >= 1) {
                        if (this.map[i - 1][j - 1].type == MODEL_MapCell.Water) {
                            connectionFlags |= VIEW_MapSprite.Connection_SW;
                        }
                    } else connectionFlags |= VIEW_MapSprite.Connection_SW;

                    if (i >= 1 && j < this.mapSizeY - 1) {
                        if (this.map[i - 1][j + 1].type == MODEL_MapCell.Water) {
                            connectionFlags |= VIEW_MapSprite.Connection_NW;
                        }
                    } else connectionFlags |= VIEW_MapSprite.Connection_NW;

                    if (i < this.mapSizeX - 1 && j >= 1) {
                        if (this.map[i + 1][j - 1].type == MODEL_MapCell.Water) {
                            connectionFlags |= VIEW_MapSprite.Connection_SE;
                        }
                    } else connectionFlags |= VIEW_MapSprite.Connection_SE;

                    if (i < this.mapSizeX - 1 && j < this.mapSizeY - 1) {
                        if (this.map[i + 1][j + 1].type == MODEL_MapCell.Water) {
                            connectionFlags |= VIEW_MapSprite.Connection_NE;
                        }
                    } else connectionFlags |= VIEW_MapSprite.Connection_NE;
                }
                var cellType = this.map[i][j].type;
                if (cellType == MODEL_MapCell.Mountain || cellType == MODEL_MapCell.Mountain_2 || cellType == MODEL_MapCell.Flag) {
                    var tileSprite = new VIEW_MapSprite(x, y, this.mapSpritesGroup, MODEL_MapCell.Grass_0, connectionFlags);

                    this.decalRenderTexture.render(tileSprite._costume, tileSprite._costume.position, false);
                    tileSprite.destroy();

                    this.mapSprites[i][j] = new VIEW_MapSprite(x, y, this.mapTopSpritesGroup, cellType, connectionFlags);

                    if (cellType == MODEL_MapCell.Mountain_2) {
                        this.mapSprites[i][j]._costume.position.y -= 8;
                    }

                    if (cellType == MODEL_MapCell.Flag) {
                        this.flagSprite = this.mapTopSpritesGroup.create(x + 4, y - 35, "tiles_FlagPole_Flag");
                        this.flagPosition = {
                            x: i,
                            y: j
                        };
                        this.flagSprite.animations.add("weaving").play(8, true);
                    }

                } else {
                    if (cellType != MODEL_MapCell.Water) {
                        this.mapSprites[i][j] = undefined;
                        var tileSprite = new VIEW_MapSprite(x, y, this.mapSpritesGroup, cellType, connectionFlags);
                        this.decalRenderTexture.render(tileSprite._costume, tileSprite._costume.position, false);
                        tileSprite.destroy();
                    } else {
                        this.mapSprites[i][j] = new VIEW_MapSprite(x, y, this.mapSpritesGroup, cellType, connectionFlags);
                    }
                }
            }
        }
    },
    create: function() {

        if (this.game.app._mainTheme == null) {
            this.game.app._mainTheme = this.game.add.audio("music_theme", 1.0, true, true).play();
        }

        this.bMadeFirstTurn = false;

        this.game.onPause.add(this.onPause, this);
        this.game.onResume.add(this.onResume, this);

        this.addTime = 0;

        this.initMap(GameplayState.STD_MAP_SIZEX, GameplayState.STD_MAP_SIZEY);
        this.mapSpritesGroup = this.game.add.group();
        this.units = [];
        this.unitSprites = [];
        this.flyingUnitSprites = [];
        this.rocketTrailParticles = [];
        this.bottomEffectsGroup = this.game.add.group();

        this.bloodDecalSprite = this.game.make.sprite(0, 0, "effects_BloodSplashDecal");
        this.bloodDecalSprite.anchor.set(0.5, 0.5);
        this.tankHitHoleSprite = this.game.make.sprite(0, 0, "effects_Crater");
        this.tankHitHoleSprite.anchor.set(0.5, 0.5);

        this.gridSpriteTexture = this.game.add.renderTexture(GameApplication.NATIVE_WIDTH, GameApplication.NATIVE_HEIGHT);
        this.gridSprite = this.game.add.sprite(0, 0, this.gridSpriteTexture);
        this.gridSprite.alpha = 0.0;
        this.gridSprite.visible = false;

        this.unitSpritesGroup = this.game.add.group();

        this.mapTopSpritesGroup = this.game.add.group();

        this.effectsGroup = this.game.add.group();
        this.rocketTrailGroup = this.game.add.group();

        this.flyingUnitSpritesGroup = this.game.add.group();
        this.cloudGroup = this.game.add.group();
        this.flyingUnitEffectsGroup = this.game.add.group();
        this.pathViewerGroup = this.game.add.group();
        this.pathViewer = new VIEW_PathViewer(this.map, this.pathViewerGroup);

        this.loadLevel(GameplayState.CurrentLevel);

        GameplayState.TimePerLevel *= 3;

        this.decalRenderTexture = this.game.add.renderTexture(GameApplication.NATIVE_WIDTH, GameApplication.NATIVE_HEIGHT);
        this.decalSprite = this.bottomEffectsGroup.create(0, 0, this.decalRenderTexture);

        this.startMapDisplay();

        this.setupGUI();

        this.prepareTutorial(GameplayState.CurrentLevel);

        this.startTime = this.game.time.now;
        this.beforeStartTime = this.game.time.now;

        /*
        var lvlTitle = this.game.add.text(GameApplication.NATIVE_WIDTH/2, 250, "Capture the flag!");
        lvlTitle.anchor.set(0.5);
        lvlTitle.fill = "#FFFFFF";
        lvlTitle.fontSize = "80px";
        lvlTitle.alpha = 0.0;

        this.game.add.tween(lvlTitle).to({alpha: 1}, 800, Phaser.Easing.Quadratic.Out, true, 800).onComplete.add(function(){
            this.game.add.tween(lvlTitle).to({alpha: 0}, 1200, Phaser.Easing.Quadratic.In, true, 1800).onComplete.add(function() {
                lvlTitle.destroy();
            }, this);
        }, this);
        */

        TransitionAnimator.BringOnTop(this.game);

        TransitionAnimator.Remove(this.game, function() {}, this);

        //this.game.time.advancedTiming = true;
        //this.fpsTF = this.game.add.bitmapText(20,10, "visitor", "FPS: " + this.game.time.fps, 30);
        //this.fpsTF.fixedToCamera = true;

        this.game.input.onDown.add(this.onDown, this);
        this.game.input.onUp.add(this.onUp, this);

        LevelStats.wasLaunched[GameplayState.CurrentLevel - 1] = true;
    },
    updateGridHelperTexture: function() {

        var activeUnit = this.pathViewer.getActiveUnit();
        if (activeUnit == null)
            return;

        var enemyMark = this.game.make.graphics(0, 0);

        var walkableMark = this.game.make.graphics(0, 0);
        walkableMark.beginFill(0xC0EBEB);
        walkableMark.drawRoundedRect(0, 0, 120, 120, 10);
        walkableMark.endFill();

        var flagMark = this.game.make.graphics(0, 0);

        var selfMark = this.game.make.graphics(0, 0);

        this.gridSpriteTexture.clear();
        this.gridSpriteTexture.clear();

        var tempMap = [];

        for (var i = 0; i < this.map.length - 2; i++) {
            tempMap[i] = [];
            for (var j = 0; j < this.map[0].length - 2; j++) {
                if (MODEL_MapCell.IsWalkable(this.map[i + 1][j + 1].type) || ((this.map[i + 1][j + 1].type == MODEL_MapCell.Water || this.map[i + 1][j + 1].type == MODEL_MapCell.Barricade) && (activeUnit.isFlying())))
                    tempMap[i][j] = walkableMark;
                else
                    tempMap[i][j] = undefined;
            }
        }

        for (var i = 0; i < this.map.length - 2; i++)
            for (var j = 0; j < this.map[0].length - 2; j++) {
                var mark = tempMap[i][j];

                if (mark != undefined) {
                    mark.position.set(4 + i * GameplayState.STD_CELL_SIZE, 4 + j * GameplayState.STD_CELL_SIZE);
                    this.gridSpriteTexture.render(mark, mark.position, false);
                }
            }

        enemyMark.destroy();
        walkableMark.destroy();
        flagMark.destroy();
        selfMark.destroy();
    },
    onDown: function(event) {

        this.bHasStarted = true;

        if (GameApplication.bPaused) {
            return;
        }

        if (this.pauseScreenCollider) {
            return;
        }

        if (this.bTurnIsLast)
            return;

        if (this.bPerformingTurn) {
            this.bBuildingPath = false;
            return;
        }
        if (!this.bBuildingPath) {
            this.bBuildingPath = true;
            for (var i = 0; i < this.units.length; i++) {
                var unit = this.units[i];
                if (unit.isEnemy()) {
                    this.pathViewer.setActiveUnit(null);
                    this.bBuildingPath = false;
                    break;
                }
                var cellX = ((((event.x - GameplayState.STD_CELL_SIZE / 2) / GameplayState.STD_CELL_SIZE) + 0.5) >> 0);
                var cellY = ((((event.y - GameplayState.STD_CELL_SIZE / 2) / GameplayState.STD_CELL_SIZE) + 0.5) >> 0);
                if (unit.x == cellX && unit.y == cellY && unit.isAlive()) {
                    if (!this.pathViewer.isUnitActive(unit)) {
                        this.pathViewer.setActiveUnit(unit);
                    }
                    break;
                }
            }
        }
        this.updateGridHelperTexture();
    },
    onPause: function() {
        GameApplication.bPaused = true;
        this.timeSincePaused = this.game.time.now;
    },
    onResume: function() {
        GameApplication.bPaused = false;
        this.startTime += this.game.time.now - this.timeSincePaused;
    },
    onUp: function(event) {
        if (this.bBuildingPath) {
            this.bBuildingPath = false;
            if (!this.bPerformingTurn) {
                var activeUnit = this.pathViewer.getActiveUnit();
                if (activeUnit != null && this.pathViewer.getPathLength() > 0) {
                    this.bPerformingTurn = true;
                    //console.log("Turn has started!");
                    //if (this.pathViewer.getPoints().length > 1)
                    //this.addTime -= 1000;
                    this.bMadeFirstTurn = true;
                    activeUnit.getSprite().makeTurn(this.pathViewer.getPoints(), 1.0, this.onTurnEnded, this, this.pathViewer.getUnitEngaged(), this.pathViewer.getPositionAttacked());
                    this.pathViewer.clear();
                }
            }
        }
    },
    onTurnEnded: function() {
        this.bPerformingTurn = false;
        this.rocketTrailGroup.destroy();
        this.rocketTrailGroup = this.game.add.group();

        var bMarinesAlive = false;

        for (var i = 0; i < this.units.length; i++) {

            if (this.units[i].isAlive() && this.units[i].type == MODEL_Unit.Player_Marines) {
                bMarinesAlive = true;
                break;
            }
        }

        if (!bMarinesAlive) {
            GameApplication.bPaused = true;

            this.pauseButton.fixedToCamera = false;

            this.game.add.tween(this.pauseButton.position).to({
                y: this.pauseButton.position.y - 300
            }, 500, Phaser.Easing.Quadratic.In, true);

            this.timeBar.fixedToCamera = false;
            this.timeBarGlass.fixedToCamera = false;
            this.timeBarStars.fixedToCamera = false;
            this.timeBarStripe.fixedToCamera = false;

            this.game.add.tween(this.timeBar.position).to({
                y: -500
            }, 500, Phaser.Easing.Quadratic.In, true);
            this.game.add.tween(this.timeBarGlass.position).to({
                y: this.timeBarGlass.position.y - 300
            }, 500, Phaser.Easing.Quadratic.In, true);
            this.game.add.tween(this.timeBarStars.position).to({
                y: this.timeBarStars.position.y - 300
            }, 500, Phaser.Easing.Quadratic.In, true);
            this.game.add.tween(this.timeBarStripe.position).to({
                y: this.timeBarStripe.position.y - 300
            }, 500, Phaser.Easing.Quadratic.In, true);

            this.game.time.events.add(1000, function() {

                this.restartButton.position.set(331, 460);

                this.pauseScreenCollider = this.overlayGroup.create(0, 0, "misc_Darkness");
                this.pauseScreenCollider.alpha = 0.0;
                this.pauseScreenCollider.fixedToCamera = true;

                this.overlayGroup.bringToTop(this.muteButton);

                this.game.add.tween(this.pauseScreenCollider).to({
                    alpha: 1.0
                }, 500, Phaser.Easing.Quadratic.Out, true);

                var panel = this.overlayGroup.create(GameApplication.NATIVE_WIDTH / 2, GameApplication.NATIVE_HEIGHT / 2 - 50, "gui_Panel_Defeat");
                panel.anchor.set(0.5);
                panel.scale.set(0);

                var scalet = this.game.add.tween(panel.scale);
                scalet.to({
                    x: 1,
                    y: 1
                }, 250, Phaser.Easing.Elastic.Out, true).onComplete.add(function() {

                    GameApplication.bPaused = true;

                    this.game.add.tween(this.game.app._mainTheme).to({
                        volume: 0
                    }, 400).start();
                    this.loseSnd = this.game.add.audio("lose", 1.0, false);
                    this.loseSnd.play();

                    this.menuButton.fixedToCamera = false;
                    this.restartButton.fixedToCamera = false;

                    this.menuButton.position.set(233, 500);
                    this.restartButton.position.set(418, 510);

                    this.restartButton.scale.set(1);
                    this.menuButton.scale.set(1);

                    this.menuButton.visible = true;
                    this.restartButton.visible = true;

                    this.menuButton.inputEnabled = true;
                    this.restartButton.inputEnabled = true;

                    this.overlayGroup.bringToTop(this.menuButton);
                    this.overlayGroup.bringToTop(this.restartButton);
                }, this);
            }, this);
        }

        if (this.bTurnIsLast) {

            for (var i = 0; i < this.units.length; i++) {
                var unit = this.units[i];
                if (unit.type == MODEL_Unit.Player_Marines && unit.isAlive()) {
                    unit._sprite.destroy();
                    var victorian = this.unitSpritesGroup.create(unit.x * GameplayState.STD_CELL_SIZE, unit.y * GameplayState.STD_CELL_SIZE, "entity_Player_Marine_Victory");
                    victorian.animations.add("play").play(10, false);
                }
            }

            this.game.add.audio("whoo", 1.0, false).play();

            GameApplication.bPaused = true;

            this.game.add.tween(this.flagSprite.position).to({
                y: this.flagSprite.position.y + 45
            }, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                this.flagSprite.destroy();
                var flagFall = this.mapTopSpritesGroup.create(this.flagSprite.position.x, this.flagSprite.position.y, "tiles_Flag_Fall");
                flagFall.animations.add("run").play(24, false);
                //GameplayState.CurrentLevel = LevelIndex.PickNext(GameplayState.CurrentLevel);
                //this.game.state.start("gameplay");


                this.timeBar.fixedToCamera = false;
                this.timeBarGlass.fixedToCamera = false;
                this.timeBarStars.fixedToCamera = false;
                this.timeBarStripe.fixedToCamera = false;

                this.game.add.tween(this.timeBar.position).to({
                    y: -500
                }, 500, Phaser.Easing.Quadratic.In, true);
                this.game.add.tween(this.timeBarGlass.position).to({
                    y: this.timeBarGlass.position.y - 300
                }, 500, Phaser.Easing.Quadratic.In, true);
                this.game.add.tween(this.timeBarStars.position).to({
                    y: this.timeBarStars.position.y - 300
                }, 500, Phaser.Easing.Quadratic.In, true);
                this.game.add.tween(this.timeBarStripe.position).to({
                    y: this.timeBarStripe.position.y - 300
                }, 500, Phaser.Easing.Quadratic.In, true);

                this.pauseButton.fixedToCamera = false;

                this.game.add.tween(this.pauseButton.position).to({
                    y: this.pauseButton.position.y - 300
                }, 500, Phaser.Easing.Quadratic.In, true);

                this.game.time.events.add(600, function() {

                    //var tbtw = this.game.add.tween(this.timeBar.scale);
                    //tbtw.to({y: 0.0}, 500, Phaser.Easing.Quadratic.Out, true);

                    this.pauseScreenCollider = this.overlayGroup.create(0, 0, "misc_Darkness");
                    this.pauseScreenCollider.alpha = 0.0;
                    this.pauseScreenCollider.fixedToCamera = true;

                    this.overlayGroup.bringToTop(this.muteButton);

                    this.game.add.tween(this.pauseScreenCollider).to({
                        alpha: 1.0
                    }, 500, Phaser.Easing.Quadratic.Out, true);

                    var panel = this.overlayGroup.create(GameApplication.NATIVE_WIDTH / 2, GameApplication.NATIVE_HEIGHT / 2 - 50, "gui_Panel_Victory");
                    panel.anchor.set(0.5);
                    panel.scale.set(0);

                    var scalet = this.game.add.tween(panel.scale);
                    scalet.to({
                        x: 1,
                        y: 1
                    }, 250, Phaser.Easing.Elastic.Out, true).onComplete.add(function() {

                        this.game.add.audio("victory", 1.0, false).play()
                        this.menuButton.fixedToCamera = false;

                        this.menuButton.position.set(325, 700);

                        this.menuButton.visible = true;

                        this.menuButton.inputEnabled = true;

                        this.overlayGroup.bringToTop(this.menuButton);

                        var restartButton = this.game.make.button(230, 346, "victory_Restart", function() {
                            restartButton.inputEnabled = false;
                            var tween = ButtonAnimator.DoPress(this.game, restartButton);

                            TransitionAnimator.Do(this.game, function() {
                                this.game.state.start("gameplay", false);
                            }, this);

                            tween.start();
                        }, this);
                        restartButton.priorityID = 3;
                        restartButton.anchor.set(0.5);
                        this.overlayGroup.add(restartButton);

                        var continueButton = this.game.make.button(430, 346, "victory_Continue", function() {
                            continueButton.inputEnabled = false;
                            var tween = ButtonAnimator.DoPress(this.game, continueButton);

                            TransitionAnimator.Do(this.game, function() {
                                GameplayState.CurrentLevel++;
                                this.game.state.start("gameplay", false);
                            }, this);

                            tween.start();
                        }, this);
                        continueButton.scale.set(0);
                        continueButton.priorityID = 3;
                        continueButton.anchor.set(0.5);

                        restartButton.scale.set(0);

                        this.menuButton.scale.set(0);

                        var lvlIndex = GameplayState.CurrentLevel - 1;

                        var score = this.amountOfStars * 100;

                        LevelStats.unlocked[lvlIndex + 1] = true;
                        LevelStats.stars[lvlIndex] = Math.max(this.amountOfStars, LevelStats.stars[lvlIndex]);
                        LevelStats.highScores[lvlIndex] = Math.max(LevelStats.highScores[lvlIndex], score);
                        var sum = 0;
                        for (var i = 0; i < LevelStats.highScores.length; i++) {

                            if (LevelStats.highScores[i] != undefined)
                                sum += LevelStats.highScores[i];
                        }
                        GameAPI.Score.submit(sum);

                        SaveProgress();

                        if (this.amountOfStars >= 1) {

                            this.game.time.events.add(1000, function() {

                                var star_1 = this.game.make.sprite(245, 490, "victory_Star");
                                star_1.scale.set(1);
                                star_1.anchor.set(0.5);
                                this.game.add.audio("star_placed", 1.0, false).play();
                                this.overlayGroup.add(star_1);
                            }, this);

                        }

                        if (this.amountOfStars >= 2) {

                            this.game.time.events.add(1600, function() {

                                var star_2 = this.game.make.sprite(320, 468, "victory_Star");
                                star_2.scale.set(1);
                                star_2.anchor.set(0.5);
                                this.game.add.audio("star_placed", 1.0, false).play();
                                this.overlayGroup.add(star_2);
                            }, this);

                        }

                        if (this.amountOfStars >= 3) {

                            this.game.time.events.add(2200, function() {

                                var star_3 = this.game.make.sprite(395, 490, "victory_Star");
                                star_3.scale.set(1);
                                star_3.anchor.set(0.5);
                                this.game.add.audio("star_placed", 1.0, false).play();
                                this.overlayGroup.add(star_3);
                            }, this);

                        }

                        this.game.add.tween(continueButton.scale).to({
                            x: 1,
                            y: 1
                        }, 200, Phaser.Easing.Quintic.Out, true);
                        this.game.add.tween(restartButton.scale).to({
                            x: 1,
                            y: 1
                        }, 200, Phaser.Easing.Quintic.Out, true);
                        this.game.add.tween(this.menuButton.scale).to({
                            x: 1,
                            y: 1
                        }, 200, Phaser.Easing.Quintic.Out, true);

                        this.overlayGroup.add(continueButton);

                    }, this);


                }, this);


            }, this);
        }

    },
    updateUnitSprites: function() {
        for (var i = 0; i < this.unitSprites.length; i++) {
            this.unitSprites[i].update();
        }
        for (var i = 0; i < this.flyingUnitSprites.length; i++) {
            this.flyingUnitSprites[i].update();
        }
    },
    updateClouds: function() {
        if (Math.random() > 0.998) {
            this.cloudGroup.create(GameApplication.NATIVE_WIDTH, Math.random() * GameApplication.NATIVE_HEIGHT, "effects_Cloud_" + (((Math.random() * 2 + 1) + 0.5) >> 0));
        }
        for (var i = 0; i < this.cloudGroup.children.length; i++) {
            var cloudSprite = this.cloudGroup.children[i];
            cloudSprite.position.x += this.cloudWindSpeed;
            if (cloudSprite.position.x < -cloudSprite.width) {
                cloudSprite.destroy();
            }
        }
    },
    updateGridHelper: function() {
        var bGridShouldBeViewed = this.pathViewer.isActiveUnitExists() && this.bBuildingPath;
        if (bGridShouldBeViewed) {
            this.gridSprite.visible = true;
            if (this.gridSprite.alpha < 0.15) {
                this.gridSprite.alpha += 0.02;
            } else {
                this.gridSprite.alpha = 0.15;
            }
        } else {
            if (this.gridSprite.alpha > 0) {
                this.gridSprite.alpha -= 0.02;
                if (this.gridSprite.alpha < 0) {
                    this.gridSprite.alpha = 0;
                }
            }
            if (this.gridSprite.alpha < 0) {
                this.gridSprite.alpha = 0;
            }
        }
    },
    shootRocket: function(fromX, fromY, toX, toY) {
        var angle = Phaser.Math.angleBetween(fromX, fromY, toX, toY);
        this.rockets.push(new VIEW_RocketSprite(fromX, fromY, toX, toY, angle, this.effectsGroup, this));
        this.game.add.audio("rocket_start", 0.5, false, true).play();
    },
    updateGibs: function() {
        for (var i = 0; i < this.gibs.length; i++) {
            var gib = this.gibs[i];
            gib.position.set(gib.actualPosition.x, gib.actualPosition.y - gib.actualPosition.z * 0.1);
            gib.actualPosition.x += gib.velocity.x;
            gib.actualPosition.y += gib.velocity.y * 0.1;
            gib.actualPosition.z += gib.velocity.z;
            gib.rotation += 0.05 * (gib.velocity.x > 0.0 ? 1 : -1);
            if (gib.actualPosition.z < 0.0) {
                gib.velocity.x = 0;
                gib.velocity.y = 0;
                gib.velocity.z = 0;
                this.decalRenderTexture.render(gib, gib.position, false);
                gib.kill();
                this.gibs.splice(i, 1);
                i--;
            } else {
                gib.velocity.z -= 1.5;
                if (Math.random() > 0.95) {
                    this.bloodDecalSprite.frame = ((Math.random() * 2 + 1) - 0.5) << 0;
                    this.decalRenderTexture.render(this.bloodDecalSprite, new Phaser.Point(gib.actualPosition.x, gib.actualPosition.y), false);
                }
            }
        }
    },
    showPauseScreen: function() {
        this.pauseScreenCollider = this.overlayGroup.create(0, 0, "misc_Darkness");
        this.pauseScreenCollider.alpha = 0.0;
        this.pauseScreenCollider.fixedToCamera = true;

        this.pausePanel = this.overlayGroup.create(GameApplication.NATIVE_WIDTH / 2, 0, "gui_Panel_Pause");
        this.pausePanel.anchor.x = 0.5;
        this.pausePanel.position.y -= this.pausePanel.height;

        this.resumeButton.visible = true;
        this.restartButton.visible = true;
        this.menuButton.visible = true;

        this.resumeButton.scale.set(0);
        this.restartButton.scale.set(0);
        this.menuButton.scale.set(0);

        this.menuButton.fixedToCamera = false;

        this.resumeButton.position.set(465, 460);
        this.menuButton.position.set(186, 460);
        this.restartButton.position.set(348, 460);

        this.menuButton.fixedToCamera = true;

        this.game.add.tween(this.pausePanel.position).to({
            y: 0
        }, 500, Phaser.Easing.Sinusoidal.Out, true).onComplete.add(function() {

            GameplayState.SavedContext = this;

            GameAPI.GameBreak.request(function() {
                GameplayState.SavedContext.game.sound.mute = true;
            }, function() {
                GameplayState.SavedContext.game.sound.mute = GameApplication.bMute || false;
                GameplayState.SavedContext.game.add.tween(GameplayState.SavedContext.resumeButton.scale).to({
                    x: 1,
                    y: 1
                }, 200, Phaser.Easing.Quintic.Out, true);
                GameplayState.SavedContext.game.add.tween(GameplayState.SavedContext.restartButton.scale).to({
                    x: 1,
                    y: 1
                }, 200, Phaser.Easing.Quintic.Out, true);
                GameplayState.SavedContext.game.add.tween(GameplayState.SavedContext.menuButton.scale).to({
                    x: 1,
                    y: 1
                }, 200, Phaser.Easing.Quintic.Out, true);

                GameplayState.SavedContext.restartButton.inputEnabled = true;
                GameplayState.SavedContext.menuButton.inputEnabled = true;
                GameplayState.SavedContext.resumeButton.inputEnabled = true;
            }, this, this);
        }, this);

        this.game.add.tween(this.pauseScreenCollider).to({
            alpha: 1.0
        }, 800, Phaser.Easing.Quadratic.Out, true);

        this.pauseScreenCollider.inputEnabled = true;
        this.pauseScreenCollider.priorityID = 2;

        this.game.add.tween(this.pauseButton.position).to({
            y: -this.pauseButton.height / 2
        }, 200, Phaser.Easing.Quadratic.In, true);

        this.overlayGroup.bringToTop(this.resumeButton);
        this.overlayGroup.bringToTop(this.restartButton);
        this.overlayGroup.bringToTop(this.menuButton);
        this.overlayGroup.bringToTop(this.muteButton);

    },
    hidePauseScreen: function() {
        this.game.add.tween(this.resumeButton.scale).to({
            x: 0,
            y: 0
        }, 200, Phaser.Easing.Quadratic.Out, true);
        this.game.add.tween(this.restartButton.scale).to({
            x: 0,
            y: 0
        }, 200, Phaser.Easing.Quadratic.Out, true);
        this.game.add.tween(this.menuButton.scale).to({
            x: 0,
            y: 0
        }, 200, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

            this.game.add.tween(this.pausePanel.position).to({
                y: -this.pausePanel.height
            }, 500, Phaser.Easing.Sinusoidal.In, true);

            this.game.add.tween(this.pauseScreenCollider).to({
                alpha: 0.0
            }, 800, Phaser.Easing.Quadratic.In, true).onComplete.add(function() {
                this.pauseScreenCollider.destroy();
                this.pauseScreenCollider = null;

                this.pauseButton.fixedToCamera = false;
                var tw = this.game.add.tween(this.pauseButton.position);
                tw.to({
                    y: 43
                }, 300, Phaser.Easing.Quadratic.Out);
                tw.onComplete.add(function() {
                    this.pauseButton.inputEnabled = true;
                    this.pauseButton.fixedToCamera = true;
                    GameApplication.bPaused = false;
                    this.startTime += this.game.time.now - this.timeSincePaused;
                }, this);
                tw.start();

            }, this);
        }, this);
    },
    setTimeBarState: function(percent) {
        percent = Phaser.Math.clamp(percent, 0, 100);
        this.timeBarStripe.scale.x = percent / 100.0;
        if (percent < 33.3) {
            this.setAmountOfStars(1);
            this.timeBarStripe.tint = 0xFFBBBB;

            if (this.starsPresented == 2) {
                this.starsPresented = 1;
                // remove star anim
                var star = this.overlayGroup.create(195, 45, "misc_Star");
                star.anchor.set(0.5);
                this.game.add.tween(star.scale).to({
                    x: 0,
                    y: 0
                }, 550, Phaser.Easing.Elastic.In, true).onComplete.add(function() {
                    star.destroy();
                }, this);
            }
        } else if (percent < 66.6) {
            this.setAmountOfStars(2);
            this.timeBarStripe.tint = 0xFFDDDD;

            if (this.starsPresented == 3) {
                this.starsPresented = 2;
                // remove star anim
                var star = this.overlayGroup.create(275, 45, "misc_Star");
                star.anchor.set(0.5);
                this.game.add.tween(star.scale).to({
                    x: 0,
                    y: 0
                }, 550, Phaser.Easing.Elastic.In, true).onComplete.add(function() {
                    star.destroy();
                }, this);

            }
        } else {
            this.setAmountOfStars(3);
            this.timeBarStripe.tint = 0xFFFFFF;
            this.starsPresented = 3;
        }
    },
    setAmountOfStars: function(amount) {
        amount = Phaser.Math.clamp(amount, 1, 3);
        this.timeBarStars.frame = 3 - amount;
        this.amountOfStars = amount;
    },
    setupGUI: function() {
        this.menuButton = this.game.make.button(203, 460, "button_Menu", function() {
            this.menuButton.inputEnabled = false;
            var tween = ButtonAnimator.DoPress(this.game, this.menuButton);

            TransitionAnimator.Do(this.game, function() {
                this.game.state.start("levelselection", false);
            }, this);

            tween.start();
        }, this);
        this.menuButton.priorityID = 3;
        this.menuButton.anchor.set(0.5);
        this.menuButton.visible = false;
        this.menuButton.fixedToCamera = true;

        this.muteButton = this.game.make.button(585, -50, "button_Mute", function() {
            this.muteButton.inputEnabled = false;
            var tween = ButtonAnimator.DoPress(this.game, this.muteButton);
            this.game.time.events.add(130, function() {
                GameApplication.bMute = !GameApplication.bMute;
                this.muteButton.frame = GameApplication.bMute ? 0 : 1;
                this.game.sound.mute = GameApplication.bMute;
                this.muteButton.inputEnabled = true;
            }, this);
            tween.start();
        }, this);

        this.game.add.tween(this.muteButton.position).to({
            y: 43
        }, 200, Phaser.Easing.Quadratic.Out, true, 500).onComplete.add(function() {
            this.muteButton.fixedToCamera = true;
        }, this);

        this.muteButton.frame = GameApplication.bMute ? 0 : 1;
        this.muteButton.priorityID = 1;
        this.muteButton.anchor.set(0.5);
        this.muteButton.fixedToCamera = false;

        this.pauseButton = this.game.make.button(this.muteButton.position.x - 90, 43, "button_Pause", function() {


            //this.showPauseScreen();
            this.pauseButton.inputEnabled = false;
            this.pauseButton.fixedToCamera = false;
            var tween = ButtonAnimator.DoPress(this.game, this.pauseButton);
            GameApplication.bPaused = true;
            this.timeSincePaused = this.game.time.now;

            this.game.time.events.add(150, function() {
                this.showPauseScreen();
                var tw = this.game.add.tween(this.pauseButton.position);
                tw.to({
                    y: -100
                }, 150, Phaser.Easing.Quadratic.In);
                tw.onComplete.add(function() {
                    this.pauseButton.inputEnabled = true;
                    this.pauseButton.fixedToCamera = true;
                }, this);
                tw.start();

            }, this);

            tween.start();
        }, this);
        this.pauseButton.priorityID = 1;
        this.pauseButton.anchor.set(0.5);
        this.pauseButton.fixedToCamera = true;

        this.restartButton = this.game.make.button(331, 460, "button_Restart", function() {
            this.restartButton.inputEnabled = false;
            this.menuButton.inputEnabled = false;
            this.resumeButton.inputEnabled = false;
            var tween = ButtonAnimator.DoPress(this.game, this.restartButton);

            TransitionAnimator.Do(this.game, function() {
                this.game.state.start("gameplay", false);
            }, this);

            tween.start();
        }, this);
        this.restartButton.priorityID = 3;
        this.restartButton.anchor.set(0.5);
        this.restartButton.visible = false;
        this.restartButton.fixedToCamera = true;

        this.resumeButton = this.game.make.button(450, 460, "button_Resume", function() {
            this.menuButton.inputEnabled = false;
            this.restartButton.inputEnabled = false;
            this.resumeButton.inputEnabled = false;
            var tween = ButtonAnimator.DoPress(this.game, this.resumeButton);
            this.game.time.events.add(130, function() {
                this.hidePauseScreen();
            }, this);
            tween.start();
        }, this);
        this.resumeButton.priorityID = 3;
        this.resumeButton.anchor.set(0.4, 0.5);
        this.resumeButton.visible = false;
        this.resumeButton.fixedToCamera = true;

        this.timeBar = this.game.make.sprite(56, 2, "timebar_Bar");

        this.timeBarStripe = this.game.make.sprite(56, 2, "timebar_Stripe");
        this.timeBarStripe.anchor.set(19 / 276, 15 / 82);
        this.timeBarStripe.position.x += 19;
        this.timeBarStripe.position.y += 15;

        this.timeBarGlass = this.game.make.sprite(56, 2, "timebar_Glass");
        this.timeBarStars = this.game.make.sprite(56, 2, "timebar_Stars");

        this.timeBar.fixedToCamera = true;
        this.timeBarStripe.fixedToCamera = true;
        this.timeBarGlass.fixedToCamera = true;
        this.timeBarStars.fixedToCamera = true;

        this.overlayGroup = this.game.add.group();
        this.overlayGroup.add(this.menuButton);
        this.overlayGroup.add(this.muteButton);
        this.overlayGroup.add(this.pauseButton);
        this.overlayGroup.add(this.restartButton);
        this.overlayGroup.add(this.resumeButton);

        this.overlayGroup.add(this.timeBar);
        this.overlayGroup.add(this.timeBarStripe);
        this.overlayGroup.add(this.timeBarGlass);
        this.overlayGroup.add(this.timeBarStars);

        this.setTimeBarState(100);
        this.setAmountOfStars(3);
    },
    destroyGUI: function() {
        this.menuButton.destroy();
        this.muteButton.destroy();
        this.pauseButton.destroy();
        this.restartButton.destroy();
        this.resumeButton.destroy();
    },
    updateRockets: function() {
        for (var i = 0; i < this.rockets.length; i++) {
            this.rockets[i].update();
        }
    },
    explodeHuman: function(x, y, unitType) {
        if (unitType == MODEL_Unit.Enemy_Guard) {
            // MAGIC NUMBER FIELD!

            // LEFT ENEMY
            var head = this.effectsGroup.create(x + 43, y + 60, "effects_Gibs_GuardHead");
            head.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 60
            };
            head.actualPosition = {
                x: head.position.x,
                y: head.position.y,
                z: 500
            };
            head.anchor.set(0.5, 0.5);
            var arm = this.effectsGroup.create(x + 48, y + 60, "effects_Gibs_GuardArm");
            arm.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 45
            };
            arm.actualPosition = {
                x: arm.position.x,
                y: arm.position.y,
                z: 350
            };
            arm.anchor.set(0.5, 0.5);
            var leg = this.effectsGroup.create(x + 38, y + 60, "effects_Gibs_GuardLeg");
            leg.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 40
            };
            leg.actualPosition = {
                x: leg.position.x,
                y: leg.position.y,
                z: 20
            };
            leg.anchor.set(0.5, 0.5);
            this.gibs.push(head);
            this.gibs.push(arm);
            this.gibs.push(leg);

            leg = this.effectsGroup.create(x + 32, y + 60, "effects_Gibs_GuardLeg");
            leg.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 40
            };
            leg.actualPosition = {
                x: leg.position.x,
                y: leg.position.y,
                z: 20
            };
            leg.anchor.set(0.5, 0.5);
            this.gibs.push(leg);
            arm = this.effectsGroup.create(x + 30, y + 60, "effects_Gibs_GuardArm");
            arm.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 45
            };
            arm.actualPosition = {
                x: arm.position.x,
                y: arm.position.y,
                z: 350
            };
            arm.anchor.set(0.5, 0.5);
            this.gibs.push(arm);

            // RIGHT ENEMY
            var head = this.effectsGroup.create(x + 90, y + 100, "effects_Gibs_GuardHead");
            head.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 60
            };
            head.actualPosition = {
                x: head.position.x,
                y: head.position.y,
                z: 500
            };
            head.anchor.set(0.5, 0.5);
            var arm = this.effectsGroup.create(x + 95, y + 100, "effects_Gibs_GuardArm");
            arm.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 45
            };
            arm.actualPosition = {
                x: arm.position.x,
                y: arm.position.y,
                z: 350
            };
            arm.anchor.set(0.5, 0.5);
            var leg = this.effectsGroup.create(x + 85, y + 100, "effects_Gibs_GuardLeg");
            leg.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 40
            };
            leg.actualPosition = {
                x: leg.position.x,
                y: leg.position.y,
                z: 20
            };
            leg.anchor.set(0.5, 0.5);
            this.gibs.push(head);
            this.gibs.push(arm);
            this.gibs.push(leg);

            leg = this.effectsGroup.create(x + 79, y + 100, "effects_Gibs_GuardLeg");
            leg.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 40
            };
            leg.actualPosition = {
                x: leg.position.x,
                y: leg.position.y,
                z: 20
            };
            leg.anchor.set(0.5, 0.5);
            this.gibs.push(leg);
            arm = this.effectsGroup.create(x + 77, y + 100, "effects_Gibs_GuardArm");
            arm.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 45
            };
            arm.actualPosition = {
                x: arm.position.x,
                y: arm.position.y,
                z: 350
            };
            arm.anchor.set(0.5, 0.5);
            this.gibs.push(arm);
        } else if (unitType == MODEL_Unit.Player_Marines) {
            // LEFT ENEMY
            var head = this.effectsGroup.create(x + 43, y + 60, "effects_Gibs_MarineHead");
            head.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 60
            };
            head.actualPosition = {
                x: head.position.x,
                y: head.position.y,
                z: 500
            };
            head.anchor.set(0.5, 0.5);
            var arm = this.effectsGroup.create(x + 48, y + 60, "effects_Gibs_MarineArm");
            arm.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 45
            };
            arm.actualPosition = {
                x: arm.position.x,
                y: arm.position.y,
                z: 350
            };
            arm.anchor.set(0.5, 0.5);
            var leg = this.effectsGroup.create(x + 38, y + 60, "effects_Gibs_MarineLeg");
            leg.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 40
            };
            leg.actualPosition = {
                x: leg.position.x,
                y: leg.position.y,
                z: 20
            };
            leg.anchor.set(0.5, 0.5);
            this.gibs.push(head);
            this.gibs.push(arm);
            this.gibs.push(leg);

            leg = this.effectsGroup.create(x + 32, y + 60, "effects_Gibs_MarineLeg");
            leg.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 40
            };
            leg.actualPosition = {
                x: leg.position.x,
                y: leg.position.y,
                z: 20
            };
            leg.anchor.set(0.5, 0.5);
            this.gibs.push(leg);
            arm = this.effectsGroup.create(x + 30, y + 60, "effects_Gibs_MarineArm");
            arm.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 45
            };
            arm.actualPosition = {
                x: arm.position.x,
                y: arm.position.y,
                z: 350
            };
            arm.anchor.set(0.5, 0.5);
            this.gibs.push(arm);

            // RIGHT ENEMY
            var head = this.effectsGroup.create(x + 90, y + 100, "effects_Gibs_MarineHead");
            head.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 60
            };
            head.actualPosition = {
                x: head.position.x,
                y: head.position.y,
                z: 500
            };
            head.anchor.set(0.5, 0.5);
            var arm = this.effectsGroup.create(x + 95, y + 100, "effects_Gibs_MarineArm");
            arm.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 45
            };
            arm.actualPosition = {
                x: arm.position.x,
                y: arm.position.y,
                z: 350
            };
            arm.anchor.set(0.5, 0.5);
            var leg = this.effectsGroup.create(x + 85, y + 100, "effects_Gibs_MarineLeg");
            leg.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 40
            };
            leg.actualPosition = {
                x: leg.position.x,
                y: leg.position.y,
                z: 20
            };
            leg.anchor.set(0.5, 0.5);
            this.gibs.push(head);
            this.gibs.push(arm);
            this.gibs.push(leg);

            leg = this.effectsGroup.create(x + 79, y + 100, "effects_Gibs_MarineLeg");
            leg.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 40
            };
            leg.actualPosition = {
                x: leg.position.x,
                y: leg.position.y,
                z: 20
            };
            leg.anchor.set(0.5, 0.5);
            this.gibs.push(leg);
            arm = this.effectsGroup.create(x + 77, y + 100, "effects_Gibs_MarineArm");
            arm.velocity = {
                x: Math.random() * 5 - 2.5,
                y: Math.random() * 10 - 5.0,
                z: 45
            };
            arm.actualPosition = {
                x: arm.position.x,
                y: arm.position.y,
                z: 350
            };
            arm.anchor.set(0.5, 0.5);
            this.gibs.push(arm);
        }
    },
    shakeScreen: function() {
        this.game.camera.bounds = null;

        function shaken(count, offsetY, offsetX) {
            var tw = this.game.add.tween(this.game.camera);
            tw.to({
                y: offsetY * (count % 2 == 0 ? 1 : -1),
                x: offsetX * (count % 2 == 0 ? 1 : -1)
            }, 60, Phaser.Easing.Cubic.Out, false, 0, 0, true);
            tw.onComplete.add(function() {
                if (count > 0) {
                    var newOffsetY = offsetY + Math.random() * 3 + 1;
                    if (newOffsetY > 0) {
                        newOffsetY = 0;
                        count = 0;
                    }
                    var newOffsetX = offsetX + Math.random();
                    if (newOffsetY > 0) {
                        newOffsetY = 0;
                        count = 0;
                    }
                    shaken.call(this, count - 1, newOffsetY, newOffsetX);
                }
            }, this);
            tw.start();
        };
        shaken.call(this, 3, -8.0, -3.0);
    },
    makeTankHitHole: function(x, y) {
        var dst = new Phaser.Point(x + GameplayState.STD_HALF_CELL_SIZE, y + GameplayState.STD_HALF_CELL_SIZE);
        dst.x += 10;
        dst.y += 5;
        this.decalRenderTexture.render(this.tankHitHoleSprite, dst, false);
    },
    makeVehiclePartsCrater: function(x, y, type) {
        var dst = new Phaser.Point(x, y);
        var key = "";

        switch (type) {
            case MODEL_Unit.Player_Tank:
                key = "effects_Crater_Tank";
                break;
            case MODEL_Unit.Player_Bomber:
                key = "effects_Crater_Bomber";
                break;
            case MODEL_Unit.Player_Fighter:
                key = "effects_Crater_Fighter";
                break;
            case MODEL_Unit.Enemy_AntiAir:
                key = "effects_Crater_AntiAir";
                break;
            case MODEL_Unit.Enemy_Helicopter:
                key = "effects_Crater_Helicopter";
                break;
            case MODEL_Unit.Enemy_Tank:
                key = "effects_Crater_EnemyTank";
                break;
            default:
                return;
        }

        var crater = this.game.make.sprite(0, 0, key);
        this.decalRenderTexture.render(crater, dst, false);
        crater.destroy();
    },
    makeBombHitHole: function(x, y) {
        var dst = new Phaser.Point(x, y);
        var barrickades = this.game.make.sprite(0, 0, "effects_BombedBarrickades");
        this.decalRenderTexture.render(barrickades, dst, false);
        barrickades.destroy();
    },
    spilBlood: function(x, y, angle) {
        var dst = new Phaser.Point(x + GameplayState.STD_HALF_CELL_SIZE, y + GameplayState.STD_HALF_CELL_SIZE);
        angle += Math.random() * Math.PI / 4 - Math.PI / 8;
        var distance = Math.random() * 25;
        dst.x -= distance * Math.cos(angle);
        dst.y -= distance * Math.sin(angle);
        this.bloodDecalSprite.frame = ((Math.random() * 2 + 1) - 0.5) << 0;
        this.bloodDecalSprite.scale.set(1.0 / distance + Math.random() * 0.5, 1.0 / distance + Math.random() * 0.5);
        this.decalRenderTexture.render(this.bloodDecalSprite, dst, false);
    },
    repaintGrassTile: function(x, y) {
        var cellType = this.map[x + 1][y + 1].type;
        var tileSprite = new VIEW_MapSprite(x * GameplayState.STD_CELL_SIZE, y * GameplayState.STD_CELL_SIZE, this.mapSpritesGroup, cellType, 0x0);
        this.decalRenderTexture.render(tileSprite._costume, tileSprite._costume.position, false);
        tileSprite.destroy();
    },
    updateStarBars: function() {
        var elapsed = this.game.time.now - (this.startTime + this.addTime);
        if (GameApplication.bPaused || this.bTurnIsLast) {
            return;
        }
        this.setTimeBarState(((GameplayState.TimePerLevel - elapsed) / GameplayState.TimePerLevel) * 100);
    },
    update: function() {
        //this.fpsTF.text = "FPS: " + this.game.time.fps;

        if (!this.bHasStarted) {
            this.startTime = this.game.time.now;
            if (this.game.time.now - this.beforeStartTime > 3000) {
                this.bHasStarted = true;
            }
        }

        this.updateClouds();
        this.updateGridHelper();
        this.updateUnitSprites();
        this.updateGibs();
        this.updateRockets();
        this.updateStarBars();

        var deadEffects = [];
        this.effectsGroup.forEachDead(function(object) {
            deadEffects.push(object);
        }, this);
        for (var i = 0; i < deadEffects.length; i++) {
            deadEffects[i].destroy();
        }

        deadEffects = [];
        this.flyingUnitEffectsGroup.forEachDead(function(object) {
            deadEffects.push(object);
        }, this);
        for (var i = 0; i < deadEffects.length; i++) {
            deadEffects[i].destroy();
        }

        var activeUnit = this.pathViewer.getActiveUnit();
        if (this.bBuildingPath && activeUnit != null) {
            // may be only positive!
            var cellX = ((((this.game.input.x - GameplayState.STD_CELL_SIZE / 2) / GameplayState.STD_CELL_SIZE) + 0.5) >> 0);
            var cellY = ((((this.game.input.y - GameplayState.STD_CELL_SIZE / 2) / GameplayState.STD_CELL_SIZE) + 0.5) >> 0);
            if (cellY >= 7)
                return;

            var unitOnTheWay = null;
            var destroyableOnTheWay = null;
            var bUnitOnTheWayIsAlly = false;
            for (var i = 0; i < this.units.length; i++) {
                var unit = this.units[i];
                if (!unit.isAlive()) {
                    continue;
                }
                if (!this.pathViewer.isUnitActive(unit)) {
                    if (unit.x == cellX && unit.y == cellY) {
                        unitOnTheWay = unit;
                        if (!unit.isEnemy()) {
                            bUnitOnTheWayIsAlly = true;
                        }
                        break;
                    }
                }
            }

            var cellType = this.map[cellX + 1][cellY + 1].type;
            if (MODEL_MapCell.isTileDestroyable(cellType)) {
                if (!this.pathViewer.isAttackingPosition()) {
                    if (MODEL_Unit.isAbleToAttackCell(cellType, activeUnit.type))
                        destroyableOnTheWay = new Object({
                            x: cellX,
                            y: cellY
                        });
                }
            }
            if (this.pathViewer.isNextAfterTheHeading(cellX, cellY)) {
                this.pathViewer.removeHeading();
            }
            if (!this.pathViewer.isUnitEngaged() && !bUnitOnTheWayIsAlly && !this.pathViewer.isAttackingPosition()) {
                var smthWillHappen = true;
                if (unitOnTheWay != null) {
                    var report = CombatSolver.GetReport(activeUnit, unitOnTheWay);
                    //if (!(report.bSurvivedA && report.bSurvivedB)) {
                    if (true) {
                        if (this.pathViewer.isAdjacentToHeading(unitOnTheWay) && unitOnTheWay.isAlive()) {
                            this.pathViewer.setUnitEngaged(unitOnTheWay);
                        }
                    } else smthWillHappen = false;
                }
                if (smthWillHappen) {
                    if (destroyableOnTheWay != null) {
                        this.pathViewer.setPositionAttacked(destroyableOnTheWay);
                    }
                    this.pathViewer.add(cellX, cellY);
                }
            }
        }
    },
    shutdown: function() {

        this.game.onPause.remove(this.onPause, this);
        this.game.onResume.remove(this.onResume, this);

        this.game.input.onDown.remove(this.onDown, this);
        this.game.input.onUp.remove(this.onUp, this);

        for (var i = 0; i < this.unitSprites.length; i++)
            this.unitSprites[i].destroy();

        this.pathViewerGroup.destroy();
        for (var i = 0; i < this.rockets.length; i++) {
            this.rockets[i].destroy();
        }
        this.pathViewer.destroy();
        for (var i = 0; i < this.mapSprites.length; i++) {
            for (var j = 0; j < this.mapSprites[i].length; j++) {
                var mapSprite = this.mapSprites[i][j];
                if (mapSprite != undefined) {
                    mapSprite.destroy();
                }
            }
        }
        this.bTurnIsLast = false;
        GroupManagement.DestroyAllChildrenAndGroup(this.mapSpritesGroup);
        GroupManagement.DestroyAllChildrenAndGroup(this.mapTopSpritesGroup);
        GroupManagement.DestroyAllChildrenAndGroup(this.effectsGroup);
        GroupManagement.DestroyAllChildrenAndGroup(this.bottomEffectsGroup);
        GroupManagement.DestroyAllChildrenAndGroup(this.cloudGroup);
        this.gridSprite.destroy();
        GroupManagement.DestroyAllChildrenAndGroup(this.unitSpritesGroup);
        GroupManagement.DestroyAllChildrenAndGroup(this.flyingUnitSpritesGroup);
        GroupManagement.DestroyAllChildrenAndGroup(this.flyingUnitEffectsGroup);

        GroupManagement.DestroyAllChildrenAndGroup(this.overlayGroup);

        this.decalSprite.destroy();
        this.decalRenderTexture.destroy();
        this.bloodDecalSprite.destroy();
        this.tankHitHoleSprite.destroy();

        //this.fpsTF.destroy();

        this.pathViewer = null;
        this.pathViewerGroup = null;
        this.map = null;
        this.mapSizeX = 0;
        this.mapSizeY = 0;
        this.mapSprites = null;
        this.mapSpritesGroup = null;
        this.mapTopSpritesGroup = null;
        this.bottomEffectsGroup = null;
        this.effectsGroup = null;
        this.units = null;
        this.unitSprites = null;
        this.unitSpritesGroup = null;
        this.flyingUnitSprites = null;
        this.flyingUnitSpritesGroup = null;
        this.flyingUnitEffectsGroup = null;
        this.cloudGroup = null;
        this.cloudWindSpeed = -1.0;
        this.gridSpriteTexture = null;
        this.gridSprite = null;
        this.decalRenderTexture = null;
        this.decalSprite = null;
        this.gibs = [];
        this.bloodDecalSprite = null;
        this.tankHitHoleSprite = null;
        this.bBuildingPath = false;
        this.bPerformingTurn = false;
        this.fpsTF = null;
        this.rockets = [];
        this.rocketTrailParticles = null;
        this.rocketTrailGroup = null;
        this.bTurnIsLast = false;
        this.flagSprite = null;
        this.flagPosition = null;

        this.pauseScreenCollider = null;
        this.pausePanel = null;

        this.overlayGroup = null;
        this.menuButton = null;
        this.muteButton = null;
        this.pauseButton = null;
        this.restartButton = null;
        this.resumeButton = null;

        this.timeBar = null;
        this.timeBarGlass = null;
        this.timeBarStars = null;
        this.timeBarStripe = null;

        this.startTime = null;
        this.timeSincePaused = null;
        this.starsPresented = 3;

        this.bHasStarted = false;
        this.beforeStartTime = null;
        this.amountOfStars = 3;

        GameApplication.bPaused = false;

        this.game.tweens.removeAll();

        if (this.loseSnd)
            this.loseSnd.destroy();

        this.loseSnd = null;

        this.game.app._mainTheme.restart(null, null, 1.0, true);
    }
};
GameplayState.STD_MAP_SIZEX = 7;
GameplayState.STD_MAP_SIZEY = 9;
GameplayState.STD_CELL_SIZE = 128;
GameplayState.STD_HALF_CELL_SIZE = GameplayState.STD_CELL_SIZE / 2;
GameplayState.Paused = false;
GameplayState.TimePerLevel = 30000;
GameplayState.CurrentLevel = 1;