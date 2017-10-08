// https://leetcode.com/problems/longest-palindromic-substring/description/

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example:
// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) {
        return s;
    }

    let start=0, end=0;
    for(let i=0; i<s.length; i++) {
        let count = 0;
        let distance = 1;

        // odd-numbered palindrome iterator
        while(i-distance >= 0 && i+distance < s.length 
        && s.charAt(i-distance) === s.charAt(i+distance)) {
            count += 2;
            distance++;
        }
        if(count !== 0 && count+1 > end-start) {
            start = i-distance+1;
            end = i+distance;
        }
        count = 0;
        distance = 1;

        // even-numbered palindrome iterator
        while(i-distance+1 >= 0 && i+distance < s.length 
        && s.charAt(i-distance+1) === s.charAt(i+distance)) {
            count += 2;
            distance++;
        } 
        if(count > end-start) {
            start = i-distance+2;
            end = i+distance;
        }
    }

    if(end === 0) { //no palindromes found (outside of single characters)
        return s[0]
    }
    return s.substring(start, end);
};

// some test cases
console.log("\nhighest result: " + longestPalindrome("babad"));
console.log("\nhighest result: " + longestPalindrome("bb"));
console.log("\nhighest result: " + longestPalindrome("caba"));
console.log("\nhighest result: " + longestPalindrome("abc"));

console.log("\nhighest result: " + longestPalindrome("abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa"));

