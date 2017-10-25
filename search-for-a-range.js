// https://leetcode.com/problems/search-for-a-range/description/

// Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4]. 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	let low = -1;
	let high = -1;

	let min = 0;
	let max = nums.length-1;
	let current;

	// binary search to find the first instance of target
	while(min <= max) {
		current = (min+max)/2 | 0;
		if(target < nums[current]) {
			max = current-1;
		}
		else if(target > nums[current]) {
			min = current+1;
		}
		else {
			low = current;
			high = current;
			break;
		}
	}

	// two concurrent binary searches to figure out the range

	// this do-while loop will figure out the left-bound range of the target
	// if we find the target again, then everything between that newly found index and current is also the target
	// so we only need to do repeated binary-search to the left (modifying the max-range)
	let range;
	min = 0;
	max = current-1;
	do {
		range = binarySearcher(nums, target, min, max);
		if(range === -1) {
			break;
		}
		else if(range < low) {
			low = range;
			max = range-1;
		}
		else if(range > low) {
			max = range;
		}

	} while(range !== -1);

	// this do-while loop will figure out the right-bound range of the target
	// same exact concept as above, but with finding the max right to the right.
	min = current+1;
	max = nums.length-1;
	do {
		range = binarySearcher(nums, target, min, max);
		if(range === -1) {
			break;
		}
		else if(range > high) {
			high = range;;
			min = range+1;
		}
		else if(range < high) {
			min = range+1;
		}

	} while(range !== -1);

	return [low, high];
};


function binarySearcher(nums, target, min, max) {
	while(min <= max) {
		let current = (min+max)/2 | 0;
		if(nums[current] < target) {
			min = current+1;
		}
		else if(nums[current] > target) {
			max = current-1;
		}
		else {
			return current;
		}
	}
	return -1;
}




let arr = [1,2,3,4,5,6,7,8];
console.log(searchRange(arr, 8));

arr = [5, 7, 7, 8, 8, 10];
console.log(searchRange(arr, 8));

arr = [8,8,8,8,8,8];
console.log(searchRange(arr, 8));
arr = [8,8,8,8,8,8];
console.log(searchRange(arr, 4));