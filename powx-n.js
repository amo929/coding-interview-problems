// https://leetcode.com/problems/powx-n/description/

// Implement pow(x, n). 

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	// copied straight from wikipedia
    if(n<0) 
    	return myPow(1/x, -n);
    else if(n === 0)
    	return 1;
    else if(n === 1)
    	return x;
    else if(n%2 === 0)
    	return myPow(x*x, n/2);
    else if(n%2 !== 0)
    	return x * myPow(x*x, (n-1)/2)
};


console.log(myPow(-2, 7));
console.log(myPow(-2, -1));
console.log(myPow(0.00001, 2147483647));