function CInterface() {
    var _iCurState = 0;
    var _pPosEndToken;

    var _aDartSprite;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _oAudioToggle;
    var _oButFullscreen;
    var _oButExit;
    var _oDartContainer;
    var _oRollingScore;
    var _oTextScore;
    var _oBestScoreNum;
    var _oPointText;
    var _oBarX;
    var _oBarY;

    var _pStartPosExit;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    var _pStartPosDart;
    var _pStartPosScore;
    var _pStartPosBest;

    this._init = function() {
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {
            x: CANVAS_WIDTH - (oSprite.height / 2) - 10,
            y: (oSprite.height / 2) + 10
        };
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);


        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {
                x: _oButExit.getX() - oSprite.width / 2 - 10,
                y: (oSprite.height / 2) + 10
            };
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);

            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {
                x: _pStartPosAudio.x - oSprite.width / 2 - 10,
                y: (oSprite.height / 2) + 10
            };
        } else {
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {
                x: _oButExit.getX() - oSprite.width / 2 - 10,
                y: (oSprite.height / 2) + 10
            };
        }

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.enabled) {

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }

        _pStartPosScore = {
            x: 20,
            y: 70
        };
        _oTextScore = new createjs.Text(TEXT_SCORE, "70px " + FONT, "#fff");
        _oTextScore.x = _pStartPosScore.x;
        _oTextScore.y = _pStartPosScore.y;
        _oTextScore.textAlign = "left";
        _oTextScore.textBaseline = "alphabetic";
        s_oStage.addChild(_oTextScore);

        _oPointText = new createjs.Text(0, "70px " + FONT, "#fff");
        _oPointText.x = _pStartPosScore.x + 150;
        _oPointText.y = _pStartPosScore.y;
        _oPointText.textAlign = "left";
        _oPointText.textBaseline = "alphabetic";
        s_oStage.addChild(_oPointText);


        _pStartPosBest = {
            x: 20,
            y: 150
        };
        _oBestScoreNum = new createjs.Text(TEXT_BEST + " " + s_iBestScore, "50px " + FONT, "#fff");
        _oBestScoreNum.x = _pStartPosBest.x;
        _oBestScoreNum.y = _pStartPosBest.y;
        _oBestScoreNum.textAlign = "left";
        _oBestScoreNum.textBaseline = "alphabetic";
        s_oStage.addChild(_oBestScoreNum);

        var oSpriteDart = s_oSpriteLibrary.getSprite("dart_icon");
        _pStartPosDart = {
            x: 20,
            y: CANVAS_HEIGHT - oSpriteDart.height - 20
        };
        _oDartContainer = new createjs.Container();
        _oDartContainer.x = _pStartPosDart.x;
        _oDartContainer.y = _pStartPosDart.Y;
        s_oStage.addChild(_oDartContainer);

        _aDartSprite = new Array();
        var iX = 0;
        for (var i = 0; i < NUM_THROW + NUM_BONUS_THROW; i++) {
            var oDart = createBitmap(oSpriteDart);
            oDart.x = iX;
            _oDartContainer.addChild(oDart);

            iX += oSpriteDart.width + 10;

            _aDartSprite.push(oDart);

            if (i >= NUM_THROW) {
                oDart.visible = false;
            }
        }

        _oRollingScore = new CRollingScore();

        var iRange = BAR_X_WIDTH / RANGE_WIDTH;
        _oBarX = new CShotIndicatorController(iRange, false);
        iRange = BAR_Y_HEIGHT / RANGE_HEIGHT;
        _oBarY = new CShotIndicatorController(iRange, true);

        this.reset();

        this.showIndicator();
    };

    this.unload = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.unload();
        }

        _oButExit.unload();

        s_oInterface = null;
    };

    this.refreshButtonPos = function() {
        _oButExit.setPosition(_pStartPosExit.x - s_iOffsetX, s_iOffsetY + _pStartPosExit.y);

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }
        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x - s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }

        _oDartContainer.x = _pStartPosDart.x + s_iOffsetX;
        _oDartContainer.y = _pStartPosDart.y - s_iOffsetY;

        _oTextScore.x = _pStartPosScore.x + s_iOffsetX;
        _oTextScore.y = _pStartPosScore.y + s_iOffsetY;

        _oPointText.x = _oTextScore.x + 300;
        _oPointText.y = _oTextScore.y;

        _oBestScoreNum.x = _pStartPosBest.x + s_iOffsetX;
        _oBestScoreNum.y = _pStartPosBest.y + s_iOffsetY;
    };

    this.reset = function() {
        _pPosEndToken = {};
        this.showIndicator();
    };

    this.showIndicator = function() {
        _oBarX.show();
        _oBarX.startAnimation();
    };

    this.handleClick = function(e) {
        switch (_iCurState) {
            case 0:
                //playSound("stop_indicator",1,false);

                _oBarX.endAnimation();
                _pPosEndToken.x = _oBarX.getPositionBallEnd();
                _iCurState++;
                s_oInterface.controlState();
                break;
            case 1:
                //playSound("stop_indicator",1,false);

                _oBarY.endAnimation();
                _pPosEndToken.y = _oBarY.getPositionBallEnd();
                _iCurState++;
                s_oInterface.controlState();
                break;
        }

    };

    this.controlState = function() {
        switch (_iCurState) {
            case 0:
                {
                    _oBarX.startAnimation();
                    break;
                }
            case 1:
                {
                    _oBarY.show();
                    _oBarY.startAnimation();
                    break;
                }
            case 2:
                {
                    _oBarX.hide();
                    _oBarY.hide();
                    s_oGame.launch(_pPosEndToken.x, _pPosEndToken.y);
                    _iCurState = 0;
                    break;
                }
        }
    };

    this.resetNumThrow = function() {
        for (var i = 0; i < _aDartSprite.length - NUM_BONUS_THROW; i++) {
            _aDartSprite[i].visible = true;
        }
    };

    this.addThrows = function(iNum) {
        for (var i = 0; i < iNum; i++) {
            _aDartSprite[i].visible = true;
        }
    };

    this.refreshNumThrow = function(iNum) {
        _aDartSprite[iNum].visible = false;
    };

    this.refreshScore = function(iScore) {
        _oRollingScore.rolling(_oPointText, null, iScore);
    };

    this.refreshBestScore = function() {
        _oBestScoreNum.text = TEXT_BEST + " " + s_iBestScore;
    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onExit = function() {
        s_oGame.onExit();
    };

    this.resetFullscreenBut = function() {
        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.setActive(s_bFullscreen);
        }
    };

    this._onFullscreenRelease = function() {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }

        sizeHandler();
    };

    s_oInterface = this;

    this._init();

    return this;
}

var s_oInterface = null;