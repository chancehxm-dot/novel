var ApiInstance = null;

function LoadSaveData() {

    if (typeof(Storage) !== "undefined") {

        var stars = localStorage.getItem("Game__SAVEDATA__BT_Stars");
        var unlocked = localStorage.getItem("Game__SAVEDATA__BT_Unlocked");
        var wasLaunched = localStorage.getItem("Game__SAVEDATA__BT_WasLaunched");
        var highScores = localStorage.getItem("Game__SAVEDATA__BT_Highscores");

        if (stars != undefined) {

            var starsArray = JSON.parse(stars);

            LevelStats.unlocked = [true];
            LevelStats.stars = [0];

            for (var i = 0; i < starsArray.length; i++)
                if (starsArray[i] != null) LevelStats.stars[i] = parseInt(starsArray[i]);
        }

        if (unlocked != undefined) {

            var unlockedArray = JSON.parse(unlocked);

            for (var i = 0; i < unlockedArray.length; i++)
                if (unlockedArray[i] != null) LevelStats.unlocked[i] = unlockedArray[i];
        }

        if (wasLaunched != undefined) {

            var wasLaunchedArray = JSON.parse(wasLaunched);

            for (var i = 0; i < wasLaunchedArray.length; i++)
                if (wasLaunchedArray[i] != null) LevelStats.wasLaunched[i] = wasLaunchedArray[i];
        }

        if (highScores != undefined) {

            var highScoresArray = JSON.parse(highScores);

            for (var i = 0; i < highScoresArray.length; i++)
                if (highScoresArray[i] != null) LevelStats.highScores[i] = parseInt(highScoresArray[i]);
        }
    }
};

function SaveProgress() {

    if (typeof(Storage) !== "undefined") {

        localStorage.setItem("Game__SAVEDATA__BT_Stars", JSON.stringify(LevelStats.stars));
        localStorage.setItem("Game__SAVEDATA__BT_Unlocked", JSON.stringify(LevelStats.unlocked));
        localStorage.setItem("Game__SAVEDATA__BT_WasLaunched", JSON.stringify(LevelStats.wasLaunched));
        localStorage.setItem("Game__SAVEDATA__BT_Highscores", JSON.stringify(LevelStats.highScores));
    }
};

function main() {

    LoadSaveData();

    var SpilData = {

        id: "576742227280295527" // Replace with the value you receive from Spil Games
    };



    // <!-- Initialise the Spil HTML5 API -->
    GameAPI.loadAPI(function(apiInstance) {

        ApiInstance = apiInstance;

        var parent = document.getElementById("GameWrapper");
        parent.style.position = "fixed";

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
            var game = new Phaser.Game(640, 960, Phaser.CANVAS, null, BootState);
        else
            var game = new Phaser.Game(640, 960, Phaser.AUTO, null, BootState);

        //var game = new Phaser.Game(640,960, Phaser.AUTO, null, BootState);


        //var game = new Phaser.Game(640,960, Phaser.AUTO, null, BootState);

        new GameApplication(game);

    }, SpilData);
}

window.addEventListener('scroll', function() {
    // Do not scroll when keyboard is visible
    if (document.activeElement === document.body && window.scrollY > 0) {
        document.body.scrollTop = 0;
    }
}, true);

window.onload = main;