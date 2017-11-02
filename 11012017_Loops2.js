// November 1, 2017
// TOPIC: while loops


// EXERCISE 1A: Use a while loop to print the product of integers 1 - 35 in multiples of 3.
// var a = 1;

// while(a < 35) {
// 	console.log(a * 3);
// 	a++;
// }


// EXERCISE 1B: Use a while loop to print the product of integers 1 - 100 in multiples of 5
// var a = 1;

// while(a < 100) {
// 	console.log(a * 5);
// 	a++;
// }


// EXERCISE 1C: Use a while loop to print the products of integers 1 - 20 in multiples of 5 on every 3rd iteration
// var a = 1;

// while(a <= 20) {
// 	if(a % 3 === 0) {
// 		console.log(a * 5);
// 	}
// 	a++;
// }


// EXERCISE 1D:
// Using a while loop, iterate 0 - 20, including 20. All numbers (iterators) divisible by 2 should be multplied 
// by 3 before they are outputted. All other integers should not be outputted.
// var a = 0;

// while(a <= 20) {
// 	if(a % 2 === 0) {
// 		console.log(a * 3);
// 	}
// 	a++;
// }



// EXERCISE 2: using a while loop, print out all prime numbers between 0 - 20
// var a = 2;
// var isPrime;

// while(a <= 20) {
// 	isPrime = true;

// 	for(var i = 2; i < a; i++) {
// 		if(a%i === 0) {
// 			isPrime = false;
// 		}
// 	}

// 	if(isPrime) {
// 		console.log(a + ' is a prime number');
// 	}
// 	a++;
// }



// BONUS EXERCISE: Nando went to the vending machine to buy himself a cookie. 
// The cookie costs $4 dollars. He paid with a $10 bill, the vending machine paid him back in quarters. 
// Write a loop that says how many quarters he got in return.

// const cookieCost = 4;
// console.log('Cookie costs $4');

// var pocketMoney = 10;
// console.log('Nando inserted $10');

// var changeRemaining = pocketMoney - cookieCost;
// var quarters = 0;

// WHILE SOLUTION
// while(changeRemaining > 0) {
// 	console.log('Change remaining: $' + changeRemaining);
// 	console.log('Dispensing a quarter... ')
// 	quarters++;
// 	changeRemaining -= 0.25;
// }

// FOR LOOP SOLUTION
// for (var i = changeRemaining; i > 0; i -= 0.25) {
// 	console.log('Change remaining: $' + i);
// 	console.log('Dispensing a quarter...');
// 	quarters++
// }

// console.log('Total quarters dispensed: ' + quarters);
