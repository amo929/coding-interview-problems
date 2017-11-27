// https://leetcode.com/problems/reverse-linked-list/description/

// Reverse a singly linked list.

// click to show more hints.
// Hint:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

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
var reverseList = function(head) {
	if(head === null || head.next === null) return head;

	let prev = head;
	let curr = head.next;

	while(curr !== null) {
		let temp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = temp;
	}
	head.next = null;
	return prev;
};


// recursively reverse the list
// var reverseList = function(head) {
// 	return reverse(null, head);
// };

// function reverse(prev, curr) {
// 	if(curr === null) {
// 		return prev;
// 	}
// 	var temp = curr.next;
// 	curr.next = prev;
// 	return reverse(curr, temp);
// }


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

var head = createList([1,2,3,4,5]);
printList(head);
head = reverseList(head);
printList(head)