function CMain(oData) {
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;

    var _oPreloader;
    var _oMenu;
    var _oLevelMenu;
    var _oGame;

    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage);
        s_oStage.preventSelection = false;

        s_bMobile = jQuery.browser.mobile;
        if (s_bMobile === false) {
            s_oStage.enableMouseOver(20);
        }

        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;

        if (navigator.userAgent.match(/Windows Phone/i)) {
            DISABLE_SOUND_MOBILE = true;
        }

        s_oSpriteLibrary = new CSpriteLibrary();

        //ADD PRELOADER
        _oPreloader = new CPreloader();

    };

    this.preloaderReady = function() {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            this._initSounds();
        }

        this._loadImages();
        _bUpdate = true;
    };

    this.soundLoaded = function() {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);
    };

    this._initSounds = function() {
        var aSoundsInfo = new Array();
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'game_over',
            loop: false,
            volume: 1,
            ingamename: 'game_over'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'click',
            loop: false,
            volume: 1,
            ingamename: 'click'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'hit',
            loop: false,
            volume: 1,
            ingamename: 'hit'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'launch',
            loop: false,
            volume: 1,
            ingamename: 'launch'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'malus',
            loop: false,
            volume: 1,
            ingamename: 'malus'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'miss',
            loop: false,
            volume: 1,
            ingamename: 'miss'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'perfect',
            loop: false,
            volume: 1,
            ingamename: 'perfect'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'powerup',
            loop: false,
            volume: 1,
            ingamename: 'powerup'
        });
        aSoundsInfo.push({
            path: './sounds/',
            filename: 'soundtrack',
            loop: true,
            volume: 1,
            ingamename: 'soundtrack'
        });

        RESOURCE_TO_LOAD += aSoundsInfo.length;

        s_aSounds = new Array();
        for (var i = 0; i < aSoundsInfo.length; i++) {
            s_aSounds[aSoundsInfo[i].ingamename] = new Howl({
                src: [aSoundsInfo[i].path + aSoundsInfo[i].filename + '.mp3'],
                autoplay: false,
                preload: true,
                loop: aSoundsInfo[i].loop,
                volume: aSoundsInfo[i].volume,
                onload: s_oMain.soundLoaded
            });
        }

    };

    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);

        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("dartboard", "./sprites/dartboard.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("dart_icon", "./sprites/dart_icon.png");
        s_oSpriteLibrary.addSprite("contact_effect", "./sprites/contact_effect.png");
        s_oSpriteLibrary.addSprite("power_up_0", "./sprites/power_up_0.png");
        s_oSpriteLibrary.addSprite("power_up_1", "./sprites/power_up_1.png");
        s_oSpriteLibrary.addSprite("power_up_2", "./sprites/power_up_2.png");
        s_oSpriteLibrary.addSprite("circle_0", "./sprites/circle_0.png");
        s_oSpriteLibrary.addSprite("circle_1", "./sprites/circle_1.png");
        s_oSpriteLibrary.addSprite("circle_2", "./sprites/circle_2.png");
        s_oSpriteLibrary.addSprite("circle_3", "./sprites/circle_3.png");
        s_oSpriteLibrary.addSprite("dart_shadow", "./sprites/dart_shadow.png");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("arrow_bar", "./sprites/arrow_bar.png");
        s_oSpriteLibrary.addSprite("bar_x", "./sprites/bar_x.png");
        s_oSpriteLibrary.addSprite("bar_y", "./sprites/bar_y.png");

        for (var k = 0; k < 3; k++) {
            for (var i = 0; i < NUM_SPRITE_DART; i++) {
                s_oSpriteLibrary.addSprite("dart_" + k + "_" + i, "./sprites/dart/dart_" + k + "_" + i + ".png");
            }
        }


        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this._onImagesLoaded = function() {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        //console.log("PERC: "+iPerc);
        _oPreloader.refreshLoader(iPerc);
    };

    this._onRemovePreloader = function() {
        try {
            saveItem("ls_available", "ok");
        } catch (evt) {
            // localStorage not defined
            s_bStorageAvailable = false;
        }

        _oPreloader.unload();

        s_oSoundTrack = playSound("soundtrack", 1, true);

        this.gotoMenu();
    };

    this._onAllImagesLoaded = function() {

    };

    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages();
    };

    this.gotoMenu = function() {
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };

    this.gotoLevelPanel = function() {
        _oLevelMenu = new CLevelMenu();
        _iState = STATE_LEVEL;
    };

    this.gotoGame = function() {
        _oGame = new CGame();
        _iState = STATE_GAME;
    };

    this.stopUpdateNoBlock = function() {
        _bUpdate = false;
        createjs.Ticker.paused = true;
    };

    this.startUpdateNoBlock = function() {
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
    };

    this.stopUpdate = function() {
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display", "block");

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            Howler.mute(true);
        }

    };

    this.startUpdate = function() {
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display", "none");

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            if (s_bAudioActive) {
                Howler.mute(false);
            }
        }

    };

    this._update = function(event) {
        if (_bUpdate === false) {
            return;
        }
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;

        if (s_iCntTime >= 1000) {
            s_iCurFps = s_iCntFps;
            s_iCntTime -= 1000;
            s_iCntFps = 0;
        }


        if (_iState === STATE_GAME) {
            _oGame.update();
        }

        s_oStage.update(event);

    };

    s_oMain = this;

    _oData = oData;

    SHOT_INDICATOR_X_SPEED = oData.shot_indicator_x_speed;
    SHOT_INDICATOR_Y_SPEED = oData.shot_indicator_y_speed;
    NUM_THROW = oData.num_throw;
    POINTS_DARTBOARD = oData.points_dartboard;
    MALUS_SCORE = oData.malus_point;
    BONUS_EXTRA_POINT = oData.bonus_point;
    NUM_BONUS_THROW = oData.bonus_throw;

    ENABLE_FULLSCREEN = oData.fullscreen;

    this.initContainer();
}

var s_bMobile;
var s_bAudioActive = true;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;

var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oSoundTrack = null;
var s_oCanvas;
var s_bFullscreen = false;
var s_aSounds;
var s_bStorageAvailable = true;
var s_bFirstPlay = true;
var s_iBestScore = 0;