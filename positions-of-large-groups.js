// https://leetcode.com/problems/positions-of-large-groups/description/

// In a string S of lowercase letters, these letters form consecutive groups of the same character.
// For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".
// Call a group large if it has 3 or more characters.
// We would like the starting and ending positions of every large group.
// The final answer should be in lexicographic order.

// Example 1:
// Input: "abbxxxxzzy"
// Output: [[3,6]]
// Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.

// Example 2:
// Input: "abc"
// Output: []
// Explanation: We have "a","b" and "c" but no large group.

// Example 3:
// Input: "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]

/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    var answer = [];
    for(let i=0, j=1; i<S.length;) {
        let curr = S.charAt(i);
        while(curr === S.charAt(j)) {
            j++
        }
        if(j-1-i >= 2) {
            answer.push([i, j-1]);
        }
        i=j;
    }
    return answer;
};