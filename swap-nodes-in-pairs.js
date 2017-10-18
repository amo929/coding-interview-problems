// https://leetcode.com/problems/swap-nodes-in-pairs/description/

// Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed. 

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null) return null;
    if(head.next === null) return head;

    let ptr1 = new ListNode(0);
    ptr1.next = head;
    let ptr2 = head;
    let ptr3 = head.next;
    head = head.next; // assuming a list of 2+ nodes, the new head will always be the 2nd node.

    while(ptr3 !== null) {
        // do the swap here (ptr2 and ptr3 are swapped)
        ptr2.next = ptr3.next;
        ptr3.next = ptr2;
        ptr1.next = ptr3;

        // re-adjust ptr2 and ptr3
        let temp = ptr2;
        ptr2 = ptr3;
        ptr3 = temp;

        // if we're not close to the end, skip two nodes ahead
        if(ptr3.next != null) {
            ptr1 = ptr1.next.next;
            ptr2 = ptr2.next.next;
            ptr3 = ptr3.next.next;
        }
        else {
            break;
        }
    }

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

// var a = performance.now();

var l1 = createList([1,2,3,4,5]);
var l2 = createList([1,2,3,4]);
var l3 = createList([1]);
var l4 = createList([]);
var l5 = createList([1,2]);

printList(l1);
printList(l2);
printList(l3);
printList(l4);
printList(l5);

l1 = swapPairs(l1);
l2 = swapPairs(l2);
l3 = swapPairs(l3);
l4 = swapPairs(l4);
l5 = swapPairs(l5);

printList(l1);
printList(l2);
printList(l3);
printList(l4);
printList(l5);

// var b = performance.now();
// console.log('It took ' + (b - a) + ' ms.');