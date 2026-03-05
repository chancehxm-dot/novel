function GameApplication(game) {
    game.app = this;

    this._mainTheme = null;
}

GameApplication.NATIVE_WIDTH = 640;
GameApplication.NATIVE_HEIGHT = 960;
GameApplication.bMute = false;
GameApplication.bPaused = false;
GameApplication.b0LvlHintWatched = false;
GameApplication.b2LvlHintWatched = false;
GameApplication.b5LvlHintWatched = false;