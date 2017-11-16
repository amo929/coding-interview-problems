// https://leetcode.com/problems/linked-list-cycle/description/

// Given a linked list, determine if it has a cycle in it.
// Follow up:
// Can you solve it without using extra space? 

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	// Constant space solution
	// walk goes to next, run goes to next.next
	// if head is circular somewhere, then walk and run will intersect at some point.
	if(head === null)
		return null;
	let walk = head;
	let run = head;
	while(run.next !== null && run.next.next !== null) {
		walk = walk.next;
		run = run.next.next;
		if(walk === run) {
			return true;
		}
	}
	return false;


	// My simple intuitive solution
	// let map = new Map();
	// let ptr = head;
	// while(ptr !== null) {
	// 	if(map.has(ptr)) {
	// 		return true;
	// 	}
	// 	map.set(ptr, 1);
	// 	ptr = ptr.next;
	// }
	// return false;
};