function CMain(oData) {
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;
    var _oPreloader;
    var _oMenu;
    var _oGame;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage);

        s_bMobile = jQuery.browser.mobile;
        if (s_bMobile === false) {
            s_oStage.enableMouseOver(20);
            $('body').on('contextmenu', '#canvas', function(e) {
                return false;
            });
        }

        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);

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

        if (_iCurResource === RESOURCE_TO_LOAD) {
            _oPreloader.unload();

            if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
                s_oSoundtrack = createjs.Sound.play("soundtrack", {
                    loop: -1
                });
            }
        }
    };

    this._initSounds = function() {
        if (!createjs.Sound.initializeDefaultPlugins()) {
            return;
        }

        if (navigator.userAgent.indexOf("Opera") > 0 || navigator.userAgent.indexOf("OPR") > 0) {
            createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

            createjs.Sound.registerSound("./sounds/soundtrack.ogg", "soundtrack");
            createjs.Sound.registerSound("./sounds/press_button.ogg", "click");
            createjs.Sound.registerSound("./sounds/game_over_theme.ogg", "game_over");

            createjs.Sound.registerSound("./sounds/astronaut1.ogg", "astronaut1");
            createjs.Sound.registerSound("./sounds/astronaut2.ogg", "astronaut2");

            createjs.Sound.registerSound("./sounds/boing.ogg", "boing");

            createjs.Sound.registerSound("./sounds/combo.ogg", "combo");

            createjs.Sound.registerSound("./sounds/energy_lost.ogg", "energy_lost");

            createjs.Sound.registerSound("./sounds/evil_pig.ogg", "evil_pig");
            createjs.Sound.registerSound("./sounds/evil1.ogg", "evil1");
            createjs.Sound.registerSound("./sounds/evil2.ogg", "evil2");
            createjs.Sound.registerSound("./sounds/evil3.ogg", "evil3");
            createjs.Sound.registerSound("./sounds/evil8.ogg", "evil8");

            createjs.Sound.registerSound("./sounds/explosion.ogg", "explosion");
            createjs.Sound.registerSound("./sounds/bomb.ogg", "bomb");

            createjs.Sound.registerSound("./sounds/pigMode.ogg", "pigMode");

            createjs.Sound.registerSound("./sounds/power_up.ogg", "power_up");

            createjs.Sound.registerSound("./sounds/shot.ogg", "shot");

        } else {
            createjs.Sound.alternateExtensions = ["ogg"];
            createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this));

            createjs.Sound.registerSound("./sounds/soundtrack.mp3", "soundtrack");
            createjs.Sound.registerSound("./sounds/press_button.mp3", "click");
            createjs.Sound.registerSound("./sounds/game_over_theme.mp3", "game_over");

            createjs.Sound.registerSound("./sounds/astronaut1.mp3", "astronaut1");
            createjs.Sound.registerSound("./sounds/astronaut2.mp3", "astronaut2");

            createjs.Sound.registerSound("./sounds/boing.mp3", "boing");

            createjs.Sound.registerSound("./sounds/combo.mp3", "combo");

            createjs.Sound.registerSound("./sounds/energy_lost.mp3", "energy_lost");

            createjs.Sound.registerSound("./sounds/evil_pig.mp3", "evil_pig");
            createjs.Sound.registerSound("./sounds/evil1.mp3", "evil1");
            createjs.Sound.registerSound("./sounds/evil2.mp3", "evil2");
            createjs.Sound.registerSound("./sounds/evil3.mp3", "evil3");
            createjs.Sound.registerSound("./sounds/evil8.mp3", "evil8");

            createjs.Sound.registerSound("./sounds/explosion.mp3", "explosion");
            createjs.Sound.registerSound("./sounds/bomb.mp3", "bomb");

            createjs.Sound.registerSound("./sounds/pigMode.mp3", "pigMode");

            createjs.Sound.registerSound("./sounds/power_up.mp3", "power_up");

            createjs.Sound.registerSound("./sounds/shot.mp3", "shot");
        }

        RESOURCE_TO_LOAD += 18;

    };

    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);

        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");

        s_oSpriteLibrary.addSprite("sitelogo", "sitelogo.png");
        s_oSpriteLibrary.addSprite("life_bar_fill", "./sprites/life_bar_fill.png");
        s_oSpriteLibrary.addSprite("time_bar_fill", "./sprites/time_bar_fill.png");
        s_oSpriteLibrary.addSprite("life_bar_box", "./sprites/life_bar_box.png");
        s_oSpriteLibrary.addSprite("time_bar_box", "./sprites/time_bar_box.png");

        s_oSpriteLibrary.addSprite("bg_level_bonus", "./sprites/bg_level_bonus.jpg");
        s_oSpriteLibrary.addSprite("bg_level_1", "./sprites/bg_level_1.jpg");
        s_oSpriteLibrary.addSprite("bg_level_2", "./sprites/bg_level_2.jpg");
        s_oSpriteLibrary.addSprite("bg_level_3", "./sprites/bg_level_3.jpg");
        s_oSpriteLibrary.addSprite("help_bg", "./sprites/help_bg.jpg");

        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("icon_audio", "./sprites/icon_audio.png");

        s_oSpriteLibrary.addSprite("explosion_sprite", "./sprites/explosion_sprite.png");
        s_oSpriteLibrary.addSprite("zap_flash", "./sprites/zap_flash.png");

        s_oSpriteLibrary.addSprite("game_over_panel", "./sprites/game_over_panel.png");

        s_oSpriteLibrary.addSprite("alien0", "./sprites/alien0.png");
        s_oSpriteLibrary.addSprite("alien1", "./sprites/alien1.png");
        s_oSpriteLibrary.addSprite("alien2", "./sprites/alien2.png");
        s_oSpriteLibrary.addSprite("alien3", "./sprites/alien3.png");
        s_oSpriteLibrary.addSprite("alien4", "./sprites/alien4.png");
        s_oSpriteLibrary.addSprite("alien5", "./sprites/alien5.png");
        s_oSpriteLibrary.addSprite("alien6", "./sprites/alien6.png");
        s_oSpriteLibrary.addSprite("alien7", "./sprites/alien7.png");
        s_oSpriteLibrary.addSprite("alien8", "./sprites/alien8.png");
        s_oSpriteLibrary.addSprite("alien9", "./sprites/alien9.png");
        s_oSpriteLibrary.addSprite("alien10", "./sprites/alien10.png");
        s_oSpriteLibrary.addSprite("alien11", "./sprites/alien11.png");

        s_oSpriteLibrary.addSprite("helmet", "./sprites/helmet.png");
        s_oSpriteLibrary.addSprite("helmet_explosion", "./sprites/helmet_explosion.png");

        s_oSpriteLibrary.addSprite("but_skip", "./sprites/but_skip.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");

        s_oSpriteLibrary.addSprite("item_bomb_sprite", "./sprites/item_bomb_sprite.png");
        s_oSpriteLibrary.addSprite("item_medikit_sprite", "./sprites/item_medikit_sprite.png");
        s_oSpriteLibrary.addSprite("item_pig_mode_sprite", "./sprites/item_pig_mode_sprite.png");
        s_oSpriteLibrary.addSprite("item_time_sprite", "./sprites/item_time_sprite.png");
        s_oSpriteLibrary.addSprite("item_assault_sprite", "./sprites/item_assault_sprite.png");
        s_oSpriteLibrary.addSprite("item_evil_horde_sprite", "./sprites/item_evil_horde_sprite.png");

        s_oSpriteLibrary.addSprite("icon_extra_speed", "./sprites/icon_extra_speed.png");
        s_oSpriteLibrary.addSprite("icon_astronaut_assault", "./sprites/icon_astronaut_assault.png");
        s_oSpriteLibrary.addSprite("icon_evil_horde", "./sprites/icon_evil_horde.png");
        s_oSpriteLibrary.addSprite("icon_pig_mode", "./sprites/icon_pig_mode.png");

        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");

        s_oSpriteLibrary.addSprite("bonus_assault", "./sprites/bonus_assault.png");
        s_oSpriteLibrary.addSprite("bonus_evil_horde", "./sprites/bonus_evil_horde.png");
        s_oSpriteLibrary.addSprite("bonus_pig_mode", "./sprites/bonus_pig_mode.png");
        s_oSpriteLibrary.addSprite("bonus_speed_down", "./sprites/bonus_speed_down.png");

        s_oSpriteLibrary.addSprite("gui_panel", "./sprites/gui_panel.png");


        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this._onImagesLoaded = function() {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);
    };

    this._onAllImagesLoaded = function() {
        _oPreloader.unload();

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            s_oSoundtrack = createjs.Sound.play("soundtrack", {
                loop: -1
            });
        }

        this.gotoMenu();
    };

    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages();
    };

    this.gotoMenu = function() {
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };

    this.gotoGame = function() {
        _oGame = new CGame(_oData);
        _iState = STATE_GAME;

        $(s_oMain).trigger("game_start");
    };


    this.stopUpdate = function() {
        _bUpdate = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display", "block");
    };

    this.startUpdate = function() {
        s_iPrevTime = new Date().getTime();
        _bUpdate = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display", "none");
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
var s_oSoundTrack;
var s_oCanvas;
var s_iLanguageSelected;

var s_oSpriteSheetLora;

var s_aQuestions;