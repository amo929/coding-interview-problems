// https://leetcode.com/problems/excel-sheet-column-title/description/

// Given a positive integer, return its corresponding column title as appear in an Excel sheet.	
// 	1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 

/**
 * @param {number} n
 * @return {string}
 */

var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var convertToTitle = function(n) {
    return n <= 0 ? "" : convertToTitle((n-1)/26 | 0) + alphabet[(n-1)%26];
};
console.log(convertToTitle(1000))
console.log(convertToTitle(26));
console.log(convertToTitle(52));