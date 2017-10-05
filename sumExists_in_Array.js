// https://www.careercup.com/question?id=5708120205557760

// given an array, find whether there exists 3 elements a,b,c in it such that a+b=c using efficient method.



var arr = [2,3,5,8,10];
// var arr = [1,10, 100, 1000];
var allSums = [];

function exists(arr, allSums) {
	for(let i=0; i < arr.length; i++) {
		for(let j=0; j < arr.length; j++) {
			var sum = arr[i] + arr[j];
			allSums.push(sum);
		}
	}


	for(let i=0; i < arr.length; i++) {
		for(let j=0; j < allSums.length; j++) {
			if(arr[i] === allSums[j]) return true;
		}
	}

	return false;
}

console.log(exists(arr, allSums));