// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

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
var minDepth = function(root) {
    if(root === null) return 0;
    var min = [];
    traverse(root, min, 0);
    return min.length === 0 ? 0 : min[0]+1;
};

function traverse(node, min, level) {
	if(node === null) return;
    if(node.left === null && node.right === null) {
        if(min.length === 0 || level<min[0]) {
            min[0] = level;
        }
        return;
    }
    traverse(node.left, min, level+1);
    traverse(node.right, min, level+1);
}