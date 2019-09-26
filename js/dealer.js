
var TWENTYONE = 21;

function Dealer(poker) {
	// body...
	this.poker = poker;
	this.moneyPool = 0;
	Dealer.prototype.dealCard = function(player) {
		var card = poker.cards.pop();
		player.cards.push(card);
	}

	Dealer.prototype.isOverTwentyOne = function(player) {
		var sumValue = player.getCardsValue();
		var result = sumValue > TWENTYONE ? true : false;
		return result;
	}
	
	Dealer.prototype.isEqualTwentyOne = function(player) {
		var sumValue = player.getCardsValue();
		var result = sumValue == TWENTYONE ? true : false;
		return result;
	}

	Dealer.prototype.ruling = function(player,banker) {
		return player.getCardsValue() >= banker.getCardsValue() ? true : false;
	}
}