/*

PROJECT EULER: PROBLEM 3

*/

var i = 0;

var isPrime = function (n) {
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        };
    };
    
    return true;
};

var highPrimeFactor = function (n) {
    i = n - 1;
    
    while (i > 1) {
        if (n % i === 0 && isPrime(i)) {
            return i;
        }
        i--;
    }
    
    return n;
};

highPrimeFactor (6008514);