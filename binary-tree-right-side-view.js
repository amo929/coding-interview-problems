// https://leetcode.com/problems/binary-tree-right-side-view/description/

// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
// For example:
// Given the following binary tree,

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

// You should return [1, 3, 4]

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
var rightSideView = function(root) {
	if(root === null) return [];
    let answer = [root.val];

    traverse(answer, 1, root.right);
    traverse(answer, 1, root.left);
    return answer;
};

function traverse(answer, level, node) {
	if(node === null) { 
		return;
	}
	if(!answer[level]) {
		answer.push(node.val)
	}
	traverse(answer, level+1, node.right);
	traverse(answer, level+1, node.left);
}