// https://leetcode.com/problems/delete-node-in-a-linked-list/description/

// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, 
// the linked list should become 1 -> 2 -> 4 after calling your function. 

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
	if(node === null || node.next === null) return;

	var temp = node;
    while(node.next !== null) {
    	if(node.next.next === null) {
    		temp = node;
    	}
    	node.val = node.next.val;
    	node = node.next;
	}
	temp.next = null;
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



var node = createList([1,2,3,4,5]);
printList(node)
deleteNode(node.next.next);
printList(node);