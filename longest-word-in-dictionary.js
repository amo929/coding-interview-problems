// https://leetcode.com/problems/longest-word-in-dictionary/description/

// Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.
// If there is no answer, return the empty string.

// Example 1:

// Input: 
// words = ["w","wo","wor","worl", "world"]
// Output: "world"
// Explanation: 
// The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

// Example 2:

// Input: 
// words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// Output: "apple"
// Explanation: 
// Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    var map = new Map();
    for(let i=0; i<words.length; i++) {
    	map.set(words[i], words[i]);
    }
    var max = 0;
    var answer = "";

    for(let i=0; i<words.length; i++) {
    	var curr = words[i];
    	inner_loop:
    	for(var j=0; j<curr.length; j++) {
    		if(!map.has(curr.substring(0, j+1))) {
    			break inner_loop;
    		}
    	}
    	if(j===curr.length) {
    		if(curr.length === max) {
    			answer = curr<answer ? curr : answer;
    		}
    		else if(curr.length > max) {
    			max = curr.length;
    			answer = curr;
    		}
    		
    	}
    }
    return answer;
};

var arr = ["w","wo","wor","worl", "world"];
console.log(longestWord(arr));

arr = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
console.log(longestWord(arr));