// Get DOM element on index.html
var number = document.getElementById("number");


// Set the initial values
var found = false;
var currentNum = 2;


// Main loop
while (true) {
	if (hasRemainder(currentNum)) {
		console.log("The number is not: ", currentNum);
		currentNum++;
	} else {
		console.log("Your answer is: ", currentNum);
		number.innerHTML = "Your answer is: " + currentNum;
		break;
	}
}


// Checks 1 to 10
function hasRemainder(num) {

	// loop through numbers 1 through 10; if there is a remainder, return true

	for (var i = 1; i <= 10; i++) {
		if (num % i) {
			return true;
		}
	}

	// no remainders were found, return false
	return false;
}