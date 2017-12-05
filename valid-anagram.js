// https://leetcode.com/problems/valid-anagram/description/

// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    var map = new Map();
    for(let i=0; i<s.length; i++) {
        let curr = s.charAt(i);
        if(map.has(curr)) {
            map.set(curr, map.get(curr)+1);
        }
        else {
            map.set(curr, 1);
        }
    }

    for(let i=0; i<t.length; i++) {
        let curr = t.charAt(i);
        if(!map.has(curr)) {
            return false;
        }
        if(map.get(curr) === 1) {
            map.delete(curr);
        }
        else {
            map.set(curr, map.get(curr)-1);
        }
    }
    return true;
};