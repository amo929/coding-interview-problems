// https://leetcode.com/problems/rotate-list/description/

// Given a list, rotate the list to the right by k places, where k is non-negative.

// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.
// return 2->3->4->5->1



/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	if(!head) return null;
    if(!head.next || k <= 0) return head;

    let last = head; // will point to the last node of head
    let newhead; // will point to the new head
    let beforehead = head; // will point to the node right before the new head

    // get the length of the list
    let len = 1;
    while(last.next !== null) {
    	last = last.next;
    	len++;
    }

    // find how many k places the list will rotate (k can be above the list's length)
    // once we know how many k places, we traverse the list until beforehead is pointing to the node right before the new head
    k = k % len;
    if(k === 0) return head;
    for(let i=0; i<len-1-k; i++) {
    	beforehead = beforehead.next;
    }

    // relevant when k = len-1
    if(beforehead === last) {
    	beforehead = head;
    }

    // re-adjust pointers to their proper locations.
    // newhead is right after beforehead.
    // beforehead becomes the new last node.
    // the previous last node's next is always the original head.
    newhead = beforehead.next;
    beforehead.next = null;
    last.next = head;
    return newhead;
};

// Creates a linked list given an array
function createList(arr) {
    if(arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let ptr = head;
    for(let i=1; i<arr.length; i++) {
        ptr.next = new ListNode(arr[i]);
        ptr = ptr.next;
    }
    return head;
}

// prints the list
function printList(head) {
    let arr = [];
    while(head != null) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
    return;
}

var arr = [1,2,3,4,5];
var head;

head = createList(arr);
head = rotateRight(head, 8);
printList(head);

head = createList(arr);
head = rotateRight(head, 10);
printList(head);
