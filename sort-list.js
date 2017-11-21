// https://leetcode.com/problems/sort-list/description/

// Sort a linked list in O(n log n) time using constant space complexity.

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
var sortList = function(head) {
    return mergeSort(head);
};


// This is a non-recursive in-place mergesort for a linked list
// algorithm copied from:
// https://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
// also, modify the compare() method below if you aren't sorting numbers.
function mergeSort(list, is_circular, is_doubly) {
	let p, q, e, tail, oldhead;
	let insize, nmerges, psize, qsize, i;

	if(!list)
		return null;

	insize = 1;
	while(true) {
		p = list;
		oldhead = list; // only used for circular lists
		head = null;
		tail = null;

		nmerges = 0; //count the number of merges we do

		while(p) {
			nmerges++;
			q = p;
			psize = 0;
			for(i = 0; i < insize; i++) {
				psize++;
				if(is_circular)
					q = q.next === oldhead ? NULL : q.next;
				else
					q = q.next;
				if(!q) break;
			}

			qsize = insize;

			// now that we have two lists, we need to merge them
			while(psize>0 || (qsize>0 && q)) {
				if(psize === 0) {
					e = q;
					q = q.next;
					qsize--;
					if(is_circular && q === oldhead) 
						q = null;
				}
				else if(qsize===0 || !q) {
					e = p;
					p = p.next;
					psize--;
					if(is_circular && q === oldhead) 
						p = null;
				}
				else if(compare(p.val, q.val) <= 0) {
					e = p;
					p = p.next;
					psize--;
					if(is_circular && q === oldhead) 
						p = null;
				}
				else {
					e = q;
					q = q.next;
					qsize--;
					if(is_circular && q === oldhead) 
						q = null;
				}

				if(tail) {
					tail.next = e;
				}
				else {
					list = e;
				}
				if(is_doubly) {
					e.next = tail;
				}
				tail = e;
			}
			p = q;
		}

		if(is_circular) {
			tail.next = list;
			if(is_doubly)
				list.next = tail;
		}
		else
			tail.next = null;

		if(nmerges <= 1)
			return list;

		insize *= 2;
	}
}

function compare(val1, val2) {
	return val1 - val2;
}

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


var head = createList([4,5,1,8,3,2,7,9,6]);
printList(head)
// head = mergeSort(head)
// printList(head)
printList(sortList(head));