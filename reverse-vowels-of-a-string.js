// https://leetcode.com/problems/reverse-vowels-of-a-string/description/

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// Note:
// The vowels does not include the letter "y". 

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var map = new Map([['a',1],['e',1],['i',1],['o',1],['u',1]]);
    s = s.split("");

    for(let i=0,j=s.length-1; i<j;) {
        let left = s[i]
        let right = s[j]

        if(map.has(left.toLowerCase()) && map.has(right.toLowerCase())) {
            let temp = left;
            s[i] = right;
            s[j] = temp;
            i++;
            j--;
        }
        else {
            if(!map.has(left.toLowerCase())) i++;
            if(!map.has(right.toLowerCase())) j--;
        }
    }
    return s.join("");
};

var s = "aA";
console.log(reverseVowels(s))