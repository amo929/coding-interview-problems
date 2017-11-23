// https://leetcode.com/problems/reverse-words-in-a-string/description/

// Given an input string, reverse the string word by word.
// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

// Update (2015-02-12):
// For C programmers: Try to solve it in-place in O(1) space. 

// Clarification:
//     What constitutes a word?
//     A sequence of non-space characters constitutes a word.

//     Could the input string contain leading or trailing spaces?
//     Yes. However, your reversed string should not contain leading or trailing spaces.

//     How about multiple spaces between two words?
//     Reduce them to a single space in the reversed string.



/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    if(str.length <= 0) return "";
    str = str.trim().replace(/\s\s+/g, ' ' ).split(" ");
    for(let i=0; i<str.length/2 | 0; i++) {
    	let temp = str[i];
    	str[i] = str[str.length-1-i];
    	str[str.length-1-i] = temp;
    }
    return str.join(" ");
};

console.log(reverseWords("     the    sky     is    blue  "));