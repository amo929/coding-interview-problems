// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

// Given a linked list, remove the nth node from the end of list and return its head.

// For example,
//    Given linked list: 1->2->3->4->5, and n = 2.
//    After removing the second node from the end, the linked list becomes 1->2->3->5.

// Note:
// Given n will always be valid.
// Try to do this in one pass. 

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // edge cases
    if(n === 0) return head;
    if(head === null) return null;

    let left = head;
    let right = head;
    // seperate left and right by n amount
    while(n>0) {
        right = right.next;
        n--;
    }
    // for when n = length of the list OR when the list has only one node;
    if(right === null) {
        return head.next;
    }

    // go to the end of the loop
    while(right.next !== null) {
        left = left.next;
        right = right.next;
    }

    // left is now at n-1 (one space before)
    left.next = left.next.next;
    return head;
};

// for testing purposes - creates and returns and linked list
function createList(arr) {
    let head = new ListNode(arr[0]);
    let ptr = head;
    for(let i=1; i<arr.length; i++) {
        ptr.next = new ListNode(arr[i]);
        ptr = ptr.next;
    }
    return head;
}

// for testing purposes - prints the list
function printList(head) {
    let arr = [];
    while(head != null) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
    return;
}

var l1 = createList([1,2,3,4,5]);
var l2 = createList([1,2,3,4,5]);
var l3 = createList([1,2,3,4,5]);
var l4 = createList([1,2,3,4,5]);
var l5 = createList([1]);

l1 = removeNthFromEnd(l1, 2);
l2 = removeNthFromEnd(l2, 3);
l3 = removeNthFromEnd(l3, 5);
l4 = removeNthFromEnd(l4, 0);
l5 = removeNthFromEnd(l5, 1);

printList(l1);
printList(l2);
printList(l3);
printList(l4);
printList(l5);