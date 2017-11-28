// https://leetcode.com/problems/sum-of-left-leaves/description/

// Find the sum of all left leaves in a given binary tree.
// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
	if(root === null) return 0;
	if(root.left === null) {
		return sumOfLeftLeaves(root.right);
	}
	else if(root.left.left === null && root.left.right === null) {
		return root.left.val + sumOfLeftLeaves(root.right);
	}
	else {
		return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
	}
};