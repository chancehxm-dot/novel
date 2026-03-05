function ButtonAnimator() {};

ButtonAnimator.DoPress = function(game, button, mult) {

    var tween = game.add.tween(button.scale);

    var scalex = 1.2;

    if (mult)
        scalex = -1.2;

    game.add.audio("click", 1.0, false, true).play();

    button.inputEnabled = false;

    tween.to({
        y: 0.8
    }, 100, Phaser.Easing.Quadratic.Out, false, 0, 0, true);

    tween.onStart.add(function() {

        var tween2 = game.add.tween(button.scale);
        tween2.to({
            x: scalex
        }, 120, Phaser.Easing.Quadratic.Out, false, 0, 0, true);

        tween2.onComplete.add(function() {

            button.inputEnabled = true;
        }, this);

        tween2.start();
    }, this);

    return tween;
};