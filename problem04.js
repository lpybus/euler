/*

    PROJECT EULER: PROBLEM 4
    
*/

/* Building a function to check if a number is a palindrome. */

var palLength;
var palHalf1 = [];
var palHalf2 = [];

var palindromeCheck = function (n) {
    palLength = String(n).length
    var i = 0;
    
    /* Get the first half. */
    if (!isNaN(n) && palLength % 2 === 0) {
        while (palHalf1.length < palLength / 2) {
            palHalf1.push(String(n)[i]);
            i++;
        }
        
        /* Now do the same thing in reverse to get the last half in reverse order. Therefore half 1 and half 2 should match if it is a palindrome. */
        i = palLength - 1;
        
        while (palHalf2.length < palHalf1.length) {
            palHalf2.push(String(n)[i]);
            i--;
        }   
    }
    /* This section ignores the middle number in a palindrome with an odd number of digits. For example: 90909. */
    else if (!isNaN(n)) {
        while (palHalf1.length < (palLength / 2) - 1) {
            palHalf1.push(String(n)[i]);
            i++;
        }
        
        i = palLength - 1;
        
        while (palHalf2.length < palHalf1.length) {
            palHalf2.push(String(n)[i]);
            i--;
        }
    }
    else {
        return "Error: NaN";
    }
    
    /* Here I convert the two palindrome half arrays into strings so that I can make a simple comparison.
    Important: I re-initialize the palHalf variables so that they can be used two or more times. */
    if (String(palHalf1) === String(palHalf2)) {
        palHalf1 = [];
        palHalf2 = [];
        return true;
    }
    else {
        palHalf1 = [];
        palHalf2 = [];
        return false;
    }
};

/* Now to find the -largest- palindrome. */

var findLargestPal = function (n1, n2) {
    var product;
    var n2reset = n2; // Store the value of n2 so that it can be reset later when decrementing it.
    var palindromes = []; // Array for all the palindromes found. This is necessary because if it simply stops at the first one found, you may miss larger palindromes.
    var factors = []; // This isn't necessary to solve the problem, but I wanted to know what the factors are that make the palindrome.
       
    while (n1 > 99) {
        while (n2 > 99) { 
            product = n1 * n2; // These nested while loops will multiply together EVERY three digit number. If I wanted it to be every two digit number, I'd change these to n1 > 9, n2 > 9, and I'd enter 99,99 as arguments to the function.
            
            if (palindromeCheck(product)) { 
                palindromes.push(product);
                palindromes.sort(function(a, b){return b-a}) // This way, the first entry in the array is always the largest one.
                
                if (product === palindromes[0]) {
                    factors = [n1, n2];
                }
                
                n2--;
            }
            else if (!palindromeCheck(product)) {
                n2--;
            }
            else {
                return "Unknown error";
            } 
        }
        
        n2 = n2reset;
        n1--;
    }
    
    if (palindromes.length > 0) {
        return factors[0] + " x " + factors[1] + " = " + palindromes[0];
    }
    else {
        return "No palindromes found.";
    }
}

console.log("The largest palindrome made from the product of two 3-digit numbers is: " + findLargestPal(999,999));
// This prints: "The largest palindrome made from the product of two 3-digit numbers is: 913 x 993 = 906609" which is the correct solution.