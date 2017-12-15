// https://leetcode.com/problems/maximum-binary-tree/description/

// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
//     The root is the maximum number in the array.
//     The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
//     The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

// Construct the maximum tree by the given array and output the root node of this tree. 

// Example 1:
// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following tree:

//       6
//     /   \
//    3     5
//     \    / 
//      2  0   
//        \
//         1
// Note:
//     The size of the given array will be in the range [1,1000].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    return findMax(nums, 0, nums.length);
};

function findMax(nums, left, right) {
    if(left >= right) {
        return null;
    }

    let max = left;

    for(let i=left+1; i<right; i++) {
        if(nums[i] > nums[max]) {
            max = i;
        }
    }

    var child = new TreeNode(nums[max]);
    child.left = findMax(nums, left, max);
    child.right = findMax(nums, max+1, right);
    return child;
}