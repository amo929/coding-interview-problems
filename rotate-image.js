// https://leetcode.com/problems/rotate-image/description/

// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).

// Note:
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],
// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// Example 2:
// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 
// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	let len = matrix.length;

	// coordinates [i,j] always starts at a 'diagonal' point ([0,0] [1,1] [2,2] etc.)
	// so we want to swap the [i,j] and [j,i]
	// this will give us a modified matrix with all the elements in the correct new array, but the elements will be in reverse order.
    // for(let i=0; i<len; i++) {
    // 	for(let j=i; j<len; j++) {
    // 		let temp = matrix[i][j];
    // 		matrix[i][j] = matrix[j][i];
    // 		matrix[j][i] = temp;
    // 	}
    // }

    // this loop is simply to reverse the order of each element in each array
 //    for(let i=0; i<len | 0; i++) {
	//     for(let j=0; j<len/2 | 0; j++) {
	//     	let temp = matrix[i][j];
	//     	matrix[i][j] = matrix[i][len-1-j];
	//     	matrix[i][len-1-j] = temp; 	
	//     }
	// }

	// we start at the right-top most diagonal [i, len-1-i] and traverse down-one,left-one
	// we then swap the leftward and downward elements.
	// this will give us a modified matrix where the elements are in the correct arrays, but the arrays are in reverse order
	for(let i=0; i<len; i++) {
		for(let j=len-1-i; j>=0; j--) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[len-1-j][len-1-i];
			matrix[len-1-j][len-1-i] = temp;
		}
	}
	// this loop is to simply reverse the order of the arrays in matrix
	for(let i=0; i<len/2|0; i++) {
		let temp = matrix[i];
		matrix[i] = matrix[len-1-i];
		matrix[len-1-i] = temp;
	}
};

var arr = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];
rotate(arr);
console.log(arr);

arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
rotate(arr);
console.log(arr);