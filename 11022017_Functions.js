// November 2, 2017
// TOPIC: functions + arrays


// EXERCISE 1A: Convert vending machine into a function
// vending(4, 10);
// // METHOD 1: function notation
// function vending(cookieCost, cashIn) {

// 	var changeRemaining = cashIn - cookieCost;
// 	var quarters = 0;

// 	for (var i = changeRemaining; i > 0; i -= 0.25) {
// 		console.log('Change remaining: $' + i + '; Dispensing a quarter...');
// 		quarters++;
// 	}

// 	console.log('Total quarters dispensed: ' + quarters);
// }



// EXERCISE 1B: Write a function that equates the sum of two variables
// function sum(a, b) {
// 	return a + b;
// }
// Shorthand version using arrow function notation
// const sum = (a, b) => a + b;

// console.log(sum(2, 5)); 



// EXERCISE 2: $12.93 chair. Paid with $100 bill. calculate change in most common denominations.

// chairVendor(12.93, 100);

// function chairVendor(chairCost, cashIn) {
// 	var change = cashIn - chairCost;
// 	var twenty = 0;
// 	var ten = 0;
// 	var five = 0;
// 	var one = 0;
// 	var quarter = 0;
// 	var dime = 0;
// 	var nickel = 0;
// 	var penny = 0;

// 	console.log('$' + change + ' due.')

// 	while(change > 0) {
// 		if(change >= 20) {
// 			change -= 20;
// 			twenty++;
// 		} else if (change >= 10) {
// 			change -= 10;
// 			ten++;
// 		} else if (change >= 5) {
// 			change -= 5;
// 			five++;
// 		} else if (change >= 1) {
// 			change -= 1;
// 			one++;
// 		} else if (change >= 0.25) {
// 			change -= 0.25;
// 			quarter++;
// 		} else if (change >= 0.1) {
// 			change -= 0.1;
// 			dime++;
// 		} else if (change >= 0.05) {
// 			change -= 0.05;
// 			nickel++;
// 		} else {
// 			change -= 0.01;
// 			penny++;
// 		}
// 	}
// 	console.log('Twenty dollar bills dispensed: ' + twenty);
// 	console.log('Ten dollar bills dispensed: ' + ten);
// 	console.log('Five dollar bills dispensed: ' + five);
// 	console.log('One dollar bills dispensed: ' + one);
// 	console.log('Quarters dispensed: ' + quarter);
// 	console.log('Dimes dispensed: ' + dime);
// 	console.log('Nickels dispensed: ' + nickel);
// 	console.log('Pennies dispensed: ' + penny);
// }



// EXERCISE 3A: 3 arrays. 3 genres of music. 3 favorite artists log
// var pop = ['The Beatles', 'Michael Jackson', 'Prince'];
// var rock = ['AC/DC', 'Eagles', 'Elvis Presley'];
// var rap = ['Grandmaster Flash', 'Tupac Shakur', 'Dr. Dre'];

// console.log('Favorite pop artist: ' + pop[0]);
// console.log('Favorite rock artist: ' + rock[1]);
// console.log('Favorite rap artist: ' + rap[2]);


// EXERCISE 3B: push another item into array and print it.
// var pop = ['The Beatles', 'Michael Jackson', 'Prince'];
// pop.push('Rihanna');
// console.log(pop);


// EXERCISE 3C: find length of an array
// var rock = ['AC/DC', 'Eagles', 'Elvis Presley'];
// console.log(rock.length); // length does not need () because no arguments.


// EXERCISE 3D: override elements in an array
// var rock = ['AC/DC', 'Eagles', 'Elvis Presley'];
// rock[0] = 'Finger Eleven';
// console.log(rock);


// EXERCISE 3E: remove last element from an array
// var rock = ['AC/DC', 'Eagles', 'Elvis Presley'];
// rock.pop();
// console.log(rock);


// EXERCISE 3F: remove first element from an array
// var rock = ['AC/DC', 'Eagles', 'Elvis Presley'];
// rock.shift();
// console.log(rock);


// EXERCISE 3G: convert array to a string
// var rock = ['AC/DC', 'Eagles', 'Elvis Presley'];
// console.log(rock.toString());



// HW 1: Create a function that takes in an integer and prints out multiplication table for the first 12 products.
// const multiTable = (num) => {
// 	var arr = [];
// 	for (var i = 0; i < 12; i++) {
// 		arr.push(num * i);
// 	}
// 	return arr;
// }
// console.log(multiTable(5));



// HW 2: FizzBuzz Challenge
// for(var i = 1; i <= 100; i++) {
// 	if(i % 3 == 0 && i % 5 !== 0) console.log('Fizz');
// 	else if(i % 3 !== 0 &&  i % 5 === 0) console.log('Buzz');
// 	else if(i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
// 	else console.log(i);
// }
