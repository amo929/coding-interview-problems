// https://leetcode.com/problems/ransom-note/description/

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
// Each letter in the magazine string can only be used once in your ransom note.
// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var map = new Map();

    for(let i=0; i<magazine.length; i++) {
    	let c = magazine.charAt(i);
    	if(!map.has(c))
    		map.set(c, 1);
    	else
    		map.set(c, map.get(c)+1);
    }
    for(let i=0; i<ransomNote.length; i++) {
    	let c = ransomNote.charAt(i);
    	if(!map.has(c))
    		return false;
    	else {
    		if(map.get(c) === 1)
    			map.delete(c);
    		else
    			map.set(c, map.get(c)-1)
    	}
    }
    return true;
};

console.log(canConstruct("aa", "aab"));