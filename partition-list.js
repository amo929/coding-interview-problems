// https://leetcode.com/problems/partition-list/description/

// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// For example,
// Given 1->4->3->2->5->2 and x = 3,
// return 1->2->2->4->3->5. 

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	if(head === null) return null;
	if(head.next === null) return head;

	// re-adjust head to be at the very first number that is less than x, and do a few swaps
	// for example, [3,3,3,1,2] with x=3 will re=adjust this to [1,3,3,3,2]
	// we will handle the 2 later, but we just need a number smaller than x to be at the head
	let temp = new ListNode(0);
	temp.next = head;
	let headptr = head;
	let otherptr = temp;
	while(headptr !== null && headptr.val >= x) {
		headptr = headptr.next;
		otherptr = otherptr.next;
	}
	if(headptr === null) { //if we reach the end, then the entire list is below x
		return head;
	}
	else if(headptr !== head) { //if we're not at the original head anymore, we need to do a few swaps
		otherptr.next = headptr.next;
		headptr.next = head;
		head = headptr;
	}

	// we need to find where the partition occurs, which is the first node greater/equal to x
	// prev will hold the node before the partition point
	// part wil hold the node after the partition point
	let prev = head;
	let part = head.next;
	while(part !== null && part.val < x) {
		prev = prev.next;
		part = part.next;
	}
	if(part === null) //if part is null, this means that x was probably bigger than the entire list
		return head;

	// We now have 3 major points: head, prev, and part, and we also include parthead as a reference to part
	// Using [2,0,4,1,3,1,4,0,3] with x=4, we have head=2, prev=0, part=4.
	// ptr will start at the first 1 (which is part.next), and iterate through the rest of the list and be added to the tail of prev or part.
	// By the end of this loop, we will have:
	// head = [2,0,1,3,1,0,3]
	// parthead = [4,4]
	// Then we simply combine these two for [2,0,1,3,1,0,3,4,4]
	let parthead = part;
	let ptr = part.next;
	while(ptr !== null) {
		if(ptr.val >= x) {
			part.next = ptr;
			part = part.next;
		}
		else {
			prev.next = ptr;
			prev = prev.next;
		}
		ptr = ptr.next;
	}
	prev.next = parthead;
	part.next = null;

	return head;
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

var list;


list = createList([1,4,3,2,5,2]);
list = partition(list, 3);
printList(list);

list = createList([5,5,5,5,2]);
list = partition(list, 3);
printList(list);

list = createList([1,2,3]);
list = partition(list, 3);
printList(list);

list = createList([3,3,3,2,2,1]);
list = partition(list, 2);
printList(list);


list = createList([1,2,3]);
list = partition(list, 4);
printList(list);

list = createList([1,3,2]);
list = partition(list, 3);
printList(list);

list = createList([2,0,4,1,3,1,4,0,3]);
list = partition(list, 4);
printList(list);