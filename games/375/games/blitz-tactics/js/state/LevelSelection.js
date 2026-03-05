function LevelSelectionState() {};
LevelSelectionState.prototype = {

    levelIcons: [],
    muteButton: null,
    menuButton: null,
    leftButton: null,
    rightButton: null,

    onLevelButtonPressed: function(button) {

        for (var i = 0; i < this.levelIcons.length; i++)
            this.levelIcons[i].inputEnabled = false;

        this.rightButton.inputEnabled = false;
        this.leftButton.inputEnabled = false;

        var tween = ButtonAnimator.DoPress(this.game, button);

        tween.onComplete.add(function() {

            this.game.add.tween(this.rightButton.position).to({
                y: 1050
            }, 200, Phaser.Easing.Quadratic.In, true).onComplete.add(function() {}, this);

            this.game.add.tween(this.leftButton.position).to({
                y: 1050
            }, 200, Phaser.Easing.Quadratic.In, true).onComplete.add(function() {}, this);

            this.game.add.tween(this.menuButton.scale).to({
                x: 0,
                y: 0
            }, 200, Phaser.Easing.Quadratic.In, true);
            this.game.add.tween(this.muteButton.position).to({
                y: -50
            }, 200, Phaser.Easing.Quadratic.In, true);

            this.hideLevelIcons(function() {

                GameplayState.CurrentLevel = button.levelID + 1;

                TransitionAnimator.BringOnTop(this.game);
                this.game.state.start("gameplay", false);
            }, this);
        }, this);

        tween.start();
    },

    switchChapter: function(delta) {
        LevelSelectionState.CurrentChapter = Phaser.Math.clamp(LevelSelectionState.CurrentChapter + delta, 0, 4);
        if (LevelSelectionState.CurrentChapter == 0) {

            this.leftButton.frame = 0;
            this.rightButton.frame = 1;
        } else if (LevelSelectionState.CurrentChapter == 3) {

            this.leftButton.frame = 1;
            this.rightButton.frame = 0;
        } else {
            this.leftButton.frame = 1;
            this.rightButton.frame = 1;
        }
    },

    showLevelIcons: function(bInstant) {

        var cntr = LevelSelectionState.CurrentChapter * 9;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {

                var levelID = i * 3 + j + LevelSelectionState.CurrentChapter * 9;

                var key = "Level_Locked";

                if (LevelStats.unlocked[levelID] == true) {
                    key = "Level_Next";

                    if (LevelStats.unlocked[levelID + 1] == true) {
                        key = "Level_Done";
                    }
                }

                var button = this.game.add.button(141 + j * 180, 285 + i * 200, key, this.onLevelButtonPressed, this);
                button.levelID = levelID;

                var text = this.game.make.bitmapText(-3, -80, "numbers", (button.levelID + 1).toString(), 30);
                text.cacheAsBitmap = true;
                text.pivot.x = Math.round(text.width * 0.5);

                var counter = this.game.make.sprite(0, 60, "star_counter");
                counter.anchor.set(0.5);
                counter.frame = 0;

                if (key == "Level_Locked") {
                    text.visible = false;
                }

                if (key == "Level_Done") {
                    counter.frame = LevelStats.stars[cntr];
                }

                button.tf = text;
                button.counter = counter;
                button.addChild(text);
                button.addChild(counter);
                button.key = key;

                button.scale.set(0);

                button.inputEnabled = false;
                button.anchor.set(0.5);

                button.rotation = Phaser.Math.degToRad(45);

                if (bInstant) {
                    button.rotation = 0;
                    button.scale.set(1);

                    if (button.key != "Level_Locked")
                        button.inputEnabled = true;
                } else {
                    this.game.add.tween(button).to({
                        rotation: 0
                    }, 200, Phaser.Easing.Quadratic.Out, true);
                    this.game.add.tween(button.scale).to({
                        x: 1,
                        y: 1
                    }, 200, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {

                        if (this.key != "Level_Locked")
                            this.inputEnabled = true;
                    }, button);
                }

                this.levelIcons.push(button);

                cntr++;
            }
        }
    },

    hideLevelIcons: function(onComplete, context) {

        var maxDelay = 400;
        for (var i = 0; i < this.levelIcons.length; i++) {
            var icon = this.levelIcons[i];
            var delay = i * 20;
            maxDelay = Math.max(delay + 200, maxDelay);
            this.game.add.tween(icon).to({
                rotation: Phaser.Math.degToRad(45)
            }, 200, Phaser.Easing.Quadratic.In, true, delay);
            this.game.add.tween(icon.scale).to({
                x: 0,
                y: 0
            }, 200, Phaser.Easing.Quadratic.In, true, delay);
        }

        this.game.time.events.add(maxDelay, function() {
            for (var i = 0; i < this.levelIcons.length; i++) {
                this.levelIcons[i].tf.destroy();
                this.levelIcons[i].counter.destroy();
                this.levelIcons[i].destroy();
            }
            this.levelIcons = [];
            onComplete.call(context);
        }, this);
    },

    removeIconsInstant: function() {

        for (var i = 0; i < this.levelIcons.length; i++) {
            this.levelIcons[i].tf.destroy();
            this.levelIcons[i].counter.destroy();
            this.levelIcons[i].destroy();
        }
        this.levelIcons = [];
    },

    create: function() {
        LevelSelectionState.CurrentChapter = 0;

        this.showLevelIcons();

        this.leftButton = this.game.add.button(125 + 42, 1050, "button_Arrows", function() {
            if (this.leftButton.frame == 0)
                return;

            this.rightButton.inputEnabled = false;
            this.leftButton.inputEnabled = false;

            var tween = ButtonAnimator.DoPress(this.game, this.leftButton);
            this.game.time.events.add(130, function() {

                this.rightButton.inputEnabled = true;
                this.leftButton.inputEnabled = true;

                this.switchChapter(-1);
                this.removeIconsInstant();
                this.showLevelIcons(true);
            }, this);
            tween.start();
        }, this);
        this.leftButton.frame = 0;
        this.leftButton.anchor.set(0.5);

        this.rightButton = this.game.add.button(515 - 42, 1050, "button_Arrows", function() {
            if (this.rightButton.frame == 0)
                return;

            this.rightButton.inputEnabled = false;
            this.leftButton.inputEnabled = false;

            var tween = ButtonAnimator.DoPress(this.game, this.rightButton, -1.0);
            this.game.time.events.add(130, function() {

                this.rightButton.inputEnabled = true;
                this.leftButton.inputEnabled = true;

                this.switchChapter(1);
                this.removeIconsInstant();
                this.showLevelIcons(true);
            }, this);
            tween.start();
        }, this);
        this.rightButton.anchor.set(0.5);

        if (LevelSelectionState.CurrentChapter == 0) {
            this.rightButton.frame = 1;
            this.leftButton.inputEnabled = true;
        }

        this.rightButton.inputEnabled = false;
        this.leftButton.inputEnabled = false;

        this.game.add.tween(this.rightButton.position).to({
            y: 810 + 50
        }, 250, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            this.rightButton.inputEnabled = true;
        }, this);

        this.game.add.tween(this.leftButton.position).to({
            y: 810 + 50
        }, 250, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            this.leftButton.inputEnabled = true;
        }, this);

        this.rightButton.frame = 2;
        this.rightButton.scale.x = -1;

        this.muteButton = this.game.add.button(585, -50, "button_Mute", function() {
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
        }, 200, Phaser.Easing.Quadratic.Out, true);

        this.muteButton.frame = GameApplication.bMute ? 0 : 1;
        this.muteButton.priorityID = 1;
        this.muteButton.anchor.set(0.5);

        this.menuButton = this.game.add.button(320, 860, "button_Menu", function() {

            this.rightButton.inputEnabled = false;
            this.leftButton.inputEnabled = false;

            this.menuButton.inputEnabled = false;

            for (var i = 0; i < this.levelIcons.length; i++)
                this.levelIcons[i].inputEnabled = false;

            var tween = ButtonAnimator.DoPress(this.game, this.menuButton);

            tween.onComplete.addOnce(function() {

                this.game.add.tween(this.rightButton.position).to({
                    y: 1050
                }, 200, Phaser.Easing.Quadratic.In, true).onComplete.add(function() {}, this);

                this.game.add.tween(this.leftButton.position).to({
                    y: 1050
                }, 200, Phaser.Easing.Quadratic.In, true).onComplete.add(function() {}, this);

                this.game.add.tween(this.muteButton.position).to({
                    y: -50
                }, 200, Phaser.Easing.Quadratic.In, true);
                this.game.add.tween(this.menuButton.scale).to({
                    x: 0,
                    y: 0
                }, 200, Phaser.Easing.Quadratic.In, true);

                this.hideLevelIcons(function() {
                    this.game.state.start("main_menu", false);
                }, this);
            }, this);

            tween.start();
        }, this);
        this.menuButton.anchor.set(0.5);
        this.menuButton.scale.set();
        //this.menuButton.fixedToCamera = true;

        this.game.add.tween(this.menuButton.scale).to({
            x: 1,
            y: 1
        }, 200, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
            this.menuButton.inputEnabled = true;
        }, this);
    },
    shutdown: function() {

        this.game.tweens.removeAll();

        this.muteButton.destroy();
        this.menuButton.destroy();
        this.leftButton.destroy();
        this.rightButton.destroy();
    }
};

LevelSelectionState.CurrentChapter = 0;

function LevelStats() {};

LevelStats.unlocked = [true];
LevelStats.stars = [0];
LevelStats.wasLaunched = [false];
LevelStats.highScores = [0];
for (var i = 1; i < 37; i++) {

    LevelStats.unlocked[i] = false;
    LevelStats.stars[i] = 0;
    LevelStats.wasLaunched[i] = false;
    LevelStats.highScores[i] = 0;
}

// Load Savedata