// https://leetcode.com/problems/remove-element/description/

// Given an array and a value, remove all instances of that value in place and return the new length.
// Do not allocate extra space for another array, you must do this in place with constant memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:
// Given input array nums = [3,2,2,3], val = 3

// Your function should return length = 2, with the first two elements of nums being 2.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	let count = 0;
    for(let i=0, j=nums.length-1; i<=j; i++) {
    	while(j >= 0 && nums[j] === val) {
    		count++;
    		j--;
    	}
    	if(j === 0 || i > j) {
    		break;
    	}
    	if(nums[i] === val) {
    		nums[i] = nums[j];
    		count++;
    		j--;
    	}
    }
    return nums.length-count;
};


var arr = [3,2,2,3]
var arr2 = [1,2,3,4,5,1,6,7,1,1,1,8,9]
var arr3 = [3,3]

console.log("\n");
console.log(arr);
console.log(arr.slice(0, removeElement(arr,3)))

console.log("\n");
console.log(arr2);
console.log(arr2.slice(0, removeElement(arr2,1)))

console.log("\n");
console.log(arr3);
console.log(arr3.slice(0, removeElement(arr3,3)))
