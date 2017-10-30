// https://leetcode.com/problems/maximum-subarray/description/

// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// click to show more practice.
// More practice:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	if(nums.length <= 0) return 0;

	let highest = nums[0];
	let other = nums[0];
	for(let i=1; i<nums.length; i++) {
		other = Math.max(other+nums[i], nums[i]);
		highest = Math.max(highest, other);
	}
	return highest;
    
};