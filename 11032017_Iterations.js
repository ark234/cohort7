// November 3, 2017
// TOPIC: iterations


// EXERCISE 1: Print out numbers 1 - 20; on every fifth iteration print 'I'm a multiple of 5'
for(var i = 1; i <= 20; i++) {
	if(i % 10 === 0) { 
		console.log(i + ' - I am the 10th iteration!');
	} else if(i % 5 === 0) {
		console.log(i + ' - I am the 5th iteration!');
	} else {
		console.log(i);
	}
}