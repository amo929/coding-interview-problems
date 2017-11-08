// https://leetcode.com/problems/count-and-say/description/

// The count-and-say sequence is the sequence of integers with the first five terms as following:
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     312211
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n, generate the nth term of the count-and-say sequence.
// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:
// Input: 1
// Output: "1"

// Example 2:
// Input: 4
// Output: "1211"

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	if(n === 1) return "1";

	let s = "1";
	for(let i=1; i<n; i++) {
		s = generate(s);
	}
	return s;
};


function generate(str) {
	if(str === "1") return "11";
	let answer = "";
	let count = 1;
	for(let i=0, j=1; j<str.length; j++) {
		if(str.charAt(i) !== str.charAt(j)) {
			answer += count + str.charAt(i);
			count = 1;
			i = j;		
		}
		else {
			count++;
		}
		if(j === str.length-1) {
			answer += count + str.charAt(i);
		}
	}
	return answer;
}

console.log(countAndSay(6));