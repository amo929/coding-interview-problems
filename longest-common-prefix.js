// https://leetcode.com/problems/longest-common-prefix/discuss/

// Write a function to find the longest common prefix string amongst an array of strings.

// What does Longest Common Prefix mean ?
// It seems that it is not to check between pair of strings but on all the strings in the array.
// For example:
//     {"a","a","b"} should give "" as there is nothing common in all the 3 strings.
//     {"a", "a"} should give "a" as a is longest common prefix in all the strings.
//     {"abca", "abc"} as abc
//     {"ac", "ac", "a", "a"} as a.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(strs.length === 0) return "";
	if(strs.length === 1) return strs[0];

	let max = strs[0];
	for(let i=0; i<strs.length; i++) {
		if(strs[i].length === 0) {
			return "";
		}
		if(strs[i].length > max.length) {
			max = strs[i];
		}
	}

	let answer = [];
	for(let len=0; len<max.length; len++) {
		let curr = max.charAt(len);
		for(let i=0; i<strs.length; i++) {
			if(len >= strs[i].length || strs[i].charAt(len) !== curr) {
				return answer.join("");
			}
		}
		answer.push(curr);
	}
	return answer.join("");
};

var arr;

arr = ["hello","hello","hellokitty","healo"];
console.log(longestCommonPrefix(arr))

arr = ["a", "cc"];
console.log(longestCommonPrefix(arr))