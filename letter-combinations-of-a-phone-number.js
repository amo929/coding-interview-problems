// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.

// {1:'---',  2:'abc', 3:'def',
//  4:'ghi',  5:'jkl', 6:'mno',
//  7:'pqrs', 8:'tuv', 9:'wxyz'}

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

var map = { 1:'*',    2:'abc', 3:'def',
            4:'ghi',  5:'jkl', 6:'mno',
            7:'pqrs', 8:'tuv', 9:'wxyz'};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length < 1) 
        return [];

    let answer = [];
    let digitString = map[digits.charAt(0)];
    let nextArr = letterCombinations(digits.substring(1));

    for(let i=0; i<digitString.length; i++) {
        if(nextArr.length <= 0) 
            answer.push(digitString.charAt(i));
        for(let j=0; j<nextArr.length; j++) {
            answer.push(digitString.charAt(i) + nextArr[j]);
        }
    }

    return answer;
};

var arr = letterCombinations("236");
console.log(arr)

