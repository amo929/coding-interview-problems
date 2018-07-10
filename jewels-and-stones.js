// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
// Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. 
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

// Note:
//     S and J will consist of letters and have length at most 50.
//     The characters in J are distinct.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var map = new Map();
    var count = 0;
    for(let i=0; i<S.length; i++) {
        let curr = S.charAt(i);
        map.set(curr, map.has(curr) ? map.get(curr) + 1 : 1);
    }
    for(let i=0; i<J.length; i++) {
        let curr = J.charAt(i);
        if(map.has(curr)) count += map.get(curr);
    }
    return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))