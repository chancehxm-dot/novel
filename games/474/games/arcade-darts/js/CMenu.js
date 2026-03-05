function CMenu() {
    var _iHeightLogo;
    var _iHeightGUI;

    var _oButPlay;
    var _oCreditsBut;
    var _oLogo;
    var _oBestScoreText;

    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _oBg;
    var _oAudioToggle;
    var _oButFullscreen;
    var _oContainerGui;

    var _pStartPosAudio;
    var _pStartPosCredits;
    var _pStartPosFullscreen;
    var _pStartPosLogo;


    this._init = function() {
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        _oContainerGui = new createjs.Container();
        _oContainerGui.x = CANVAS_WIDTH / 2;
        _oContainerGui.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(_oContainerGui);

        _pStartPosLogo = {
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2 - 200
        };
        var oSpriteLogo = s_oSpriteLibrary.getSprite("logo_menu");
        _oLogo = createBitmap(oSpriteLogo);
        //_oLogo.regX = oSpriteLogo.width/2;
        //_oLogo.regY = oSpriteLogo.height/2;
        //_oLogo.x = _pStartPosLogo.x;
        //_oLogo.y = _pStartPosLogo.y;
        _oContainerGui.addChild(_oLogo);

        _iHeightLogo = oSpriteLogo.height;

        var oSpriteStart = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton(oSpriteLogo.width / 2, oSpriteLogo.height + 210, oSpriteStart, _oContainerGui);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onStart, this, 0);

        _iHeightGUI = oSpriteStart.height;

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {
                x: CANVAS_WIDTH - (oSprite.height / 2) - 10,
                y: (oSprite.height / 2) + 10
            };

            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        _pStartPosCredits = {
            x: (oSprite.width / 2) + 10,
            y: (oSprite.height / 2) + 10
        };
        _oCreditsBut = new CGfxButton(_pStartPosCredits.x, _pStartPosCredits.y, oSprite, s_oStage);
        _oCreditsBut.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.enabled) {
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = {
                x: _pStartPosCredits.x + oSprite.width / 2 + 10,
                y: (oSprite.height / 2) + 10
            };
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }


        _oBestScoreText = new createjs.Text("", " 45px " + FONT, "#fff");
        _oBestScoreText.x = oSpriteLogo.width / 2;
        _oBestScoreText.y = oSpriteLogo.height + 55;
        _oBestScoreText.textAlign = "center";
        _oBestScoreText.textBaseline = "alphabetic";
        _oContainerGui.addChild(_oBestScoreText);


        if (!s_bStorageAvailable) {
            new CMsgBox();
        } else {
            var iBestScore = getItem(PREFIX_STORAGE + "_best_score");
            if (iBestScore !== null) {
                s_iBestScore = iBestScore;
            }
        }

        _oBestScoreText.text = TEXT_BEST_SCORE + " " + s_iBestScore;

        this.refreshButtonPos();

        var oFade = new createjs.Shape();
        oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(oFade);

        createjs.Tween.get(oFade).to({
            alpha: 0
        }, 1000).call(function() {
            oFade.visible = false;
        });

        setVolume("soundtrack", 1);
    };

    this.unload = function() {
        _oButPlay.unload();
        _oCreditsBut.unload();

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.unload();
        }

        s_oMenu = null;
        s_oStage.removeAllChildren();
    };

    this.refreshButtonPos = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }

        if (_fRequestFullScreen && screenfull.enabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }

        _oCreditsBut.setPosition(_pStartPosCredits.x + s_iOffsetX, s_iOffsetY + _pStartPosCredits.y);


        var iMaxSizeHeight = (CANVAS_HEIGHT - (s_iOffsetY * 2)) - _iHeightGUI * 1.5;
        var iMaxSizeWidth = (CANVAS_WIDTH - (s_iOffsetX * 2)) - _iHeightGUI;

        var iMaxSize = Math.min(iMaxSizeWidth, iMaxSizeHeight)
        var iScale = iMaxSize / _iHeightLogo;
        iScale = parseFloat(iScale.toFixed(2));
        if (iScale > 1) {
            iScale = 1;
        }
        /*
            _oLogo.scaleX = _oLogo.scaleY = iScale;
            _oLogo.y = s_iOffsetY + (_iHeightLogo/2)*iScale + 50;
            
            _oBestScoreText.y = _oLogo.y + (_iHeightLogo/2)*iScale + 50
            _oButPlay.setY(_oBestScoreText.y + (_iHeightGUI/2*iScale) + 50);
            _oButPlay.setScale(iScale);
          */
        _oContainerGui.scaleX = _oContainerGui.scaleY = iScale;
        _oContainerGui.regX = _oContainerGui.getBounds().width / 2;
        _oContainerGui.regY = _oContainerGui.getBounds().height / 2;
    };

    this._onStart = function() {
        $(s_oMain).trigger("start_session");
        s_oMenu.unload();
        s_oMain.gotoGame()
    };

    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onCreditsBut = function() {
        new CCreditsPanel();
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


    s_oMenu = this;
    this._init();


};

var s_oMenu = null;