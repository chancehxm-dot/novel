function CInterface(iLevel) {
    var _oAudioToggle;
    var _pStartPosPause;
    var _pStartPosAudio;
    var _pStartPosExit;
    var _bStoppedTime;
    var _oTransBg;
    var _oHelpBg;
    var _oHelpGreenText;
    var _oHelpYellowText;
    var _aAliensInfo;
    var _aAliensInfoText;
    var _aBonusInfo;
    var _oButNext;
    var _oHelmet;
    var _oBgUp;
    var _oBgDown;
    var _oPointText;
    var _oScoreText;
    var _oBonusEvilHordeToggle;
    var _oBonusAstronautsAssault;
    var _oBonusPigMode;
    var _oBonusExtraSpeed;
    var _oTimeBarBg;
    var _oTimeBar;
    var _oTimeMask;
    var _oInfoText;
    var _iTimeBarWidth;
    var _iTimeBarHeight;
    var _oTimeText;
    var _oLifeBarBg;
    var _oLifeBar;
    var _oLifeMask;
    var _iLifeBarWidth;
    var _iLifeBarHeight;
    var _oWaveText;
    var _oLifeText;
    var _oButPause;
    var _oButExit;
    var _oPauseText;
    var _oButContinue;
    var _oGoodHitText;
    var _oPercHitText;
    var _oScore;
    var _oHelp2Container;
    var _oCongratContainer;
    var _pLifeContPos = {};
    var _oLifeContainer;
    var _iWaveAds;

    this._init = function() {
        var oPauseX;

        _bStoppedTime = false;

        _aAliensInfo = new Array();
        _aAliensInfoText = new Array();

        _aBonusInfo = new Array();

        _iWaveAds = 0;

        var oSpriteGui = s_oSpriteLibrary.getSprite("gui_panel");
        _oBgUp = createBitmap(oSpriteGui);
        _oBgUp.x = oSpriteGui.width;
        _oBgUp.y = oSpriteGui.height;
        _oBgUp.rotation = 180;
        _oBgUp.on("click", function() {});

        s_oStage.addChild(_oBgUp);

        var oSpriteGui = s_oSpriteLibrary.getSprite("gui_panel");
        _oBgDown = createBitmap(oSpriteGui);
        _oBgDown.x = 0;
        _oBgDown.y = CANVAS_HEIGHT - oSpriteGui.height;

        s_oStage.addChild(_oBgDown);
        _oBgDown.on("click", function() {});

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('icon_audio');
            oPauseX = CANVAS_WIDTH - (oSprite.width / 2) - 100;
            _pStartPosAudio = {
                x: oPauseX + 45,
                y: oSprite.height
            };
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        var oSpritePause = s_oSpriteLibrary.getSprite('but_pause');
        oPauseX = CANVAS_WIDTH - (oSpritePause.width / 2) - 100;
        _pStartPosPause = {
            x: oPauseX + 85,
            y: oSpritePause.height
        };
        _oButPause = new CGfxButton(_pStartPosPause.x, _pStartPosPause.y, oSpritePause);
        _oButPause.addEventListener(ON_MOUSE_UP, this._onButPauseRelease, this);

        var oSpriteExit = s_oSpriteLibrary.getSprite('but_exit');
        oPauseX = CANVAS_WIDTH - (oSpriteExit.width / 2) - 100;
        _pStartPosExit = {
            x: oPauseX - 50,
            y: oSpriteExit.height
        };
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSpriteExit);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        _oButPause.block(true);
        _oButExit.block(true);

        var oSpriteTimeBarBg = s_oSpriteLibrary.getSprite('time_bar_box');
        _oTimeBarBg = createBitmap(oSpriteTimeBarBg);
        _oTimeBarBg.x = (CANVAS_WIDTH / 2 - 100) - (oSpriteTimeBarBg.width / 2) / 1.5;
        _oTimeBarBg.y = CANVAS_HEIGHT / 2 - 367;
        _oTimeBarBg.scaleX = 0.6;
        _oTimeBarBg.scaleY = 0.6;
        s_oStage.addChild(_oTimeBarBg);

        var oSpriteLifeBarBg = s_oSpriteLibrary.getSprite('life_bar_box');
        _oLifeBarBg = createBitmap(oSpriteLifeBarBg);
        _oLifeBarBg.x = -(oSpriteLifeBarBg.width / 2) - 38;
        _oLifeBarBg.y = -3;

        //GAME INTERFACE
        _oInfoText = new createjs.Text(TEXT_TIME + "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + TEXT_BONUS, "bold " + 36 + "px " + PRIMARY_FONT, "#d4d503");
        _oInfoText.x = CANVAS_WIDTH / 2 + 20;
        _oInfoText.y = CANVAS_HEIGHT / 2 - 385;
        _oInfoText.textAlign = "center";
        _oInfoText.textBaseline = "alphabetic";
        s_oStage.addChild(_oInfoText);

        _oScoreText = new createjs.Text(TEXT_SCORE, "bold " + 36 + "px " + PRIMARY_FONT, "#d4d503");
        _oScoreText.x = CANVAS_WIDTH / 2 - 190;
        _oScoreText.y = CANVAS_HEIGHT / 2 + 400;
        _oScoreText.textAlign = "center";
        _oScoreText.textBaseline = "alphabetic";
        s_oStage.addChild(_oScoreText);

        _oPointText = new createjs.Text("0", "bold " + 36 + "px " + PRIMARY_FONT, "#ffffff");
        _oPointText.x = CANVAS_WIDTH / 2 - 120;
        _oPointText.y = CANVAS_HEIGHT / 2 + 400;
        _oPointText.textAlign = "left";
        _oPointText.textBaseline = "alphabetic";
        s_oStage.addChild(_oPointText);

        var oSpriteToggle = s_oSpriteLibrary.getSprite("icon_evil_horde");
        var oData = {
            images: [oSpriteToggle],
            // width, height & registration point of each sprite
            frames: {
                width: oSpriteToggle.width / 2,
                height: oSpriteToggle.height,
                regX: (oSpriteToggle.width / 2) / 2,
                regY: oSpriteToggle.height / 2
            },
            animations: {
                state_false: 0,
                state_true: 1
            }
        };
        var pBonusPosition = {
            x: 50,
            y: 345
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oBonusEvilHordeToggle = createSprite(oSpriteSheet, "state_false", (oSpriteToggle.width / 2) / 2, oSpriteToggle.height / 2, oSpriteToggle.width / 2, oSpriteToggle.height);
        _oBonusEvilHordeToggle.x = CANVAS_WIDTH / 2 + pBonusPosition.x;
        _oBonusEvilHordeToggle.y = CANVAS_HEIGHT / 2 - pBonusPosition.y;
        s_oStage.addChild(_oBonusEvilHordeToggle);

        oSpriteToggle = s_oSpriteLibrary.getSprite("icon_astronaut_assault");
        var oData = {
            images: [oSpriteToggle],
            // width, height & registration point of each sprite
            frames: {
                width: oSpriteToggle.width / 2,
                height: oSpriteToggle.height,
                regX: (oSpriteToggle.width / 2) / 2,
                regY: oSpriteToggle.height / 2
            },
            animations: {
                state_false: 0,
                state_true: 1
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oBonusAstronautsAssault = createSprite(oSpriteSheet, "state_false", (oSpriteToggle.width / 2) / 2, oSpriteToggle.height / 2, oSpriteToggle.width / 2, oSpriteToggle.height);
        _oBonusAstronautsAssault.x = CANVAS_WIDTH / 2 + pBonusPosition.x + 50;
        _oBonusAstronautsAssault.y = CANVAS_HEIGHT / 2 - pBonusPosition.y;
        s_oStage.addChild(_oBonusAstronautsAssault);

        oSpriteToggle = s_oSpriteLibrary.getSprite("icon_pig_mode");
        var oData = {
            images: [oSpriteToggle],
            // width, height & registration point of each sprite
            frames: {
                width: oSpriteToggle.width / 2,
                height: oSpriteToggle.height,
                regX: (oSpriteToggle.width / 2) / 2,
                regY: oSpriteToggle.height / 2
            },
            animations: {
                state_false: 0,
                state_true: 1
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oBonusPigMode = createSprite(oSpriteSheet, "state_false", (oSpriteToggle.width / 2) / 2, oSpriteToggle.height / 2, oSpriteToggle.width / 2, oSpriteToggle.height);
        _oBonusPigMode.x = CANVAS_WIDTH / 2 + pBonusPosition.x + 100;
        _oBonusPigMode.y = CANVAS_HEIGHT / 2 - pBonusPosition.y;
        s_oStage.addChild(_oBonusPigMode);

        oSpriteToggle = s_oSpriteLibrary.getSprite("icon_extra_speed");
        var oData = {
            images: [oSpriteToggle],
            // width, height & registration point of each sprite
            frames: {
                width: oSpriteToggle.width / 2,
                height: oSpriteToggle.height,
                regX: (oSpriteToggle.width / 2) / 2,
                regY: oSpriteToggle.height / 2
            },
            animations: {
                state_false: 0,
                state_true: 1
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oBonusExtraSpeed = createSprite(oSpriteSheet, "state_false", (oSpriteToggle.width / 2) / 2, oSpriteToggle.height / 2, oSpriteToggle.width / 2, oSpriteToggle.height);
        _oBonusExtraSpeed.x = CANVAS_WIDTH / 2 + pBonusPosition.x + 150;
        _oBonusExtraSpeed.y = CANVAS_HEIGHT / 2 - pBonusPosition.y;
        s_oStage.addChild(_oBonusExtraSpeed);

        var oSpriteTimeBar = s_oSpriteLibrary.getSprite('time_bar_fill');
        _oTimeBar = createBitmap(oSpriteTimeBar);
        _oTimeBar.x = (CANVAS_WIDTH / 2 - 100) - (oSpriteTimeBar.width / 2) / 1.5;
        _oTimeBar.y = CANVAS_HEIGHT / 2 - 365;
        _oTimeBar.scaleX = 0.6;
        _oTimeBar.scaleY = 0.6;
        s_oStage.addChild(_oTimeBar);

        _iTimeBarHeight = oSpriteTimeBar.height;
        _iTimeBarWidth = oSpriteTimeBar.width / 1 - 5;

        _oTimeMask = new createjs.Shape();
        _oTimeMask.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(_oTimeBar.x, _oTimeBar.y, _iTimeBarWidth, _iTimeBarHeight);
        _oTimeBar.mask = _oTimeMask;

        _oTimeText = new createjs.Text(TIME_FINISH_GAME, "bold " + 32 + "px " + PRIMARY_FONT, "#ff0000");
        _oTimeText.textAlign = "center";
        _oTimeText.textBaseline = "alphabetic";
        _oTimeText.x = CANVAS_WIDTH / 2 - 110;
        _oTimeText.y = CANVAS_HEIGHT / 2 - 315;
        s_oStage.addChild(_oTimeText);

        var oSpriteLifeBar = s_oSpriteLibrary.getSprite('life_bar_fill');
        _oLifeBar = createBitmap(oSpriteLifeBar);
        _oLifeBar.x = -(oSpriteLifeBar.width / 2) - 40;

        _iLifeBarHeight = oSpriteLifeBar.height;
        _iLifeBarWidth = oSpriteLifeBar.width;

        _oLifeMask = new createjs.Shape();
        _oLifeMask.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(_oLifeBar.x, _oLifeBar.y, _iLifeBarWidth, _iLifeBarHeight);
        _oLifeBar.mask = _oLifeMask;

        _oLifeText = new createjs.Text(TEXT_LIFE, "bold " + 32 + "px " + PRIMARY_FONT, "#d4d503");
        _oLifeText.y = 17;
        _oLifeText.x = -270;
        _oLifeText.textAlign = "center";
        _oLifeText.textBaseline = "alphabetic";

        _pLifeContPos = {
            x: CANVAS_WIDTH / 2 + 70,
            y: CANVAS_HEIGHT / 2 + 330
        };

        _oLifeContainer = new createjs.Container();
        _oLifeContainer.x = _pLifeContPos.x;
        _oLifeContainer.y = _pLifeContPos.y;

        _oLifeContainer.addChild(_oLifeText, _oLifeBarBg, _oLifeBar);
        s_oStage.addChild(_oLifeContainer);

        _oWaveText = new createjs.Text(TEXT_WAVE + " " + iLevel, "bold " + 36 + "px " + PRIMARY_FONT, "#d4d503");
        _oWaveText.x = CANVAS_WIDTH / 2;
        _oWaveText.y = CANVAS_HEIGHT / 2 - 420;
        _oWaveText.textAlign = "center";
        _oWaveText.textBaseline = "alphabetic";
        s_oStage.addChild(_oWaveText);

        _oTransBg = new createjs.Shape();
        _oTransBg.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oTransBg.alpha = 0.5;
        _oTransBg.visible = false;
        s_oStage.addChild(_oTransBg);

        var oSprite = s_oSpriteLibrary.getSprite('sitelogo');
        _ositelogo = new CTextButton((CANVAS_WIDTH / 2), CANVAS_HEIGHT - 50, oSprite, ' ', "blackplotan", "#ffffff", 130);
        _ositelogo.addEventListener(ON_MOUSE_UP, this._onSiteLogoRelease, this);
    };

    this.refreshButtonPos = function(iNewX, iNewY) {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, _pStartPosAudio.y - iNewY);
        }
        _oButPause.setPosition(_pStartPosPause.x - iNewX, _pStartPosPause.y - iNewY);
        _oButExit.setPosition(_pStartPosExit.x - iNewX, _pStartPosExit.y - iNewY)
    };

    this._onButPauseRelease = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            createjs.Sound.play("click");
        }
        s_oGame.setPause(true);

        _oTransBg.visible = true;

        _oPauseText = new createjs.Text(TEXT_PAUSE, "bold " + 48 + "px " + PRIMARY_FONT, "#ffffff");
        _oPauseText.textAlign = "center";
        _oPauseText.textBaseline = "alphabetic";
        _oPauseText.x = CANVAS_WIDTH / 2;
        _oPauseText.y = CANVAS_HEIGHT / 2 - 250;
        s_oStage.addChild(_oPauseText);

        _oButPause.block(true);
        _oButExit.block(true);

        createjs.Ticker.paused = true;

        var oSpriteContinue = s_oSpriteLibrary.getSprite('but_continue');
        _oButContinue = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, oSpriteContinue);
        _oButContinue.addEventListener(ON_MOUSE_UP, this._onButContinueRelease, this);

    };

    this._onButContinueRelease = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            createjs.Sound.play("click");
        }
        _oTransBg.visible = false;

        _oButContinue.unload();
        _oButContinue = null;

        s_oStage.removeChild(_oPauseText);
        _oPauseText = null;

        _oButPause.block(false);
        _oButExit.block(false);

        createjs.Ticker.paused = false;

        s_oGame.setPause(false);
    };

    this.refreshBonusToggleAssault = function(bVal) {
        _oBonusAstronautsAssault.gotoAndStop("state_" + bVal);
    };

    this.refreshBonusToggleSpeedDown = function(bVal) {
        _oBonusExtraSpeed.gotoAndStop("state_" + bVal);
    };

    this.refreshBonusToggleEvilHorde = function(bVal) {
        _oBonusEvilHordeToggle.gotoAndStop("state_" + bVal);
    };

    this.refreshBonusTogglePigMode = function(bVal) {
        _oBonusPigMode.gotoAndStop("state_" + bVal);
    };

    this.refreshScore = function(iScore) {
        _oPointText.text = iScore;
    };

    this.refreshMissionNumber = function(iLevel) {
        _oWaveText.text = "WAVE " + iLevel;
    };

    this.refreshTime = function(iTime) {
        _oTimeText.text = Math.round(iTime);;
        _oTimeMask.graphics.clear();
        var iNewMaskWidth = Math.floor((iTime * _iTimeBarWidth) / 100);
        _oTimeMask.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(_oTimeBar.x, _oTimeBar.y, iNewMaskWidth, _iTimeBarHeight);
    };

    this.refreshLifeBar = function(iLife) {
        _oLifeMask.graphics.clear();
        var iNewMaskWidth = Math.floor((iLife * _iLifeBarWidth) / 100);
        _oLifeMask.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(_oLifeBar.x, _oLifeBar.y, iNewMaskWidth, _iLifeBarHeight);
    };

    this.help = function(aSprite, aSpriteBonus) {

        var oSpriteHelpBg = s_oSpriteLibrary.getSprite('help_bg');
        _oHelpBg = createBitmap(oSpriteHelpBg);
        _oHelpBg.on("click", function() {
            //DO NOTHING
        });
        s_oStage.addChild(_oHelpBg);

        _oHelpGreenText = new createjs.Text(TEXT_HELP1 + "\n" + TEXT_HELP2 + "\n\n\n\n\n\n\n\n\n\n\n\n" + TEXT_HELP3 + "\n" + TEXT_HELP4, "bold " + 36 + "px " + PRIMARY_FONT, "#99cc00");
        _oHelpGreenText.textAlign = "center";
        _oHelpGreenText.textBaseline = "alphabetic";
        _oHelpGreenText.x = CANVAS_WIDTH / 2;
        _oHelpGreenText.y = CANVAS_HEIGHT / 2 - 390;
        s_oStage.addChild(_oHelpGreenText);

        _oHelpYellowText = new createjs.Text(TEXT_HELP5 + "              " + TEXT_HELP6, "bold " + 36 + "px " + PRIMARY_FONT, "#d4d503");
        _oHelpYellowText.textAlign = "center";
        _oHelpYellowText.textBaseline = "alphabetic";
        _oHelpYellowText.x = CANVAS_WIDTH / 2;
        _oHelpYellowText.y = CANVAS_HEIGHT / 2 + 180;
        s_oStage.addChild(_oHelpYellowText);

        var iPoint = 0;
        var iStep = 0;

        var oData;

        for (var i = 0; i < aSprite.length - 4; i++) {
            oData = {
                images: [aSprite[i]],
                // width, height & registration point of each sprite
                frames: {
                    width: aSprite[i].width / 4,
                    height: aSprite[i].height,
                    regX: (aSprite[i].width / 2) / 2,
                    regY: aSprite[i].height / 2
                },
                animations: {
                    normal: [0, 1, "normal", 0.2],
                    pig: [2, 3, "pig", 0.2]
                }
            };
            var oSpriteSheet = new createjs.SpriteSheet(oData);
            var oCreatedSprite;
            var oCreatedText;
            _aAliensInfo[i] = new createjs.Container();
            oCreatedSprite = createSprite(oSpriteSheet, "normal", (aSprite[i].width / 2) / 2, aSprite[i].height / 2, aSprite[i].width / 2, aSprite[i].height);
            _aAliensInfo[i].regX = (oCreatedSprite.width / 2) / 2;
            _aAliensInfo[i].regY = (oCreatedSprite.height / 2);
            oCreatedText = new createjs.Text("+" + ALIENS_SETTINGS[i][0], "bold " + 32 + "px " + PRIMARY_FONT, "#ffcc00");
            oCreatedText.y = 40;
            oCreatedText.x = -70;

            if (i === 4) {
                iStep = 0;
            }

            _aAliensInfo[i].x = CANVAS_WIDTH / 2 - 100 + (100 * iStep);

            if (i < 4) {
                _aAliensInfo[i].y = CANVAS_HEIGHT / 2 - 310;
            } else {
                _aAliensInfo[i].y = CANVAS_HEIGHT / 2 - 180;

            }
            iStep++;
            _aAliensInfo[i].addChild(oCreatedSprite, oCreatedText);
            s_oStage.addChild(_aAliensInfo[i]);
            iPoint++;
        }
        //HELMET ON ALIEN 7
        var oSpriteHelmet = s_oSpriteLibrary.getSprite('helmet');

        _oHelmet = createBitmap(oSpriteHelmet);
        _oHelmet.regX = oSpriteHelmet.width / 2;
        _oHelmet.regY = oSpriteHelmet.height / 2;
        _oHelmet.x = CANVAS_WIDTH / 2 + 160;
        _oHelmet.y = CANVAS_HEIGHT / 2 - 200;
        s_oStage.addChild(_oHelmet);
        //ALIEN BONUS
        oData = {
            images: [aSprite[iPoint]],
            // width, height & registration point of each sprite
            frames: {
                width: aSprite[iPoint].width / 4,
                height: aSprite[iPoint].height,
                regX: (aSprite[iPoint].width / 2) / 2,
                regY: aSprite[iPoint].height / 2
            },
            animations: {
                normal: [0, 1, "normal", 0.2],
                pig: [2, 3, "pig", 0.2]
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        var oCreatedSprite;
        _aAliensInfo[iPoint] = new createjs.Container();
        oCreatedSprite = createSprite(oSpriteSheet, "normal", (aSprite[iPoint].width / 2) / 2, aSprite[iPoint].height / 2, aSprite[iPoint].width / 2, aSprite[iPoint].height);
        _aAliensInfo[iPoint].regX = (oCreatedSprite.width / 2) / 2;
        _aAliensInfo[iPoint].regY = (oCreatedSprite.height / 2);
        _aAliensInfo[iPoint].x = CANVAS_WIDTH / 2 + 25;
        _aAliensInfo[iPoint].y = CANVAS_HEIGHT / 2 + 160;
        _aAliensInfo[iPoint].addChild(oCreatedSprite);
        s_oStage.addChild(_aAliensInfo[iPoint]);
        iPoint++;

        //ASTRONAUTS
        iStep = 0;
        for (var i = iPoint; i < aSprite.length; i++) {
            oData = {
                images: [aSprite[i]],
                // width, height & registration point of each sprite
                frames: {
                    width: aSprite[i].width / 2,
                    height: aSprite[i].height,
                    regX: (aSprite[i].width / 2) / 2,
                    regY: aSprite[i].height / 2
                },
                animations: {
                    normal: [0, 1, "normal", 0.2]
                }
            };
            var oSpriteSheet = new createjs.SpriteSheet(oData);
            var oCreatedSprite;
            var oCreatedText;

            _aAliensInfo[i] = new createjs.Container();
            oCreatedSprite = createSprite(oSpriteSheet, "normal", (aSprite[i].width / 2) / 2, aSprite[i].height / 2, aSprite[i].width / 2, aSprite[i].height);
            _aAliensInfo[i].regX = (oCreatedSprite.width / 2) / 2;
            _aAliensInfo[i].regY = (oCreatedSprite.height / 2);
            oCreatedText = new createjs.Text("+" + ALIENS_SETTINGS[i][0], "bold " + 32 + "px " + PRIMARY_FONT, "#ffcc00");
            oCreatedText.y = 55;
            oCreatedText.x = -40;
            _aAliensInfo[i].addChild(oCreatedSprite, oCreatedText);
            _aAliensInfo[i].x = CANVAS_WIDTH / 2 - 140 + (140 * iStep);
            _aAliensInfo[i].y = CANVAS_HEIGHT / 2 + 30;
            s_oStage.addChild(_aAliensInfo[i]);
            iStep++;
        }
        //BONUS ITEM
        var j = 0;
        //BONUS 0
        var oData = {
            images: [aSpriteBonus[j]],
            // width, height & registration point of each sprite
            frames: {
                width: aSpriteBonus[j].width / 5,
                height: aSpriteBonus[j].height / 2,
                regX: (aSpriteBonus[j].width / 2) / 5,
                regY: (aSpriteBonus[j].height / 2) / 2
            },
            animations: {
                normal: [0, 9, "normal", 1]
            }
        };
        //_oButton.visible=true;
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _aBonusInfo[j] = createSprite(oSpriteSheet, "normal", (aSpriteBonus[j].width / 2) / 5, (aSpriteBonus[j].height / 2) / 2, aSpriteBonus[j].width / 5, aSpriteBonus[j].height / 2);
        _aBonusInfo[j].x = CANVAS_WIDTH / 2 - 210;
        _aBonusInfo[j].y = CANVAS_HEIGHT / 2 + 250;

        s_oStage.addChild(_aBonusInfo[j]);
        j++;
        //BONUS 1
        var oData = {
            images: [aSpriteBonus[j]],
            // width, height & registration point of each sprite
            frames: {
                width: aSpriteBonus[j].width / 8,
                height: aSpriteBonus[j].height / 2,
                regX: (aSpriteBonus[j].width / 2) / 8,
                regY: (aSpriteBonus[j].height / 2) / 2
            },
            animations: {
                normal: [0, 14, "normal", 1]
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _aBonusInfo[j] = createSprite(oSpriteSheet, "normal", (aSpriteBonus[j].width / 2) / 8, (aSpriteBonus[j].height / 2) / 2, aSpriteBonus[j].width / 8, aSpriteBonus[j].height / 2);
        //_oButton.visible=true;
        _aBonusInfo[j].x = CANVAS_WIDTH / 2 - 150;
        _aBonusInfo[j].y = CANVAS_HEIGHT / 2 + 250;
        s_oStage.addChild(_aBonusInfo[j]);
        j++;
        //BONUS 2
        var oData = {
            images: [aSpriteBonus[j]],
            // width, height & registration point of each sprite
            frames: {
                width: aSpriteBonus[j].width / 2,
                height: aSpriteBonus[j].height,
                regX: (aSpriteBonus[j].width / 2) / 2,
                regY: aSpriteBonus[j].height / 2
            },
            animations: {
                normal: [0, 1, "normal", 0.2]
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _aBonusInfo[j] = createSprite(oSpriteSheet, "normal", (aSpriteBonus[j].width / 2) / 2, aSpriteBonus[j].height / 2, aSpriteBonus[j].width / 2, aSpriteBonus[j].height);
        _aBonusInfo[j].x = CANVAS_WIDTH / 2 - 80;
        _aBonusInfo[j].y = CANVAS_HEIGHT / 2 + 250;
        s_oStage.addChild(_aBonusInfo[j]);
        j++;
        //BONUS 3
        var oData = {
            images: [aSpriteBonus[j]],
            // width, height & registration point of each sprite
            frames: {
                width: aSpriteBonus[j].width / 2,
                height: aSpriteBonus[j].height,
                regX: (aSpriteBonus[j].width / 2) / 2,
                regY: aSpriteBonus[j].height / 2
            },
            animations: {
                normal: [0, 1, "normal", 0.2]
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _aBonusInfo[j] = createSprite(oSpriteSheet, "normal", (aSpriteBonus[j].width / 2) / 2, aSpriteBonus[j].height / 2, aSpriteBonus[j].width / 2, aSpriteBonus[j].height);
        _aBonusInfo[j].x = CANVAS_WIDTH / 2 - 10;
        _aBonusInfo[j].y = CANVAS_HEIGHT / 2 + 250;
        s_oStage.addChild(_aBonusInfo[j]);
        j++;
        //BONUS 4
        var oData = {
            images: [aSpriteBonus[j]],
            // width, height & registration point of each sprite
            frames: {
                width: aSpriteBonus[j].width / 5,
                height: aSpriteBonus[j].height / 2,
                regX: (aSpriteBonus[j].width / 2) / 5,
                regY: (aSpriteBonus[j].height / 2) / 2
            },
            animations: {
                normal: [0, 9, "normal", 1]
            }
        };
        //_oButton.visible=true;
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _aBonusInfo[j] = createSprite(oSpriteSheet, "normal", (aSpriteBonus[j].width / 2) / 7, (aSpriteBonus[j].height / 2) / 2, aSpriteBonus[j].width / 7, aSpriteBonus[j].height / 2);
        _aBonusInfo[j].x = CANVAS_WIDTH / 2 + 60;
        _aBonusInfo[j].y = CANVAS_HEIGHT / 2 + 250;

        s_oStage.addChild(_aBonusInfo[j]);
        j++;
        //BONUS 5
        var oData = {
            images: [aSpriteBonus[j]],
            // width, height & registration point of each sprite
            frames: {
                width: aSpriteBonus[j].width / 7,
                height: aSpriteBonus[j].height,
                regX: (aSpriteBonus[j].width / 2) / 7,
                regY: aSpriteBonus[j].height / 2
            },
            animations: {
                normal: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1, 0]
                }
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _aBonusInfo[j] = createSprite(oSpriteSheet, "normal", (aSpriteBonus[j].width / 2) / 7, aSpriteBonus[j].height / 2, aSpriteBonus[j].width / 7, aSpriteBonus[j].height);
        //_oButton.visible=t    rue;
        _aBonusInfo[j].x = CANVAS_WIDTH / 2 + 130;
        _aBonusInfo[j].y = CANVAS_HEIGHT / 2 + 250;
        s_oStage.addChild(_aBonusInfo[j]);
        j++;
        // BONUS 6
        var oData = {
            images: [aSpriteBonus[j]],
            // width, height & registration point of each sprite
            frames: {
                width: aSpriteBonus[j].width / 2,
                height: aSpriteBonus[j].height,
                regX: (aSpriteBonus[j].width / 2) / 2,
                regY: aSpriteBonus[j].height / 2
            },
            animations: {
                normal: [0, 1, "normal", 0.2]
            }
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _aBonusInfo[j] = createSprite(oSpriteSheet, "normal", (aSpriteBonus[j].width / 2) / 2, aSpriteBonus[j].height / 2, aSpriteBonus[j].width / 2, aSpriteBonus[j].height);
        _aBonusInfo[j].x = CANVAS_WIDTH / 2 + 200;
        _aBonusInfo[j].y = CANVAS_HEIGHT / 2 + 250;
        s_oStage.addChild(_aBonusInfo[j]);

        var oSpriteNext = s_oSpriteLibrary.getSprite('but_skip');
        _oButNext = new CGfxButton(CANVAS_WIDTH / 2 + 180, CANVAS_HEIGHT / 2 + 350, oSpriteNext);
        _oButNext.addEventListener(ON_MOUSE_UP, this._onButNextRelease, this);

        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);

    };

    this._onButFinishRelease = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            createjs.Sound.play("click");
        }
        for (var i = 0; i < _aAliensInfo.length; i++) {
            s_oStage.removeChild(_aAliensInfo[i]);
            _aAliensInfo[i] = null;
        }

        _oTransBg.visible = false;

        _oButContinue.unload();
        _oButContinue = null;

        s_oStage.removeChild(_oHelpYellowText);
        _oHelpYellowText = null;

        s_oStage.removeChild(_oHelpGreenText);
        _oHelpGreenText = null;

        s_oStage.removeChild(_oHelmet);
        _oHelmet = null;

        s_oStage.removeChild(_oGoodHitText);
        _oGoodHitText = null;

        s_oStage.removeChild(_oPercHitText);
        _oPercHitText = null;

        s_oStage.removeChild(_oScore);
        _oScore = null;

        _iWaveAds++;
        if (_iWaveAds === NUM_WAVES_FOR_ADS) {
            _iWaveAds = 0;
            $(s_oMain).trigger("show_interlevel_ad");
        }

        s_oGame.nextLevel();
    };

    this.animWave = function() {

        createjs.Tween.get(_oWaveText).to({
            y: CANVAS_HEIGHT / 2,
            scaleX: 2,
            scaleY: 2
        }, 1000, createjs.Ease.bounceOut).call(function() {
            createjs.Tween.get(_oWaveText).wait(500).to({
                y: CANVAS_HEIGHT / 2 - 420,
                scaleX: 1.0,
                scaleY: 1.0
            }, 1000, createjs.Ease.circInOut).call(function() {
                s_oGame.setPause(false);
            });
        });
    };

    this.missionComplete = function(iScore, aSprite, iLv, aHitAlienNum, oPercHit) {

        _oTransBg.visible = true;

        _oHelpYellowText = new createjs.Text(TEXT_MISSION + iLv + TEXT_COMPLETED + "!!", "bold " + 36 + "px " + PRIMARY_FONT, "#d4d503");
        _oHelpYellowText.textAlign = "center";
        _oHelpYellowText.textBaseline = "alphabetic";
        _oHelpYellowText.x = CANVAS_WIDTH / 2;
        _oHelpYellowText.y = CANVAS_HEIGHT / 2 - 340;
        s_oStage.addChild(_oHelpYellowText);

        _oHelpGreenText = new createjs.Text(TEXT_ALIENS_KILLED, "bold " + 32 + "px " + PRIMARY_FONT, "#99cc00");
        _oHelpGreenText.textAlign = "center";
        _oHelpGreenText.textBaseline = "alphabetic";
        _oHelpGreenText.x = CANVAS_WIDTH / 2;
        _oHelpGreenText.y = CANVAS_HEIGHT / 2 - 300;
        s_oStage.addChild(_oHelpGreenText);

        var iStep = 0;

        var oData;

        for (var i = 0; i < aSprite.length - 4; i++) {
            oData = {
                images: [aSprite[i]],
                // width, height & registration point of each sprite
                frames: {
                    width: aSprite[i].width / 4,
                    height: aSprite[i].height,
                    regX: (aSprite[i].width / 2) / 2,
                    regY: aSprite[i].height / 2
                },
                animations: {
                    normal: [0, 1, "normal", 0.2],
                    pig: [2, 3, "pig", 0.2]
                }
            };
            var oSpriteSheet = new createjs.SpriteSheet(oData);
            var oCreatedSprite;
            var oCreatedText;
            _aAliensInfo[i] = new createjs.Container();
            oCreatedSprite = createSprite(oSpriteSheet, "normal", (aSprite[i].width / 2) / 2, aSprite[i].height / 2, aSprite[i].width / 2, aSprite[i].height);
            _aAliensInfo[i].regX = (oCreatedSprite.width / 2) / 2;
            _aAliensInfo[i].regY = (oCreatedSprite.height / 2);
            oCreatedText = new createjs.Text(aHitAlienNum[i], "bold " + 40 + "px " + PRIMARY_FONT, "#99cc00");
            oCreatedText.textAlign = "center";
            oCreatedText.textBaseline = "alphabetic";
            oCreatedText.y = 70;
            oCreatedText.x = -40;

            if (i === 4) {
                iStep = 0;
            }

            _aAliensInfo[i].x = CANVAS_WIDTH / 2 - 200 + (150 * iStep);

            if (i < 4) {
                _aAliensInfo[i].y = CANVAS_HEIGHT / 2 - 250;
            } else {
                _aAliensInfo[i].y = CANVAS_HEIGHT / 2 - 120;

            }
            iStep++;
            _aAliensInfo[i].addChild(oCreatedSprite, oCreatedText);
            s_oStage.addChild(_aAliensInfo[i]);
        }
        //HELMET ON ALIEN 7
        var oSpriteHelmet = s_oSpriteLibrary.getSprite('helmet');
        _oHelmet = createBitmap(oSpriteHelmet);
        _oHelmet.regX = oSpriteHelmet.width / 2;
        _oHelmet.regY = oSpriteHelmet.height / 2;
        _oHelmet.x = CANVAS_WIDTH / 2 + 210;
        _oHelmet.y = CANVAS_HEIGHT / 2 - 140;
        s_oStage.addChild(_oHelmet);

        var iTotalAlienHit = 0;

        for (var i = 0; i < aHitAlienNum.length; i++) {
            iTotalAlienHit += aHitAlienNum[i];
        }

        _oGoodHitText = new createjs.Text(TEXT_GOOD_HIT + "n\n" + iTotalAlienHit, 50 + "px " + PRIMARY_FONT, "#ffcc00");
        _oGoodHitText.textAlign = "center";
        _oGoodHitText.textBaseline = "alphabetic";
        _oGoodHitText.x = CANVAS_WIDTH / 2 - 100;
        _oGoodHitText.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(_oGoodHitText);

        var iPercHit;

        iPercHit = (oPercHit.good / oPercHit.tot) * 100;

        _oPercHitText = new createjs.Text(TEXT_PERCENTAGE + "\n\n" + Math.floor(iPercHit) + "%", 50 + "px " + PRIMARY_FONT, "#ffcc00");
        _oPercHitText.textAlign = "center";
        _oPercHitText.textBaseline = "alphabetic";
        _oPercHitText.x = CANVAS_WIDTH / 2 + 100;
        _oPercHitText.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(_oPercHitText);

        var oFinalScoreText;

        oFinalScoreText = new createjs.Text(TEXT_FINAL_SCORE, 50 + "px " + PRIMARY_FONT, "#d3ee10");
        oFinalScoreText.textAlign = "center";
        oFinalScoreText.textBaseline = "alphabetic";
        oFinalScoreText.y = 0;
        //s_oStage.addChild(_oScoreText);
        var oScoreText;

        oScoreText = new createjs.Text(iScore, 50 + "px " + PRIMARY_FONT, "#ffffff");
        oScoreText.textAlign = "center";
        oScoreText.textBaseline = "alphabetic";
        oScoreText.y = 50;

        _oScore = new createjs.Container();
        _oScore.x = CANVAS_WIDTH / 2;
        _oScore.y = CANVAS_HEIGHT / 2 + 150;
        _oScore.addChild(oFinalScoreText, oScoreText);
        s_oStage.addChild(_oScore);

        var oSpriteContinue = s_oSpriteLibrary.getSprite('but_continue');
        if (iLv < ALIEN_OCCURENCE_PER_LEVEL.length) {
            _oButContinue = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 300, oSpriteContinue);
            _oButContinue.addEventListener(ON_MOUSE_UP, this._onButFinishRelease, this);
        } else {
            _oButContinue = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 300, oSpriteContinue);
            _oButContinue.addEventListenerWithParams(ON_MOUSE_UP, this._onCompleteGame, this, iScore);
        }
        $(s_oMain).trigger("end_level", {
            level: iLv
        });
        $(s_oMain).trigger("save_score", {
            score: iScore
        });
    };

    this._onCompleteGame = function(iScore) {

        var oCongratText;
        var oCongratCont;
        var oCompleteText;
        var oScoreText;

        oCongratText = new createjs.Text(TEXT_CONGRATULATIONS, "bold " + 90 + "px " + PRIMARY_FONT, "#ffff00");
        oCongratText.textAlign = "center";
        oCongratText.textBaseline = "alphabetic";

        oCongratCont = new createjs.Text(TEXT_CONGRATULATIONS, "bold " + 90 + "px " + PRIMARY_FONT, "#11cfbc");
        oCongratCont.textAlign = "center";
        oCongratCont.textBaseline = "alphabetic";
        oCongratCont.outline = 1;

        oCompleteText = new createjs.Text(TEXT_COMPLETE_ROW_1 + "\n" + TEXT_COMPLETE_ROW_2, 40 + "px " + PRIMARY_FONT, "#99cc00");
        oCompleteText.textAlign = "center";
        oCompleteText.textBaseline = "alphabetic";
        oCompleteText.y = 100;

        oScoreText = new createjs.Text(TEXT_TOTAL_SCORE + "\n" + iScore, 40 + "px " + PRIMARY_FONT, "#ffffff");
        oScoreText.textAlign = "center";
        oScoreText.textBaseline = "alphabetic";
        oScoreText.y = 200;

        _oCongratContainer = new createjs.Container();
        _oCongratContainer.x = CANVAS_WIDTH / 2;
        _oCongratContainer.y = CANVAS_HEIGHT / 2 - 200;
        _oCongratContainer.addChild(oCongratText, oCongratCont, oCompleteText, oScoreText);

        s_oStage.addChild(_oCongratContainer);

        for (var i = 0; i < _aAliensInfo.length; i++) {
            s_oStage.removeChild(_aAliensInfo[i]);
            _aAliensInfo[i] = null;
        }

        _oButContinue.unload();
        _oButContinue = null;

        s_oStage.removeChild(_oHelpYellowText);
        _oHelpYellowText = null;

        s_oStage.removeChild(_oHelpGreenText);
        _oHelpGreenText = null;

        s_oStage.removeChild(_oHelmet);
        _oHelmet = null;

        s_oStage.removeChild(_oGoodHitText);
        _oGoodHitText = null;

        s_oStage.removeChild(_oPercHitText);
        _oPercHitText = null;

        s_oStage.removeChild(_oScore);
        _oScore = null;

        var oSpriteContinue = s_oSpriteLibrary.getSprite('but_restart');
        _oButContinue = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 300, oSpriteContinue);
        _oButContinue.addEventListener(ON_MOUSE_DOWN, s_oGame.onExit, this);

        $(s_oMain).trigger("share_event", {
            img: "200x200.jpg",
            title: "Congratulations!",
            msg: "You collected <strong>" + iScore + " points</strong>!<br><br>Share your score with your friends!",
            msg_share: "My score is " + iScore + " points! Can you do better?"
        });

    };

    this._onButNextRelease = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            createjs.Sound.play("click");
        }
        for (var i = 0; i < _aAliensInfo.length; i++) {
            s_oStage.removeChild(_aAliensInfo[i]);
            _aAliensInfo[i] = null;
        }

        s_oStage.removeChild(_oHelpGreenText);
        _oHelpGreenText = null;

        s_oStage.removeChild(_oHelpYellowText);
        _oHelpYellowText = null;

        s_oStage.removeChild(_oHelmet);
        _oHelmet = null;


        this.help2();
    };

    this._onButPlay = function() {
        _oButNext.unload();
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            createjs.Sound.play("click");
        }
        for (var i = 0; i < _aBonusInfo.length; i++) {
            s_oStage.removeChild(_aBonusInfo[i]);
            _aBonusInfo[i] = null;
        }

        s_oStage.removeChild(_oHelpGreenText);
        _oHelpGreenText = false;

        //s_oStage.removeChild(_oTransBg);
        createjs.Tween.get(_oHelpBg).to({
            alpha: 0
        }, 500, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(_oHelpBg);
            _oHelpBg = null;
            s_oInterface.animWave();
        });
        s_oStage.removeChild(_oHelp2Container);
        _oHelp2Container = null;

        _oButPause.block(false);
        _oButExit.block(false);
        $(s_oMain).trigger("start_level", {
            level: iLevel
        });
        //s_oGame.setPause(false);
    };

    this.help2 = function() {

        _oButNext.addEventListener(ON_MOUSE_UP, this._onButPlay, this);

        for (var i = 0; i < _aBonusInfo.length; i++) {
            _aBonusInfo[i].x = CANVAS_WIDTH / 2 - 170;
            _aBonusInfo[i].y = CANVAS_HEIGHT / 2 - 300 + (100 * i);
        }

        var oTextTime;
        var iWidthBonus = 60;

        oTextTime = new createjs.Text(TEXT_BONUS_TIME, 32 + "px " + PRIMARY_FONT, "#d4d503");
        oTextTime.textAlign = "left";
        oTextTime.textBaseline = "alphabetic";
        oTextTime.y = -290;
        oTextTime.x = iWidthBonus;

        var oTextAssault;

        oTextAssault = new createjs.Text(TEXT_BONUS_ASSAULT, 32 + "px " + PRIMARY_FONT, "#d4d503");
        oTextAssault.textAlign = "left";
        oTextAssault.textBaseline = "alphabetic";
        oTextAssault.y = -190;
        oTextAssault.x = iWidthBonus;

        var oTextBomb;

        oTextBomb = new createjs.Text(TEXT_BONUS_BOMB, 32 + "px " + PRIMARY_FONT, "#d4d503");
        oTextBomb.textAlign = "left";
        oTextBomb.textBaseline = "alphabetic";
        oTextBomb.y = -90;
        oTextBomb.x = iWidthBonus;

        var oTextSpeed;

        oTextSpeed = new createjs.Text(TEXT_BONUS_SPEED, 32 + "px " + PRIMARY_FONT, "#d4d503");
        oTextSpeed.textAlign = "left";
        oTextSpeed.textBaseline = "alphabetic";
        oTextSpeed.y = 10;
        oTextSpeed.x = iWidthBonus;

        var oTextHorde;

        oTextHorde = new createjs.Text(TEXT_BONUS_EVIL_HORDE, 32 + "px " + PRIMARY_FONT, "#d4d503");
        oTextHorde.textAlign = "left";
        oTextHorde.textBaseline = "alphabetic";
        oTextHorde.y = 110;
        oTextHorde.x = iWidthBonus;

        var oTextPig;

        oTextPig = new createjs.Text(TEXT_BONUS_PIG_1 + "\n\n" + TEXT_BONUS_PIG_2, 32 + "px " + PRIMARY_FONT, "#d4d503");
        oTextPig.textAlign = "left";
        oTextPig.textBaseline = "alphabetic";
        oTextPig.y = 190;
        oTextPig.x = iWidthBonus;

        var oTextHealth;

        oTextHealth = new createjs.Text(TEXT_BONUS_LIFE, 32 + "px " + PRIMARY_FONT, "#d4d503");
        oTextHealth.textAlign = "left";
        oTextHealth.textBaseline = "alphabetic";
        oTextHealth.y = 310;
        oTextHealth.x = iWidthBonus;

        _oHelp2Container = new createjs.Container();
        _oHelp2Container.x = CANVAS_WIDTH / 2 - 190;
        _oHelp2Container.y = CANVAS_HEIGHT / 2;
        _oHelp2Container.addChild(oTextAssault, oTextBomb, oTextHealth, oTextHorde, oTextPig, oTextSpeed, oTextTime);
        s_oStage.addChild(_oHelp2Container);
    };

    this.unload = function() {
        _oBgDown = null;
        _oBgUp = null;
        _oTransBg = null;
        _oHelpBg = null;
        _oHelpGreenText = null;
        _oHelpYellowText = null;
        _oInfoText = null;
        _oLifeBar = null;
        _oLifeBarBg = null;
        _oLifeMask = null;
        _oTimeBar = null;
        _oTimeBarBg = null;
        _oTimeMask = null;
        _oTimeText = null;
        _oScoreText = null;
        _oPointText = null;
        _oLifeContainer = null;

        _oButExit.unload();
        _oButExit = null;

        _oButPause.unload();
        _oButPause = null;

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        s_oInterface = null;

    };

    this._onExit = function() {
        s_oGame.onExit();
    };

    this._onSiteLogoRelease = function() {
        CreateLinksInGame('Zap-Aliens', 'game', 'logo');
    };

    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    s_oInterface = this;

    this._init();

    return this;
}

var s_oInterface = null;