// https://leetcode.com/problems/majority-element/description/

// Given an array of size n, find the majority element. 
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var max = nums[0];
    var count = 1;
    for (let i = 0; i < nums.length; i++) {
    	if(max === nums[i]) {
    		count++;
    	}
    	else {
    		count--
    	}
    	if(count === 0) {
    		max = nums[i];
    		count = 1;
    	}
    }
    return max;
};