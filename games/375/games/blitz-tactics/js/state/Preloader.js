function PreloadState() {};
PreloadState.prototype = {
    background: null,
    loadingBar: null,
    loadingBarFilled: null,
    textfield: null,

    preload: function() {

        TransitionAnimator.LeftShutter = TransitionAnimator.Group.create(0, 0, "misc_Transition");
        TransitionAnimator.LeftShutter.position.x = 0;

        TransitionAnimator.RightShutter = TransitionAnimator.Group.create(0, 0, "misc_Transition");
        TransitionAnimator.RightShutter.position.x = GameApplication.NATIVE_WIDTH;
        TransitionAnimator.RightShutter.scale.x = -1;

        PreloadState.logo = this.game.add.sprite(GameApplication.NATIVE_WIDTH / 2 + 15, 100, "Logo");
        PreloadState.logo.anchor.set(0.5, 0.0);

        this.loadingBar = this.game.add.sprite(GameApplication.NATIVE_WIDTH / 2, 500, "LoadingBar");
        this.loadingBar.anchor.set(0.5, 0.0);

        this.loadingBarFilled = this.game.add.sprite(GameApplication.NATIVE_WIDTH / 2, 500, "LoadingBarFilled");
        this.loadingBarFilled.position.x -= this.loadingBarFilled.width / 2;
        this.loadingBarFilled.crop(new Phaser.Rectangle(0, 0, 0, this.loadingBarFilled.height));

        this.textfield = this.game.add.text(this.loadingBar.position.x - 45, this.loadingBar.position.y + 55, "0%", {
            font: "bold 50px Arial"
        });
        this.textfield.fill = "#FFFFFF";

        //this.game.load.bitmapFont("visitor", "resource/fonts/visitor_bitmap_0.png", "resource/fonts/visitor_bitmap.fnt");
        this.game.load.bitmapFont("numbers", "resource/fonts/numbers-export.png", "resource/fonts/numbers-export.fnt");

        this.game.load.image("MainMenu_Background", "resource/gui/misc/background.png");
        // this.game.load.image("Button_Info", "resource/gui/button/button_info.png");
        this.game.load.image("Button_Moregames", "resource/gui/button/button_moregames.png");
        this.game.load.image("Level_Done", "resource/gui/button/level_done.png");
        this.game.load.image("Level_Next", "resource/gui/button/level_next.png");
        this.game.load.image("Level_Locked", "resource/gui/button/level_locked.png");
        this.game.load.image("Button_Play", "resource/gui/button/button_play.png");

        this.game.load.image("Lvl_0_0_hint", "resource/tutorial/lvl_0_0_hint.png");
        this.game.load.image("Lvl_0_0_touch", "resource/tutorial/lvl_0_0_touch.png");
        this.game.load.image("Lvl_0_2_hint", "resource/tutorial/lvl_0_2_hint.png");
        this.game.load.image("Lvl_0_5_hint", "resource/tutorial/lvl_0_5_hint.png");

        this.game.load.image("tiles_Mountain", "resource/tiles/Mountain.png");
        this.game.load.image("tiles_Mountain_2", "resource/tiles/Mountain_2.png");
        this.game.load.image("tiles_Grass0", "resource/tiles/Grass_0.png");
        this.game.load.image("tiles_Grass1", "resource/tiles/Grass_1.png");
        this.game.load.image("tiles_Grass2", "resource/tiles/Grass_2.png");
        this.game.load.image("tiles_Barricade", "resource/tiles/Barricade.png");
        this.game.load.image("tiles_FlagPole", "resource/tiles/FlagPole.png");

        this.game.load.image("entity_Player_Tank_Idle_Left", "resource/entity/player/tank/idle_left.png");
        this.game.load.image("entity_Player_Tank_Idle_Right", "resource/entity/player/tank/idle_right.png");
        this.game.load.image("entity_Player_Tank_Idle_Up", "resource/entity/player/tank/idle_up.png");
        this.game.load.image("entity_Player_Tank_Idle_Down", "resource/entity/player/tank/idle_down.png");

        this.game.load.spritesheet("tiles_Flag_Fall", "resource/tiles/FlagFall.png", 65, 61, 5, 0, 0);
        this.game.load.spritesheet("tiles_FlagPole_Flag", "resource/tiles/Flag.png", 65, 41, 8, 0, 0);

        this.game.load.spritesheet("star_counter", "resource/gui/misc/star_counter.png", 157, 72, 4, 0, 0);

        this.game.load.spritesheet("entity_Player_Tank_Attack_Left", "resource/entity/player/tank/attack_left.png", 128, 128, 5, 0, 0);
        this.game.load.spritesheet("entity_Player_Tank_Attack_Right", "resource/entity/player/tank/attack_right.png", 128, 128, 5, 0, 0);
        this.game.load.spritesheet("entity_Player_Tank_Attack_Up", "resource/entity/player/tank/attack_up.png", 128, 128, 5, 0, 0);
        this.game.load.spritesheet("entity_Player_Tank_Attack_Down", "resource/entity/player/tank/attack_down.png", 128, 128, 5, 0, 0);


        this.game.load.spritesheet("entity_Player_Tank_Walk_Left", "resource/entity/player/tank/move_left.png", 128, 128, 3, 0, 0);
        this.game.load.spritesheet("entity_Player_Tank_Walk_Right", "resource/entity/player/tank/move_right.png", 128, 128, 3, 0, 0);
        this.game.load.spritesheet("entity_Player_Tank_Walk_Up", "resource/entity/player/tank/move_up.png", 128, 128, 3, 0, 0);
        this.game.load.spritesheet("entity_Player_Tank_Walk_Down", "resource/entity/player/tank/move_down.png", 128, 128, 3, 0, 0);




        //prev

        this.game.load.spritesheet("entity_Player_Bomber_Idle_Left", "resource/entity/player/bomber/idle_left.png", 128, 128, 3, 0, 0);
        this.game.load.spritesheet("entity_Player_Bomber_Idle_Right", "resource/entity/player/bomber/idle_right.png", 128, 128, 3, 0, 0);
        this.game.load.spritesheet("entity_Player_Bomber_Idle_Up", "resource/entity/player/bomber/idle_up.png", 136, 128, 3, 0, 0);
        this.game.load.spritesheet("entity_Player_Bomber_Idle_Down", "resource/entity/player/bomber/idle_down.png", 136, 128, 3, 0, 0);

        this.game.load.spritesheet("entity_Enemy_AntiAir_Attack_Left", "resource/entity/enemy/zrk/attack_left.png", 128, 128, 7, 0, 0);
        this.game.load.spritesheet("entity_Enemy_AntiAir_Attack_Right", "resource/entity/enemy/zrk/attack_right.png", 128, 128, 7, 0, 0);
        this.game.load.spritesheet("entity_Enemy_AntiAir_Attack_Up", "resource/entity/enemy/zrk/attack_up.png", 128, 128, 7, 0, 0);
        this.game.load.spritesheet("entity_Enemy_AntiAir_Attack_Down", "resource/entity/enemy/zrk/attack_down.png", 128, 128, 7, 0, 0);

        // prev
        this.game.load.spritesheet("entity_Enemy_Tank_Attack_Left", "resource/entity/enemy/tank/attack_left.png", 128, 128, 5, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Tank_Attack_Right", "resource/entity/enemy/tank/attack_right.png", 128, 128, 5, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Tank_Attack_Up", "resource/entity/enemy/tank/attack_up.png", 128, 128, 5, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Tank_Attack_Down", "resource/entity/enemy/tank/attack_down.png", 128, 128, 5, 0, 0);

        this.game.load.spritesheet("entity_Enemy_Guard_Die_Left", "resource/entity/enemy/guard/die_left.png", 171, 128, 10, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Guard_Die_Right", "resource/entity/enemy/guard/die_right.png", 171, 128, 10, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Guard_Die_Up", "resource/entity/enemy/guard/die_up.png", 128, 157, 10, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Guard_Die_Down", "resource/entity/enemy/guard/die_down.png", 128, 137, 10, 0, 0);



        this.game.load.spritesheet("entity_Enemy_Helicopter_Idle_Left", "resource/entity/enemy/helicopter/idle_left.png", 140, 132, 3, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Helicopter_Idle_Right", "resource/entity/enemy/helicopter/idle_right.png", 140, 132, 3, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Helicopter_Idle_Up", "resource/entity/enemy/helicopter/idle_up.png", 140, 132, 3, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Helicopter_Idle_Down", "resource/entity/enemy/helicopter/idle_down.png", 140, 132, 3, 0, 0);



        this.game.load.spritesheet("entity_Enemy_Helicopter_Attack_Left", "resource/entity/enemy/helicopter/attack_left.png", 140, 132, 6, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Helicopter_Attack_Right", "resource/entity/enemy/helicopter/attack_right.png", 140, 132, 6, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Helicopter_Attack_Up", "resource/entity/enemy/helicopter/attack_up.png", 140, 132, 6, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Helicopter_Attack_Down", "resource/entity/enemy/helicopter/attack_down.png", 140, 132, 6, 0, 0);



        this.game.load.spritesheet("entity_Player_Fighter_Idle_Left", "resource/entity/player/fighter/idle_left.png", 128, 128, 3, 0, 0);
        this.game.load.spritesheet("entity_Player_Fighter_Idle_Right", "resource/entity/player/fighter/idle_right.png", 128, 128, 3, 0, 0);
        this.game.load.spritesheet("entity_Player_Fighter_Idle_Up", "resource/entity/player/fighter/idle_up.png", 128, 128, 3, 0, 0);
        this.game.load.spritesheet("entity_Player_Fighter_Idle_Down", "resource/entity/player/fighter/idle_down.png", 128, 128, 3, 0, 0);

        this.game.load.spritesheet("entity_Player_Fighter_Attack_Left", "resource/entity/player/fighter/attack_left.png", 128, 128, 12, 0, 0);
        this.game.load.spritesheet("entity_Player_Fighter_Attack_Right", "resource/entity/player/fighter/attack_right.png", 128, 128, 12, 0, 0);
        this.game.load.spritesheet("entity_Player_Fighter_Attack_Up", "resource/entity/player/fighter/attack_up.png", 128, 128, 12, 0, 0);
        this.game.load.spritesheet("entity_Player_Fighter_Attack_Down", "resource/entity/player/fighter/attack_down.png", 128, 128, 12, 0, 0);

        this.game.load.spritesheet("entity_Enemy_Guard_Attack_Left", "resource/entity/enemy/guard/attack_left.png", 128, 128, 21, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Guard_Attack_Right", "resource/entity/enemy/guard/attack_right.png", 128, 128, 21, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Guard_Attack_Up", "resource/entity/enemy/guard/attack_up.png", 128, 128, 21, 0, 0);
        this.game.load.spritesheet("entity_Enemy_Guard_Attack_Down", "resource/entity/enemy/guard/attack_down.png", 128, 128, 21, 0, 0);

        this.game.load.spritesheet("entity_Player_Marine_Attack_Left", "resource/entity/player/marine/attack_left.png", 128, 128, 21, 0, 0);
        this.game.load.spritesheet("entity_Player_Marine_Attack_Right", "resource/entity/player/marine/attack_right.png", 128, 128, 21, 0, 0);
        this.game.load.spritesheet("entity_Player_Marine_Attack_Up", "resource/entity/player/marine/attack_up.png", 128, 128, 21, 0, 0);
        this.game.load.spritesheet("entity_Player_Marine_Attack_Down", "resource/entity/player/marine/attack_down.png", 128, 128, 21, 0, 0);

        this.game.load.image("entity_Player_Bomber_Shadow_Left", "resource/entity/player/bomber/shadow_left.png");
        this.game.load.image("entity_Player_Bomber_Shadow_Right", "resource/entity/player/bomber/shadow_right.png");
        this.game.load.image("entity_Player_Bomber_Shadow_Up", "resource/entity/player/bomber/shadow_up.png");
        this.game.load.image("entity_Player_Bomber_Shadow_Down", "resource/entity/player/bomber/shadow_down.png");

        this.game.load.image("entity_Enemy_AntiAir_Idle_Left", "resource/entity/enemy/zrk/idle_left.png");
        this.game.load.image("entity_Enemy_AntiAir_Idle_Right", "resource/entity/enemy/zrk/idle_right.png");
        this.game.load.image("entity_Enemy_AntiAir_Idle_Up", "resource/entity/enemy/zrk/idle_up.png");
        this.game.load.image("entity_Enemy_AntiAir_Idle_Down", "resource/entity/enemy/zrk/idle_down.png");

        this.game.load.image("entity_Enemy_Tank_Idle_Left", "resource/entity/enemy/tank/idle_left.png");
        this.game.load.image("entity_Enemy_Tank_Idle_Right", "resource/entity/enemy/tank/idle_right.png");
        this.game.load.image("entity_Enemy_Tank_Idle_Up", "resource/entity/enemy/tank/idle_up.png");
        this.game.load.image("entity_Enemy_Tank_Idle_Down", "resource/entity/enemy/tank/idle_down.png");

        this.game.load.image("entity_Enemy_Guard_Idle_Left", "resource/entity/enemy/guard/idle_left.png");
        this.game.load.image("entity_Enemy_Guard_Idle_Right", "resource/entity/enemy/guard/idle_right.png");
        this.game.load.image("entity_Enemy_Guard_Idle_Up", "resource/entity/enemy/guard/idle_up.png");
        this.game.load.image("entity_Enemy_Guard_Idle_Down", "resource/entity/enemy/guard/idle_down.png");

        this.game.load.image("entity_Enemy_Helicopter_Shadow_Left", "resource/entity/enemy/helicopter/shadow_left.png");
        this.game.load.image("entity_Enemy_Helicopter_Shadow_Right", "resource/entity/enemy/helicopter/shadow_right.png");
        this.game.load.image("entity_Enemy_Helicopter_Shadow_Up", "resource/entity/enemy/helicopter/shadow_up.png");
        this.game.load.image("entity_Enemy_Helicopter_Shadow_Down", "resource/entity/enemy/helicopter/shadow_down.png");


        this.game.load.image("entity_Player_Fighter_Shadow_Left", "resource/entity/player/fighter/shadow_left.png");
        this.game.load.image("entity_Player_Fighter_Shadow_Right", "resource/entity/player/fighter/shadow_right.png");
        this.game.load.image("entity_Player_Fighter_Shadow_Up", "resource/entity/player/fighter/shadow_up.png");
        this.game.load.image("entity_Player_Fighter_Shadow_Down", "resource/entity/player/fighter/shadow_down.png");

        this.game.load.image("entity_Player_Marine_Idle_Left", "resource/entity/player/marine/idle_left.png");
        this.game.load.image("entity_Player_Marine_Idle_Right", "resource/entity/player/marine/idle_right.png");
        this.game.load.image("entity_Player_Marine_Idle_Up", "resource/entity/player/marine/idle_up.png");
        this.game.load.image("entity_Player_Marine_Idle_Down", "resource/entity/player/marine/idle_down.png");

        this.game.load.image("effects_Gibs_MarineHead", "resource/effects/gibs/marine_head.png");
        this.game.load.image("effects_Gibs_MarineLeg", "resource/effects/gibs/marine_leg.png");
        this.game.load.image("effects_Gibs_MarineArm", "resource/effects/gibs/marine_arm.png");

        this.game.load.image("effects_Gibs_GuardHead", "resource/effects/gibs/guard_head.png");
        this.game.load.image("effects_Gibs_GuardLeg", "resource/effects/gibs/guard_leg.png");
        this.game.load.image("effects_Gibs_GuardArm", "resource/effects/gibs/guard_arm.png");

        this.game.load.image("effects_Cloud_1", "resource/effects/cloud_1.png");
        this.game.load.image("effects_Cloud_2", "resource/effects/cloud_2.png");
        this.game.load.image("effects_Cloud_3", "resource/effects/cloud_3.png");

        this.game.load.image("button_Menu", "resource/gui/button/button_menu.png");

        this.game.load.image("button_Pause", "resource/gui/button/button_pause.png");
        this.game.load.image("button_Restart", "resource/gui/button/button_restart.png");
        this.game.load.image("button_Resume", "resource/gui/button/button_resume.png");

        this.game.load.image("timebar_Bar", "resource/gui/timebar/time_bar.png");
        this.game.load.image("timebar_Stripe", "resource/gui/timebar/time_bar_stripe.png");
        this.game.load.image("timebar_Glass", "resource/gui/timebar/time_bar_glass.png");

        this.game.load.image("effects_Crater_Bomber", "resource/effects/craters_0.png");
        this.game.load.image("effects_Crater_Fighter", "resource/effects/craters_1.png");
        this.game.load.image("effects_Crater_Tank", "resource/effects/craters_2.png");
        this.game.load.image("effects_Crater_Helicopter", "resource/effects/craters_3.png");
        this.game.load.image("effects_Crater_AntiAir", "resource/effects/craters_4.png");
        this.game.load.image("effects_Crater_EnemyTank", "resource/effects/craters_5.png");

        this.game.load.image("misc_Star", "resource/gui/timebar/star.png");
        this.game.load.image("victory_Star", "resource/gui/panels/victory_star.png");
        this.game.load.image("victory_Continue", "resource/gui/button/victory_continue.png");
        this.game.load.image("victory_Restart", "resource/gui/button/victory_restart.png");
        this.game.load.image("button_NextLevel", "resource/gui/button/button_nextlevel.png");
        this.game.load.image("button_Replay", "resource/gui/button/button_replay.png");

        this.game.load.image("gui_Panel_Pause", "resource/gui/panels/pause_panel.png");
        this.game.load.image("gui_Panel_Victory", "resource/gui/panels/victory.png");
        this.game.load.image("gui_Panel_Defeat", "resource/gui/panels/defeat.png");
        this.game.load.image("gui_Panel_About", "resource/gui/panels/about.png");
        this.game.load.image("misc_Darkness", "resource/gui/misc/darkness.png");

        this.game.load.image("effects_BombSideview", "resource/effects/bomb_sideview.png");
        this.game.load.image("effects_BombFrontview", "resource/effects/bomb_frontview.png");
        this.game.load.image("effects_BombedBarrickades", "resource/effects/bombed_barrickades.png");
        this.game.load.image("effects_AA_Rocket", "resource/effects/anti_air_rocket.png");
        this.game.load.image("effects_Crater", "resource/effects/crater.png");
        this.game.load.image("effects_AlertSign", "resource/effects/alertsign.png");

        this.game.load.spritesheet("button_Arrows", "resource/gui/button/arrows.png", 85, 112, 2, 0, 1);
        this.game.load.spritesheet("button_Mute", "resource/gui/button/button_mute.png", 87, 80, 2, 0, 0);
        this.game.load.spritesheet("timebar_Stars", "resource/gui/timebar/time_bar_stars.png", 276, 82, 3, 0, 0);

        this.game.load.audio("music_theme", "resource/sound/bensound-epic.mp3", true);

        this.game.load.audio("snd_ally_marine_fire", "resource/sound/ally_marine_fire.mp3", true);
        this.game.load.audio("snd_guard_fire", "resource/sound/enemy_guard_shoot.mp3", true);
        this.game.load.audio("tank_shoot", "resource/sound/tank_shoot.mp3", true);
        this.game.load.audio("enemy_tank_shoot", "resource/sound/enemy_tank_shoot.mp3", true);
        this.game.load.audio("bomb_explosion", "resource/sound/bomb_explosion_B.mp3", true);
        this.game.load.audio("click", "resource/sound/click.mp3", true);
        this.game.load.audio("rocket_start", "resource/sound/rocket_start.mp3", true);
        this.game.load.audio("tank_engine", "resource/sound/tank_engine.mp3", true);
        this.game.load.audio("rocket_hit", "resource/sound/rocket_hit.mp3", true);
        this.game.load.audio("helicopter_rockets", "resource/sound/HelicopterRockets.mp3", true);
        this.game.load.audio("death_1", "resource/sound/death_1.mp3", true);
        this.game.load.audio("death_2", "resource/sound/death_2.mp3", true);
        this.game.load.audio("death_3", "resource/sound/death_3.mp3", true);
        this.game.load.audio("whistle", "resource/sound/whistle.mp3", true);
        this.game.load.audio("affirm_1", "resource/sound/affirm_1.mp3", true);
        this.game.load.audio("affirm_2", "resource/sound/affirm_2.mp3", true);
        this.game.load.audio("affirm_3", "resource/sound/affirm_3.mp3", true);
        this.game.load.audio("hit_1", "resource/sound/hit_1.mp3", true);
        this.game.load.audio("hit_2", "resource/sound/hit_2.mp3", true);
        this.game.load.audio("bomber_fly", "resource/sound/bomber_fly.mp3", true);
        this.game.load.audio("whistle_lose", "resource/sound/whistle.mp3", true);
        this.game.load.audio("snare", "resource/sound/snare.mp3", true);
        this.game.load.audio("alert", "resource/sound/alert.mp3", true);
        this.game.load.audio("lose", "resource/sound/lose.mp3", true);
        this.game.load.audio("taking_fire", "resource/sound/taking_fire.mp3", true);
        this.game.load.audio("transition", "resource/sound/transition.mp3", true);
        this.game.load.audio("star_placed", "resource/sound/star_placed.mp3", true);
        this.game.load.audio("footsteps", "resource/sound/footsteps.mp3", true);
        this.game.load.audio("victory", "resource/sound/victory.mp3", true);
        this.game.load.audio("whoo", "resource/sound/whoo.mp3", true);
        this.game.load.audio("guard_death_1", "resource/sound/guard_death_1.mp3", true);
        this.game.load.audio("guard_death_2", "resource/sound/guard_death_2.mp3", true);
        this.game.load.audio("fighter_fire", "resource/sound/fighter_fire.mp3", true);

        this.game.load.spritesheet("tiles_WaterEdge_", "resource/tiles/WaterEdge_.png", 128, 128, 18, 0, 0);
    },
    loadUpdate: function() {
        this.loadingBarFilled.cropRect.width = this.loadingBar.width * (this.game.load.progress / 100.0);
        this.loadingBarFilled.updateCrop();

        this.textfield.text = this.game.load.progress + "%";
    },
    update: function() {

    },
    create: function() {

        this.loadingBar.visible = false;
        this.textfield.visible = false;

        this.loadingBarFilled.cropRect.width = this.loadingBar.width * (this.game.load.progress / 100.0);
        this.loadingBarFilled.updateCrop();

        this.game.add.tween(this.loadingBarFilled.position).to({
            y: 960
        }, 450, Phaser.Easing.Quadratic.In, true)

        this.game.add.tween(PreloadState.logo.position).to({
            y: 0
        }, 500, Phaser.Easing.Quadratic.InOut, true).onComplete.add(function() {
            //GameplayState.CurrentLevel = 1;
            this.game.state.start("main_menu", false);
        }, this);
    },
    shutdown: function() {

        this.loadingBar.destroy();
        this.loadingBarFilled.destroy();
        this.textfield.destroy();
    }
};