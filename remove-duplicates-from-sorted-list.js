// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3. 

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
var deleteDuplicates = function(head) {
    if(head === null) return null;

    var ptr = head;
    while(ptr.next !== null) {
        while(ptr.val === ptr.next.val) {
            ptr.next = ptr.next.next;
            if(ptr.next === null) 
                return head;;
        }
        if(ptr.val !== ptr.next.val) {
            ptr = ptr.next;
        }
    }
    return head;
};