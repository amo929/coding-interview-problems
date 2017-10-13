// https://leetcode.com/problems/valid-parentheses/description/

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; 
    let match = {
        ')':'(',
        '}':'{',
        ']':'[',
    };
    for(let i=0; i<s.length; i++) {
        let bracket = s.charAt(i);
        if(bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
        }
        else {
            if(match[bracket] !== stack.pop()) 
                return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid("[][]"));
console.log(isValid(""));
