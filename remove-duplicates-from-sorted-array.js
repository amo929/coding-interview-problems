// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length. 

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let count = 1;
    for(let i=0, j=1; j<nums.length; j++) {
    	if(nums[i] !== nums[j]) {
    		nums[count] = nums[j];
    		i = j;
    		count++;
    	}
    }
    return count;
};

var arr = [1,1,1,1,3,4,4,4,4,5];
console.log(removeDuplicates(arr))