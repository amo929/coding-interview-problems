// https://leetcode.com/problems/word-pattern/description/

// Given a pattern and a string str, find if str follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Examples:
//     pattern = "abba", str = "dog cat cat dog" should return true.
//     pattern = "abba", str = "dog cat cat fish" should return false.
//     pattern = "aaaa", str = "dog cat cat dog" should return false.
//     pattern = "abba", str = "dog dog dog dog" should return false.

// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space. 

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
	let map = new Map();
	let map2 = new Map();
    str = str.split(" ");

    if(pattern.length !== str.length) {
    	return false;
    }

    for(let i=0; i<pattern.length; i++) {
    	let curr = pattern.charAt(i);
    	let curr2 = str[i];
    	if(!map.has(curr) && !map2.has(curr2)) {
    		map.set(curr, curr2);
    		map2.set(curr2, curr);
    	}
    	if(map.get(curr) !== curr2) {
    		return false;
    	}
    }
    return true;
};

var pattern, str;
pattern = "abba";
str = "dog cat cat dog";
console.log(wordPattern(pattern, str));

str = "dog dog dog dog";
console.log(wordPattern(pattern, str));
