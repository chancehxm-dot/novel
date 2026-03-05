var BShoot = BShoot || {};

BShoot.game = new Phaser.Game(768, 1024, Phaser.AUTO);

BShoot.game.state.add('Boot', BShoot.BootState);
BShoot.game.state.add('Preload', BShoot.PreloadState);
BShoot.game.state.add('Game', BShoot.GameState);
BShoot.game.state.add('Menu', BShoot.MenuState);
BShoot.game.state.add('Top10', BShoot.Top10State);

BShoot.game.state.start('Boot');
