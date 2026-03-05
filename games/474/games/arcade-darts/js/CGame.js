function CGame() {
    var _bUpdate;
    var _bPressing;
    var _iScore;
    var _iTimePressDown;
    var _iStartXDartBoard;
    var _iNumThrow;
    var _iOffsetNumBomb;
    var _iCurContBomb;
    var _iHeightDartBoard;
    var _aDartThrown;
    var _aPowerUps;
    var _aPowerUpPosAvailable;
    var _pStartDartPos;
    var _oListenerRelease;
    var _oCurDart;

    var _oHitArea;
    var _oInterface;
    var _oAreYouSurePanel;
    var _oBoardDart;
    var _oContainerDartBoard;
    var _oContainerPowerUp;
    var _oContainerDart;
    var _oContainerGame;
    var _oContainerBg;
    var _oGameOverPanel;


    this._init = function() {
        setVolume("soundtrack", 0.5);

        _iOffsetNumBomb = Math.round(NUM_THROW / MAX_MALUS);
        this.reset();

        _oContainerGame = new createjs.Container();
        _oContainerGame.x = CANVAS_WIDTH / 2;
        _oContainerGame.regX = CANVAS_WIDTH / 2;
        s_oStage.addChild(_oContainerGame);

        this._initDartBoard();


        _oHitArea = new createjs.Shape();
        _oHitArea.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oContainerGame.addChild(_oHitArea);

        _oInterface = new CInterface();


        _oAreYouSurePanel = new CAreYouSurePanel(s_oStage);
        _oAreYouSurePanel.addEventListener(ON_BUT_YES_DOWN, this.onConfirmExit, this);

        _oGameOverPanel = new CEndPanel();
        _oGameOverPanel.addEventListener(ON_BACK_MENU, this.onConfirmExit, this);
        _oGameOverPanel.addEventListener(ON_RESTART, this._restartGame, this);

        this.refreshButtonPos();

        this._resetHitArea();

        _bUpdate = false;
    };


    this.unload = function() {
        _oInterface.unload();

        _oGameOverPanel.unload();

        _oHitArea.off('mousedown', _oListenerRelease);

        s_oGame = null;
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
    };

    this.reset = function() {
        _bPressing = false;
        _iScore = 0;
        _iCurContBomb = 0;
        _iNumThrow = NUM_THROW;
        _aDartThrown = new Array();

        if (_oInterface) {
            _oInterface.reset();
        }
    };

    this.refreshButtonPos = function() {
        _oContainerDartBoard.y = s_iOffsetY + 20;
        this.refreshGridScale();


        _oInterface.refreshButtonPos();
    };


    this.refreshGridScale = function() {
        var iGUIHeight = 100;
        var iMaxGridSizeHeight = (CANVAS_HEIGHT - (s_iOffsetY * 2)) - iGUIHeight;

        CUR_GRID_SCALE = iMaxGridSizeHeight / _iHeightDartBoard;
        CUR_GRID_SCALE = parseFloat(CUR_GRID_SCALE.toFixed(2));
        _oContainerDartBoard.scaleX = _oContainerDartBoard.scaleY = CUR_GRID_SCALE;

        _oContainerBg.regX = (CANVAS_WIDTH / 2);
        _oContainerBg.x = (CANVAS_WIDTH / 2);
        _oContainerBg.regY = CANVAS_HEIGHT / 2;
        _oContainerBg.y = CANVAS_HEIGHT / 2;

        _oContainerBg.scaleX = _oContainerBg.scaleY = 1 / CUR_GRID_SCALE;

        _oContainerBg.scaleX = _oContainerBg.scaleY *= 1.5;
    };

    this._initBg = function() {
        _oContainerBg = new createjs.Container();
        _oContainerDartBoard.addChild(_oContainerBg);


        var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        _oContainerBg.addChild(oBg);
    };

    this._initDartBoard = function() {
        _oContainerDartBoard = new createjs.Container();
        _oContainerGame.addChild(_oContainerDartBoard);

        this._initBg();

        var oSpriteBoard = s_oSpriteLibrary.getSprite("dartboard");
        _oBoardDart = new CDartBoard(_oContainerBg.getBounds().width / 2, oSpriteBoard.height / 2, oSpriteBoard, _oContainerDartBoard)

        _oContainerPowerUp = new createjs.Container();
        _oContainerDartBoard.addChild(_oContainerPowerUp);

        this._initPowerUp();

        _oContainerDart = new createjs.Container();
        _oContainerDartBoard.addChild(_oContainerDart);

        _pStartDartPos = {
            x: _oContainerBg.getBounds().width / 2,
            y: oSpriteBoard.height + 100 + DART_HEIGHT
        };

        this._createDart();



        _iHeightDartBoard = _pStartDartPos.y;
        _oContainerDartBoard.regX = _oContainerDartBoard.getBounds().width / 2;

        _oContainerDartBoard.x = _iStartXDartBoard = CANVAS_WIDTH / 2;
    };

    this._initPowerUp = function() {
        //INIT POWERUPS
        _aPowerUps = new Array();

        _aPowerUpPosAvailable = new Array();
        for (var k = 0; k < POWERUP_POS.length; k++) {
            _aPowerUpPosAvailable[k] = POWERUP_POS[k];
        }

        _aPowerUpPosAvailable = shuffle(_aPowerUpPosAvailable);

        var oData = {
            images: [s_oSpriteLibrary.getSprite("power_up_0")],
            framerate: 1,
            // width, height & registration point of each sprite
            frames: {
                width: POWERUP_INFO[0].width,
                height: POWERUP_INFO[0].height,
                regX: POWERUP_INFO[0].regX,
                regY: POWERUP_INFO[0].regY
            },
            animations: {
                start: 0,
                anim: [0, 1],
                explode: [2, 14, "hide"],
                hide: 15
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);

        var pPos = _aPowerUpPosAvailable.pop();
        var oPowerUp = new CPowerUp(pPos.x, pPos.y, 0, "X" + NUM_BONUS_THROW, oSpriteSheet, _oContainerPowerUp);
        _aPowerUps.push(oPowerUp);


        var oData = {
            images: [s_oSpriteLibrary.getSprite("power_up_1")],
            framerate: 1,
            // width, height & registration point of each sprite
            frames: {
                width: POWERUP_INFO[1].width,
                height: POWERUP_INFO[1].height,
                regX: POWERUP_INFO[1].regX,
                regY: POWERUP_INFO[1].regY
            },
            animations: {
                start: 0,
                anim: [0, 1],
                explode: [2, 14, "hide"],
                hide: 15
            }
        };

        var oSpriteSheet = new createjs.SpriteSheet(oData);

        var pPos = _aPowerUpPosAvailable.pop();
        var oPowerUp = new CPowerUp(pPos.x, pPos.y, 1, "+" + BONUS_EXTRA_POINT, oSpriteSheet, _oContainerPowerUp);
        _aPowerUps.push(oPowerUp);
    };

    this._restartGame = function() {
        this.reset();

        //REMOVE ALL DARTS AND POWER UPS
        _oContainerDart.removeAllChildren();
        for (var i = 0; i < _aPowerUps.length; i++) {
            _aPowerUps[i].unload();
        }

        _aPowerUps = new Array();

        this._createDart();

        this._initPowerUp();

        _oInterface.resetNumThrow();
        _oInterface.refreshScore(_iScore);

        this._resetHitArea();
    };

    this._createDart = function() {
        var iRand = Math.floor(Math.random() * 3);
        var oDart = new CDart(_pStartDartPos.x, _pStartDartPos.y, iRand, {
            x: _oBoardDart.getX(),
            y: _oBoardDart.getY()
        }, _oContainerDart);

        _aDartThrown.push(oDart);

        _oCurDart = oDart;
    };

    this._resetHitArea = function() {
        _oListenerRelease = _oHitArea.on('mousedown', this.onMouseDown);
    };

    this.onMouseDown = function(e) {
        _oInterface.handleClick();
    };


    this.launch = function(iXToken, iYToken) {
        _oHitArea.off('mousedown', _oListenerRelease);
        trace("iXToken " + iXToken);
        trace("iYToken " + iYToken);
        //iXToken = 363;
        //iYToken = 203;
        var iOffsetX = (iXToken / (BAR_X_WIDTH / 2)) - 1;

        var iNewX = CANVAS_WIDTH / 2 + (CANVAS_WIDTH / 2) * -iOffsetX;
        trace("iNewX " + iNewX)


        var iOffsetY = (iYToken / (BAR_Y_HEIGHT / 2)) - 1


        _oCurDart.startAnim(iOffsetX, iOffsetY);
        trace("iOffsetX: " + iOffsetX);
        trace("iOffsetY " + iOffsetY)
        var iNewY = _oContainerDartBoard.y * CUR_GRID_SCALE + (CANVAS_HEIGHT / 2 - _oCurDart.getNewY());

        createjs.Tween.get(_oContainerDartBoard).to({
            y: iNewY + 200
        }, 500, createjs.Ease.cubicOut).to({
            y: iNewY
        }, 500, createjs.Ease.sineIn);
        createjs.Tween.get(_oContainerDartBoard).to({
            x: iNewX
        }, 1500, createjs.Ease.cubicOut);

        createjs.Tween.get(_oContainerDartBoard).to({
            scaleX: 1,
            scaleY: 1
        }, 1500, createjs.Ease.cubicOut);

        s_oGame.decreaseNumThrow();

        playSound("launch", 1, false);
    };

    var sortFunction = function(obj1, obj2, options) {
        if (obj1.y > obj2.y) {
            return -1;
        }
        if (obj1.y < obj2.y) {
            return 1;
        }
        return 0;
    };


    this._endThrow = function() {
        _oContainerDart.sortChildren(sortFunction);

        if (this._checkDistFromPowerUps() === false) {
            this._calculateDistanceFromDartBoard();
        }

        createjs.Tween.get(_oContainerDartBoard).wait(1000).to({
            scaleX: CUR_GRID_SCALE,
            scaleY: CUR_GRID_SCALE,
            x: _iStartXDartBoard,
            y: s_iOffsetY + 20
        }, 1000, createjs.Ease.cubicInOut).call(function() {
            s_oGame._resetShot();
        });
    };

    this._calculateDistanceFromDartBoard = function() {
        var iDist = distanceV2(_oCurDart.getPos(), {
            x: _oBoardDart.getX(),
            y: _oBoardDart.getY()
        });

        var iAmount = 0;
        var iId = 0;
        for (var i = 0; i < POINTS_DARTBOARD.length; i++) {
            if (iDist < RADIUS_SPHERE_BOARD / 2 + (RADIUS_SPHERE_BOARD * i)) {
                iId = POINTS_DARTBOARD.length - i - 1;
                iAmount = POINTS_DARTBOARD[iId];
                _oBoardDart.highlight(iId);
                break;
            }
        }


        if (iAmount > 0) {
            if (iAmount === POINTS_DARTBOARD[POINTS_DARTBOARD.length - 1]) {
                playSound("perfect", 1, false);
            } else {
                playSound("hit", 1, false);
            }

            this.changeScore(iAmount);

            new CScoreText(iAmount, _oCurDart.getPos().x, _oCurDart.getPos().y, STROKE_COLORS[iId], _oContainerDartBoard);


        } else {
            playSound("miss", 1, false);
        }
    };

    this._checkDistFromPowerUps = function() {
        for (var k = 0; k < _aPowerUps.length; k++) {
            var oPowerUp = _aPowerUps[k];
            var iDist = distanceV2(_oCurDart.getPos(), {
                x: oPowerUp.getX(),
                y: oPowerUp.getY()
            });

            var iRadius = POWERUP_INFO[oPowerUp.getType()].logic_radius;

            if (iDist <= iRadius) {
                //COLLECT POWERUP
                switch (oPowerUp.getType()) {
                    case 0:
                        {
                            //GAIN EXTRA THROW
                            _iNumThrow += NUM_BONUS_THROW;
                            _oInterface.addThrows(_iNumThrow);
                            break;
                        }
                    case 1:
                        {
                            this.changeScore(BONUS_EXTRA_POINT);
                            break;
                        }
                    case MALUS_ID:
                        {
                            this._tremble();
                            _iScore -= MALUS_SCORE;
                            if (_iScore < 0) {
                                _iScore = 0;
                            }
                            _oInterface.refreshScore(_iScore);
                            break;
                        }
                }

                oPowerUp.explode();
                _aPowerUps.splice(k, 1);
                return true;
            }
        }

        return false;

    };

    this.changeScore = function(iAmount) {
        _iScore += iAmount;

        if (_iScore > s_iBestScore) {
            s_iBestScore = _iScore;

            _oInterface.refreshBestScore();
        }

        _oInterface.refreshScore(_iScore);
    };

    this._resetShot = function() {
        if (_iNumThrow === 0) {
            this.gameOver();
        } else {
            if (_iCurContBomb === _iOffsetNumBomb) {
                //ADD A MALUS

                _iCurContBomb = 0;

                var oData = {
                    images: [s_oSpriteLibrary.getSprite("power_up_2")],
                    framerate: 15,
                    // width, height & registration point of each sprite
                    frames: {
                        width: POWERUP_INFO[2].width,
                        height: POWERUP_INFO[2].height,
                        regX: POWERUP_INFO[2].regX,
                        regY: POWERUP_INFO[2].regY
                    },
                    animations: {
                        start: 0,
                        anim: [0, 17],
                        explode: [18, 28, "hide"],
                        hide: 29
                    }
                };

                var oSpriteSheet = new createjs.SpriteSheet(oData);

                do {
                    var pPos = _aPowerUpPosAvailable.pop();

                } while (this._checkDistBetweenMalusAndDarts(pPos) === false);

                var oPowerUp = new CPowerUp(pPos.x, pPos.y, MALUS_ID, "", oSpriteSheet, _oContainerPowerUp);
                _aPowerUps.push(oPowerUp);
            }

            this._createDart();

            this._resetHitArea();
            _oInterface.showIndicator();

            _bUpdate = false;
        }

    };

    this._checkDistBetweenMalusAndDarts = function(pPos) {
        for (var i = 0; i < _aDartThrown.length; i++) {
            var iDist = distanceV2(_aDartThrown[i].getPos(), pPos);
            if (iDist < POWERUP_INFO[MALUS_ID].width) {
                return false;
            }
        }

        return true;
    };

    this.decreaseNumThrow = function() {
        _iNumThrow--;

        _oInterface.refreshNumThrow(_iNumThrow);

        _iCurContBomb++;
    };

    this._tremble = function() {
        var xShifting = 10;
        var yShifting = 30;

        createjs.Tween.get(s_oStage).to({
            x: Math.round(Math.random() * xShifting),
            y: Math.round(Math.random() * yShifting)
        }, 50).call(function() {
            createjs.Tween.get(s_oStage).to({
                x: Math.round(Math.random() * xShifting * 0.8),
                y: -Math.round(Math.random() * yShifting * 0.8)
            }, 50).call(function() {
                createjs.Tween.get(s_oStage).to({
                    y: 0,
                    x: 0
                }, 50);
            });
        });
    };

    this.onExit = function() {
        _oAreYouSurePanel.show(TEXT_ARE_YOU_SURE, 90);
    };

    this.onConfirmExit = function() {
        this.unload();

        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");

        s_oMain.gotoMenu();
    };

    this.gameOver = function() {

        _oGameOverPanel.show(_iScore);
        saveItem(PREFIX_STORAGE + "_best_score", s_iBestScore);
        console.log(123);
        QuickAds.showAfg();
        $(s_oMain).trigger("save_score", _iScore);
        $(s_oMain).trigger("share_event", _iScore);

    };

    this.update = function() {

    };

    s_oGame = this;

    this._init();
}

var s_oGame = null;