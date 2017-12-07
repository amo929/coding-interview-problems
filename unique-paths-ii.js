// https://leetcode.com/problems/unique-paths-ii/description/

// Follow up for "Unique Paths":
// Now consider if some obstacles are added to the grids. How many unique paths would there be?
// An obstacle and empty space is marked as 1 and 0 respectively in the grid.
// For example,
// There is one obstacle in the middle of a 3x3 grid as illustrated below.

// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]

// The total number of unique paths is 2.
// Note: m and n will be at most 100.

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var answer = [];

    var valX = valY = 1;
    for(let i=0; i<obstacleGrid.length; i++) {
        if(obstacleGrid[i][0] === 1) {
            valY = 0;
        }
        answer.push([valY]);
    }
    for(let i=0; i<obstacleGrid[0].length; i++) {
        if(obstacleGrid[0][i] === 1) {
            valX = 0
        }
        answer[0][i] = valX;
    }
    if(obstacleGrid.length===1 || obstacleGrid[0].length===1)
        return valX === 0 || valY === 0 ? 0 : 1;

    for(var i=1; i<obstacleGrid.length; i++) {
        for(var j=1; j<obstacleGrid[0].length; j++) {
            if(obstacleGrid[i][j] === 1){
                answer[i][j] = 0;
            }
            else {
                answer[i][j] = answer[i-1][j] + answer[i][j-1];
            }
        }
    }
    // return answer;
    return answer[i-1][j-1];
};

var obs;

// obs = [
//   [1,0,0],
//   [0,1,0],
//   [0,0,0],
//   [0,0,0],
// ];
// console.log(uniquePathsWithObstacles(obs));

obs = [
  [0,0,0],
  [0,1,0],
  [0,0,0],
  [0,0,0],
];
console.log(uniquePathsWithObstacles(obs));


// obs = [
//   [0],
//   [1],
//   [0],
//   [0],
// ];
// console.log(uniquePathsWithObstacles(obs));

// obs = [
//   [0,0,1,0],
// ];
// console.log(uniquePathsWithObstacles(obs));