// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Since the array is now unsorted (because of the pivot), we have to do a linear search
    // if we find the target beforehand, then we return it immediately
    // otherwise, we're just looking for the pivot
    let pivot = nums.length-1;
    for(let i=0; i<nums.length-1; i++) {
        if(target === nums[i]) {
            return i;
        }
        if(nums[i] > nums[i+1]) {
            pivot = i+1;
            break;
        }
    }
    // once we find the pivot, we do a binary search from the index of pivot to nums.length
    // note that we already searched everything before the pivot, so we only need to check the right side of the pivot.
    let min = pivot;
    let max = nums.length-1;
    while(min <= max) {
        current = (min+max) / 2 | 0;
        if(target < nums[current]) {
            max = current - 1;
        }
        else if(target > nums[current]) {
            min = current + 1;
        }
        else {
            return current;
        }
    }
    return -1;
};

let arr = [6,7,8,1,2,3,4,5];
console.log(search(arr, 5));
console.log(search(arr, 1));