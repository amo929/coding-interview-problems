// https://leetcode.com/problems/binary-tree-paths/description/

// Given a binary tree, return all root-to-leaf paths.
// For example, given the following binary tree:

//    1
//  /   \
// 2     3
//  \
//   5

// All root-to-leaf paths are:
// ["1->2->5", "1->3"]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var answer = [];
    traverse(root, [], answer);
    return answer;

};

function traverse(node, arr, answer) {
	if(node === null) return;

	arr.push(node.val);
	if(node.left === null && node.right === null) {
		answer.push(arr.join("->"));
        arr.pop();
		return;
	}
	traverse(node.left, arr, answer);
	traverse(node.right, arr, answer);
    arr.pop();
}