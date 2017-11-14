// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
var maxDepth = function(root) {
	if(root === null) return 0;
	return depth(root, 1);
};

function depth(node, level) {
	if(node === null) 
		return level-1;
	if(node.left===null && node.right===null)
		return level;

	return Math.max(depth(node.left, level+1), depth(node.right, level+1));
}