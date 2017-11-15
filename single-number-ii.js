// https://leetcode.com/problems/single-number-ii/description/

// Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
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
			if(map.get(curr) === 1) {
				map.set(curr, 2);
			}
			else {
				map.delete(curr);
			}
		}
		else {
			map.set(curr, 1);
		}
	}
	return map.entries().next().value[0];
};


var arr = [1,1,1,4,3,3,3];

console.log(singleNumber(arr));