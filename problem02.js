/*

PROJECT EULER: PROBLEM #2

*/

var fibonacci = [1, 2];
var fibEvens = [];

var fibSum = 3;     // Initialize the sum of the Fibonacci array (1 + 2 = 3)
var fibNext = 0;    // Initialize the "next" Fibonacci number in the sequence (and the next two placeholder variables) at 0 (just so it's a number)
var i = 0;
var j = 0;

// Find all the Fibonacci numbers less than 4,000,000.
    
while (fibNext < 4000000) {
    i = fibonacci.length - 1;
    j = i - 1;
    fibNext = fibonacci[i] + fibonacci[j];
    
    fibonacci.push(fibNext);
    
    fibSum += fibNext;
};

// Get the even numbers out and into their own array.

for (i = 0; i < fibonacci.length; i++) {
    if (fibonacci[i] % 2 === 0) {
        fibEvens.push(fibonacci[i]);
    };
};

// Re-initialize a placeholder variable, and add up the even numbers.

j = 0;

for (i = 0; i < fibEvens.length; i++) {
    j += fibEvens[i];
}

console.log(j);