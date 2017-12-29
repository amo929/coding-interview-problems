// https://leetcode.com/problems/judge-route-circle/description/

// Initially, there is a Robot at position (0, 0). 
// Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. 
// The valid robot moves are R (Right), L (Left), U (Up) and D (down). 
// The output should be true or false representing whether the robot makes a circle.

// Example 1:
// Input: "UD"
// Output: true

// Example 2:
// Input: "LL"
// Output: false

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	var h = v = 0;
    for(let i=0; i<moves.length; i++) {
    	switch(moves.charAt(i)) {
    		case 'U': 
    			v++; break;
    		case 'D':
    			v--; break;
    		case 'L':
    			h--; break;
    		case 'R':
    			h++; break;
    	}
    }
    return h===0 && v===0;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));