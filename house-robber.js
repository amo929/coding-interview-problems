// https://leetcode.com/problems/house-robber/description/

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
// the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and 
// it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, 
// determine the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	if(nums.length === 0) return 0;
    if(nums.length <= 2) {
    	return nums.length === 1 ? nums[0] : Math.max(nums[0], nums[1]);
    }
    nums[1] = Math.max(nums[0], nums[1]);

    for(let i=2; i<nums.length; i++) {
    	nums[i] = Math.max(nums[i]+nums[i-2], nums[i-1]);
    }
    console.log(nums[nums.length-1]);
    return nums[nums.length-1];
};

rob([2,1,1,2]);
rob([1,10,6,7,3,25]);