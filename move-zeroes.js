// https://leetcode.com/problems/move-zeroes/description/

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
//     You must do this in-place without making a copy of the array.
//     Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	var j=0;
	while(j<nums.length && nums[j] !== 0) j++;
	var i=j;
	while(i<nums.length && nums[i] === 0) i++;
    while(i<nums.length) {
    	if(nums[i] !== 0 && nums[j] === 0) {
    		let temp = nums[i];
    		nums[i] = nums[j];
    		nums[j] = temp;

    	}
    	while(i<nums.length && nums[i] === 0) i++;
    	while(j<nums.length && nums[j] !== 0) j++;
    }
    console.log(nums);
};

var arr =[0,0,0,0,1]
moveZeroes(arr);