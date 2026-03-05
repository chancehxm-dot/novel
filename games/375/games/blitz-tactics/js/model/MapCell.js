function MODEL_MapCell(type) {
    this.type = type;
};
MODEL_MapCell.Grass_0 = 0xF1;
MODEL_MapCell.Grass_1 = 0xF2;
MODEL_MapCell.Grass_2 = 0xF3;
MODEL_MapCell.Mountain = 0xF4;
MODEL_MapCell.Mountain_2 = 0xF5;
MODEL_MapCell.Water = 0xF6;
MODEL_MapCell.Barricade = 0xF7;
MODEL_MapCell.Flag = 0xF8;
MODEL_MapCell.IsWalkable = function(type) {
    var bWalkable = false;
    if (type == MODEL_MapCell.Grass_0 || type == MODEL_MapCell.Grass_1 || type == MODEL_MapCell.Grass_2) {
        bWalkable = true;
    }
    return bWalkable;
};
MODEL_MapCell.isTileDestroyable = function(type) {
    return (type == MODEL_MapCell.Barricade);
};