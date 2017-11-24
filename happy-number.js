// https://leetcode.com/problems/happy-number/description/

// Write an algorithm to determine if a number is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, 
// replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number
//     1^2 + 9^2 = 82
//     8^2 + 2^2 = 68
//     6^2 + 8^2 = 100
//     1^2 + 0^2 + 0^2 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	var map = new Map();
	var sum = 0;

    while(true) {
    	let c = n%10;
    	sum += c*c;
    	n = n/10 | 0;
    	if(n === 0) {
    		if(map.has(sum)) {
    			return false;
    		}
    		else {
    			map.set(sum, sum);
    		}

    		if(sum === 1) {
    			return true;
    		}
    		else {
    			n = sum;
    			sum = 0;
    		}
    	}
    }
    return false;
};

console.log(isHappy(20))