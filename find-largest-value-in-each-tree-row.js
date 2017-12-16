// https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/

// You need to find the largest value in each row of a binary tree.

// Example:
// Input: 
//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 

// Output: [1, 3, 9]


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
var largestValues = function(root) {
    if(!root) return [];

    var answer = [];
    addMax(root, answer, 0)
    return answer;
};

function addMax(node, answer, level) {
	if(!node) return;

	if(answer.length-1 < level || answer[level] < node.val) {
		answer[level] = node.val;
	}
	addMax(node.left, answer, level+1);
	addMax(node.right, answer, level+1);
}