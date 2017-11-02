// November 2, 2017
// TOPIC: functions


// EXERCISE 1A: Convert vending machine into a function
// vending(4, 10);
// // METHOD 1: function notation
// function vending(cookieCost, cashIn) {

// 	var changeRemaining = cashIn - cookieCost;
// 	var quarters = 0;

// 	for (var i = changeRemaining; i > 0; i -= 0.25) {
// 		console.log('Change remaining: $' + i);
// 		console.log('Dispensing a quarter...');
// 		quarters++
// 	}

// 	console.log('Total quarters dispensed: ' + quarters);
// }



// EXERCISE 1B: Write a function that equates the sum of two variables
// function sum(a, b) {
// 	return a + b;
// }
// Shorthand version using arrow function notation
const sum = (a, b) => a + b;

console.log(sum(2, 5));