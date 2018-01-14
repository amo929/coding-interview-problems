// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

// Given a binary tree, return the zigzag level order traversal of its nodes' values. 
// (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
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
var zigzagLevelOrder = function(root) {
 	var answer = [];
	fill(root, answer, 0);
    for(let i=1; i<answer.length; i+=2) {
        let len = answer[i].length/2 | 0;
        for(let j=0; j<len; j++) {
            let temp = answer[i][j];
            answer[i][j] = answer[i][answer[i].length-1-j];
            answer[i][answer[i].length-1-j] = temp;
        }
    }
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