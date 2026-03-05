window["GD_OPTIONS"] = {
    "gameId": _GameID,
    "onEvent": function(event) {
        switch (event.name) {
            case "SDK_GAME_START":
                if (ig && ig.game) {
                    ig.game.adShown = false;
                    if (typeof ig.game.resumeGame == 'function') ig.game.resumeGame();
                    if (ig.soundHandler) ig.soundHandler.forceUnMuteAll();
                }
                break;
            case "SDK_GAME_PAUSE":
                if (ig && ig.game) {
                    ig.game.adShown = true;
                    if (typeof ig.game.pauseGame == 'function') ig.game.pauseGame();
                    if (ig.soundHandler) ig.soundHandler.forceMuteAll();
                }
                break;
            case "SDK_GDPR_TRACKING":
                // this event is triggered when your user doesn't want to be tracked
                break;
            case "SDK_GDPR_TARGETING":
                // this event is triggered when your user doesn't want personalised targeting of ads and such
                break;
        }
    },
};