// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	var answer = [];
	fill(root, answer, 0);
	return answer;
};

function fill(node, arr, level) {
	if(!node) return;
	if(!arr[level]) {
		arr[level] = [];
	} 
	arr[level].push(node.val);
	fill(node.left, arr, level+1);
	fill(node.right, arr, level+1);
}

