// https://leetcode.com/problems/merge-sorted-array/description/

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. 
// The number of elements initialized in nums1 and nums2 are m and n respectively.


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	for(let i=m+n-1; i>=0; i--) {
		if(m === 0) {
			nums1[i] = nums2[--n];
		}
		else if(n === 0) {
			nums1[i] = nums1[--m]
		}
		else if(nums1[m-1] >= nums2[n-1]) {
			nums1[i] = nums1[--m];
		}
		else {
			nums1[i] = nums2[--n];
		}
	}
	console.log(nums1)
};

var arr1 = [1,2,3,4,5]
var arr2 = [4,5,6,7];

merge(arr1, arr1.length, arr2, arr2.length);