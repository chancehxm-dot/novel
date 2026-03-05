function TransitionAnimator() {};

TransitionAnimator.Group = null;

TransitionAnimator.BringOnTop = function(game) {
    game.world.bringToTop(TransitionAnimator.Group);
};

TransitionAnimator.LeftShutter = null;
TransitionAnimator.RightShutter = null;

TransitionAnimator.Remove = function(game, onFinished, context) {
    if (TransitionAnimator.LeftShutter == null)
        return;
    var tw2 = game.add.tween(TransitionAnimator.LeftShutter.position);
    tw2.to({
        x: -TransitionAnimator.LeftShutter.width
    }, 500, Phaser.Easing.Quadratic.In, true);
    game.add.tween(TransitionAnimator.RightShutter.position).to({
        x: GameApplication.NATIVE_WIDTH - TransitionAnimator.RightShutter.width
    }, 500, Phaser.Easing.Quadratic.In, true);
    game.time.events.add(550, function() {
        TransitionAnimator.LeftShutter.destroy();
        TransitionAnimator.RightShutter.destroy();
        TransitionAnimator.LeftShutter = null;
        TransitionAnimator.RightShutter = null;
        if (onFinished)
            onFinished.call(context);
    }, this);
};

TransitionAnimator.Do = function(game, onFinished, context) {

    game.add.audio("transition", 1.0, false, true).play();

    TransitionAnimator.LeftShutter = TransitionAnimator.Group.create(0, 0, "misc_Transition");
    TransitionAnimator.LeftShutter.position.x -= TransitionAnimator.LeftShutter.width;

    TransitionAnimator.RightShutter = TransitionAnimator.Group.create(0, 0, "misc_Transition");
    TransitionAnimator.RightShutter.position.x = GameApplication.NATIVE_WIDTH + TransitionAnimator.RightShutter.width;
    TransitionAnimator.RightShutter.scale.x = -1;

    var tween = game.add.tween(TransitionAnimator.LeftShutter.position);
    tween.to({
        x: 0
    }, 300, Phaser.Easing.Quintic.In, true);

    var tween2 = game.add.tween(TransitionAnimator.RightShutter.position);
    tween2.to({
        x: GameApplication.NATIVE_WIDTH
    }, 300, Phaser.Easing.Quintic.In, true);

    game.time.events.add(800, function() {
        onFinished.call(context);

    }, this);
};