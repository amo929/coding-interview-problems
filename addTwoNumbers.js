// https://leetcode.com/problems/add-two-numbers/description/

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

// *
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// Definition for singly-linked list.
function ListNode(val) {
	this.val = val;
	this.next = null;
}


function makeList(arr) {
	let output = new ListNode(arr[0]);
	let pointer = output;
	for(let i=1; i<arr.length; i++) {
		pointer.next = new ListNode(arr[i]);
		pointer = pointer.next;
	}
	return output;
}

function printList(node) {
	var arr = [];
	while(node) {
		arr.push(node.val);
		node = node.next;
	}
	return arr;
}

var addTwoNumbers = function(l1, l2) {

	let output = null, pointer = null;
	let carryover = 0;

    while(l1 || l2) {

    	let num1 = 0; 
    	let num2 = 0;
    	if(l1) {
    		num1 = l1.val;
    		l1 = l1.next;
    	}
    	if(l2) {
    		num2 = l2.val;
    		l2 = l2.next
    	}


    	let sum = num1 + num2 + carryover;
    	carryover = 0;
    	if(sum > 9) {
    		carryover++;
    		sum = (sum % 10) >> 0; //**NOTE: the shift is to do integer-division in javascript 
    	}

    	if(output === null) {
    		output = new ListNode(sum);
    		pointer = output;
    	}
    	else {
    		pointer.next = new ListNode(sum);
    		pointer = pointer.next;
    	}
    }
	if(carryover !== 0) {
		pointer.next = new ListNode(carryover);
	}	
    return output;
};

var list1 = makeList([2,4,3]);
var list2 = makeList([5,6,4]);

var output = addTwoNumbers(list1, list2);
console.log(printList(output));