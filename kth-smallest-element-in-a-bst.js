// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
	var size = 1 + findSize(root.left) + findSize(root.right);
	if(k<size) {
		return kthSmallest(root.left, k);
	}
	else if(k>size+1) {
		return kthSmallest(root.right, k-1-count);
	}
	return root.val;
};

function findSize(node) {
	if(node === null) return 0;
	return 1 + findSize(node.left) + findSize(node.right);
}

