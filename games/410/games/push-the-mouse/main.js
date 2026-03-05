;(function(){
/*********************************************
				GAME MAIN
*********************************************/
	/*********************************************
				var
	*********************************************/
	var gameMain = function(){};
	gameMain.prototype.square = {};
	gameMain.prototype.item3 = {};
	gameMain.prototype.grid = {};
	gameMain.prototype.saveBack = [];
	gameMain.prototype.previousStateAuto = false;
	gameMain.prototype.state = "";

	/*********************************************
				function
	*********************************************/
	gameMain.prototype.init = function(startX,startY,nbCaseWidth,nbCaseHeight,caseWidth,caseHeight,offsetCase){
		this.clearSaveBack();
		this.square = {};
		this.item3 = {};
		this.grid = {};
		this.startX = startX;
		this.startY = startY;
		this.grid.nbCaseWidth = nbCaseWidth;
		this.grid.nbCaseHeight = nbCaseHeight;
		this.grid.caseWidth = caseWidth;
		this.grid.caseHeight = caseHeight;
		this.grid.offsetCase = offsetCase;
		this.state = "";
	};


	//dir : 0 / 1 / 2 /3   === left / up / right / bot
	gameMain.prototype.createSquare = function(uid, dir,x,y,type){

		this.square[uid] = {uid:uid,dir:dir,x:x,y:y,type:type,onMove:false};	
	};

	gameMain.prototype.createItem3 = function(uid,x,y){

		this.item3[uid] = {uid:uid,x:x,y:y};	
	};
	
	gameMain.prototype.setState = function(state) {

		this.state = state;
	};

	gameMain.prototype.canMove = function(uid,dir){
		if(typeof(this.square[uid]) == "undefined"){return false;}

		if(dir == 0 && this.square[uid].x > this.startX + (this.grid.caseWidth/2)){
			if(this.item3Near(this.square[uid].x - this.grid.caseWidth, this.square[uid].y)  == -1){
				return true;
			}
		}
		if(dir == 1 && this.square[uid].y > this.startY + (this.grid.caseHeight/2)){
			if(this.item3Near(this.square[uid].x, this.square[uid].y - this.grid.caseHeight)  == -1){
				return true;
			}
		}
		if(dir == 2 && this.square[uid].x < (this.startX + ((this.grid.caseWidth+this.grid.offsetCase) * (this.grid.nbCaseWidth-1)) - (this.grid.caseWidth /2))){
			if(this.item3Near(this.square[uid].x + this.grid.caseWidth, this.square[uid].y) == -1){
				return true;
			}
		}
		if(dir == 3 && this.square[uid].y < (this.startY + ((this.grid.caseHeight+this.grid.offsetCase) * (this.grid.nbCaseHeight-1)) - (this.grid.caseHeight /2))){
			if(this.item3Near(this.square[uid].x, this.square[uid].y + this.grid.caseHeight) == -1){
				return true;
			}
		}
		return false;
	};

	gameMain.prototype.item3Near = function(x,y) {
		for(var i in this.item3){
			if(this.item3[i].x - (this.grid.caseWidth/2) < x 
			&& this.item3[i].x + (this.grid.caseWidth/2) > x 
			&& this.item3[i].y - (this.grid.caseHeight/2) < y
			&& this.item3[i].y + (this.grid.caseHeight/2) > y){
				return this.item3[i].uid;
			}
		}

		return -1;
	};

	gameMain.prototype.canMoveWithNeighbour = function(uid,dir){
		var uidUsed = uid;
		var uidToMove = [];
		if(!this.canMove(uid,dir)){return -1;}
		while((uidUsed = this.neighbour(uidUsed,dir)) >= 0){
			if(!this.canMove(uidUsed,dir)){return -1;}
			uidToMove.push(uidUsed);
		}
		return uidToMove;
	};

	gameMain.prototype.neighbour = function(uid,dir){
		if(typeof(this.square[uid]) == "undefined"){return false;}

		if(dir == 0 ){
			return this.squareNear(this.square[uid].x - (this.grid.caseWidth + this.grid.offsetCase),this.square[uid].y);
		}
		if(dir == 1){
			return this.squareNear(this.square[uid].x,this.square[uid].y - (this.grid.caseHeight + this.grid.offsetCase));
		}
		if(dir == 2){
			return this.squareNear(this.square[uid].x + (this.grid.caseWidth + this.grid.offsetCase),this.square[uid].y);
		}
		if(dir == 3){
			return this.squareNear(this.square[uid].x,this.square[uid].y + (this.grid.caseHeight + this.grid.offsetCase));
		}
		
		return -1;
	};

	gameMain.prototype.requestNextMove = function(uid,dir,callBackMove,moveSame){
		var moveSame = (typeof moveSame == "undefined")?true:moveSame;
		var uidUsed = uid;
		var uidToMove = [];
		if(!this.canMove(uid,dir)){return;}
		if(this.square[uid].onMove){return;}

		uidToMove.push(uid);
		
		//check if neighbour exist
		if((uidUsed = this.neighbour(uid,dir)) >= 0){
			//same type
			if(this.square[uid].type == this.square[uidUsed].type && moveSame){
				if(this.canMoveWithNeighbour(uidUsed,this.square[uidUsed].dir) == -1){
					return;
				}
			}
			else{
				var b;
				//get all neighbour to move
				if((b = this.canMoveWithNeighbour(uid,dir)) != -1){
					uidToMove = uidToMove.concat(b);
				}
				else{return;}
			}
		}
		
		for (var i in uidToMove){
			if(this.square[uidToMove[i]].type != this.square[uid].type || uidToMove[i] == uid || !moveSame){
				this.moveByUid(uidToMove[i],dir,callBackMove);
			}
		}

		if(moveSame){
			this.moveAllSameType(uid,this.square[uid].type,callBackMove);
		}
	};

	gameMain.prototype.requestTp = function(uid,destX,destY,dir1,callBackMove,callBackTp){
		if(this.squareNear(destX,destY) >= 0){return;} //check case destination
		//var dir = this.square[uid].dir;
		var dir = dir1;
		this.square[uid].x = destX;
		this.square[uid].y = destY;
		
		c2_callFunction(callBackTp,[uid,destX,destY,this.square[uid].dir]);
		//set the new position for tp
		if(this.state != "back"){
			this.saveBack[this.saveBack.length-1][uid].x = destX;
			this.saveBack[this.saveBack.length-1][uid].y = destY;
		}
		else if(this.state == "back"){
			//change direction for tp when back
			/*if(dir == 0){dir =2;}
			if(dir == 1){dir =3;}
			if(dir == 2){dir =0;}
			if(dir == 3){dir =1;}*/
		}
		this.requestNextMove(uid,dir,callBackMove,false);
	};

	gameMain.prototype.moveByUid = function(uid,dir,callBackMove){
		if(typeof(this.square[uid]) == "undefined"){return false;}

		this.square[uid].onMove = true;

		var x = this.square[uid].x;
		var y = this.square[uid].y;

		if(dir == 0){
			x -= this.grid.caseWidth + this.grid.offsetCase;
		}
		if(dir == 1){
			y -= this.grid.caseHeight + this.grid.offsetCase;
		}
		if(dir == 2){
			x += this.grid.caseWidth + this.grid.offsetCase;
		}
		if(dir == 3){
			y += this.grid.caseHeight + this.grid.offsetCase;
		}
		this.square[uid].x = x;
		this.square[uid].y = y;
		c2_callFunction(callBackMove,[uid,x,y,this.square[uid].dir,dir]);
	};

	gameMain.prototype.moveAllSameType = function(uid,type,callBackMove){
		for(var i in this.square){
			if(this.square[i].type == type && i != uid &&this.canMove(i,this.square[i].dir)){
				//this.moveByUid(i,this.square[i].dir,callBackMove);
				this.requestNextMove(i,this.square[i].dir,callBackMove);	
			}
		}
	};

	//check if 1 square is on x,y and return uid if find
	gameMain.prototype.squareNear = function(x,y){

		for(var i in this.square){
			if(this.square[i].x - (this.grid.caseWidth/2) < x 
			&& this.square[i].x + (this.grid.caseWidth/2) > x 
			&& this.square[i].y - (this.grid.caseHeight/2) < y
			&& this.square[i].y + (this.grid.caseHeight/2) > y){
				return this.square[i].uid;
			}
		}

		return -1;
	};

	gameMain.prototype.updateObj = function(obj){
		for(var i in obj){
			if(i != "uid"){
				this.square[obj.uid][i] = obj[i];
			}
		}
	};

	gameMain.prototype.clearSaveBack = function(){

		this.saveBack = [];
	};

	gameMain.prototype.saveSquareState = function(){

		this.saveBack.push(getCopyOfObject(this.square));
	};

	gameMain.prototype.loadPreviousStateSquare = function(callBackMove,callBackTp){
		if(playtouch.gameMain.saveBack.length <= 2){return;}

		var state = this.saveBack.pop();

		for(var i in state){
			this.square[i].x = state[i].x;
			this.square[i].y = state[i].y;
			this.square[i].dir = state[i].dir;

			c2_callFunction(callBackMove,[state[i].uid,state[i].x,state[i].y,state[i].dir,state[i].dir]);
		}
	};


	
/*********************************************
				UTILS
*********************************************/
	function getCopyOfObject(o) {
		var out, v, key;
		out = Array.isArray(o) ? [] : {};
		for (key in o) {
			v = o[key];
			out[key] = (typeof v === "object") ? getCopyOfObject(v) : v;
		}
		return out;
	}

/*********************************************
				object
*********************************************/
	window.playtouch = {};
	playtouch.gameMain = new gameMain();

	//console.log("main.js is load");

})();
	