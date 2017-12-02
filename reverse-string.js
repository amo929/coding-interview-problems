// https://leetcode.com/problems/reverse-string/description/

// Write a function that takes a string as input and returns the string reversed.
// Example:
// Given s = "hello", return "olleh". 

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    s = s.split("");
    for(let i=0; i<s.length/2|0; i++) {
    	let temp = s[i];
    	s[i] = s[s.length-1-i];
    	s[s.length-1-i] = temp;
    }
    return s.join("");
};

var s;

s = "hello"
console.log(reverseString(s));

s = "hello world";
console.log(reverseString(s));