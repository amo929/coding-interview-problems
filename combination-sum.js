// https://leetcode.com/problems/combination-sum/description/

// Given a set of candidate numbers (C) (without duplicates) and a target number (T), 
// find all unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.
// Note:

//     All numbers (including target) will be positive integers.
//     The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is:
// [
//   [7],
//   [2, 2, 3]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	var answer = [];
	combine([], 0, answer, candidates, target);
	return answer;
};

function combine(arr, index, answer, candidates, target) {
	if(target < 0) {
		return;
	}
	else if(target === 0) {
		answer.push(arr.slice());
		return;
	}
	for(let i=index; i<candidates.length; i++) {
		arr.push(candidates[i]);
		combine(arr, i, answer, candidates, target-candidates[i]);
		arr.pop(candidates[i]);
	}
}

var arr = [2, 3, 6, 7];
console.log(combinationSum(arr, 7));