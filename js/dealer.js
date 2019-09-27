
var TWENTYONE = 21;

function Dealer(poker) {
	// body...
	this.poker = poker;
	this.stakePool = 0;

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

	Dealer.prototype.addStakePool = function(amount) {
		this.stakePool = this.stakePool + amount;
	}

	Dealer.prototype.settleAcount = function(winner,loser) {
		winner.money = winner.money + this.stakePool;
		this.stakePool = 0;
		this.poker.cards.concat(winner.cards);
		this.poker.cards.concat(loser.cards);
		this.poker.shuffleCards();
	}
}