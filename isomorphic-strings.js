// https://leetcode.com/problems/isomorphic-strings/description/

// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// For example,
// Given "egg", "add", return true.
// Given "foo", "bar", return false.
// Given "paper", "title", return true.

// Note:
// You may assume both s and t have the same length.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    var smap = new Map();
    var tmap = new Map();
    for(let i=0; i<s.length; i++) {
        let schar = s.charAt(i);
        let tchar = t.charAt(i);
        if(!smap.has(schar) && !tmap.has(tchar)) {
            smap.set(schar, tchar);
            tmap.set(tchar, schar);
        }
        else if(smap.get(schar) !== tchar || tmap.get(tchar) !== schar) {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("aba", "aaa"));