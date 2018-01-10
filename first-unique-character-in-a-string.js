// https://leetcode.com/problems/first-unique-character-in-a-string/description/

// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters. 

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = new Map();

    for(let i=0; i<s.length; i++) {
    	let curr = s.charAt(i);
    	if(map.has(curr)) {
    		map.set(curr, map.get(curr)[1]+1)
    	}
    	else {
    		map.set(curr, [i,1]);
    	}
    }

    var min = -1;
    map.forEach((val) => {
    	if(val[1] === 1) {
    		if(min === -1) {
    			min = val[0];
    		}
    		else if(val[0] < min) {
    			min = val[0];
    		}
    	}
    })

    console.log(min);
    return min;
};

firstUniqChar("leetcode");
firstUniqChar("loveleetcode");

