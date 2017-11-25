// https://leetcode.com/problems/contains-duplicate-iii/description/

// Given an array of integers, find out whether there are two distinct indices i and j in 
// the array such that the absolute difference between nums[i] and nums[j] is at most t and 
// the absolute difference between i and j is at most k. 

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
	for(let i=0; i<nums.length; i++) {
		for(let j=1; i+j<nums.length && j<=k; j++) {
			if(Math.abs(nums[i]-nums[i+j]) <= t) {
				return true;
			}
		}
	}
	return false;
}

var arr;

arr = [-1,-1]
console.log(containsNearbyAlmostDuplicate(arr, 1, 0))
arr = [7,1,3]
console.log(containsNearbyAlmostDuplicate(arr, 2, 3))