function BootState() {};

var SpilLogoData = null;
var SpilLogo = null;

var SpilMoreGamesData = null;

BootState.prototype = {
    preload: function() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
            this.game.load.crossOrigin = "true";
        else
            this.game.load.crossOrigin = "anonymous";

        document.body.style.backgroundImage = "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url('resource/gui/misc/background.png')";
        document.body.style.backgroundColor = "#000000";

        //this.game.app.handleResize();

        this.game.load.image("Logo", "resource/gui/misc/logo.png");
        this.game.load.image("LoadingBar", "resource/gui/misc/loadingbar.png");
        this.game.load.image("LoadingBarFilled", "resource/gui/misc/loadingbar_filled.png");
        this.game.load.image("misc_Transition", "resource/gui/misc/shutter.png");


        this.game.load.spritesheet("effects_Fighter_Shooting", "resource/effects/fighter_shooting.png", 128, 128, 12, 1, 1);
        this.game.load.spritesheet("gui_misc_patharrow", "resource/gui/misc/path_arrow.png", 128, 128, 20, 1, 1);
        this.game.load.spritesheet("effects_HeliAttack", "resource/effects/HeliAttack.png", 256, 128, 15, 1, 1);

        this.game.load.spritesheet("entity_Player_Marine_Die_Left", "resource/entity/player/marine/die_left.png", 168, 128, 10, 0, 0);


        this.game.load.spritesheet("entity_Player_Marine_Die_Right", "resource/entity/player/marine/die_right.png", 168, 128, 10, 0, 0);
        this.game.load.spritesheet("entity_Player_Marine_Die_Up", "resource/entity/player/marine/die_up.png", 128, 152, 10, 0, 0);
        this.game.load.spritesheet("entity_Player_Marine_Die_Down", "resource/entity/player/marine/die_down.png", 128, 128, 10, 0, 0);


        this.game.load.spritesheet("entity_Player_Marine_Walk_Left", "resource/entity/player/marine/walk_left.png", 128, 128, 4, 0, 0);
        this.game.load.spritesheet("entity_Player_Marine_Walk_Right", "resource/entity/player/marine/walk_right.png", 128, 128, 4, 0, 0);
        this.game.load.spritesheet("entity_Player_Marine_Walk_Up", "resource/entity/player/marine/walk_up.png", 128, 128, 4, 0, 0);
        this.game.load.spritesheet("entity_Player_Marine_Walk_Down", "resource/entity/player/marine/walk_down.png", 128, 128, 4, 0, 0);

        this.game.load.spritesheet("entity_Player_Marine_Victory", "resource/entity/player/marine/victory.png", 128, 128, 6, 0, 0);

        this.game.load.spritesheet("effects_GuardShootingRight", "resource/effects/guard_shooting_right.png", 121, 79, 16, 0, 0);
        this.game.load.spritesheet("effects_GuardShootingDown", "resource/effects/guard_shooting_down.png", 97, 105, 16, 0, 0);
        this.game.load.spritesheet("effects_GuardShootingLeft", "resource/effects/guard_shooting_left.png", 120, 80, 16, 0, 0);

        this.game.load.spritesheet("effects_MarineShooting", "resource/effects/marine_shooting.png", 166, 128, 18, 0, 0);
        this.game.load.spritesheet("effects_MarineShootingUp", "resource/effects/marine_shooting_up.png", 128, 192, 18, 0, 0);
        this.game.load.spritesheet("effects_MarineShootingDown", "resource/effects/marine_shooting_down.png", 128, 192, 17, 0, 0);



        this.game.load.spritesheet("tiles_Water", "resource/tiles/Water.png", 128, 128, 8, 0, 0);



        this.game.load.spritesheet("effects_BloodSplashDecal", "resource/effects/blood_splash_decal.png", 50, 50, 3, 0, 0);

        this.game.load.spritesheet("effects_Explosion", "resource/effects/explosion.png", 129, 128, 11, 0, 0);
        this.game.load.spritesheet("effects_TankHit", "resource/effects/tank_hit.png", 128, 128, 10, 0, 0);
        this.game.load.spritesheet("effects_BulletHit", "resource/effects/bullet_hit.png", 128, 128, 9, 0, 0);
        this.game.load.spritesheet("effects_TankMuzzle", "resource/effects/tank_muzzle.png", 128, 128, 9, 0, 0);
        this.game.load.spritesheet("effects_BloodSplash", "resource/effects/blood_splash.png", 128, 128, 9, 0, 0);
        this.game.load.spritesheet("effects_BloodPool", "resource/effects/blood_pool.png", 128, 128, 9, 0, 0);
        this.game.load.spritesheet("effects_WalkDustSideview", "resource/effects/walk_dust_sideview.png", 128, 128, 9, 0, 0);
        this.game.load.spritesheet("effects_WalkDustFrontview", "resource/effects/walk_dust_frontview.png", 128, 128, 9, 0, 0);
        this.game.load.spritesheet("effects_RocketHit", "resource/effects/rocket_hit.png", 128, 128, 6, 0, 0);
        this.game.load.spritesheet("effects_RocketTrail", "resource/effects/rocket_trail.png", 21, 23, 7, 0, 0);

        SpilLogoData = ApiInstance.Branding.getLogo();

        if (SpilLogoData.image) {

            this.game.load.image("SpilLogo", SpilLogoData.image);
        }

        SpilMoreGamesData = ApiInstance.Branding.getLink('more_games');

    },
    create: function() {
        this.game.state.add("preload", PreloadState);
        this.game.state.add("main_menu", MainMenuState);
        this.game.state.add("gameplay", GameplayState);
        this.game.state.add("levelselection", LevelSelectionState);

        this.game.canvas.oncontextmenu = function(event) {
            event.preventDefault();
        };

        this.input.maxPointers = 1;

        this.game.stage.disableVisibilityChange = false;

        this.game.world.setBounds(0, 0, 640, 960);

        this.game.input.touch.consumeDocumentTouches();

        if (this.game.device.desktop)
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        else {
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // EXACT_FIT
        }

        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        this.game.scale.refresh();

        this.game.time.advancedTiming = true;
        window.scrollTo(0, 1);

        TransitionAnimator.Group = this.game.add.group();

        if (SpilLogoData.image) {

            SpilLogo = this.game.make.button(0, 0, "SpilLogo", function() {
                SpilLogoData.action();
            });

            SpilLogo.position.set(320 - SpilLogo.width / 2, 960 - SpilLogo.height - 10);

            TransitionAnimator.Group.add(SpilLogo);
        }

        this.game.state.start("preload", false);


    }
};