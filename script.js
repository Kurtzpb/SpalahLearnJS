var getSum = function() {
	var index = 1;
	var sum = 0;
	console.log("Arguments length = " + arguments.length);
	console.log("*********");
	if (arguments.length === 0) {
		console.log("Empty");
	}
	else {
		for (var i = 0; i < arguments.length; i++) {
			console.log("Argument " + index++ + " = " + arguments[i]);
			console.log("*********");
			sum += arguments[i];
		}
	}
	return (console.log("Sum is " + sum));
}

getSum(5, 8, 15);