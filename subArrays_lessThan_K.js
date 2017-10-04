// https://www.careercup.com/question?id=5768044260360192

// Given an array of n positive integers, find the number of subarrays
// such that product of the elements of those subarrays are less than k.
// For eg. Arr= {2, 3, 6} k=10
// No of such subarrays= 4

var arr = [2,3,6,4,2,1]; //replace this array with any other array
var k = 15; //replace this k with any other limit
var count = 0;

function createSubArr(prevArr, k, i) {
	if(k < 1 || i >= arr.length) {
		return;
	}

	if(k / arr[i] >= 1) {
		count++;
		var subArr = prevArr.concat([arr[i]]);
		console.log(subArr);
		createSubArr(subArr, k/arr[i], i+1);
	}
	createSubArr(prevArr, k, i+1);
}


createSubArr([], k, 0);
console.log(count)