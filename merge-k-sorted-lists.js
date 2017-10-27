// https://leetcode.com/problems/merge-k-sorted-lists/description/

// Merge k sorted linked lists and return it as one sorted list. 
// Analyze and describe its complexity. 

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;

    let head;
    for(let i=0; i<lists.length; i++) {
        if(lists[i]) {
            head = lists[i];
            break;
        }
    }
    if(!head) {
        return null;
    }
    let ptr = head;
    for(let i=0; i<lists.length-1; i++) {
        console.log("c: " + lists[i])
        if(!lists[i] || lists[i].length === 0) {
            continue;
        }
        while(ptr.next !== null) {
            ptr = ptr.next;
        }
        if(ptr.next === null) {
            while(i < lists.length-1 && (!lists[i+1] || lists[i+1].length === 0)) {
                i++;
            }
            ptr.next = lists[i+1];
            ptr = ptr.next;
        }
    }
    head = mergeSort(head);
    return head;
};


// for testing purposes - creates and returns and linked list
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



function mergeSort(list, is_circular, is_doubly) {
    let p, q, e, tail, oldhead;
    let insize, nmerges, psize, qsize, i;

    if(!list)
        return null;

    insize = 1;
    while(true) {
        p = list;
        oldhead = list;
        list = null;
        tail = null;

        nmerges = 0;    //count the number of merges we do

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


var arr, node;

// arr = [
//     createList([17,18,19,20]),
//     createList([1,2,3]),
//     createList([14,15,16]),
//     createList([4,4,4,5,6]),
//     createList([7,8,8,9]),
//     createList([10,11,12]),
// ];
// node = mergeKLists(arr);
// printList(node);

// arr = [
//     createList([]),
//     createList([]),
// ]
// node = mergeKLists(arr);
// printList(node);

// arr = [
//     createList([-10,-9,-9,-3,-1,-1,0]),
//     createList([-5]),
//     createList([4]),
//     createList([-8]),
//     createList([]),
//     createList([-9,-6,-5,-4,-2,2,3]),
//     createList([-3,-3,-2,-1,0]),
// ];
// node = mergeKLists(arr);
// // printList(node);

// arr = [];
// node = mergeKLists(arr);
// printList(node);

arr = [
    createList([-2,-1,-1,-1]),
    createList([]),
];
node = mergeKLists(arr);
printList(node);