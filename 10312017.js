// October 31, 2017

// Print values 2, 4, 6, 8, 10 using for loop
// for (var i = 2; i <= 10; i += 2) {
// 	console.log(i);
// }	

// Print values 1, 3, 5, 7, 9
// var i = 1;
// while(i <= 9) {
// 	console.log(i);
// 	i += 2;
// }

// Populate an array with multiples of 3, start at 6 and end with 60, not including
// var arr = [];
// var i;
// for(i = 6; i < 60; i+=3) {
// 	arr.push(i);
// }
// console.log(arr);

// Write a loop that outputs a triangle (last row 8 #'s')
// METHOD 1
// var i;
// var triangle = '';
// for(i = 1; i <= 8; i++) {
// 	console.log(triangle += '# ');
// }
// METHOD 2
// var a = '#';
// for(var i = 1; i <= 10; i++) {
// 	console.log(a);
// 	a += '#';
// }

// Use while loop to print out all even number between 1 and 100
var i = 1;
while(i < 100) {
	if(i % 2 === 0) {
	console.log(i);
	i++;
	}
}