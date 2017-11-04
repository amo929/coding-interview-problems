// https://leetcode.com/problems/minimum-path-sum/description/

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:

// [[1,3,1],
//  [1,5,1],
//  [4,2,1]]

// Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum. 

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length === 0) return 0;

    let route = [];
    for(let i=0; i<grid.length; i++) {
        route.push([]);
    }
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            route[i][j] = grid[i][j] + getLower(route,i,j);
        }
    }
    return route[route.length-1][route[0].length-1];
};

function getLower(arr, i, j) {
    if(i===0 && j === 0) return 0;
    if(i===0) return arr[i][j-1];
    if(j===0) return arr[i-1][j];
    return Math.min(arr[i][j-1], arr[i-1][j]);
}



var arr;

arr = [
[1,3,1],
[1,5,1],
[4,2,1]
];
console.log(minPathSum(arr));
