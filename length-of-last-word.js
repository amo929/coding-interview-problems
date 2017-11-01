// https://leetcode.com/problems/length-of-last-word/description/

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// For example,
// Given s = "Hello World",
// return 5. 

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	if(!s || s.length <= 0) return 0;
	s = s.trim();
	let x = s.lastIndexOf(' ');

	if(s.length <= 0) return 0;
	if(x <= 0) return s.length;
	else return s.substring(x+1).length;
};

var n;
n = lengthOfLastWord(" a");
console.log(n);
n = lengthOfLastWord("hello worlds");
console.log(n);
n = lengthOfLastWord("hello");
console.log(n);
n = lengthOfLastWord("   hello    worlds   ");
console.log(n);
n = lengthOfLastWord(" hello    worlds");
console.log(n);
n = lengthOfLastWord("hello    worlds");
console.log(n);