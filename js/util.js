
function getRandomNum(min,max) {
	// body...
	parseInt(Math.random()*(max-min+1)+min,10);
	return Math.floor(Math.random()*(max-min+1)+min);
}

function arraysEnumSwap(li,index1,index2) {
	// body...
	var temp = li[index1];
	li[index1] = li[index2];
	li[index2] = temp;
}