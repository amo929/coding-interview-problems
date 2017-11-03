// https://leetcode.com/problems/set-matrix-zeroes/description/

// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

// click to show follow up.
// Follow up:

// Did you use extra space?
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(matrix.length === 0) return;


    let zeroes = [];
    let zero_row = [];
    for(let i=0; i<matrix[0].length; i++) {
        zero_row.push(0);
    }

    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                zeroes.push([i,j]);
            }
        }
    }
    for(let i=0; i<zeroes.length; i++) {
        matrix[zeroes[i][0]] = zero_row;
        zeroColumn(matrix,zeroes[i][1]);
    }
};

function zeroColumn(matrix,col) {
    for(let i=0; i<matrix.length; i++) {
        matrix[i][col] = 0;
    }
}


var matrix;

matrix = [
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,0,1,1],
[1,1,1,1,0],
[1,1,1,1,1],
]
setZeroes(matrix);
console.log(matrix);