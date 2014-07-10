/*

PROJECT EULER: PROBLEM 3

*/

var isPrime = function (n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
};

var highPrimeFactor = function (n) {
    var j = n - 1;
    
    while (j > 1) {
        if (n % j === 0 && isPrime(j)) {
            return j;
        }
        j--;
    }
    
    return n;
};

highPrimeFactor (13195);

// Couldn't get it to run on the huge number in the problem (time) but it should work.