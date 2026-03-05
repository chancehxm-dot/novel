function GroupManagement() {};

GroupManagement.PauseAllAliveAnimations = function(group) {

    group.forEach(function(sprite) {
        if (sprite.animations != undefined)
            if (sprite.animations.currentAnim != undefined) sprite.animations.currentAnim.paused = true;
    });
};

GroupManagement.ResumeAllAliveAnimations = function(group) {

    group.forEach(function(sprite) {
        if (sprite.animations != undefined)
            if (sprite.animations.currentAnim != undefined) sprite.animations.currentAnim.paused = false;
    });
};

GroupManagement.DestroyAllChildren = function(group) {

    var toDestroy = [];

    group.forEach(function(sprite) {
        toDestroy.push(sprite);
    });

    for (var i = 0; i < toDestroy.length; i++)
        toDestroy[i].destroy();
};

GroupManagement.DestroyAllChildrenAndGroup = function(group) {

    var toDestroy = [];

    group.forEach(function(sprite) {
        toDestroy.push(sprite);
    });

    for (var i = 0; i < toDestroy.length; i++)
        toDestroy[i].destroy();

    group.destroy();
};