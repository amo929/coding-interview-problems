// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

// Let's call an array A a mountain if the following properties hold:
//     A.length >= 3
//     There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]

// Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Example 1:
// Input: [0,1,0]
// Output: 1

// Example 2:
// Input: [0,2,1,0]
// Output: 1



/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let max = 1;
    for(var i = 2; i<A.length; i++) {
        if(A[i] > A[max]) {
            max = i;
        }
    }
    return max;
};

console.log(peakIndexInMountainArray([0,2,1,0]));
console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,1,2,3,4,5,4,3,2,1]));