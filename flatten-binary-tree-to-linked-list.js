// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/

// Given a binary tree, flatten it to a linked list in-place.
// For example,
// Given
//          1
//         / \
//        2   5
//       / \   \
//      3   4   6

// The flattened tree should look like:
//    1
//     \
//      2
//       \
//        3
//         \
//          4
//           \
//            5
//             \
//              6

// click to show hints.
// Hints:
// If you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root === null) return;
    flat(root);
};

function flat(root) { 
	if(root === null) return null;
	
	let temp = root.right;
	root.right = flat(root.left);

	let ptr = root;
	while(ptr.right !== null) {
		ptr = ptr.right;
	}
	ptr.right = flat(temp);
	root.left = null;
	return root;
} 