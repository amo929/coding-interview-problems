// https://leetcode.com/problems/jump-game-ii/description/

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// For example:
// Given array A = [2,3,1,1,4]

// The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

// Note:
// You can assume that you can always reach the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	if(nums.length <= 1) return 0;

    // The idea is to jump to the index with the highest "potential".
    // Taking the given example [2,3,1,1,4], and starting at index 0 to get '2';
    // We can jump up to 2, either to index 1 or 2 for '3' or '1', respectively.
    // The highest potential is the distance between the indexes plus the value itself, so:
    // Jumping to '3' would give us a potential distance of (1-0) + 3 = 4.
    // Jumping to '1' would give us a potential distance of (2-0) + 1 = 3.
    // So we jump to index 1 that contains value '3'.
	let jumps = 0;
    let i=0;
    while(i < nums.length) {
    	let max = nums[i];
    	let index = i+1;

    	// if we can reach the end from our current position
    	// just increment jumps and break the loop.
    	if(max + i >= nums.length-1) {
    		jumps++;
    		break;
    	}
    	// we find the highest potential
    	for(let j=i+1; j<=nums[i]+i; j++) {
    		let potential = (j-i) + nums[j];
    		if(potential > max) {
    			max = potential;
    			index = j;
    		}
    	}
    	// We move i to the index with the highest potential.
    	i = index;
    	jumps++;
    }
    return jumps;
};

let arr;
arr = [3,4,1,1,2,5,1,2,1,3,4,1,2,3];
console.log(jump(arr));

arr = [2,3,1,1,4];
console.log(jump(arr));