// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

// Given a binary tree, return the inorder traversal of its nodes' values.
// For example:
// Given binary tree [1,null,2,3],

//    1
//     \
//      2
//     /
//    3

// return [1,3,2].
// Note: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let answer = [];
    traverse(root, answer);
    return answer;
};

function traverse(node, arr) {
	if(node === null) return;
	traverse(node.left, arr);
	arr.push(node.val);
	traverse(node.right, arr);
}