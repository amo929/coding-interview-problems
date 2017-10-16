// https://leetcode.com/problems/reverse-integer/description/

// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// click to show spoilers.

// Have you thought about this?
// Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
// If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
// Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Note:
// The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows. 

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let max = Math.pow(2,31)-1;
	let min = -1 * Math.pow(2,31);
	let arr = []
	let answer = 0;

	while(x !== 0) {
		arr.push(x%10);
		x = x/10 >> 0;
	}
	for(let i=0; i<arr.length; i++) {
		current = arr[i] * Math.pow(10,arr.length-i-1);
		if(max-answer < current || min-answer > current) {
			return 0;
		}
		answer += current;
	}
	return answer;
};
console.log(reverse(-1234));
console.log(reverse(1234));
console.log(reverse(-1));
console.log(reverse(1));
console.log(reverse(0));
console.log(reverse(1000000003));
console.log(reverse(-1000000003));