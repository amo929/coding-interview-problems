// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

// Follow up for "Remove Duplicates":
// What if duplicates are allowed at most twice?

// For example,
// Given sorted array nums = [1,1,1,2,2,3],
// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length. 

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1;
    let dup = 0;
    for(let i=0, j=1; j<nums.length; j++) {
        if(nums[i] === nums[j] && dup < 1) {
            nums[count] = nums[j];
            i++;
            count++;
            dup++;
        }
        else if(nums[i] !== nums[j]) {
            nums[count] = nums[j];
            i = j;
            count++;
            dup = 0;
        }
    }
    console.log(nums);
    return count;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([1,1,1,1,3,3]));