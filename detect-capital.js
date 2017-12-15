// https://leetcode.com/problems/detect-capital/description/

// Given a word, you need to judge whether the usage of capitals in it is right or not.
// We define the usage of capitals in a word to be right when one of the following cases holds:
//     All letters in this word are capitals, like "USA".
//     All letters in this word are not capitals, like "leetcode".
//     Only the first letter in this word is capital if it has more than one letter, like "Google".

// Otherwise, we define that this word doesn't use capitals in a right way.

// Example 1:
// Input: "USA"
// Output: True

// Example 2:
// Input: "FlaG"
// Output: False

// Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters. 

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
	if(word.length <= 1) return true;

	var upper = word.toUpperCase();
	var lower = word.toLowerCase();

	// check if all uppercase or all lowercase
	if(word === upper || word === lower) {
		return true;
	}

	// check if the first character is Upper and the rest is lower
	if(word.charAt(0) === upper.charAt(0) && word.substring(1) === lower.substring(1)) {
		return true;
	}

	return false;
};

console.log(detectCapitalUse("Google"));
console.log(detectCapitalUse("leetcode"));
console.log(detectCapitalUse("GooglE"));
