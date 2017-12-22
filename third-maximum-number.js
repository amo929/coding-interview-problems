// https://leetcode.com/problems/third-maximum-number/description/

// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. 
// The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]
// Output: 1
// Explanation: The third maximum is 1.

// Example 2:
// Input: [1, 2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: [2, 2, 3, 1]
// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length <= 2) {
    	return nums.length === 1 ? nums[0] : Math.max(nums[0], nums[1]);
    }

    var first = nums[0];
    var second, third;

    // find the max
    for(let i=1; i<nums.length; i++) {
    	if(nums[i] > first) {
    		first = nums[i];
    	}
    }

    // find the immediate distinct number that isn't the max
    for(var i=0; i<nums.length; i++) {
    	if(nums[i] !== first) {
    		second = nums[i];
    		break;
    	}
    }
    if(i >= nums.length) {
    	return first;
    }
    // find the second distinct max
    for(; i<nums.length; i++) {
    	if(nums[i] > second && nums[i] < first) {
    		second = nums[i];
    	}
    }

    // find the immediate distinct number that isn't the max or 2nd max
    for(i=0; i<nums.length; i++) {
    	if(nums[i] !== first && nums[i] !== second) {
    		third = nums[i];
    		break;
    	}
    }
    if(i >= nums.length) {
    	return first;
    }
    // find the third distinct max
    for(; i<nums.length; i++) {
    	if(nums[i] > third && nums[i] < second) {
    		third = nums[i];
    	}
    }
    // if there is no distinct 3rd max, then we return the 1st max - otherwise we return the 3rd max
    return third >= second ? first : third;
};

console.log(thirdMax([2,2,3,1]))