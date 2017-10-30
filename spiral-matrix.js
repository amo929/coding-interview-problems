// https://leetcode.com/problems/spiral-matrix/description/

// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
// For example,
// Given the following matrix:

// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]

// You should return [1,2,3,6,9,8,7,4,5]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	if(matrix.length <= 0) return [];

	let answer = [];
	let height = matrix.length;
	let row = matrix[0].length;
	let max = height*row;
	let r=0;
	let h=0;

	while(answer.length < max) {
		// go from left to right
		for(let j=r; answer.length<max && j<row-r; j++) {
			answer.push(matrix[r][j]);
		}
		// go top to bottom
		for(let j=h+1; answer.length<max && j<height-1-h; j++) {
			answer.push(matrix[j][row-1-r]);
		}
		// go right to left
		for(let j=row-1-r; answer.length<max && j>=0+r; j--) {
			answer.push(matrix[height-1-h][j]);
		}
		// go from bottom to top
		for(let j=height-2-h; answer.length<max && j>=1+h; j--) {
			answer.push(matrix[j][r]);
		}
		r++;
		h++;
	}
	return answer;
};

let arr;

arr = [
[01,02,03,04,05],
[06,07,08,09,10],
[11,12,13,14,15],
[16,17,18,19,20],
[21,22,23,24,25],
];
console.log(spiralOrder(arr));

arr = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];
console.log(spiralOrder(arr));

arr = [[2,3]];
console.log(spiralOrder(arr));