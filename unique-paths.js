// https://leetcode.com/problems/unique-paths/description/

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time. 
// The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// How many possible unique paths are there?

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m === 1 || n === 1) return 1;

    var answer = [];

    for(let i=0; i<m; i++) {
        answer.push([1]);
    }
    for(let i=0; i<n; i++) {
        answer[0][i] = 1;
    }
    for(var i=1; i<m; i++) {
        for(var j=1; j<n; j++) {
            answer[i][j] = answer[i-1][j] + answer[i][j-1];;
        }
    }
    return answer[i-1][j-1];
};


console.log(uniquePaths(1,2))
console.log(uniquePaths(6,5))