var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
   music:null,
   shutterOn:[true],
   girlCompleted:[0,0,0,0,0,0],
   girlChoosed:[0,0,0,0,0,0],
   donecount:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],
   finalcount:[[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]],
   titlecount:[[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]],
};

Main.boot = function() {};
Main.boot.prototype = {
   preload: function(){
      game.stage.backgroundColor = '#000000';
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
            game.stage.disableVisibilityChange = true;
            game.renderer.renderSession.roundPixels = true;
game.scale.refresh();
            game.scale.setResizeCallback(this.gameResized, this);

            game.load.image('loading', 'assets/prebar.png');
	    game.load.image('prelogo', 'assets/prebg_logo.png');
            game.load.image('barover', 'assets/barover.png');
            
            
           
            game.load.onFileComplete.add(this.fileLoadFun, this);  
   },
   gameResized: function(manager, bounds){
      var xpos = window.innerWidth - (window.innerWidth / game.width);
             var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
             manager.setUserScale(scale, scale, 0, 0);
             game.scale.pageAlignHorizontally = true;
   },
   fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles){
      if (progress == 100) {
               game.load.onFileComplete.removeAll();
            game.state.start('preloader');   
            }
   }
}
Main.preloader = function(){};

Main.preloader.prototype = {
   init:function()
   {
      this.progressbar;
      this.check = 10;
      this.bgbtn;  
      this.progress;
	  this.prelogo;
   },
   preload:function(){
   this.progress = game.add.text(game.world.centerX,500,"LOADING: 0%",{font:"bold 22px Arial",fill: "#ffffff",align: "center"});
            this.progress.anchor.setTo(0.5)
			this.prelogo = game.add.sprite((game.width/2)-100, (game.height/2)-100, 'prelogo');

            this.prelogo.inputEnabled = true
            this.prelogo.input.useHandCursor = true;
            this.prelogo.events.onInputUp.add(this.openLink, this);
             
             game.load.crossOrigin='*';
             game.load.audio('music', ['assets/music.mp3']);
             game.load.spritesheet('soundicon', 'assets/soundicon.png',68,73);
             game.load.image('logo', 'assets/logo.png');
             game.load.spritesheet('effects', 'assets/effects.png',141,134);
             game.load.spritesheet('effectssd', 'assets/efftes012.png',367,335);
             
             game.load.image('dressupbg', 'assets/dressupbg.jpg');
             game.load.image('finalbg', 'assets/finalbg.jpg');
             game.load.image('shutterbg', 'assets/shutterbg.jpg');
             game.load.image('introbg', 'assets/introbg.jpg');
             game.load.image('morebtn', 'assets/button/morebtn.png');
             game.load.image('nextbtn', 'assets/button/nextbtn.png');
             game.load.image('playbtn', 'assets/button/playbtn.png');
             game.load.image('donebtn', 'assets/button/donebtn.png');
             game.load.image('resetbtn', 'assets/button/resetbtn.png');
             game.load.image('icon_panel', 'assets/iconset/icon_panel.png');
             game.load.image('elsa_body', 'assets/dressup/elsa_body.png');
             game.load.image('elsa_hand', 'assets/dressup/elsa_hand.png');
             game.load.image('rap_body', 'assets/dressup/rap_body.png');
             game.load.image('rap_hand', 'assets/dressup/rap_hand.png');
             game.load.image('aurora_body', 'assets/dressup/aurora_body.png');
             game.load.image('aurora_hand', 'assets/dressup/aurora_hand.png');
             game.load.image('cindrella_body', 'assets/dressup/cindrella_body.png');
             game.load.image('cindrella_hand', 'assets/dressup/cindrella_hand.png');
             game.load.image('cindrella_head', 'assets/dressup/cindrella_head.png');
             game.load.image('belle_body', 'assets/dressup/belle_body.png');
             game.load.image('belle_hand', 'assets/dressup/belle_hand.png');
             game.load.image('belle_head', 'assets/dressup/belle_head.png');
             game.load.image('ariel_body', 'assets/dressup/ariel_body.png');
             game.load.image('ariel_hand', 'assets/dressup/ariel_hand.png');
             game.load.image('ariel_head', 'assets/dressup/ariel_head.png');
             game.load.image('popup1', 'assets/titlescreen/popup1.png');
             game.load.image('title_name', 'assets/titlescreen/title_name.png');
             game.load.spritesheet('elsa_head', 'assets/dressup/elsa_head.png',90,106,9);
             game.load.spritesheet('rap_head', 'assets/dressup/rap_head.png',98,119,9);
             game.load.spritesheet('aurora_head', 'assets/dressup/aurora_head.png',93,115,5);
             game.load.spritesheet('select_icon1', 'assets/titlescreen/select_icon1.png',263,661,2);
             game.load.spritesheet('select_icon2', 'assets/titlescreen/select_icon2.png',266,669,2);
             game.load.spritesheet('select_icon3', 'assets/titlescreen/select_icon3.png',251,648,2);
             game.load.spritesheet('select_icon4', 'assets/titlescreen/select_icon4.png',250,695,2);
             game.load.spritesheet('select_icon5', 'assets/titlescreen/select_icon5.png',255,665,2);
             game.load.spritesheet('select_icon6', 'assets/titlescreen/select_icon6.png',224,711,2);
             for (var i=1;i<=5;i++) {
             game.load.image('dress_icon'+i, 'assets/iconset/dress_icon000'+i+'.png');
             game.load.image('elsa_backhair'+i, 'assets/dressup/elsa_backhair000'+i+'.png');
             game.load.image('elsa_hair'+i, 'assets/dressup/elsa_hair000'+i+'.png');
             game.load.image('elsa_dress'+i, 'assets/dressup/elsa_dress000'+i+'.png');
             game.load.image('elsa_bag'+i, 'assets/dressup/elsa_bag000'+i+'.png');
             game.load.image('elsa_leftearing'+i, 'assets/dressup/elsa_leftearing000'+i+'.png');
             game.load.image('elsa_rightearing'+i, 'assets/dressup/elsa_rightearing000'+i+'.png');
             game.load.image('elsa_shoe'+i, 'assets/dressup/elsa_shoe000'+i+'.png');
             game.load.image('elsa_leftshoe'+i, 'assets/dressup/elsa_leftshoe000'+i+'.png');
             game.load.image('elsa_rightshoe'+i, 'assets/dressup/elsa_rightshoe000'+i+'.png');
             game.load.image('rap_backhair'+i, 'assets/dressup/rap_backhair000'+i+'.png');
             game.load.image('rap_hair'+i, 'assets/dressup/rap_hair000'+i+'.png');
             game.load.image('rap_dress'+i, 'assets/dressup/rap_dress000'+i+'.png');
             game.load.image('rap_bag'+i, 'assets/dressup/rap_bag000'+i+'.png');
             game.load.image('rap_leftearing'+i, 'assets/dressup/rap_leftearing000'+i+'.png');
             game.load.image('rap_rightearing'+i, 'assets/dressup/rap_rightearing000'+i+'.png');
             game.load.image('rap_shoe'+i, 'assets/dressup/rap_shoe000'+i+'.png');
             game.load.image('aurora_backhair'+i, 'assets/dressup/aurora_backhair000'+i+'.png');
             game.load.image('aurora_hair'+i, 'assets/dressup/aurora_hair000'+i+'.png');
             game.load.image('aurora_dress'+i, 'assets/dressup/aurora_dress000'+i+'.png');
             game.load.image('aurora_bag'+i, 'assets/dressup/aurora_bag000'+i+'.png');
             game.load.image('aurora_earing'+i, 'assets/dressup/aurora_earing000'+i+'.png');
             //game.load.image('aurora_rightearing'+i, 'assets/dressup/aurora_rightearing000'+i+'.png');
             game.load.image('aurora_shoe'+i, 'assets/dressup/aurora_shoe000'+i+'.png');
             game.load.image('cindrella_backhair'+i, 'assets/dressup/cindrella_backhair000'+i+'.png');
             game.load.image('cindrella_hair'+i, 'assets/dressup/cindrella_hair000'+i+'.png');
             game.load.image('cindrella_dress'+i, 'assets/dressup/cindrella_dress000'+i+'.png');
             game.load.image('cindrella_bag'+i, 'assets/dressup/cindrella_bag000'+i+'.png');
             game.load.image('cindrella_earing'+i, 'assets/dressup/cindrella_earing000'+i+'.png');
             //game.load.image('cindrella_rightearing'+i, 'assets/dressup/cindrella_rightearing000'+i+'.png');
             game.load.image('cindrella_shoe'+i, 'assets/dressup/cindrella_shoe000'+i+'.png');
             game.load.image('belle_backhair'+i, 'assets/dressup/belle_backhair000'+i+'.png');
             game.load.image('belle_hair'+i, 'assets/dressup/belle_hair000'+i+'.png');
             game.load.image('belle_dress'+i, 'assets/dressup/belle_dress000'+i+'.png');
             game.load.image('belle_bag'+i, 'assets/dressup/belle_bag000'+i+'.png');
             game.load.image('belle_leftearing'+i, 'assets/dressup/belle_leftearing000'+i+'.png');
             game.load.image('belle_rightearing'+i, 'assets/dressup/belle_rightearing000'+i+'.png');
             game.load.image('belle_leftshoe'+i, 'assets/dressup/belle_leftshoe000'+i+'.png');
             game.load.image('belle_rightshoe'+i, 'assets/dressup/belle_rightshoe000'+i+'.png');
             game.load.image('ariel_fronthair'+i, 'assets/dressup/ariel_fronthair000'+i+'.png');
             game.load.image('ariel_backhair'+i, 'assets/dressup/ariel_backhair000'+i+'.png');
             game.load.image('ariel_hair'+i, 'assets/dressup/ariel_hair000'+i+'.png');
             game.load.image('ariel_dress'+i, 'assets/dressup/ariel_dress000'+i+'.png');
             game.load.image('ariel_backdress'+i, 'assets/dressup/ariel_backdress000'+i+'.png');
             game.load.image('ariel_bag'+i, 'assets/dressup/ariel_bag000'+i+'.png');
             game.load.image('ariel_leftearing'+i, 'assets/dressup/ariel_leftearing000'+i+'.png');
             game.load.image('ariel_rightearing'+i, 'assets/dressup/ariel_rightearing000'+i+'.png');
             game.load.image('ariel_shoe'+i, 'assets/dressup/ariel_shoe000'+i+'.png');
             }
            //for (var i=1;i<=6;i++) {
            // game.load.image('dressupbg'+i, 'assets/dressupbg'+i+'.jpg');
            //  }
              
                for(i=0;i<RelatedGames.length; i++)
            {
            game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
            }
            game.load.image('','');
             //LLLLL
             game.load.onFileComplete.add(this.fileLoadFunPre, this);
             
		  
   },
   fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               game.load.onFileComplete.removeAll();
               //AAAAAA
               game.state.start('title');   
            }
   },
   openLink:function(){
      CreateLinksInGame("Disney-Princess-Christmas-Ball","loading","logo");
   }
}
Main.title = function(){}

Main.title.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0,0,'finalbg');
        this.levelGroup.add(this.bg);
        
           this.elsaGroup=game.add.group();
        
        this.elsa_backhair=game.add.sprite(345.9,187.4,'elsa_backhair'+Main.titlecount[0][1]);
        this.elsa_backhair.anchor.setTo(0.5);
        
        this.elsa_body=game.add.sprite(296.7,434.6,'elsa_body');
        this.elsa_body.anchor.setTo(0.5);
        
        //this.elsa_shoe=game.add.sprite(367.5,672.6,'elsa_shoe'+Main.titlecount[0][2]);
        //this.elsa_shoe.anchor.setTo(0.5);
        //
        this.elsa_leftshoe=game.add.sprite(340.5,700,'elsa_leftshoe'+Main.titlecount[0][2]);
        this.elsa_leftshoe.anchor.setTo(0.5);
        
        this.elsa_rightshoe=game.add.sprite(385,642,'elsa_rightshoe'+Main.titlecount[0][2]);
        this.elsa_rightshoe.anchor.setTo(0.5);
        
        this.elsa_dress=game.add.sprite(338,461.5,'elsa_dress'+Main.titlecount[0][0]);
        this.elsa_dress.anchor.setTo(0.5);
        
        this.elsa_head=game.add.sprite(346.95,115.75,'elsa_head');
        this.elsa_head.anchor.setTo(0.5);
        
        this.elsa_hair=game.add.sprite(346,155.4,'elsa_hair'+Main.titlecount[0][1]);
        this.elsa_hair.anchor.setTo(0.5);
        
        this.elsa_leftearing=game.add.sprite(347.45,154.8,'elsa_leftearing'+Main.titlecount[0][3]);
        this.elsa_leftearing.anchor.setTo(0.5);
         this.elsa_leftearing.visible=false;
         
        this.elsa_rightearing=game.add.sprite(348.45,154.45,'elsa_rightearing'+Main.titlecount[0][3]);
        this.elsa_rightearing.anchor.setTo(0.5);
        
        this.elsa_bag=game.add.sprite(199.8,186.05,'elsa_bag'+Main.titlecount[0][4]);
        this.elsa_bag.anchor.setTo(0.5);
        
        this.elsa_hand=game.add.sprite(296.7,333.15,'elsa_hand');
        this.elsa_hand.anchor.setTo(0.5);
        
        this.elsaGroup.add(this.elsa_backhair);
        this.elsaGroup.add(this.elsa_body);
        this.elsaGroup.add(this.elsa_leftshoe);
        this.elsaGroup.add(this.elsa_rightshoe);
        this.elsaGroup.add(this.elsa_dress);
        this.elsaGroup.add(this.elsa_head);
        this.elsaGroup.add(this.elsa_hair);
        this.elsaGroup.add(this.elsa_leftearing);
        this.elsaGroup.add(this.elsa_rightearing);
        this.elsaGroup.add(this.elsa_bag);
        this.elsaGroup.add(this.elsa_hand);
        
        this.rapGroup=game.add.group();
        
        this.rap_backhair=game.add.sprite(334.8,164.5,'rap_backhair'+Main.titlecount[1][1]);
        this.rap_backhair.anchor.setTo(0.5);
        
        this.rap_body=game.add.sprite(332,445.95,'rap_body');
        this.rap_body.anchor.setTo(0.5);
        
        this.rap_shoe=game.add.sprite(281.45,698.4,'rap_shoe'+Main.titlecount[1][2]);
        this.rap_shoe.anchor.setTo(0.5);
        
        this.rap_dress=game.add.sprite(311,444.15,'rap_dress'+Main.titlecount[1][0]);
        this.rap_dress.anchor.setTo(0.5);
        
        this.rap_head=game.add.sprite(338.05,125.6,'rap_head');
        this.rap_head.anchor.setTo(0.5);
              
        this.rap_hair=game.add.sprite(337.5,164.8,'rap_hair'+Main.titlecount[1][1]);
        this.rap_hair.anchor.setTo(0.5);
        
        this.rap_leftearing=game.add.sprite(337.6,152.45,'rap_leftearing'+Main.titlecount[1][3]);
        this.rap_leftearing.anchor.setTo(0.5);
        
        this.rap_rightearing=game.add.sprite(338.5,152.45,'rap_rightearing'+Main.titlecount[1][3]);
        this.rap_rightearing.anchor.setTo(0.5);
        
        this.rap_leftearing.visible=false;
     this.rap_rightearing.visible=false;
        
        this.rap_bag=game.add.sprite(308,237.4,'rap_bag'+Main.titlecount[1][4]);
        this.rap_bag.anchor.setTo(0.5);
        
        this.rap_hand=game.add.sprite(335.95,280,'rap_hand');
        this.rap_hand.anchor.setTo(0.5);
        
        this.rapGroup.add(this.rap_backhair);
        this.rapGroup.add(this.rap_body);
        this.rapGroup.add(this.rap_shoe);
        this.rapGroup.add(this.rap_dress);
        this.rapGroup.add(this.rap_bag);
        this.rapGroup.add(this.rap_head);
        this.rapGroup.add(this.rap_hair);
                this.rapGroup.add(this.rap_hand);
        this.rapGroup.add(this.rap_leftearing);
        this.rapGroup.add(this.rap_rightearing);
        
        this.auroraGroup=game.add.group();
        
           this.aurora_backhair=game.add.sprite(335.6,140.85,'aurora_backhair'+Main.titlecount[2][1]);
        this.aurora_backhair.anchor.setTo(0.5);
        
        this.aurora_body=game.add.sprite(340.65,423.55,'aurora_body');
        this.aurora_body.anchor.setTo(0.5);
        
        this.aurora_shoe=game.add.sprite(323.1,705.7,'aurora_shoe'+Main.titlecount[2][2]);
        this.aurora_shoe.anchor.setTo(0.5);
        
        this.aurora_dress=game.add.sprite(322.05,452.15,'aurora_dress'+Main.titlecount[2][0]);
        this.aurora_dress.anchor.setTo(0.5);
        
        this.aurora_head=game.add.sprite(326.45,107.15,'aurora_head');
        this.aurora_head.anchor.setTo(0.5);
        
        this.aurora_hair=game.add.sprite(337.6,140.4,'aurora_hair'+Main.titlecount[2][1]);
        this.aurora_hair.anchor.setTo(0.5);
        
        this.aurora_earing=game.add.sprite(356.5,135.4,'aurora_earing'+Main.titlecount[2][3]);
        this.aurora_earing.anchor.setTo(0.5);
        
        this.aurora_bag=game.add.sprite(342.65,338.15,'aurora_bag'+Main.titlecount[2][4]);
        this.aurora_bag.anchor.setTo(0.5);
        
        this.aurora_hand=game.add.sprite(362.25,322.1,'aurora_hand');
        this.aurora_hand.anchor.setTo(0.5);
        
        this.auroraGroup.add(this.aurora_backhair);
        this.auroraGroup.add(this.aurora_body);
        this.auroraGroup.add(this.aurora_shoe);
        this.auroraGroup.add(this.aurora_dress);
        this.auroraGroup.add(this.aurora_bag);
                        this.auroraGroup.add(this.aurora_hand);
        this.auroraGroup.add(this.aurora_head);
        this.auroraGroup.add(this.aurora_hair);
        this.auroraGroup.add(this.aurora_earing);
        
         this.cindrellaGroup=game.add.group();
        
        this.cindrella_backhair=game.add.sprite(354,169.05,'cindrella_backhair'+Main.titlecount[3][1]);
        this.cindrella_backhair.anchor.setTo(0.5);
        
        this.cindrella_body=game.add.sprite(340.3,430.2,'cindrella_body');
        this.cindrella_body.anchor.setTo(0.5);
        
        this.cindrella_shoe=game.add.sprite(353.2,706.85,'cindrella_shoe'+Main.titlecount[3][2]);
        this.cindrella_shoe.anchor.setTo(0.5);
        
        this.cindrella_dress=game.add.sprite(340.15,382.1,'cindrella_dress'+Main.titlecount[3][0]);
        this.cindrella_dress.anchor.setTo(0.5);
        
        this.cindrella_head=game.add.sprite(330,117.9,'cindrella_head');
        this.cindrella_head.anchor.setTo(0.5);
        
        this.cindrella_hair=game.add.sprite(354,169.05,'cindrella_hair'+Main.titlecount[3][1]);
        this.cindrella_hair.anchor.setTo(0.5);
        
        this.cindrella_earing=game.add.sprite(353.75,147.5,'cindrella_earing'+Main.titlecount[3][3]);
        this.cindrella_earing.anchor.setTo(0.5);
        
        this.cindrella_bag=game.add.sprite(257.85,190.85,'cindrella_bag'+Main.titlecount[3][4]);
        this.cindrella_bag.anchor.setTo(0.5);
        
        this.cindrella_hand=game.add.sprite(311.35,253.55,'cindrella_hand');
        this.cindrella_hand.anchor.setTo(0.5);
        
        this.cindrellaGroup.add(this.cindrella_backhair);
        this.cindrellaGroup.add(this.cindrella_body);
        this.cindrellaGroup.add(this.cindrella_dress);
        this.cindrellaGroup.add(this.cindrella_shoe);
        this.cindrellaGroup.add(this.cindrella_head);
        this.cindrellaGroup.add(this.cindrella_hair);
        this.cindrellaGroup.add(this.cindrella_earing);
        this.cindrellaGroup.add(this.cindrella_bag);
        this.cindrellaGroup.add(this.cindrella_hand);
        
        this.belleGroup=game.add.group();
        
        this.belle_backhair=game.add.sprite(341,166.05,'belle_backhair'+Main.titlecount[4][0]);
        this.belle_backhair.anchor.setTo(0.5);
        
        this.belle_body=game.add.sprite(292.1,427.55,'belle_body');
        this.belle_body.anchor.setTo(0.5);
        
        //this.belle_shoe=game.add.sprite(359.4,660.4,'belle_shoe'+Main.titlecount[4][2]);
        //this.belle_shoe.anchor.setTo(0.5);
        
        this.belle_leftshoe=game.add.sprite(335.8,682.4,'belle_leftshoe'+Main.titlecount[4][2]);
        this.belle_leftshoe.anchor.setTo(0.5);
        
        this.belle_rightshoe=game.add.sprite(376.4,627.4,'belle_rightshoe'+Main.titlecount[4][2]);
        this.belle_rightshoe.anchor.setTo(0.5);
        
        this.belle_dress=game.add.sprite(342.3,434.55,'belle_dress'+Main.titlecount[4][0]);
        this.belle_dress.anchor.setTo(0.5);
        
        this.belle_head=game.add.sprite(338.8,122.85,'belle_head');
        this.belle_head.anchor.setTo(0.5);
        
        this.belle_hair=game.add.sprite(339,166.05,'belle_hair'+Main.titlecount[4][1]);
        this.belle_hair.anchor.setTo(0.5);
        
        this.belle_leftearing=game.add.sprite(340.25,153.85,'belle_leftearing'+Main.titlecount[4][3]);
        this.belle_leftearing.anchor.setTo(0.5);
        
        this.belle_rightearing=game.add.sprite(339.25,154.85,'belle_rightearing'+Main.titlecount[4][3]);
        this.belle_rightearing.anchor.setTo(0.5);
        
        this.belle_bag=game.add.sprite(194.3,187.1,'belle_bag'+Main.titlecount[4][4]);
        this.belle_bag.anchor.setTo(0.5);
        
        this.belle_hand=game.add.sprite(292.1,328.3,'belle_hand');
        this.belle_hand.anchor.setTo(0.5);
        
        this.belleGroup.add(this.belle_backhair);
        this.belleGroup.add(this.belle_body);
        this.belleGroup.add(this.belle_leftshoe);
        this.belleGroup.add(this.belle_rightshoe);
        this.belleGroup.add(this.belle_dress);
        this.belleGroup.add(this.belle_bag);
        this.belleGroup.add(this.belle_hand);
        this.belleGroup.add(this.belle_head);
        this.belleGroup.add(this.belle_hair);
        this.belleGroup.add(this.belle_leftearing);
        this.belleGroup.add(this.belle_rightearing);
        
        
         this.arielGroup=game.add.group();
        
        this.ariel_backhair=game.add.sprite(352.7,192.55,'ariel_backhair'+Main.titlecount[5][1]);
        this.ariel_backhair.anchor.setTo(0.5);
        
        this.ariel_backdress=game.add.sprite(285.45,557.35,'ariel_backdress'+Main.titlecount[5][0]);
        this.ariel_backdress.anchor.setTo(0.5);
        
        this.ariel_body=game.add.sprite(346.65,446.65,'ariel_body');
        this.ariel_body.anchor.setTo(0.5);
        
        this.ariel_shoe=game.add.sprite(295.5,690.2,'ariel_shoe'+Main.titlecount[5][2]);
        this.ariel_shoe.anchor.setTo(0.5);
        
        this.ariel_dress=game.add.sprite(335.55,446.85,'ariel_dress'+Main.titlecount[5][0]);
        this.ariel_dress.anchor.setTo(0.5);
        
        this.ariel_head=game.add.sprite(354.75,131.2,'ariel_head');
        this.ariel_head.anchor.setTo(0.5);
        
        this.ariel_hair=game.add.sprite(355.2,193.65,'ariel_hair'+Main.titlecount[5][1]);
        this.ariel_hair.anchor.setTo(0.5);
        
        this.ariel_fronthair=game.add.sprite(355.2,193.65,'ariel_fronthair'+Main.titlecount[5][1]);
        this.ariel_fronthair.anchor.setTo(0.5);
        
        this.ariel_leftearing=game.add.sprite(354,163.85,'ariel_leftearing'+Main.titlecount[5][3]);
        this.ariel_leftearing.anchor.setTo(0.5);
        
        this.ariel_rightearing=game.add.sprite(353.85,165.85,'ariel_rightearing'+Main.titlecount[5][3]);
        this.ariel_rightearing.anchor.setTo(0.5);
        
        this.ariel_bag=game.add.sprite(383.1,360,'ariel_bag'+Main.titlecount[5][4]);
        this.ariel_bag.anchor.setTo(0.5);
        
        this.ariel_hand=game.add.sprite(366,285.45,'ariel_hand');
        this.ariel_hand.anchor.setTo(0.5);
        
        this.arielGroup.add(this.ariel_backhair);
        this.arielGroup.add(this.ariel_backdress);
        this.arielGroup.add(this.ariel_body);
        this.arielGroup.add(this.ariel_shoe);
        this.arielGroup.add(this.ariel_dress);
        this.arielGroup.add(this.ariel_bag);
        this.arielGroup.add(this.ariel_head);
        this.arielGroup.add(this.ariel_hair);
                this.arielGroup.add(this.ariel_hand);
        this.arielGroup.add(this.ariel_leftearing);
        this.arielGroup.add(this.ariel_rightearing);
        this.arielGroup.add(this.ariel_fronthair);
        
        

        this.levelGroup.add(this.elsaGroup);
        this.levelGroup.add(this.cindrellaGroup);
        this.levelGroup.add(this.auroraGroup);
        this.levelGroup.add(this.rapGroup);
        this.levelGroup.add(this.belleGroup);
        this.levelGroup.add(this.arielGroup);
        //yyyyyy
       this.elsaGroup.scale.setTo(0.85);
       this.elsaGroup.y=20;
       this.cindrellaGroup.scale.setTo(0.86);
       this.cindrellaGroup.x=-80;
       this.cindrellaGroup.y=22;
       this.auroraGroup.scale.setTo(0.86);
       this.auroraGroup.x=100;
       this.auroraGroup.y=50;
        this.rapGroup.scale.setTo(0.9);
       this.rapGroup.x=160;
       this.rapGroup.y=50;
               this.belleGroup.scale.setTo(0.9);
       this.belleGroup.x=-190;
       this.belleGroup.y=20;
          this.arielGroup.scale.setTo(0.9);
       this.arielGroup.x=-280;
       this.arielGroup.y=40;
       
       game.time.events.add(2500,function(){
     this.randomId1 = game.rnd.integerInRange(1,5);
this.randomId2 = game.rnd.integerInRange(1,5);
this.randomId3 = game.rnd.integerInRange(1,5);
this.randomId4 = game.rnd.integerInRange(1,5);
this.randomId5 = game.rnd.integerInRange(1,5);
this.randomId6 = game.rnd.integerInRange(1,5);
this.randomId7 = game.rnd.integerInRange(1,5);
this.randomId8 = game.rnd.integerInRange(1,5);
this.randomId9 = game.rnd.integerInRange(1,5);
this.randomId10 = game.rnd.integerInRange(1,5);
this.randomId11 = game.rnd.integerInRange(1,5);
this.randomId12 = game.rnd.integerInRange(1,5);
this.randomId13 = game.rnd.integerInRange(1,5);
this.randomId14 = game.rnd.integerInRange(1,5);
this.randomId15 = game.rnd.integerInRange(1,5);
this.randomId16 = game.rnd.integerInRange(1,5);
this.randomId17 = game.rnd.integerInRange(1,5);
this.randomId18 = game.rnd.integerInRange(1,5);
this.randomId19 = game.rnd.integerInRange(1,5);
this.randomId20 = game.rnd.integerInRange(1,5);
this.randomId21 = game.rnd.integerInRange(1,5);
this.randomId22 = game.rnd.integerInRange(1,5);
this.randomId23 = game.rnd.integerInRange(1,5);
this.randomId24 = game.rnd.integerInRange(1,5);
this.randomId25 = game.rnd.integerInRange(1,5);
this.randomId26 = game.rnd.integerInRange(1,5);
this.randomId27 = game.rnd.integerInRange(1,5);
this.randomId28 = game.rnd.integerInRange(1,5);
this.randomId29 = game.rnd.integerInRange(1,5);
this.randomId30 = game.rnd.integerInRange(1,5);

  this.elsa_dress.loadTexture("elsa_dress"+this.randomId1);
    this.elsa_hair.loadTexture("elsa_hair"+this.randomId2);
    this.elsa_backhair.loadTexture("elsa_backhair"+this.randomId2);
    this.elsa_leftshoe.loadTexture("elsa_leftshoe"+this.randomId3);
    this.elsa_rightshoe.loadTexture("elsa_rightshoe"+this.randomId3);
    this.elsa_leftearing.loadTexture("elsa_leftearing"+this.randomId4);
    this.elsa_rightearing.loadTexture("elsa_rightearing"+this.randomId4);
    this.elsa_bag.loadTexture("elsa_bag"+this.randomId5);
    
        if (this.randomId2==1) {
     this.elsa_leftearing.visible=false;
     this.elsa_rightearing.visible=true;
    }else{
      this.elsa_leftearing.visible=true;
     this.elsa_rightearing.visible=true;
    }

    
      this.rap_dress.loadTexture("rap_dress"+this.randomId6);
    this.rap_hair.loadTexture("rap_hair"+this.randomId7);
    this.rap_backhair.loadTexture("rap_backhair"+this.randomId7);
    this.rap_shoe.loadTexture("rap_shoe"+this.randomId8);
    this.rap_leftearing.loadTexture("rap_leftearing"+this.randomId9);
    this.rap_rightearing.loadTexture("rap_rightearing"+this.randomId9);
    this.rap_bag.loadTexture("rap_bag"+this.randomId10);
    
        if (this.randomId7==1) {
     this.rap_leftearing.visible=false;
     this.rap_rightearing.visible=false;
    }else{
      this.rap_leftearing.visible=true;
     this.rap_rightearing.visible=true;
    }
    
      this.aurora_dress.loadTexture("aurora_dress"+this.randomId11);
    this.aurora_hair.loadTexture("aurora_hair"+this.randomId12);
    this.aurora_backhair.loadTexture("aurora_backhair"+this.randomId12);
    this.aurora_shoe.loadTexture("aurora_shoe"+this.randomId13);
    this.aurora_earing.loadTexture("aurora_earing"+this.randomId14);
    this.aurora_bag.loadTexture("aurora_bag"+this.randomId15);
    
    if (this.randomId12==5) {
     this.aurora_earing.visible=false;
    }else{
     this.aurora_earing.visible=true;
    }
    
     this.cindrella_dress.loadTexture("cindrella_dress"+this.randomId16);
    this.cindrella_hair.loadTexture("cindrella_hair"+this.randomId17);
    this.cindrella_backhair.loadTexture("cindrella_backhair"+this.randomId17);
    this.cindrella_shoe.loadTexture("cindrella_shoe"+this.randomId18);
    this.cindrella_earing.loadTexture("cindrella_earing"+this.randomId19);
    this.cindrella_bag.loadTexture("cindrella_bag"+this.randomId20);
    
     this.belle_dress.loadTexture("belle_dress"+this.randomId21);
    this.belle_hair.loadTexture("belle_hair"+this.randomId22);
    this.belle_backhair.loadTexture("belle_backhair"+this.randomId22);
    this.belle_leftshoe.loadTexture("belle_leftshoe"+this.randomId23);
    this.belle_rightshoe.loadTexture("belle_rightshoe"+this.randomId23);
    this.belle_leftearing.loadTexture("belle_leftearing"+this.randomId24);
    this.belle_rightearing.loadTexture("belle_rightearing"+this.randomId24);
    this.belle_bag.loadTexture("belle_bag"+this.randomId25);
    
    if (this.randomId22==2 ) {
     this.belle_rightearing.visible=false;
     this.belle_leftearing.visible=true;
    }else{
      this.belle_leftearing.visible=true;
     this.belle_rightearing.visible=true;
    }
    
       this.ariel_dress.loadTexture("ariel_dress"+this.randomId26);
    this.ariel_backdress.loadTexture("ariel_backdress"+this.randomId26);
    this.ariel_hair.loadTexture("ariel_hair"+this.randomId27);
    this.ariel_backhair.loadTexture("ariel_backhair"+this.randomId27);
    this.ariel_fronthair.loadTexture("ariel_fronthair"+this.randomId27);
    this.ariel_shoe.loadTexture("ariel_shoe"+this.randomId28);
    this.ariel_leftearing.loadTexture("ariel_leftearing"+this.randomId29);
    this.ariel_rightearing.loadTexture("ariel_rightearing"+this.randomId29);
    this.ariel_bag.loadTexture("ariel_bag"+this.randomId30);
         },this);
        
        this.title_name=game.add.sprite(246.5,618.5,'title_name');
        this.title_name.anchor.setTo(0.5);
        this.levelGroup.add(this.title_name);
        
        game.add.tween(this.title_name.scale).to({x:1.05,y:1.05},500,"Linear",true,0,-1).yoyo(30,true);
         this.morebtn = game.add.sprite(69,736.2,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(443.1,736.2,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
         
        this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","menu","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","menu","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
   game.state.start('intro');   
   },
}

Main.intro = function(){}

Main.intro.prototype = {
    create:function(){
      this.levelGroup = game.add.group();
      this.introbg = game.add.sprite(0,0,'introbg');
      this.levelGroup.add(this.introbg);
         this.morebtn = game.add.sprite(69,736.2,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.nextbtn = game.add.sprite(443.1,736.2,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.nextbtn);
         
         this.popup1 = game.add.sprite(259.7,416.9,'popup1');
         this.popup1.anchor.setTo(0.5);
         this.popup1.scale.setTo(0);
         this.levelGroup.add(this.popup1);
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
      
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
      
        
      },
startPopUp:function()
{
   game.add.tween(this.popup1.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringBottons, this);
},
bringPopUp2:function(){
   game.add.tween(this.popup1).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000);
   game.add.tween(this.popup2.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
},
bringPopUp3:function(){
   game.add.tween(this.popup2).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000)
   game.add.tween(this.popup3.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
   },
bringBottons:function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   game.add.tween(this.nextbtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","logo");
},
moreLink:function(){
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt)
{
          evt.kill();  
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('selectscreen');   
         });
   },
}
Main.dressup1 = function(){}
Main.dressup1.prototype = {
    create:function(){
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        
        this.bg=game.add.sprite(0,0,'dressupbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        
        this.icon_panel=game.add.sprite(11.1,373.8,'icon_panel')
        this.icon_panel.anchor.setTo(0.5);
        this.iconGroup.add(this.icon_panel);
        
        var iconposX=[66.3,66.3,66.3,66.3,66.3];
        var iconposY=[151,262.1,374.35,486.9,599.2];
        
        for (var i=1;i<=5;i++) {
        this['dress_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1],'dress_icon'+i);
        this['dress_icon'+i].anchor.setTo(0.5);
        this['dress_icon'+i].id=i;
        this['dress_icon'+i].inputEnabled=true;
        this['dress_icon'+i].input.useHandCursor=true;
        this['dress_icon'+i].events.onInputUp.add(this.changefun, this);
        this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
        this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
        this.iconGroup.add(this['dress_icon'+i]);
        }
        
        this.elsaGroup=game.add.group();
        
        this.elsa_backhair=game.add.sprite(345.9,187.4,'elsa_backhair1');
        this.elsa_backhair.anchor.setTo(0.5);
        
        this.elsa_body=game.add.sprite(296.7,434.6,'elsa_body');
        this.elsa_body.anchor.setTo(0.5);
        
        //this.elsa_shoe=game.add.sprite(367,667.6,'elsa_shoe1');
        //this.elsa_shoe.anchor.setTo(0.5);
        
        this.elsa_leftshoe=game.add.sprite(340.5,700,'elsa_leftshoe1');
        this.elsa_leftshoe.anchor.setTo(0.5);
        
        this.elsa_rightshoe=game.add.sprite(385,642,'elsa_rightshoe1');
        this.elsa_rightshoe.anchor.setTo(0.5);
        
        this.elsa_dress=game.add.sprite(338,461.5,'elsa_dress3');
        this.elsa_dress.anchor.setTo(0.5);
        
        this.elsa_head=game.add.sprite(346.95,115.75,'elsa_head');
        this.elsa_head.anchor.setTo(0.5);
        //this.elsa_head.animations.add('elsa_head').onComplete.add(function(){
        //this.elsa_head.frame = 0;
        //      },this);
        //this.elsa_head.animations.play('elsa_head', 10, false);
        //game.time.events.loop(3000, this.updateEyeBlink1, this);
        
        this.elsa_hair=game.add.sprite(346,155.4,'elsa_hair1');
        this.elsa_hair.anchor.setTo(0.5);
        
        this.elsa_leftearing=game.add.sprite(347.45,154.8,'');
        this.elsa_leftearing.anchor.setTo(0.5);
        
        this.elsa_rightearing=game.add.sprite(348.45,154.45,'');
        this.elsa_rightearing.anchor.setTo(0.5);
        
        this.elsa_bag=game.add.sprite(199.8,186.05,'');
        this.elsa_bag.anchor.setTo(0.5);
        
        this.elsa_hand=game.add.sprite(296.7,333.15,'elsa_hand');
        this.elsa_hand.anchor.setTo(0.5);
        
        this.elsaGroup.add(this.elsa_backhair);
        this.elsaGroup.add(this.elsa_body);
        //this.elsaGroup.add(this.elsa_shoe);
        this.elsaGroup.add(this.elsa_leftshoe);
        this.elsaGroup.add(this.elsa_rightshoe);
        this.elsaGroup.add(this.elsa_dress);
        this.elsaGroup.add(this.elsa_head);
        this.elsaGroup.add(this.elsa_hair);
        this.elsaGroup.add(this.elsa_leftearing);
        this.elsaGroup.add(this.elsa_rightearing);
        this.elsaGroup.add(this.elsa_bag);
        this.elsaGroup.add(this.elsa_hand);
        
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.elsaGroup);
        this.iconGroup.x=-500;
        this.elsaGroup.x=500;
        
         this.morebtn = game.add.sprite(69,736.2,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(443,736.2,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
         
         if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.dresscount=1;
            this.haircount=1;
            this.shoecount=1;
            this.earingcount=0;
            this.bagcount=0;
               this.effectsFlag=[this.elsa_dress,this.elsa_hair,this.elsa_leftshoe,this.elsa_leftearing,this.elsa_bag];
        },
startPopUp:function(evt){
   
   game.add.tween(this.elsaGroup).to({x:[-20,20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.iconGroup).to({x:[20,-20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1},700,Phaser.Easing.Quadratic.Out, true);
   },this);
   },this);
   },
updateEyeBlink1:function(){
   this.elsa_head.play('elsa_head', 10, false);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.donecount[0][evt.id]=1;
    effectssd = game.add.sprite(this.effectsFlag[evt.id-1].worldPosition.x,this.effectsFlag[evt.id-1].worldPosition.y,'effectssd');
         effectssd.anchor.setTo(0.5);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
   if (evt.id==1) {
   this.dresscount++;
    this.elsa_dress.loadTexture("elsa_dress"+this.dresscount);
    Main.finalcount[0][evt.id-1]=this.dresscount;
    if (this.dresscount>=5) {
   this.dresscount=0;
    }
   }
    if (evt.id==2) {
   this.haircount++;
    this.elsa_hair.loadTexture("elsa_hair"+this.haircount);
    this.elsa_backhair.loadTexture("elsa_backhair"+this.haircount);
    Main.finalcount[0][evt.id-1]=this.haircount;
    console.log(Main.finalcount[0][1]+" : "+Main.finalcount[0][3]);
    if (Main.finalcount[0][1]==1) {
     this.elsa_leftearing.visible=false;
     this.elsa_rightearing.visible=true;
    }else{
      this.elsa_leftearing.visible=true;
     this.elsa_rightearing.visible=true;
    }
    if (this.haircount>=5) {
   this.haircount=0;
    }
   }
   if (evt.id==3) {
   this.shoecount++;
    this.elsa_leftshoe.loadTexture("elsa_leftshoe"+this.shoecount);
    this.elsa_rightshoe.loadTexture("elsa_rightshoe"+this.shoecount);
    //this.elsa_shoe.loadTexture("elsa_shoe"+this.shoecount);
    Main.finalcount[0][evt.id-1]=this.shoecount;
    if (this.shoecount>=5) {
   this.shoecount=0;
    }
   }
    if (evt.id==4 ) {
   this.earingcount++;
    this.elsa_leftearing.loadTexture("elsa_leftearing"+this.earingcount);
    this.elsa_rightearing.loadTexture("elsa_rightearing"+this.earingcount);
    Main.finalcount[0][evt.id-1]=this.earingcount;
    console.log(Main.finalcount[0][1]+" : "+Main.finalcount[0][3]);
    if (Main.finalcount[0][1]==1 || Main.finalcount[0][1]==0) {
     this.elsa_leftearing.visible=false;
     this.elsa_rightearing.visible=true;
    }else{
      this.elsa_leftearing.visible=true;
     this.elsa_rightearing.visible=true;
    }
    if (this.earingcount>=5) {
   this.earingcount=0;
    }
   }
    if (evt.id==5) {
   this.bagcount++;
    this.elsa_bag.loadTexture("elsa_bag"+this.bagcount);
    Main.finalcount[0][evt.id-1]=this.bagcount;
    if (this.bagcount>=5) {
   this.bagcount=0;
    }
   }
   this.donevar=0;
   for(var key in Main.donecount[0])
   {
      if (Main.donecount[0][key]==1) {
        this.donevar++;
      }
   }
   if (this.donevar==5) {
    this.donebtn.scale.setTo(1);
   }
   },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","more");
},
enterRoom:function(){
     game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
  if(Main.girlCompleted[1]==1 && Main.girlCompleted[2]==2 && Main.girlCompleted[3]==3 && Main.girlCompleted[4]==4 && Main.girlCompleted[5]==5 && Main.girlCompleted[6]==6){
      game.state.start('finalscreen');
   }
   else
   game.state.start('selectscreen');
    });
   },
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
Main.dressup5 = function(){}
Main.dressup5.prototype = {
    create:function(){
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        
        this.bg=game.add.sprite(0,0,'dressupbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        
        this.icon_panel=game.add.sprite(11.1,373.8,'icon_panel')
        this.icon_panel.anchor.setTo(0.5);
        this.iconGroup.add(this.icon_panel);
        
        var iconposX=[66.3,66.3,66.3,66.3,66.3];
        var iconposY=[151,262.1,374.35,486.9,599.2];
        
        for (var i=1;i<=5;i++) {
        this['dress_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1],'dress_icon'+i);
        this['dress_icon'+i].anchor.setTo(0.5);
        this['dress_icon'+i].id=i;
        this['dress_icon'+i].inputEnabled=true;
        this['dress_icon'+i].input.useHandCursor=true;
        this['dress_icon'+i].events.onInputUp.add(this.changefun, this);
        this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
        this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
        this.iconGroup.add(this['dress_icon'+i]);
        }
        
        this.rapGroup=game.add.group();
        
        this.rap_backhair=game.add.sprite(334.8,164.5,'rap_backhair1');
        this.rap_backhair.anchor.setTo(0.5);
        
        this.rap_body=game.add.sprite(332,445.95,'rap_body');
        this.rap_body.anchor.setTo(0.5);
        
        this.rap_shoe=game.add.sprite(281.45,698.4,'rap_shoe1');
        this.rap_shoe.anchor.setTo(0.5);
        
        this.rap_dress=game.add.sprite(311,444.15,'rap_dress1');
        this.rap_dress.anchor.setTo(0.5);
        
        this.rap_head=game.add.sprite(338.05,125.6,'rap_head');
        this.rap_head.anchor.setTo(0.5);
        //this.rap_head.animations.add('rap_head').onComplete.add(function(){
        //this.rap_head.frame = 0;
        //      },this);
        //this.rap_head.animations.play('rap_head', 10, false);
        //game.time.events.loop(3000, this.updateEyeBlink2, this);
        
        this.rap_hair=game.add.sprite(337.5,164.8,'rap_hair1');
        this.rap_hair.anchor.setTo(0.5);
        
        this.rap_leftearing=game.add.sprite(337.6,152.45,'');
        this.rap_leftearing.anchor.setTo(0.5);
        
        this.rap_rightearing=game.add.sprite(338.5,152.45,'');
        this.rap_rightearing.anchor.setTo(0.5);
        
        this.rap_bag=game.add.sprite(308,237.4,'');
        this.rap_bag.anchor.setTo(0.5);
        
        this.rap_hand=game.add.sprite(335.95,280,'rap_hand');
        this.rap_hand.anchor.setTo(0.5);
        
        this.rapGroup.add(this.rap_backhair);
        this.rapGroup.add(this.rap_body);
        this.rapGroup.add(this.rap_shoe);
        this.rapGroup.add(this.rap_dress);
        this.rapGroup.add(this.rap_bag);
        this.rapGroup.add(this.rap_head);
        this.rapGroup.add(this.rap_hair);
                this.rapGroup.add(this.rap_hand);
        this.rapGroup.add(this.rap_leftearing);
        this.rapGroup.add(this.rap_rightearing);
        
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.rapGroup);
        this.iconGroup.x=-500;
        this.rapGroup.x=500;
        
         this.morebtn = game.add.sprite(69,736.2,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(443,736.2,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
         
         if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.dresscount=1;
            this.haircount=1;
            this.shoecount=1;
            this.earingcount=0;
            this.bagcount=0;
             this.effectsFlag=[this.rap_dress,this.rap_hair,this.rap_shoe,this.rap_leftearing,this.rap_bag];
        },
startPopUp:function(evt){
   
   game.add.tween(this.rapGroup).to({x:[-20,20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.iconGroup).to({x:[20,-20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1},700,Phaser.Easing.Quadratic.Out, true);
   },this);
   },this);
   },
updateEyeBlink2:function(){
   this.rap_head.play('rap_head', 10, false);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.donecount[1][evt.id]=1;
    effectssd = game.add.sprite(this.effectsFlag[evt.id-1].worldPosition.x,this.effectsFlag[evt.id-1].worldPosition.y,'effectssd');
         effectssd.anchor.setTo(0.5);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
   if (evt.id==1) {
   this.dresscount++;
    this.rap_dress.loadTexture("rap_dress"+this.dresscount);
    Main.finalcount[1][evt.id-1]=this.dresscount;
    if (this.dresscount>=5) {
   this.dresscount=0;
    }
   }
    if (evt.id==2) {
   this.haircount++;
    this.rap_hair.loadTexture("rap_hair"+this.haircount);
    this.rap_backhair.loadTexture("rap_backhair"+this.haircount);
    Main.finalcount[1][evt.id-1]=this.haircount;
    console.log(Main.finalcount[1][1]+" : "+Main.finalcount[1][3]);
    if (Main.finalcount[1][1]==1) {
     this.rap_leftearing.visible=false;
     this.rap_rightearing.visible=false;
    }else{
      this.rap_leftearing.visible=true;
     this.rap_rightearing.visible=true;
    }
    if (this.haircount>=5) {
   this.haircount=0;
    }
   }
   if (evt.id==3) {
   this.shoecount++;
    this.rap_shoe.loadTexture("rap_shoe"+this.shoecount);
    Main.finalcount[1][evt.id-1]=this.shoecount;
    if (this.shoecount>=5) {
   this.shoecount=0;
    }
   }
    if (evt.id==4 ) {
   this.earingcount++;
    this.rap_leftearing.loadTexture("rap_leftearing"+this.earingcount);
    this.rap_rightearing.loadTexture("rap_rightearing"+this.earingcount);
    Main.finalcount[1][evt.id-1]=this.earingcount;
    console.log(Main.finalcount[1][1]+" : "+Main.finalcount[1][3]);
    if (Main.finalcount[1][1]==1 || Main.finalcount[1][1]==0) {
     this.rap_leftearing.visible=false;
     this.rap_rightearing.visible=false;
    }else{
      this.rap_leftearing.visible=true;
     this.rap_rightearing.visible=true;
    }
    if (this.earingcount>=5) {
   this.earingcount=0;
    }
   }
    if (evt.id==5) {
   this.bagcount++;
    this.rap_bag.loadTexture("rap_bag"+this.bagcount);
    Main.finalcount[1][evt.id-1]=this.bagcount;
    if (this.bagcount>=5) {
   this.bagcount=0;
    }
   }
   this.donevar=0;
   for(var key in Main.donecount[1])
   {
      if (Main.donecount[1][key]==1) {
        this.donevar++;
      }
   }
   if (this.donevar==5) {
    this.donebtn.scale.setTo(1);
   }
   },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","more");
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
  if(Main.girlCompleted[1]==1 && Main.girlCompleted[2]==2 && Main.girlCompleted[3]==3 && Main.girlCompleted[4]==4 && Main.girlCompleted[5]==5 && Main.girlCompleted[6]==6){
      game.state.start('finalscreen');
   }
   else
   game.state.start('selectscreen');
    });
   },
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
Main.dressup6 = function(){}
Main.dressup6.prototype = {
    create:function(){
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        
        this.bg=game.add.sprite(0,0,'dressupbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        
        this.icon_panel=game.add.sprite(11.1,373.8,'icon_panel')
        this.icon_panel.anchor.setTo(0.5);
        this.iconGroup.add(this.icon_panel);
        
        var iconposX=[66.3,66.3,66.3,66.3,66.3];
        var iconposY=[151,262.1,374.35,486.9,599.2];
        
        for (var i=1;i<=5;i++) {
        this['dress_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1],'dress_icon'+i);
        this['dress_icon'+i].anchor.setTo(0.5);
        this['dress_icon'+i].id=i;
        this['dress_icon'+i].inputEnabled=true;
        this['dress_icon'+i].input.useHandCursor=true;
        this['dress_icon'+i].events.onInputUp.add(this.changefun, this);
        this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
        this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
        this.iconGroup.add(this['dress_icon'+i]);
        }
        
        this.auroraGroup=game.add.group();
        
        this.aurora_backhair=game.add.sprite(335.6,140.85,'aurora_backhair1');
        this.aurora_backhair.anchor.setTo(0.5);
        
        this.aurora_body=game.add.sprite(340.65,423.55,'aurora_body');
        this.aurora_body.anchor.setTo(0.5);
        
        this.aurora_shoe=game.add.sprite(323.1,705.7,'aurora_shoe1');
        this.aurora_shoe.anchor.setTo(0.5);
        
        this.aurora_dress=game.add.sprite(322.05,452.15,'aurora_dress1');
        this.aurora_dress.anchor.setTo(0.5);
        
        this.aurora_head=game.add.sprite(326.45,107.15,'aurora_head');
        this.aurora_head.anchor.setTo(0.5);
        //this.aurora_head.animations.add('aurora_head').onComplete.add(function(){
        //this.aurora_head.frame = 0;
        //      },this);
        //this.aurora_head.animations.play('aurora_head', 10, false);
        //game.time.events.loop(3000, this.updateEyeBlink3, this);
        
        this.aurora_hair=game.add.sprite(337.6,140.4,'aurora_hair1');
        this.aurora_hair.anchor.setTo(0.5);
        
        this.aurora_earing=game.add.sprite(356.5,135.4,'');
        this.aurora_earing.anchor.setTo(0.5);
        
        this.aurora_bag=game.add.sprite(342.65,338.15,'');
        this.aurora_bag.anchor.setTo(0.5);
        
        this.aurora_hand=game.add.sprite(362.25,322.1,'aurora_hand');
        this.aurora_hand.anchor.setTo(0.5);
        
        this.auroraGroup.add(this.aurora_backhair);
        this.auroraGroup.add(this.aurora_body);
        this.auroraGroup.add(this.aurora_shoe);
        this.auroraGroup.add(this.aurora_dress);
        this.auroraGroup.add(this.aurora_bag);
                        this.auroraGroup.add(this.aurora_hand);
        this.auroraGroup.add(this.aurora_head);
        this.auroraGroup.add(this.aurora_hair);
        this.auroraGroup.add(this.aurora_earing);
        
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.auroraGroup);
        this.iconGroup.x=-500;
        this.auroraGroup.x=500;
        
         this.morebtn = game.add.sprite(69,736.2,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(443,736.2,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
         
         if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.dresscount=1;
            this.haircount=1;
            this.shoecount=1;
            this.earingcount=0;
            this.bagcount=0;
             this.effectsFlag=[this.aurora_dress,this.aurora_hair,this.aurora_shoe,this.aurora_earing,this.aurora_bag];
        },
startPopUp:function(evt){
   
   game.add.tween(this.auroraGroup).to({x:[-20,20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.iconGroup).to({x:[20,-20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1},700,Phaser.Easing.Quadratic.Out, true);
   },this);
   },this);
   },
updateEyeBlink3:function(){
   this.aurora_head.play('aurora_head', 10, false);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.donecount[2][evt.id]=1;
    effectssd = game.add.sprite(this.effectsFlag[evt.id-1].worldPosition.x,this.effectsFlag[evt.id-1].worldPosition.y,'effectssd');
         effectssd.anchor.setTo(0.5);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
   if (evt.id==1) {
   this.dresscount++;
    this.aurora_dress.loadTexture("aurora_dress"+this.dresscount);
    Main.finalcount[2][evt.id-1]=this.dresscount;
    if (this.dresscount>=5) {
   this.dresscount=0;
    }
   }
    if (evt.id==2) {
   this.haircount++;
    this.aurora_hair.loadTexture("aurora_hair"+this.haircount);
    this.aurora_backhair.loadTexture("aurora_backhair"+this.haircount);
    Main.finalcount[2][evt.id-1]=this.haircount;
    console.log(Main.finalcount[2][1]+" : "+Main.finalcount[2][3]);
 if (Main.finalcount[2][1]==5) {
     this.aurora_earing.visible=false;
    }else{
     this.aurora_earing.visible=true;
    }
    if (this.haircount>=5) {
   this.haircount=0;
    }
   }
   if (evt.id==3) {
   this.shoecount++;
    this.aurora_shoe.loadTexture("aurora_shoe"+this.shoecount);
    Main.finalcount[2][evt.id-1]=this.shoecount;
    if (this.shoecount>=5) {
   this.shoecount=0;
    }
   }
    if (evt.id==4 ) {
   this.earingcount++;
    this.aurora_earing.loadTexture("aurora_earing"+this.earingcount);
    //this.aurora_rightearing.loadTexture("aurora_rightearing"+this.earingcount);
    Main.finalcount[2][evt.id-1]=this.earingcount;
    console.log(Main.finalcount[2][1]+" : "+Main.finalcount[2][3]);
    if (Main.finalcount[2][1]==5) {
     this.aurora_earing.visible=false;
    }else{
     this.aurora_earing.visible=true;
    }
    if (this.earingcount>=5) {
   this.earingcount=0;
    }
   }
    if (evt.id==5) {
   this.bagcount++;
    this.aurora_bag.loadTexture("aurora_bag"+this.bagcount);
    Main.finalcount[2][evt.id-1]=this.bagcount;
    if (this.bagcount>=5) {
   this.bagcount=0;
    }
   }
   this.donevar=0;
   for(var key in Main.donecount[2])
   {
      if (Main.donecount[2][key]==1) {
        this.donevar++;
      }
   }
   if (this.donevar==5) {
    this.donebtn.scale.setTo(1);
   }
   },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","more");
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
  if(Main.girlCompleted[1]==1 && Main.girlCompleted[2]==2 && Main.girlCompleted[3]==3 && Main.girlCompleted[4]==4 && Main.girlCompleted[5]==5 && Main.girlCompleted[6]==6){
      game.state.start('finalscreen');
   }
   else
   game.state.start('selectscreen');
    });
   },
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}

Main.dressup4 = function(){}
Main.dressup4.prototype = {
    create:function(){
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        
        this.bg=game.add.sprite(0,0,'dressupbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        
        this.icon_panel=game.add.sprite(11.1,373.8,'icon_panel')
        this.icon_panel.anchor.setTo(0.5);
        this.iconGroup.add(this.icon_panel);
        
        var iconposX=[66.3,66.3,66.3,66.3,66.3];
        var iconposY=[151,262.1,374.35,486.9,599.2];
        
        for (var i=1;i<=5;i++) {
        this['dress_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1],'dress_icon'+i);
        this['dress_icon'+i].anchor.setTo(0.5);
        this['dress_icon'+i].id=i;
        this['dress_icon'+i].inputEnabled=true;
        this['dress_icon'+i].input.useHandCursor=true;
        this['dress_icon'+i].events.onInputUp.add(this.changefun, this);
        this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
        this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
        this.iconGroup.add(this['dress_icon'+i]);
        }
        
        this.cindrellaGroup=game.add.group();
        
        this.cindrella_backhair=game.add.sprite(354,169.05,'cindrella_backhair1');
        this.cindrella_backhair.anchor.setTo(0.5);
        
        this.cindrella_body=game.add.sprite(340.3,430.2,'cindrella_body');
        this.cindrella_body.anchor.setTo(0.5);
        
        this.cindrella_shoe=game.add.sprite(353.2,706.85,'cindrella_shoe1');
        this.cindrella_shoe.anchor.setTo(0.5);
        
        this.cindrella_dress=game.add.sprite(340.15,382.1,'cindrella_dress1');
        this.cindrella_dress.anchor.setTo(0.5);
        
        this.cindrella_head=game.add.sprite(330,117.9,'cindrella_head');
        this.cindrella_head.anchor.setTo(0.5);
        
        this.cindrella_hair=game.add.sprite(354,169.05,'cindrella_hair1');
        this.cindrella_hair.anchor.setTo(0.5);
        
        this.cindrella_earing=game.add.sprite(353.75,147.5,'');
        this.cindrella_earing.anchor.setTo(0.5);
        
        this.cindrella_bag=game.add.sprite(257.85,190.85,'');
        this.cindrella_bag.anchor.setTo(0.5);
        
        this.cindrella_hand=game.add.sprite(311.35,253.55,'cindrella_hand');
        this.cindrella_hand.anchor.setTo(0.5);
        
        this.cindrellaGroup.add(this.cindrella_backhair);
        this.cindrellaGroup.add(this.cindrella_body);
        this.cindrellaGroup.add(this.cindrella_dress);
        this.cindrellaGroup.add(this.cindrella_shoe);
        this.cindrellaGroup.add(this.cindrella_head);
        this.cindrellaGroup.add(this.cindrella_hair);
        this.cindrellaGroup.add(this.cindrella_earing);
        this.cindrellaGroup.add(this.cindrella_bag);
        this.cindrellaGroup.add(this.cindrella_hand);
        
        
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.cindrellaGroup);
        this.iconGroup.x=-500;
        this.cindrellaGroup.x=500;
        
         this.morebtn = game.add.sprite(69,736.2,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(443,736.2,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
         
         if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.dresscount=1;
            this.haircount=1;
            this.shoecount=1;
            this.earingcount=0;
            this.bagcount=0;
             this.effectsFlag=[this.cindrella_dress,this.cindrella_hair,this.cindrella_shoe,this.cindrella_earing,this.cindrella_bag];
        },
startPopUp:function(evt){
   
   game.add.tween(this.cindrellaGroup).to({x:[-20,20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.iconGroup).to({x:[20,-20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1},700,Phaser.Easing.Quadratic.Out, true);
   },this);
   },this);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.donecount[3][evt.id]=1;
    effectssd = game.add.sprite(this.effectsFlag[evt.id-1].worldPosition.x,this.effectsFlag[evt.id-1].worldPosition.y,'effectssd');
         effectssd.anchor.setTo(0.5);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
   if (evt.id==1) {
   this.dresscount++;
    this.cindrella_dress.loadTexture("cindrella_dress"+this.dresscount);
    Main.finalcount[3][evt.id-1]=this.dresscount;
    if (this.dresscount>=5) {
   this.dresscount=0;
    }
   }
    if (evt.id==2) {
   this.haircount++;
    this.cindrella_hair.loadTexture("cindrella_hair"+this.haircount);
    this.cindrella_backhair.loadTexture("cindrella_backhair"+this.haircount);
    Main.finalcount[3][evt.id-1]=this.haircount;
    console.log(Main.finalcount[3][1]+" : "+Main.finalcount[3][3]);
    if (this.haircount>=5) {
   this.haircount=0;
    }
   }
   if (evt.id==3) {
   this.shoecount++;
    this.cindrella_shoe.loadTexture("cindrella_shoe"+this.shoecount);
    Main.finalcount[3][evt.id-1]=this.shoecount;
    if (this.shoecount>=5) {
   this.shoecount=0;
    }
   }
    if (evt.id==4 ) {
   this.earingcount++;
    this.cindrella_earing.loadTexture("cindrella_earing"+this.earingcount);
    //this.cindrella_rightearing.loadTexture("cindrella_rightearing"+this.earingcount);
    Main.finalcount[3][evt.id-1]=this.earingcount;
    console.log(Main.finalcount[3][1]+" : "+Main.finalcount[3][3]);
    if (this.earingcount>=5) {
   this.earingcount=0;
    }
   }
    if (evt.id==5) {
   this.bagcount++;
    this.cindrella_bag.loadTexture("cindrella_bag"+this.bagcount);
    Main.finalcount[3][evt.id-1]=this.bagcount;
    if (this.bagcount>=5) {
   this.bagcount=0;
    }
   }
   this.donevar=0;
   for(var key in Main.donecount[3])
   {
      if (Main.donecount[3][key]==1) {
        this.donevar++;
      }
   }
   if (this.donevar==5) {
    this.donebtn.scale.setTo(1);
   }
   },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","more");
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
  if(Main.girlCompleted[1]==1 && Main.girlCompleted[2]==2 && Main.girlCompleted[3]==3 && Main.girlCompleted[4]==4 && Main.girlCompleted[5]==5 && Main.girlCompleted[6]==6){
      game.state.start('finalscreen');
   }
   else
   game.state.start('selectscreen');
    });
   },
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
Main.dressup2 = function(){}
Main.dressup2.prototype = {
    create:function(){
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        
        this.bg=game.add.sprite(0,0,'dressupbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        
        this.icon_panel=game.add.sprite(11.1,373.8,'icon_panel')
        this.icon_panel.anchor.setTo(0.5);
        this.iconGroup.add(this.icon_panel);
        
        var iconposX=[66.3,66.3,66.3,66.3,66.3];
        var iconposY=[151,262.1,374.35,486.9,599.2];
        
        for (var i=1;i<=5;i++) {
        this['dress_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1],'dress_icon'+i);
        this['dress_icon'+i].anchor.setTo(0.5);
        this['dress_icon'+i].id=i;
        this['dress_icon'+i].inputEnabled=true;
        this['dress_icon'+i].input.useHandCursor=true;
        this['dress_icon'+i].events.onInputUp.add(this.changefun, this);
        this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
        this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
        this.iconGroup.add(this['dress_icon'+i]);
        }
        
        this.belleGroup=game.add.group();
        
        this.belle_backhair=game.add.sprite(341,166.05,'belle_backhair1');
        this.belle_backhair.anchor.setTo(0.5);
        
        this.belle_body=game.add.sprite(292.1,427.55,'belle_body');
        this.belle_body.anchor.setTo(0.5);
        
        //this.belle_shoe=game.add.sprite(357.4,653.4,'belle_shoe1');
        //this.belle_shoe.anchor.setTo(0.5);
        
        this.belle_leftshoe=game.add.sprite(335.8,682.4,'belle_leftshoe1');
        this.belle_leftshoe.anchor.setTo(0.5);
        
        this.belle_rightshoe=game.add.sprite(376.4,627.4,'belle_rightshoe1');
        this.belle_rightshoe.anchor.setTo(0.5);
        
        this.belle_dress=game.add.sprite(342.3,434.55,'belle_dress2');
        this.belle_dress.anchor.setTo(0.5);
        
        this.belle_head=game.add.sprite(338.8,122.85,'belle_head');
        this.belle_head.anchor.setTo(0.5);
        
        this.belle_hair=game.add.sprite(339,166.05,'belle_hair1');
        this.belle_hair.anchor.setTo(0.5);
        
        this.belle_leftearing=game.add.sprite(340.25,153.85,'');
        this.belle_leftearing.anchor.setTo(0.5);
        
        this.belle_rightearing=game.add.sprite(339.25,154.85,'');
        this.belle_rightearing.anchor.setTo(0.5);
        
        this.belle_bag=game.add.sprite(194.3,187.1,'');
        this.belle_bag.anchor.setTo(0.5);
        
        this.belle_hand=game.add.sprite(292.1,328.3,'belle_hand');
        this.belle_hand.anchor.setTo(0.5);
        
        this.belleGroup.add(this.belle_backhair);
        this.belleGroup.add(this.belle_body);
        this.belleGroup.add(this.belle_leftshoe);
        this.belleGroup.add(this.belle_rightshoe);
        this.belleGroup.add(this.belle_dress);
        this.belleGroup.add(this.belle_bag);
        this.belleGroup.add(this.belle_hand);
        this.belleGroup.add(this.belle_head);
        this.belleGroup.add(this.belle_hair);
        this.belleGroup.add(this.belle_leftearing);
        this.belleGroup.add(this.belle_rightearing);
        
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.belleGroup);
        this.iconGroup.x=-500;
        this.belleGroup.x=500;
        
         this.morebtn = game.add.sprite(69,736.2,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(443,736.2,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
         
         if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.dresscount=1;
            this.haircount=1;
            this.shoecount=1;
            this.earingcount=0;
            this.bagcount=0;
            this.effectsFlag=[this.belle_dress,this.belle_hair,this.belle_leftshoe,this.belle_leftearing,this.belle_bag];
        },
startPopUp:function(evt){
   
   game.add.tween(this.belleGroup).to({x:[-20,20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.iconGroup).to({x:[20,-20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1},700,Phaser.Easing.Quadratic.Out, true);
   },this);
   },this);
   },
updateEyeBlink1:function(){
   this.belle_head.play('belle_head', 10, false);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.donecount[4][evt.id]=1;
    effectssd = game.add.sprite(this.effectsFlag[evt.id-1].worldPosition.x,this.effectsFlag[evt.id-1].worldPosition.y,'effectssd');
         effectssd.anchor.setTo(0.5);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
   if (evt.id==1) {
   this.dresscount++;
    this.belle_dress.loadTexture("belle_dress"+this.dresscount);
    Main.finalcount[4][evt.id-1]=this.dresscount;
    if (this.dresscount>=5) {
   this.dresscount=0;
    }
   }
    if (evt.id==2) {
   this.haircount++;
    this.belle_hair.loadTexture("belle_hair"+this.haircount);
    this.belle_backhair.loadTexture("belle_backhair"+this.haircount);
    Main.finalcount[4][evt.id-1]=this.haircount;
    console.log(Main.finalcount[4][1]+" : "+Main.finalcount[4][3]);
    if (Main.finalcount[4][1]==2 ) {
     this.belle_rightearing.visible=false;
     this.belle_leftearing.visible=true;
    }else{
      this.belle_leftearing.visible=true;
     this.belle_rightearing.visible=true;
    }
    if (this.haircount>=5) {
   this.haircount=0;
    }
   }
   if (evt.id==3) {
   this.shoecount++;
    this.belle_leftshoe.loadTexture("belle_leftshoe"+this.shoecount);
    this.belle_rightshoe.loadTexture("belle_rightshoe"+this.shoecount);
    Main.finalcount[4][evt.id-1]=this.shoecount;
    if (this.shoecount>=5) {
   this.shoecount=0;
    }
   }
    if (evt.id==4 ) {
   this.earingcount++;
    this.belle_leftearing.loadTexture("belle_leftearing"+this.earingcount);
    this.belle_rightearing.loadTexture("belle_rightearing"+this.earingcount);
    Main.finalcount[4][evt.id-1]=this.earingcount;
    console.log(Main.finalcount[4][1]+" : "+Main.finalcount[4][3]);
    if (Main.finalcount[4][1]==2 ) {
     this.belle_rightearing.visible=false;
     this.belle_leftearing.visible=true;
    }else{
      this.belle_leftearing.visible=true;
     this.belle_rightearing.visible=true;
    }
    if (this.earingcount>=5) {
   this.earingcount=0;
    }
   }
    if (evt.id==5) {
   this.bagcount++;
    this.belle_bag.loadTexture("belle_bag"+this.bagcount);
    Main.finalcount[4][evt.id-1]=this.bagcount;
    if (this.bagcount>=5) {
   this.bagcount=0;
    }
   }
   this.donevar=0;
   for(var key in Main.donecount[4])
   {
      if (Main.donecount[4][key]==1) {
        this.donevar++;
      }
   }
   if (this.donevar==5) {
    this.donebtn.scale.setTo(1);
   }
   },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","more");
},
enterRoom:function(){
  game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
  if(Main.girlCompleted[1]==1 && Main.girlCompleted[2]==2 && Main.girlCompleted[3]==3 && Main.girlCompleted[4]==4 && Main.girlCompleted[5]==5 && Main.girlCompleted[6]==6){
      game.state.start('finalscreen');
   }
   else
   game.state.start('selectscreen');
    });
   },
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}

Main.dressup3 = function(){}
Main.dressup3.prototype = {
    create:function(){
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        
        this.bg=game.add.sprite(0,0,'dressupbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        
        this.icon_panel=game.add.sprite(11.1,373.8,'icon_panel')
        this.icon_panel.anchor.setTo(0.5);
        this.iconGroup.add(this.icon_panel);
        
        var iconposX=[66.3,66.3,66.3,66.3,66.3];
        var iconposY=[151,262.1,374.35,486.9,599.2];
        
        for (var i=1;i<=5;i++) {
        this['dress_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1],'dress_icon'+i);
        this['dress_icon'+i].anchor.setTo(0.5);
        this['dress_icon'+i].id=i;
        this['dress_icon'+i].inputEnabled=true;
        this['dress_icon'+i].input.useHandCursor=true;
        this['dress_icon'+i].events.onInputUp.add(this.changefun, this);
        this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
        this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
        this.iconGroup.add(this['dress_icon'+i]);
        }
        
        this.arielGroup=game.add.group();
        
        this.ariel_backhair=game.add.sprite(352.7,192.55,'ariel_backhair1');
        this.ariel_backhair.anchor.setTo(0.5);
        
        this.ariel_backdress=game.add.sprite(285.45,557.35,'ariel_backdress1');
        this.ariel_backdress.anchor.setTo(0.5);
        
        this.ariel_body=game.add.sprite(346.65,446.65,'ariel_body');
        this.ariel_body.anchor.setTo(0.5);
        
        this.ariel_shoe=game.add.sprite(295.5,690.2,'ariel_shoe1');
        this.ariel_shoe.anchor.setTo(0.5);
        
        this.ariel_dress=game.add.sprite(335.55,446.85,'ariel_dress1');
        this.ariel_dress.anchor.setTo(0.5);
        
        this.ariel_head=game.add.sprite(354.75,131.2,'ariel_head');
        this.ariel_head.anchor.setTo(0.5);
        
        this.ariel_hair=game.add.sprite(355.2,193.65,'ariel_hair1');
        this.ariel_hair.anchor.setTo(0.5);
        
        this.ariel_fronthair=game.add.sprite(355.2,193.65,'ariel_fronthair1');
        this.ariel_fronthair.anchor.setTo(0.5);
        
        this.ariel_leftearing=game.add.sprite(354,163.85,'');
        this.ariel_leftearing.anchor.setTo(0.5);
        
        this.ariel_rightearing=game.add.sprite(353.85,165.85,'');
        this.ariel_rightearing.anchor.setTo(0.5);
        
        this.ariel_bag=game.add.sprite(383.1,360,'');
        this.ariel_bag.anchor.setTo(0.5);
        
        this.ariel_hand=game.add.sprite(366,285.45,'ariel_hand');
        this.ariel_hand.anchor.setTo(0.5);
        
        this.arielGroup.add(this.ariel_backhair);
        this.arielGroup.add(this.ariel_backdress);
        this.arielGroup.add(this.ariel_body);
        this.arielGroup.add(this.ariel_shoe);
        this.arielGroup.add(this.ariel_dress);
        this.arielGroup.add(this.ariel_bag);
        this.arielGroup.add(this.ariel_head);
        this.arielGroup.add(this.ariel_hair);
                this.arielGroup.add(this.ariel_hand);
        this.arielGroup.add(this.ariel_leftearing);
        this.arielGroup.add(this.ariel_rightearing);
        this.arielGroup.add(this.ariel_fronthair);
        
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.arielGroup);
        this.iconGroup.x=-500;
        this.arielGroup.x=500;
        
         this.morebtn = game.add.sprite(69,736.2,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(443,736.2,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
         
         if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.dresscount=1;
            this.haircount=1;
            this.shoecount=1;
            this.earingcount=0;
            this.bagcount=0;
            this.effectsFlag=[this.ariel_dress,this.ariel_hair,this.ariel_shoe,this.ariel_leftearing,this.ariel_bag];
        },
startPopUp:function(evt){
   
   game.add.tween(this.arielGroup).to({x:[-20,20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.iconGroup).to({x:[20,-20,0]},700,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1},700,Phaser.Easing.Quadratic.Out, true);
   },this);
   },this);
   },
updateEyeBlink1:function(){
   this.ariel_head.play('ariel_head', 10, false);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.donecount[5][evt.id]=1;
    effectssd = game.add.sprite(this.effectsFlag[evt.id-1].worldPosition.x,this.effectsFlag[evt.id-1].worldPosition.y,'effectssd');
         effectssd.anchor.setTo(0.5);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
   if (evt.id==1) {
   this.dresscount++;
    this.ariel_dress.loadTexture("ariel_dress"+this.dresscount);
    this.ariel_backdress.loadTexture("ariel_backdress"+this.dresscount);
    Main.finalcount[5][evt.id-1]=this.dresscount;
    if (this.dresscount>=5) {
   this.dresscount=0;
    }
   }
    if (evt.id==2) {
   this.haircount++;
    this.ariel_hair.loadTexture("ariel_hair"+this.haircount);
    this.ariel_backhair.loadTexture("ariel_backhair"+this.haircount);
    this.ariel_fronthair.loadTexture("ariel_fronthair"+this.haircount);
    Main.finalcount[5][evt.id-1]=this.haircount;
    console.log(Main.finalcount[5][1]+" : "+Main.finalcount[5][3]);
    //if (Main.finalcount[5][1]==2 ) {
    // this.ariel_rightearing.visible=false;
    // this.ariel_leftearing.visible=true;
    //}else{
    //  this.ariel_leftearing.visible=true;
    // this.ariel_rightearing.visible=true;
    //}
    if (this.haircount>=5) {
   this.haircount=0;
    }
   }
   if (evt.id==3) {
   this.shoecount++;
    this.ariel_shoe.loadTexture("ariel_shoe"+this.shoecount);
    Main.finalcount[5][evt.id-1]=this.shoecount;
    if (this.shoecount>=5) {
   this.shoecount=0;
    }
   }
    if (evt.id==4 ) {
   this.earingcount++;
    this.ariel_leftearing.loadTexture("ariel_leftearing"+this.earingcount);
    this.ariel_rightearing.loadTexture("ariel_rightearing"+this.earingcount);
    Main.finalcount[5][evt.id-1]=this.earingcount;
    console.log(Main.finalcount[5][1]+" : "+Main.finalcount[5][3]);
    //if (Main.finalcount[5][1]==2 ) {
    // this.ariel_rightearing.visible=false;
    // this.ariel_leftearing.visible=true;
    //}else{
    //  this.ariel_leftearing.visible=true;
    // this.ariel_rightearing.visible=true;
    //}
    if (this.earingcount>=5) {
   this.earingcount=0;
    }
   }
    if (evt.id==5) {
   this.bagcount++;
    this.ariel_bag.loadTexture("ariel_bag"+this.bagcount);
    Main.finalcount[5][evt.id-1]=this.bagcount;
    if (this.bagcount>=5) {
   this.bagcount=0;
    }
   }
   this.donevar=0;
   for(var key in Main.donecount[5])
   {
      if (Main.donecount[5][key]==1) {
        this.donevar++;
      }
   }
   if (this.donevar==5) {
    this.donebtn.scale.setTo(1);
   }
   },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","more");
},
enterRoom:function(){
    game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
  if(Main.girlCompleted[1]==1 && Main.girlCompleted[2]==2 && Main.girlCompleted[3]==3 && Main.girlCompleted[4]==4 && Main.girlCompleted[5]==5 && Main.girlCompleted[6]==6){
      game.state.start('finalscreen');
   }
   else
   game.state.start('selectscreen');
    });
   },
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
//ffffffffffffffffff
Main.finalscreen = function(){}

Main.finalscreen.prototype = {
    create:function(){
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        this.bg=game.add.sprite(0,0,'finalbg');
        this.levelGroup.add(this.bg);
        
         this.elsaGroup=game.add.group();
        
        this.elsa_backhair=game.add.sprite(345.9,187.4,'elsa_backhair'+Main.finalcount[0][1]);
        this.elsa_backhair.anchor.setTo(0.5);
        
        this.elsa_body=game.add.sprite(296.7,434.6,'elsa_body');
        this.elsa_body.anchor.setTo(0.5);
        
        //this.elsa_shoe=game.add.sprite(367.5,672.6,'elsa_shoe'+Main.finalcount[0][2]);
        //this.elsa_shoe.anchor.setTo(0.5);
        
        this.elsa_leftshoe=game.add.sprite(340.5,700,'elsa_leftshoe'+Main.finalcount[0][2]);
        this.elsa_leftshoe.anchor.setTo(0.5);
        
        this.elsa_rightshoe=game.add.sprite(385,642,'elsa_rightshoe'+Main.finalcount[0][2]);
        this.elsa_rightshoe.anchor.setTo(0.5);
        
        this.elsa_dress=game.add.sprite(338,461.5,'elsa_dress'+Main.finalcount[0][0]);
        this.elsa_dress.anchor.setTo(0.5);
        
        this.elsa_head=game.add.sprite(346.95,115.75,'elsa_head');
        this.elsa_head.anchor.setTo(0.5);
        
        this.elsa_hair=game.add.sprite(346,155.4,'elsa_hair'+Main.finalcount[0][1]);
        this.elsa_hair.anchor.setTo(0.5);
        
        this.elsa_leftearing=game.add.sprite(347.45,154.8,'elsa_leftearing'+Main.finalcount[0][3]);
        this.elsa_leftearing.anchor.setTo(0.5);
        
        this.elsa_rightearing=game.add.sprite(348.45,154.45,'elsa_rightearing'+Main.finalcount[0][3]);
        this.elsa_rightearing.anchor.setTo(0.5);
        
        this.elsa_bag=game.add.sprite(199.8,186.05,'elsa_bag'+Main.finalcount[0][4]);
        this.elsa_bag.anchor.setTo(0.5);
        
        this.elsa_hand=game.add.sprite(296.7,333.15,'elsa_hand');
        this.elsa_hand.anchor.setTo(0.5);
        
        this.elsaGroup.add(this.elsa_backhair);
        this.elsaGroup.add(this.elsa_body);
        this.elsaGroup.add(this.elsa_leftshoe);
        this.elsaGroup.add(this.elsa_rightshoe);
        this.elsaGroup.add(this.elsa_dress);
        this.elsaGroup.add(this.elsa_head);
        this.elsaGroup.add(this.elsa_hair);
        this.elsaGroup.add(this.elsa_leftearing);
        this.elsaGroup.add(this.elsa_rightearing);
        this.elsaGroup.add(this.elsa_bag);
        this.elsaGroup.add(this.elsa_hand);
        
        this.rapGroup=game.add.group();
        
        this.rap_backhair=game.add.sprite(334.8,164.5,'rap_backhair'+Main.finalcount[1][1]);
        this.rap_backhair.anchor.setTo(0.5);
        
        this.rap_body=game.add.sprite(332,445.95,'rap_body');
        this.rap_body.anchor.setTo(0.5);
        
        this.rap_shoe=game.add.sprite(281.45,698.4,'rap_shoe'+Main.finalcount[1][2]);
        this.rap_shoe.anchor.setTo(0.5);
        
        this.rap_dress=game.add.sprite(311,444.15,'rap_dress'+Main.finalcount[1][0]);
        this.rap_dress.anchor.setTo(0.5);
        
        this.rap_head=game.add.sprite(338.05,125.6,'rap_head');
        this.rap_head.anchor.setTo(0.5);
              
        this.rap_hair=game.add.sprite(337.5,164.8,'rap_hair'+Main.finalcount[1][1]);
        this.rap_hair.anchor.setTo(0.5);
        
        this.rap_leftearing=game.add.sprite(337.6,152.45,'rap_leftearing'+Main.finalcount[1][3]);
        this.rap_leftearing.anchor.setTo(0.5);
        
        this.rap_rightearing=game.add.sprite(338.5,152.45,'rap_rightearing'+Main.finalcount[1][3]);
        this.rap_rightearing.anchor.setTo(0.5);
        
        this.rap_bag=game.add.sprite(308,237.4,'rap_bag'+Main.finalcount[1][4]);
        this.rap_bag.anchor.setTo(0.5);
        
        this.rap_hand=game.add.sprite(335.95,280,'rap_hand');
        this.rap_hand.anchor.setTo(0.5);
        
        this.rapGroup.add(this.rap_backhair);
        this.rapGroup.add(this.rap_body);
        this.rapGroup.add(this.rap_shoe);
        this.rapGroup.add(this.rap_dress);
        this.rapGroup.add(this.rap_bag);
        this.rapGroup.add(this.rap_head);
        this.rapGroup.add(this.rap_hair);
                this.rapGroup.add(this.rap_hand);
        this.rapGroup.add(this.rap_leftearing);
        this.rapGroup.add(this.rap_rightearing);
        
        this.auroraGroup=game.add.group();
        
           this.aurora_backhair=game.add.sprite(335.6,140.85,'aurora_backhair'+Main.finalcount[2][1]);
        this.aurora_backhair.anchor.setTo(0.5);
        
        this.aurora_body=game.add.sprite(340.65,423.55,'aurora_body');
        this.aurora_body.anchor.setTo(0.5);
        
        this.aurora_shoe=game.add.sprite(323.1,705.7,'aurora_shoe'+Main.finalcount[2][2]);
        this.aurora_shoe.anchor.setTo(0.5);
        
        this.aurora_dress=game.add.sprite(322.05,452.15,'aurora_dress'+Main.finalcount[2][0]);
        this.aurora_dress.anchor.setTo(0.5);
        
        this.aurora_head=game.add.sprite(326.45,107.15,'aurora_head');
        this.aurora_head.anchor.setTo(0.5);
        
        this.aurora_hair=game.add.sprite(337.6,140.4,'aurora_hair'+Main.finalcount[2][1]);
        this.aurora_hair.anchor.setTo(0.5);
        
        this.aurora_earing=game.add.sprite(356.5,135.4,'aurora_earing'+Main.finalcount[2][3]);
        this.aurora_earing.anchor.setTo(0.5);
        
        this.aurora_bag=game.add.sprite(342.65,338.15,'aurora_bag'+Main.finalcount[2][4]);
        this.aurora_bag.anchor.setTo(0.5);
        
        this.aurora_hand=game.add.sprite(362.25,322.1,'aurora_hand');
        this.aurora_hand.anchor.setTo(0.5);
        
        this.auroraGroup.add(this.aurora_backhair);
        this.auroraGroup.add(this.aurora_body);
        this.auroraGroup.add(this.aurora_shoe);
        this.auroraGroup.add(this.aurora_dress);
        this.auroraGroup.add(this.aurora_bag);
                        this.auroraGroup.add(this.aurora_hand);
        this.auroraGroup.add(this.aurora_head);
        this.auroraGroup.add(this.aurora_hair);
        this.auroraGroup.add(this.aurora_earing);
        
         this.cindrellaGroup=game.add.group();
        
        this.cindrella_backhair=game.add.sprite(354,169.05,'cindrella_backhair'+Main.finalcount[3][1]);
        this.cindrella_backhair.anchor.setTo(0.5);
        
        this.cindrella_body=game.add.sprite(340.3,430.2,'cindrella_body');
        this.cindrella_body.anchor.setTo(0.5);
        
        this.cindrella_shoe=game.add.sprite(353.2,706.85,'cindrella_shoe'+Main.finalcount[3][2]);
        this.cindrella_shoe.anchor.setTo(0.5);
        
        this.cindrella_dress=game.add.sprite(340.15,382.1,'cindrella_dress'+Main.finalcount[3][0]);
        this.cindrella_dress.anchor.setTo(0.5);
        
        this.cindrella_head=game.add.sprite(330,117.9,'cindrella_head');
        this.cindrella_head.anchor.setTo(0.5);
        
        this.cindrella_hair=game.add.sprite(354,169.05,'cindrella_hair'+Main.finalcount[3][1]);
        this.cindrella_hair.anchor.setTo(0.5);
        
        this.cindrella_earing=game.add.sprite(353.75,147.5,'cindrella_earing'+Main.finalcount[3][3]);
        this.cindrella_earing.anchor.setTo(0.5);
        
        this.cindrella_bag=game.add.sprite(257.85,190.85,'cindrella_bag'+Main.finalcount[3][4]);
        this.cindrella_bag.anchor.setTo(0.5);
        
        this.cindrella_hand=game.add.sprite(311.35,253.55,'cindrella_hand');
        this.cindrella_hand.anchor.setTo(0.5);
        
        this.cindrellaGroup.add(this.cindrella_backhair);
        this.cindrellaGroup.add(this.cindrella_body);
        this.cindrellaGroup.add(this.cindrella_dress);
        this.cindrellaGroup.add(this.cindrella_shoe);
        this.cindrellaGroup.add(this.cindrella_head);
        this.cindrellaGroup.add(this.cindrella_hair);
        this.cindrellaGroup.add(this.cindrella_earing);
        this.cindrellaGroup.add(this.cindrella_bag);
        this.cindrellaGroup.add(this.cindrella_hand);
        
        this.belleGroup=game.add.group();
        
        this.belle_backhair=game.add.sprite(341,166.05,'belle_backhair'+Main.finalcount[4][0]);
        this.belle_backhair.anchor.setTo(0.5);
        
        this.belle_body=game.add.sprite(292.1,427.55,'belle_body');
        this.belle_body.anchor.setTo(0.5);
        
        //this.belle_shoe=game.add.sprite(359.4,660.4,'belle_shoe'+Main.finalcount[4][2]);
        //this.belle_shoe.anchor.setTo(0.5);
        
        this.belle_leftshoe=game.add.sprite(335.8,682.4,'belle_leftshoe'+Main.finalcount[4][2]);
        this.belle_leftshoe.anchor.setTo(0.5);
        
        this.belle_rightshoe=game.add.sprite(376.4,627.4,'belle_rightshoe'+Main.finalcount[4][2]);
        this.belle_rightshoe.anchor.setTo(0.5);
        
        this.belle_dress=game.add.sprite(342.3,434.55,'belle_dress'+Main.finalcount[4][0]);
        this.belle_dress.anchor.setTo(0.5);
        
        this.belle_head=game.add.sprite(338.8,122.85,'belle_head');
        this.belle_head.anchor.setTo(0.5);
        
        this.belle_hair=game.add.sprite(339,166.05,'belle_hair'+Main.finalcount[4][1]);
        this.belle_hair.anchor.setTo(0.5);
        
        this.belle_leftearing=game.add.sprite(340.25,153.85,'belle_leftearing'+Main.finalcount[4][3]);
        this.belle_leftearing.anchor.setTo(0.5);
        
        this.belle_rightearing=game.add.sprite(339.25,154.85,'belle_rightearing'+Main.finalcount[4][3]);
        this.belle_rightearing.anchor.setTo(0.5);
        
        this.belle_bag=game.add.sprite(194.3,187.1,'belle_bag'+Main.finalcount[4][4]);
        this.belle_bag.anchor.setTo(0.5);
        
        this.belle_hand=game.add.sprite(292.1,328.3,'belle_hand');
        this.belle_hand.anchor.setTo(0.5);
        
        this.belleGroup.add(this.belle_backhair);
        this.belleGroup.add(this.belle_body);
        this.belleGroup.add(this.belle_leftshoe);
        this.belleGroup.add(this.belle_rightshoe);
        this.belleGroup.add(this.belle_dress);
        this.belleGroup.add(this.belle_bag);
        this.belleGroup.add(this.belle_hand);
        this.belleGroup.add(this.belle_head);
        this.belleGroup.add(this.belle_hair);
        this.belleGroup.add(this.belle_leftearing);
        this.belleGroup.add(this.belle_rightearing);
        
        
         this.arielGroup=game.add.group();
        
        this.ariel_backhair=game.add.sprite(352.7,192.55,'ariel_backhair'+Main.finalcount[5][1]);
        this.ariel_backhair.anchor.setTo(0.5);
        
        this.ariel_backdress=game.add.sprite(285.45,557.35,'ariel_backdress'+Main.finalcount[5][0]);
        this.ariel_backdress.anchor.setTo(0.5);
        
        this.ariel_body=game.add.sprite(346.65,446.65,'ariel_body');
        this.ariel_body.anchor.setTo(0.5);
        
        this.ariel_shoe=game.add.sprite(295.5,690.2,'ariel_shoe'+Main.finalcount[5][2]);
        this.ariel_shoe.anchor.setTo(0.5);
        
        this.ariel_dress=game.add.sprite(335.55,446.85,'ariel_dress'+Main.finalcount[5][0]);
        this.ariel_dress.anchor.setTo(0.5);
        
        this.ariel_head=game.add.sprite(354.75,131.2,'ariel_head');
        this.ariel_head.anchor.setTo(0.5);
        
        this.ariel_hair=game.add.sprite(355.2,193.65,'ariel_hair'+Main.finalcount[5][1]);
        this.ariel_hair.anchor.setTo(0.5);
        
        this.ariel_fronthair=game.add.sprite(355.2,193.65,'ariel_fronthair'+Main.finalcount[5][1]);
        this.ariel_fronthair.anchor.setTo(0.5);
        
        this.ariel_leftearing=game.add.sprite(354,163.85,'ariel_leftearing'+Main.finalcount[5][3]);
        this.ariel_leftearing.anchor.setTo(0.5);
        
        this.ariel_rightearing=game.add.sprite(353.85,165.85,'ariel_rightearing'+Main.finalcount[5][3]);
        this.ariel_rightearing.anchor.setTo(0.5);
        
        this.ariel_bag=game.add.sprite(383.1,360,'ariel_bag'+Main.finalcount[5][4]);
        this.ariel_bag.anchor.setTo(0.5);
        
        this.ariel_hand=game.add.sprite(366,285.45,'ariel_hand');
        this.ariel_hand.anchor.setTo(0.5);
        
        this.arielGroup.add(this.ariel_backhair);
        this.arielGroup.add(this.ariel_backdress);
        this.arielGroup.add(this.ariel_body);
        this.arielGroup.add(this.ariel_shoe);
        this.arielGroup.add(this.ariel_dress);
        this.arielGroup.add(this.ariel_bag);
        this.arielGroup.add(this.ariel_head);
        this.arielGroup.add(this.ariel_hair);
                this.arielGroup.add(this.ariel_hand);
        this.arielGroup.add(this.ariel_leftearing);
        this.arielGroup.add(this.ariel_rightearing);
        this.arielGroup.add(this.ariel_fronthair);
        
         if (Main.finalcount[0][1]==1) {
     this.elsa_leftearing.visible=false;
     this.elsa_rightearing.visible=true;
    }else{
      this.elsa_leftearing.visible=true;
     this.elsa_rightearing.visible=true;
    }
    
     if (Main.finalcount[1][1]==1) {
     this.rap_leftearing.visible=false;
     this.rap_rightearing.visible=false;
    }else{
      this.rap_leftearing.visible=true;
     this.rap_rightearing.visible=true;
    }
    
    if (Main.finalcount[2][1]==5) {
     this.aurora_earing.visible=false;
    }else{
     this.aurora_earing.visible=true;
    }
     if (Main.finalcount[4][1]==2 ) {
     this.belle_rightearing.visible=false;
     this.belle_leftearing.visible=true;
    }else{
      this.belle_leftearing.visible=true;
     this.belle_rightearing.visible=true;
    }

        this.levelGroup.add(this.elsaGroup);
        this.levelGroup.add(this.cindrellaGroup);
        this.levelGroup.add(this.auroraGroup);
        this.levelGroup.add(this.rapGroup);
        this.levelGroup.add(this.belleGroup);
        this.levelGroup.add(this.arielGroup);
        //yyyyyy
       this.elsaGroup.scale.setTo(0.85);
       this.elsaGroup.x=500;
       this.elsaGroup.y=50;

       this.cindrellaGroup.scale.setTo(0.85);
       this.cindrellaGroup.x=-500;
       this.cindrellaGroup.y=55;

       this.auroraGroup.scale.setTo(0.82);
       this.auroraGroup.x=500;
       this.auroraGroup.y=75;

       this.rapGroup.scale.setTo(0.9);
       this.rapGroup.x=500;
       this.rapGroup.y=45;

       this.belleGroup.scale.setTo(0.9);
       this.belleGroup.x=-500;
       this.belleGroup.y=37;

       this.arielGroup.scale.setTo(0.9);
       this.arielGroup.x=-500;
       this.arielGroup.y=30;
       
      
         this.morebtn = game.add.sprite(69,736.2,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.resetbtn = game.add.sprite(443,736.2,'resetbtn');
         this.resetbtn.anchor.setTo(0.5);
         this.resetbtn.scale.setTo(0);
         this.resetbtn.inputEnabled = true;
         this.resetbtn.input.useHandCursor = true;
         this.resetbtn.events.onInputUp.add(this.resetfun, this);
         this.resetbtn.events.onInputOver.add(this.btnOver, this);
         this.resetbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.resetbtn);
         
          this.thumbGroup = game.add.group();
               game.load.crossOrigin='*';
            this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
            this.thumbVar = game.add.sprite(-200, -200, 'thumb_'+this.randomId);
            this.thumbVar.inputEnabled = true
            this.thumbVar.input.useHandCursor = true;
            this.thumbVar.events.onInputUp.add(this.thumbLink, this);
            this.thumbframeVar = game.add.sprite(-200, -200, '');
			this.thumbVar.height=this.thumbframeVar.height-2;
			this.thumbVar.width=this.thumbframeVar.width-2;
            this.thumbGroup.add(this.thumbVar);
            this.thumbGroup.add(this.thumbframeVar);
            
            this.thumbGroup.visible=false;
            this.thumbGroup.alpha=0;
         
           if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
      for (var i=1;i<=30;i++) {
         this['tool'+i+'drag']=false;
         this['hitcount'+i]=0;
         this['testcount'+i]=0;
              }
        },
startPopUp:function(evt){
       game.add.tween(this.arielGroup).to({x:-280},700,"Linear",true,300);
       game.add.tween(this.elsaGroup).to({x:-3},700,"Linear",true,300);
       game.add.tween(this.cindrellaGroup).to({x:-80},700,"Linear",true,300);
       game.add.tween(this.rapGroup).to({x:160},700,"Linear",true,300);
       game.add.tween(this.auroraGroup).to({x:100},700,"Linear",true,300);
       game.add.tween(this.belleGroup).to({x:-190},700,"Linear",true,300).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1},700,Phaser.Easing.Quadratic.Out, true);
   game.add.tween(this.resetbtn.scale).to({x:1, y:1},700,Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
       this.thumbGroup.visible=true;
   game.add.tween(this.thumbGroup).to({alpha:1},700,"Linear",true);
   },this);
   },this);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","gameover","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","gameover","more");
},
   thumbLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","gameover","thumb",RelatedGames[this.randomId]['id']);
},
 resetfun:function(){
   Main.girlCompleted = [0,0,0,0,0,0];
   Main.girlChoosed = [0,0,0,0,0,0];
   Main.donecount = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
   Main.finalcount = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
   Main.titlecount = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]];
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('intro');   
         });
   },
//btnnnnnnnnnnnnnn
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}

Main.selectscreen = function(){}
Main.selectscreen.prototype = {
   create:function(){
      this.levelGroup = game.add.group();
      this.bg = game.add.sprite(0,0,'dressupbg');
      this.levelGroup.add(this.bg);
         
     var iconposX=[-11.75,511.95,414.3,318.7,100.75,174.45];         
     var iconposY=[366.95,369.05,466.05,506.1,464.6,532.75];         
      for(var i=1; i<=6; i++)
      {
         this['icon'+i] = game.add.sprite(iconposX[i-1],iconposY[i-1],'select_icon'+i);
         this['icon'+i].anchor.setTo(0.5);
         this['icon'+i].id =i;
         this['icon'+i].inputEnabled = true;
         this['icon'+i].input.useHandCursor = true;
         this['icon'+i].input.pixelPerfectOver = true;
         this['icon'+i].input.pixelPerfectClick = true;
         this['icon'+i].events.onInputUp.add(this.enterRoom, this);
         //this['icon'+i].events.onInputOver.add(this.btnOver, this);
         //this['icon'+i].events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this['icon'+i]);
      }
      
        this.morebtn = game.add.sprite(69,736.2 , 'morebtn');
        this.morebtn.anchor.setTo(0.5);
        this.morebtn.inputEnabled = true;
        this.morebtn.input.useHandCursor = true;
        this.morebtn.events.onInputOver.add(this.btnOver, this);
        this.morebtn.events.onInputOut.add(this.btnOut, this);
        this.morebtn.events.onInputUp.add(this.moreLink, this); 
        this.levelGroup.add(this.morebtn);
        
      if (Main.girlCompleted[1] == 1) {
         this.icon1.inputEnabled = false;
         this.icon1.frame=1;
      }
      
      if (Main.girlCompleted[2] == 2) {
         this.icon2.inputEnabled = false;
         this.icon2.frame=1;
      }
      
      if (Main.girlCompleted[3] == 3) {
         this.icon3.inputEnabled = false;
         this.icon3.frame=1;
      }
      
            if (Main.girlCompleted[4] == 4) {
         this.icon4.inputEnabled = false;
         this.icon4.frame=1;
      }
      
      if (Main.girlCompleted[5] == 5) {
         this.icon5.inputEnabled = false;
         this.icon5.frame=1;
      }
      
      if (Main.girlCompleted[6] == 6) {
         this.icon6.inputEnabled = false;
         this.icon6.frame=1;
      }
      
     
      this.morebtn.scale.setTo(0);
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-860}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(440,0,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
      },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","logo");
},
moreLink:function(){
   CreateLinksInGame("Disney-Princess-Christmas-Ball","game","morebutton");
},
startPopUp:function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, "Linear", true);
},
btnOver:function(items){
   items.scale.x=1.05;
      items.scale.y=1.05;
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
   items.scale.x=1;
      items.scale.y=1;
   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(evt){
     for(var i=1; i<=6; i++)
      {
         this['icon'+i].inputEnabled = false;
      }
   Main.girlChoosed[0] = evt.id;
   Main.girlCompleted[evt.id] = evt.id;
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('dressup'+evt.id);   
         });
   },
}
game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('selectscreen', Main.selectscreen);
game.state.add('dressup1', Main.dressup1);
game.state.add('dressup2', Main.dressup2);
game.state.add('dressup3', Main.dressup3);
game.state.add('dressup4', Main.dressup4);
game.state.add('dressup5', Main.dressup5);
game.state.add('dressup6', Main.dressup6);
game.state.add('finalscreen', Main.finalscreen);

game.state.start('boot');