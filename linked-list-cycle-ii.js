// https://leetcode.com/problems/linked-list-cycle-ii/description/

// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
// Note: Do not modify the linked list.
// Follow up:
// Can you solve it without using extra space? 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
	// My simple intuitive solution
	let map = new Map();
	let ptr = head;
	while(ptr !== null) {
		if(map.has(ptr)) {
			return ptr;
		}
		map.set(ptr, 1);
		ptr = ptr.next;
	}
	return null;
};