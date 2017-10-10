// https://leetcode.com/problems/string-to-integer-atoi/description/

// Implement atoi to convert a string to an integer.

// Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

// Notes: It is intended for this problem to be specified vaguely (ie, no given input specs).
// You are responsible to gather all the input requirements up front.

// Update (2015-02-10):
// The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, 
// please click the reload button to reset your code definition. 

// Requirements for atoi:

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. 
// Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, 
// and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or 
// it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, 
// INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.


/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {


    charArr = str.trim().split("");
    let expo = 0;
    let answer = 0;

    for(let i=0; i<charArr.length; i++) {
    	if(i === 0 && (charArr[i] === '+' || charArr[i] === '-')) {
    		continue;
    	}
    	else if(isNaN(charArr[i]-'0') || charArr[i] === ' ') {
    		charArr = charArr.splice(0, i);
    	}
    }

    for(let i=charArr.length-1; i>=0; i--) {
    	if(i === 0 && (charArr[i] === '+' || charArr[i] === '-')) {
    		answer = charArr[i] === '-' ? -1 * answer : answer;
    		break;
    	}
    	else if(isNaN(charArr[i]-'0') || charArr[i] === ' ') {
    		return 0;
    	}
    	answer += (charArr[i]-'0') * Math.pow(10, expo);
    	expo++;
    }


    let max = Math.pow(2,31) - 1;
    if(answer > max) return max;
    if(answer < -1 * max - 1) return -1 * max - 1;
    return answer;
};

console.log(myAtoi("-215 45   "));

