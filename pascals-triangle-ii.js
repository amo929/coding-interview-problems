// https://leetcode.com/problems/pascals-triangle-ii/description/

// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

// Note:
// Could you optimize your algorithm to use only O(k) extra space? 

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex < 0) return [];
    if(rowIndex === 0) return [1]

    var answer = [1];

    for(let i=0; i<rowIndex; i++) {
        var row = [1];
        for(let j=0,k=1; k<answer.length; j++, k++) {
            row.push(answer[j]+answer[k]);
        }
        row.push(1);
        answer = row;
    }
    return answer;
};

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));