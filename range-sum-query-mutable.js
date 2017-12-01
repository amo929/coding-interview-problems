// https://leetcode.com/problems/range-sum-query-mutable/description/

// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
// The update(i, val) function modifies nums by updating the element at index i to val.

// Example:

// Given nums = [1, 3, 5]

// sumRange(0, 2) -> 9
// update(1, 2)
// sumRange(0, 2) -> 8

// Note:
//     The array is only modifiable by the update function.
//     You may assume the number of calls to update and sumRange function is distributed evenly.


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.nums[i] = val;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	var sum = 0;
    for(; i<=j; i++) {
    	sum += this.nums[i];
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

var nums = [1,3,5]
var obj = new NumArray(nums);
obj.update(0, 1)
var param_2 = obj.sumRange(0,2)

console.log(obj)
console.log(param_2)