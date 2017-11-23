// https://leetcode.com/problems/maximum-product-subarray/description/

// Find the contiguous subarray within an array (containing at least one number) which has the largest product.

// For example, given the array [2,3,-2,4],
// the contiguous subarray [2,3] has the largest product = 6. 

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	if(nums.length <= 0) return 0;

	let max = min = answer = nums[0];

	for(let i=1; i<nums.length; i++) {
		let temp = max;
		max = Math.max(Math.max(max*nums[i], min*nums[i]), nums[i]);
		min = Math.min(Math.min(temp*nums[i], min*nums[i]), nums[i]);	
		if(max > answer) {
			answer = max;
		}
	}
	return answer;
};