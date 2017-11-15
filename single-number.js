// https://leetcode.com/problems/single-number/description/

// Given an array of integers, every element appears twice except for one. Find that single one.
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory? 

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var map = new Map();


	for(let i=0; i<nums.length; i++) {
		let curr = nums[i];
		if(map.has(curr)) {
			map.delete(curr);
		}
		else {
			map.set(curr, curr);
		}
	}
	return map.values().next().value;
};


var arr = [1,1,2,3,3];

console.log(singleNumber(arr));