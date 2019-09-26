var colorEnum = {
	SPADE : "spade",
	HEART : "heart",
	CLUB : "club",
	DIAMOND : "diamond"
}


var colorList = [colorEnum.SPADE,colorEnum.HEART,colorEnum.CLUB,colorEnum.DIAMOND];


function Poker(hasJokers) {

	this.cards = initPoker(hasJokers);
	Poker.prototype.shuffleCards = function() {
		var min = 0;
		var max = this.cards.length - 1;
		for(;max>min;max--){
			var index = getRandomNum(min,max);
			console.log(index);
			arraysEnumSwap(this.cards,index,max);
		}
	}	
}



function Card(name,color,value) {
	this.name = name;
	this.color = color;
	this.value = value;
}

/**
 **初始化
 **
**/
function initPoker(hasJokers) {
	var cards = [];
	for(var i = 0;i< 13;i++) {
		var name = "";
		var value = 0;

		switch(i) {
			case 0:
				name = "A";
				value = 10;
				break;
			case 10: 
				name = "J";
				value = 10;
				break;
			case 11:
				name = "Q";
				value = 10;
				break;
			case 12: 
				name = "K";
				value = 10;
				break;
			default:
				name = i+1 + "" ;
				break;
		}

		for(var j = 0; j < colorList.length;j++) {
			if(i <= 10) {
				value = i + 1;
			}
			var card = new Card(name,colorList[j],value);
			cards.push(card);
		}
	}

	if(hasJokers) {
		var biggerJocker = new Card("Jocker","",16);
		var smallerJocker = new Card("Jocker","",15);
		cards.push(biggerJocker);
		cards.push(smallerJocker);
	}
	return cards;
}

