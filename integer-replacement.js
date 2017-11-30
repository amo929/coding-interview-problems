/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
	if(n === 1) return 0;

    if(n%2 === 0) {
    	return 1 + integerReplacement(n/2);
    }
    else {
    	return Math.min(1+integerReplacement(n+1), 1+integerReplacement(n-1));
    }
};

console.log(integerReplacement(10));
console.log(integerReplacement(8));