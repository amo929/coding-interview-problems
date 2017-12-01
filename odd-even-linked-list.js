// https://leetcode.com/problems/odd-even-linked-list/description/

// Given a singly linked list, group all odd nodes together followed by the even nodes. 
// Please note here we are talking about the node number and not the value in the nodes.
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example:
// Given 1->2->3->4->5->NULL,
// return 1->3->5->2->4->NULL.

// Note:
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...

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
var oddEvenList = function(head) {
	if(!head || !head.next) return head;

	var originalEven = head.next;
    var odd = head;
    var even = head.next;
    while(even !== null) {
    	odd.next = even.next;
    	if(even.next === null) {
    		break;
    	}
    	even.next = even.next.next;
    	odd = odd.next;
    	even = even.next;
    }
    odd.next = originalEven;
    return head;
};
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}


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

var head;

head = createList([1,2,3,4,5,6,7]);
printList(head);
head = oddEvenList(head);
printList(head);

head = createList([1,2,3,4,5,6]);
printList(head);
head = oddEvenList(head);
printList(head);