function MainMenuState() {};
MainMenuState.prototype = {
    background: null,
    moregames: null,
    play: null,
    info: null,
    logo: null,
    muteButton: null,

    onInfoPress: function() {
        this.info.inputEnabled = false;
        this.play.inputEnabled = false;

        this.game.add.tween(this.moregames.position).to({
            x: -this.moregames.width
        }, 250, Phaser.Easing.Quadratic.In, true);
        this.game.add.tween(this.info.position).to({
            x: GameApplication.NATIVE_WIDTH
        }, 250, Phaser.Easing.Quadratic.In, true);
        this.game.add.tween(this.play.scale).to({
            x: 0,
            y: 0
        }, 250, Phaser.Easing.Quadratic.In, true).onComplete.add(function() {
            this.info.inputEnabled = false;
            this.play.inputEnabled = false;

            var infop = this.game.add.button(320, 960, "gui_Panel_About", function() {
                this.game.add.tween(infop.position).to({
                    y: 960
                }, 250, Phaser.Easing.Quadratic.In, true, 0).onComplete.add(function() {
                    this.info.inputEnabled = true;
                    this.play.inputEnabled = true;

                    this.game.add.tween(this.moregames.position).to({
                        x: 0
                    }, 250, Phaser.Easing.Quadratic.Out, true);
                    this.game.add.tween(this.play.scale).to({
                        x: 1,
                        y: 1
                    }, 250, Phaser.Easing.Quadratic.Out, true);
                    this.game.add.tween(this.info.position).to({
                        x: GameApplication.NATIVE_WIDTH - this.info.width
                    }, 250, Phaser.Easing.Quadratic.Out, true);
                }, this);
            }, this);
            infop.anchor.set(0.5, 0.0);
            this.game.add.tween(infop.position).to({
                y: 350
            }, 500, Phaser.Easing.Quadratic.Out, true, 500);

        }, this);
        this.game.add.audio("click", 1.0, false, true).play();
    },

    onPlayPress: function() {

        this.play.inputEnabled = false;

        var tween = ButtonAnimator.DoPress(this.game, this.play);

        tween.onComplete.add(function() {

            this.play.inputEnabled = false;

            this.game.add.tween(this.play.scale).to({
                x: 0,
                y: 0
            }, 250, Phaser.Easing.Quadratic.In, true).onComplete.add(function() {

                this.game.add.tween(this.muteButton.position).to({
                    y: -50
                }, 250, Phaser.Easing.Quadratic.In, true);

                this.game.add.tween(this.moregames.position).to({
                    x: -this.moregames.width
                }, 250, Phaser.Easing.Quadratic.In, true);
                this.game.add.tween(this.info.position).to({
                    x: GameApplication.NATIVE_WIDTH
                }, 250, Phaser.Easing.Quadratic.In, true);

                this.game.add.tween(this.logo.scale).to({
                    x: 0.0,
                    y: 0.0
                }, 250, Phaser.Easing.Quadratic.In, true);

            }, this);

            this.game.time.events.add(550, function() {

                TransitionAnimator.BringOnTop(this.game);
                TransitionAnimator.Do(this.game, function() {

                    this.game.state.start("levelselection", false);
                }, this);

            }, this);
        }, this);

        tween.start();
    },

    create: function() {

        this.background = this.game.add.sprite(0, 0, "MainMenu_Background");

        if (PreloadState.logo != undefined) {
            this.logo = PreloadState.logo;
            PreloadState.logo = undefined;
        } else {
            this.logo = this.game.add.sprite(GameApplication.NATIVE_WIDTH / 2 + 15, 0, "Logo");
            this.logo.anchor.set(0.5, 0.0);
            this.logo.scale.set(0.0);
        }
        this.game.add.tween(this.logo.position).to({
            y: this.logo.position.y + 10
        }, 1000, Phaser.Easing.Quadratic.InOut, true, 0, 99999, true);

        this.moregames = this.game.add.button(0, GameApplication.NATIVE_HEIGHT, "Button_Moregames", function() {
            this.game.add.audio("click", 1.0, false, true).play();
            SpilMoreGamesData.action();
        }, this);
        this.info = this.game.add.button(GameApplication.NATIVE_WIDTH, GameApplication.NATIVE_HEIGHT, "Button_Info", this.onInfoPress, this);

        this.moregames.position.y -= this.moregames.height;
        this.info.position.y -= this.info.height;

        this.moregames.position.x -= this.moregames.width;

        this.play = this.game.add.button(GameApplication.NATIVE_WIDTH / 2, 500, "Button_Play", this.onPlayPress, this);
        this.play.anchor.set(0.5);
        this.play.alpha = 0.0;
        this.play.inputEnabled = false;
        this.game.add.tween(this.play.position).to({
            y: this.play.position.y + 5
        }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 99999, true);

        this.muteButton = this.game.add.button(55, -50, "button_Mute", function() {
            this.muteButton.inputEnabled = false;
            var tween = ButtonAnimator.DoPress(this.game, this.muteButton, true);
            this.game.time.events.add(130, function() {
                GameApplication.bMute = !GameApplication.bMute;
                this.muteButton.frame = GameApplication.bMute ? 0 : 1;
                this.game.sound.mute = GameApplication.bMute;
                this.muteButton.inputEnabled = true;
            }, this);
            tween.start();
        }, this);

        this.muteButton.scale.x = -1;
        this.muteButton.frame = GameApplication.bMute ? 0 : 1;
        this.muteButton.priorityID = 1;
        this.muteButton.anchor.set(0.5);

        TransitionAnimator.BringOnTop(this.game);

        this.game.world.bringToTop(this.logo);

        TransitionAnimator.Remove(this.game, function() {

            if (this.game.app._mainTheme == null) {
                this.game.app._mainTheme = this.game.add.audio("music_theme", 1.0, true, true).play();
            }

            this.game.world.bringToTop(this.muteButton);

            this.game.add.tween(this.logo.scale).to({
                x: 1.0,
                y: 1.0
            }, 250, Phaser.Easing.Quadratic.Out, true);
            this.game.add.tween(this.moregames.position).to({
                x: 0
            }, 250, Phaser.Easing.Quadratic.Out, true);
            this.game.add.tween(this.info.position).to({
                x: GameApplication.NATIVE_WIDTH - this.info.width
            }, 250, Phaser.Easing.Quadratic.Out, true);
            this.game.add.tween(this.muteButton.position).to({
                y: 45
            }, 250, Phaser.Easing.Quadratic.Out, true);

            this.game.time.events.add(1000, function() {

                this.game.add.tween(this.play).to({
                    alpha: 1
                }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                    this.play.inputEnabled = true;
                    this.game.add.tween(this.play).to({
                        alpha: 0.4
                    }, 500, Phaser.Easing.Linear.None, true, 0, 99999, true);

                }, this);
            }, this);
        }, this);
    },
    shutdown: function() {

        this.game.tweens.removeAll();

        this.muteButton.destroy();
        this.logo.destroy();
        this.play.destroy();
        this.info.destroy();
        this.moregames.destroy();
        this.background.destroy();
    }
};