

function Game() {

	this.player = new Player();

	this.banker = new Player();

	this.dealer = new Dealer(new Poker());

	Game.prototype.start = function() {
		// body...
	};

	Game.prototype.initDealCard = function(role) {
		// body...
		for(i = 0; i<2 ;i++) {
			role.cards.push(dealer.poker.cards.pop());
		}
	};

	
	
	

	Game.prototype.end = function() {
		// body...

	};
}