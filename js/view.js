var width = 600;
var height = 400; 
var widthCenter = width / 2;
function View(game) {
	// body...
	this.game = game;

	View.prototype.drawBackGround = function(canvas) {
		// body...

		var leftUpX = Math.floor(width * 1/4);
		var leftUpY = Math.floor(height * 1/3);

		var rightUpX = width - (Math.floor(width * 1/4));
		var rightUpY = leftUpY;

		var rightDownX = width - (Math.floor(width * 1/6));
		var rightDownY = Math.floor(height * 3/4);

		var leftDownX = Math.floor(width * 1/6);
		var leftDownY = rightDownY;

		var ctx = canvas.getContext('2d');
		ctx.fillStyle = "green";

		ctx.beginPath();

		ctx.moveTo(leftUpX,leftUpY);

		ctx.lineTo(rightUpX,rightUpY);
		ctx.lineTo(rightDownX,rightDownY);
		ctx.lineTo(leftDownX,leftDownY);
		ctx.lineTo(leftUpX,leftUpY)

		ctx.fill();
	};

	View.prototype.drawGame = function(canvas) {
		// body...
		var oX = widthCenter;
		var oY = Math.floor(height * 1/6);
		var r = Math.floor(height * 1/12);

		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.arc(oX,oY,r,0,Math.PI*2,true);

		ctx.moveTo(widthCenter,Math.floor(height * 1/4));
		ctx.lineTo(widthCenter,Math.floor(height * 1/3));

		ctx.moveTo(widthCenter,Math.floor(height * 7/24));
		ctx.lineTo(widthCenter-Math.floor(widthCenter * 1/6),Math.floor(height * 3/8));

		ctx.moveTo(widthCenter,Math.floor(height * 7/24));
		ctx.lineTo(widthCenter+Math.floor(widthCenter * 1/6),Math.floor(height * 3/8));

		ctx.stroke();
	};

	View.prototype.drawBankerCards = function() {
		// body...
		
	};

	View.prototype.drawPlayerCards = function() {
		// body...

	};

	View.prototype.drawBankerBackCard = function(x,y,name,coler) {
		// body...
		
	};

	View.prototype.drawBankerFrontCard = function(x,y,name,coler) {
		// body...

	};

	View.prototype.drawPlayerBackCard = function(x,y,name,coler) {
		// body...

	};

	View.prototype.drawPlayerFrontCard = function(x,y,name,coler) {
		// body...

	};
}