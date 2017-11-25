// https://leetcode.com/problems/contains-duplicate-ii/description/

// Given an array of integers and an integer k, find out whether there are two distinct 
// indices i and j in the array such that nums[i] = nums[j] and the absolute difference 
// between i and j is at most k. 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	var map = new Map();
	for(let i=0; i<nums.length; i++) {
	    if(map.has(nums[i]) && i-map.get(nums[i]) <= k) {
	        return true;
	    }
	    map.set(nums[i], i);
	}
	return false;  
};

var arr;

arr = [1,2,1]
console.log(containsNearbyDuplicate(arr, 2));