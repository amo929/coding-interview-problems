// https://leetcode.com/problems/implement-strstr/description/

// Implement strStr().
// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. 

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === "") return 0;
    if(haystack.length < needle.length) return -1;
    if(haystack.length === needle.length) {
        if(haystack === needle) return 0;
        else return -1;
    }

    for(let i=0; i<haystack.length; i++) {
        let count = 0;
        while(needle.charAt(count) === haystack.charAt(i+count)) {
            count++;
            if(count >= needle.length) return i;
        }
    }  
    return -1;
};

console.log(strStr("apple", "ap"));
console.log(strStr("", "ap"));
console.log(strStr("apple", "ex"));
console.log(strStr("apple", "le"));
console.log(strStr("a", "a"));
console.log(strStr("a", "x"));
console.log(strStr("", ""));
console.log(strStr("a", ""));
