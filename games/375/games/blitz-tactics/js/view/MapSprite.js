function VIEW_MapSprite(ix, iy, group, type, connectionFlags) {
    this._type = type;
    this._costume = group.create(ix, iy, VIEW_MapSprite.TranslateTypeToKey(this._type));
    this._costumeAnimation = null;
    this._decals = null;

    //if (type == MODEL_MapCell.Flag) {
    //    this._costume.animations.add("weaving").play(12, true);
    //}

    if (type == MODEL_MapCell.Water) {
        this._costumeAnimation = this._costume.animations.add("loop");
        this._costumeAnimation.play(8, true);
        this._decals = [];
        var frame = 0;
        var mainDecal = group.create(ix, iy - 1, "tiles_WaterEdge_");
        this._decals.push(mainDecal);
        var bLeftConnected = ((connectionFlags & VIEW_MapSprite.Connection_W) == VIEW_MapSprite.Connection_W);
        var bRightConnected = ((connectionFlags & VIEW_MapSprite.Connection_E) == VIEW_MapSprite.Connection_E);
        var bUpConnected = ((connectionFlags & VIEW_MapSprite.Connection_N) == VIEW_MapSprite.Connection_N);
        var bDownConnected = ((connectionFlags & VIEW_MapSprite.Connection_S) == VIEW_MapSprite.Connection_S);

        var bUpLeftConnected = ((connectionFlags & VIEW_MapSprite.Connection_SW) == VIEW_MapSprite.Connection_SW);
        var bUpRightConnected = ((connectionFlags & VIEW_MapSprite.Connection_SE) == VIEW_MapSprite.Connection_SE);
        var bDownLeftConnected = ((connectionFlags & VIEW_MapSprite.Connection_NW) == VIEW_MapSprite.Connection_NW);
        var bDownRightConnected = ((connectionFlags & VIEW_MapSprite.Connection_NE) == VIEW_MapSprite.Connection_NE);

        var state = [bLeftConnected ? 1 : 0, bRightConnected ? 1 : 0, bUpConnected ? 1 : 0, bDownConnected ? 1 : 0];
        if (state[0] == 0 && state[1] == 0 && state[2] == 0 && state[3] == 0) {
            frame = 7;
        }
        if (state[0] == 0 && state[1] == 0 && state[2] == 0 && state[3] == 1) {
            frame = 3;
        }
        if (state[0] == 0 && state[1] == 0 && state[2] == 1 && state[3] == 0) {
            frame = 9;
        }
        if (state[0] == 0 && state[1] == 0 && state[2] == 1 && state[3] == 1) {
            frame = 6;
            var addDecal = group.create(ix, iy - 1, "tiles_WaterEdge_");
            addDecal.frame = 8;
            this._decals.push(addDecal);
        }
        if (state[0] == 0 && state[1] == 1 && state[2] == 0 && state[3] == 0) {
            frame = 15;
        }
        if (state[0] == 0 && state[1] == 1 && state[2] == 0 && state[3] == 1) {
            frame = 0;
        }
        if (state[0] == 0 && state[1] == 1 && state[2] == 1 && state[3] == 0) {
            frame = 12;
        }
        if (state[0] == 0 && state[1] == 1 && state[2] == 1 && state[3] == 1) {
            frame = 6;
        }
        if (state[0] == 1 && state[1] == 0 && state[2] == 0 && state[3] == 0) {
            frame = 16;
        }
        if (state[0] == 1 && state[1] == 0 && state[2] == 0 && state[3] == 1) {
            frame = 2;
        }
        if (state[0] == 1 && state[1] == 0 && state[2] == 1 && state[3] == 0) {
            frame = 14;
        }
        if (state[0] == 1 && state[1] == 0 && state[2] == 1 && state[3] == 1) {
            frame = 8;
        }
        if (state[0] == 1 && state[1] == 1 && state[2] == 0 && state[3] == 0) {
            frame = 1;
            var addDecal = group.create(ix, iy - 1, "tiles_WaterEdge_");
            addDecal.frame = 13;
            this._decals.push(addDecal);
        }
        if (state[0] == 1 && state[1] == 1 && state[2] == 0 && state[3] == 1) {
            frame = 1;
        }
        if (state[0] == 1 && state[1] == 1 && state[2] == 1 && state[3] == 0) {
            frame = 13;
        }
        if (state[0] == 1 && state[1] == 1 && state[2] == 1 && state[3] == 1) {
            frame = 17;
        }
        mainDecal.frame = frame;

        if (!bUpLeftConnected && bUpConnected && bLeftConnected) {
            var addDecal = group.create(ix, iy - 1, "tiles_WaterEdge_");
            addDecal.frame = 11;
            this._decals.push(addDecal);
        }
        if (!bUpRightConnected && bUpConnected && bRightConnected) {
            var addDecal = group.create(ix, iy - 1, "tiles_WaterEdge_");
            addDecal.frame = 10;
            this._decals.push(addDecal);
        }
        if (!bDownRightConnected && bDownConnected && bRightConnected) {
            var addDecal = group.create(ix, iy - 1, "tiles_WaterEdge_");
            addDecal.frame = 4;
            this._decals.push(addDecal);
        }
        if (!bDownLeftConnected && bDownConnected && bLeftConnected) {
            var addDecal = group.create(ix, iy - 1, "tiles_WaterEdge_");
            addDecal.frame = 5;
            this._decals.push(addDecal);
        }
    }

    // fix the position for not 128 sized sprites
    this._costume.position.y = iy - (this._costume.height - GameplayState.STD_CELL_SIZE) - 1;

    this.destroy = function() {
        this._costume.destroy();
        if (this._decals != null) {
            for (var i = 0; i < this._decals.length; i++) {
                this._decals[i].destroy();
            }
        }
    }
};
VIEW_MapSprite.TranslateTypeToKey = function(type) {
    var key = null;
    switch (type) {
        case MODEL_MapCell.Grass_0:
            key = "tiles_Grass0";
            break;
        case MODEL_MapCell.Grass_1:
            key = "tiles_Grass1";
            break;
        case MODEL_MapCell.Grass_2:
            key = "tiles_Grass2";
            break;
        case MODEL_MapCell.Mountain:
            key = "tiles_Mountain";
            break;
        case MODEL_MapCell.Mountain_2:
            key = "tiles_Mountain_2";
            break;
        case MODEL_MapCell.Water:
            key = "tiles_Water";
            break;
        case MODEL_MapCell.Barricade:
            key = "tiles_Barricade";
            break;
        case MODEL_MapCell.Flag:
            key = "tiles_FlagPole";
            break;
    }
    return key;
};
VIEW_MapSprite.Connection_S = 1;
VIEW_MapSprite.Connection_SE = 2;
VIEW_MapSprite.Connection_E = 4;
VIEW_MapSprite.Connection_NE = 8;
VIEW_MapSprite.Connection_N = 16;
VIEW_MapSprite.Connection_NW = 32;
VIEW_MapSprite.Connection_W = 64;
VIEW_MapSprite.Connection_SW = 128;

//  S
// W E
//  N