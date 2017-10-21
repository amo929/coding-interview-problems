// https://leetcode.com/problems/generate-parentheses/description/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// For example, given n = 3, a solution set is:
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	let answer = [];
	parenthesisPermutation("(", answer, n-1, n);
	return answer;
};

function parenthesisPermutation(str, arr, openCount, closeCount) {
	if(openCount === 0 && closeCount === 0) {
		arr.push(str);
		return;
	}
	if(closeCount === 0) {
		return;
	}
	if(openCount === 0) {
		parenthesisPermutation(str+')', arr, openCount, closeCount-1);
		return;
	}
	if(closeCount === openCount) {
		parenthesisPermutation(str+'(', arr, openCount-1, closeCount);
	}
	else {
		parenthesisPermutation(str+')', arr, openCount, closeCount-1);
		parenthesisPermutation(str+'(', arr, openCount-1, closeCount);
	}
	return;
}

console.log(generateParenthesis(3));