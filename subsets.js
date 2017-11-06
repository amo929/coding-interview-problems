// https://leetcode.com/problems/subsets/description/

// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let answer = [];
    let map = new Map();
    powerSet(map, nums, [], 0);
    map.forEach((value, key) => answer.push(key));
    return answer; 
};

function powerSet(map, nums, arr, index) {
    if(index >= nums.length) return;

    let curr = arr.slice();
    curr.push(nums[index]);

    if(!map.has(arr)) 
        map.set(arr, 0);
    if(!map.has(curr)) 
        map.set(curr, 0);

    powerSet(map, nums, arr, index+1);
    powerSet(map, nums, curr, index+1);
}

var arr;

arr = [1,2,3,4];
console.log(subsets(arr));
