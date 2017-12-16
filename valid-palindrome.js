// https://leetcode.com/problems/valid-palindrome/description/

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.
// For the purpose of this problem, we define empty string as valid palindrome. 

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length <= 1) return true;

    var left = 0;
    var right = s.length-1;
    s = s.toLowerCase();
    for(;left < right; left++, right--) {
    	while(left<right && isLetterOrNumber(s.charAt(left)) === null) {
    		left++;
    	}
    	while(left<right && isLetterOrNumber(s.charAt(right)) === null) {
    		right--;
    	}
    	console.log("sup")
    	console.log(s.charAt(left) + ", " + s.charAt(right))
    	if(s.charAt(left) !== s.charAt(right)) {
    		return false;
    	}
    }
    return true;;
};

function isLetterOrNumber(char) {
	return char.match(/^[0-9a-zA-Z]+$/);
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
console.log(isPalindrome("./"));