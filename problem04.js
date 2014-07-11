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
    
    if (!isNaN(n) && palLength % 2 === 0) {
        while (palHalf1.length < palLength / 2) {
            palHalf1.push(String(n)[i]);
            i++;
        }
        /* Now do the same thing in reverse. */
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
    
    /* Here I convert the two palindrome half arrays into strings so that I can make a simple comparison. */
    if (String(palHalf1) === String(palHalf2)) {
        return true;
    }
    else {
        return false;
    }
};

/* Now to find the largest palindrome. I'm going to work with two digit solutions because I assume it will be easier on my machine, and because I have the answer already. */

var findLargestPal = function (n1, n2) {
    var product;
    var n2reset = n2;
    
    while (n1 > 9) {
        while (n2 > 9) { // I would change these to 99 for the real problem.
            product = n1 * n2;
            
            /* Here's where things are not working. I still haven't figured out the problem.
            if (palindromeCheck(product)) {
                n1 = 9; // I don't guess these next two lines are necessary, but I don't know what's up.
                n2 = 9;
                return product;
            }
            else if (!palindromeCheck(product)) {
                n2--;
            }
            else {
                return "Error unknown?";
            } */
        }
        
        n2 = n2reset;
        n1--;
    } // These nested while loops successfully find every two digit product!
    
    return "No palindromes found.";
}

findLargestPal(99,99); // I would change these to 999,999 for the real problem.