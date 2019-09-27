
function Controller(game) {
	// body...
	this.game = game;
	Controller.prototype.toStake = function() {
		// body...
		this.game.player.toStake(amount,this.game.dealer);
	};

	Controller.prototype.callCard = function() {
		// body...
		this.game.player.callCard(this.game.dealer);
	};

	Controller.prototype.stopCallCard = function() {
		// body...
	};


}