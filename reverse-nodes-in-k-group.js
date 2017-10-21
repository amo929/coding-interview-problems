// https://leetcode.com/problems/reverse-nodes-in-k-group/description/

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
// k is a positive integer and is less than or equal to the length of the linked list. 
// If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

// You may not alter the values in the nodes, only nodes itself may be changed.
// Only constant memory is allowed.

// For example,
// Given this linked list: 1->2->3->4->5
// For k = 2, you should return: 2->1->4->3->5
// For k = 3, you should return: 3->2->1->4->5 

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
var reverseKGroup = function(head, k) {
    if(head === null) return null;
    if(head.next === null || k === 1) return head;

    // some set-up stuff - important is the 0(n) to get the length of the list
    let ptr = head;
    let count = 0;
    while(ptr != null) {
        ptr = ptr.next;
        count++;
    }
    if(k > count) return head;

    // We will use our helper method reverseListK(), please through that method first;
    // Basically we're going to continously reverse nodes in k sections.
    let ans = reverseListK(head, k); 
    head = ans[0]; // new head node
    ptr = ans[1]; // pointer to the k-th node

    // So if we started with 1->2->3->4->5->6->... and k=3,
    // we would be at 3->2->1->4->5->6->... from the previous code above.
    // As a result, head=3, ptr=1, and ptr.next=4 as of now.
    // When we use reverseListK() on ptr.next, then 4->5->6->... becomes 6->5->4->...
    // reverseListK() will return [6,4], so we just set ptr.next to be the 6 and set ptr to be the 4.
    // And then we repeat these steps with the for loop.
    for(let i=0; i<(count/k >> 0)-1; i++) {
        ans = reverseListK(ptr.next, k);
        ptr.next = ans[0];
        ptr = ans[1];
    }
    return head;
};

// This will reverse a list up to k nodes 
// e.g. k=3, 1->2->3->4->... becomes 3->2->1->4->... 
// Returns an array with at most 2 elements - the new starting node and the k-th node
// Using the example above, this would return the nodes corresponding to [3,1].
function reverseListK(node, k) {
    if(node === null) return null;
    if(node.next === null) return [node];

    let ptr1 = node;
    let ptr2 = node.next;
    let ptr3 = node.next.next;
    ptr1.next = null;

    while(k-1>0) {
        ptr2.next = ptr1;
        if(ptr3 === null) return [ptr2];
        ptr1 = ptr2;
        ptr2 = ptr3;
        ptr3 = ptr3.next;
        k--;
    }
    if(k===1) {
        node.next = ptr2; 
    }
    return [ptr1, node];
}


// for testing purposes - creates and returns a linked list
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

var arr = [1,2,3,4,5,6,7,8,9,10,11];
var node = createList(arr);
node = reverseKGroup(node, 5);
printList(node);

var arr = [1,2];
var node = createList(arr);
node = reverseKGroup(node, 3);
printList(node);
