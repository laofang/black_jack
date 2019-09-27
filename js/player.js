
function Player(name) {
	this.name = name;
	this.cards = [];
	this.money = 0;
	/**
	* 要牌
	**/
	Player.prototype.callCard = function(dealer) {
		dealer.dealCard(this);
	}
	/**
	* 获取牌值总和
	**/
	Player.prototype.getCardsValue = function() {
		var sum = 0;
		for(i = 0; i < cards.length ; i++) {
			sum = sum + cards[i].value;
		}
		return sum;
	}
	
	Player.prototype.toStake = function(amount,dealer) {
		if(amount > this.money) {
			return false;
		}
		else{
			this.money = this.money - amount;
			dealer.addStakePool(amount);
			return true;
		}
	}
}
