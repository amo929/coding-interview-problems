// https://leetcode.com/problems/remove-linked-list-elements/description/

// Remove all elements from a linked list of integers that have value val.

// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;

    // make sure head is pointing to the first node that isn't equal to val.
    while(head !== null && head.val === val) {
        head = head.next;
    }
    if(head === null) return null;

    let prev = head;
    let curr = head.next;
    while(curr !== null) {
        if(curr.val === val) {
            prev.next = curr.next;
            curr = curr.next;
        }
        else {
            prev = prev.next;
            curr = curr.next;
        }
    }
    return head;
};