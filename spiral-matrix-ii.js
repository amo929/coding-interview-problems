// https://leetcode.com/problems/spiral-matrix-ii/description/

// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

// For example,
// Given n = 3,
// You should return the following matrix:

// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	if(n <= 0) return [];

	let answer = [];
	for(let i=0; i<n; i++) {
		answer.push([]);
	}

	let max = n*n;
	let r=0;
	let h=0;

	let count = 1;
	while(count <= max) {
		// go from left to right
		for(let j=r; count<=max && j<n-r; j++, count++) {
			answer[r][j] = count;
		}
		// go top to bottom
		for(let j=h+1; count<=max && j<n-1-h; j++, count++) {
			answer[j][n-1-r] = count;
		}
		// go right to left
		for(let j=n-1-r; count<=max && j>=0+r; j--, count++) {
			answer[n-1-h][j] = count;
		}
		// go from bottom to top
		for(let j=n-2-h; count<=max && j>=1+h; j--, count++) {
			answer[j][r] = count;
		}
		r++;
		h++;
	}
	return answer;
};

// let arr;

console.log(generateMatrix(0));
console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));
console.log(generateMatrix(5));