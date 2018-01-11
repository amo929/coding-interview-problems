// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/

// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

// Note:
//     The range of node's value is in the range of 32-bit signed integer.

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
var averageOfLevels = function(root) {
    var arr = [];
    addToArray(root, arr, 0);
    for(let i=0; i<arr.length; i++) {
    	var total = 0;
    	for(let j=0; j<arr[i].length; j++) {
    		total += arr[i][j];
    	}
    	arr[i] = total / arr[i].length;
    }
    return arr;
};

function addToArray(node, arr, level) {
	if(!node) return;

	if(!arr[level]) {
		arr[level] = [];
	}
	arr[level].push(node.val);
	addToArray(node.left, arr, level+1);
	addToArray(node.right, arr, level+1);
}