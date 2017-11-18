// https://leetcode.com/problems/pascals-triangle/description/

// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	if(numRows < 1) return [];

    var answer = [[1]];

    for(let i=0; i<numRows-1; i++) {
    	var row = [1];
    	for(let j=0,k=1; k<answer[i].length; j++, k++) {
    		row.push(answer[i][j]+answer[i][k]);
    	}
    	row.push(1);
    	answer.push(row);
    }
    return answer;
};

console.log(generate(0));
console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(4));
console.log(generate(5));