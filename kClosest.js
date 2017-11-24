// findest K Closest Points to the Origin

function kClosest(points, k) {
	// quicksort the whole thing, return a new array consisting of the first k elements
	quickSort(points, 0, points.length-1);
	return points.slice(0, 5);
}

// Quick and dirty quicksort algorithm.
// For the arguments (arr, left, right), start out with (theArray, 0, theArray.length-1).
// Will sort an array of numbers or characters.
// Taken and modified from here:
// https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
function quickSort(arr, left, right) {
	let index;
	if(arr.length > 1) {
		index = partition(arr, left, right);
	}
	if(left < index-1) {
		quickSort(arr, left, index-1)
	}
	if(right > index) {
		quickSort(arr, index, right);
	}
	// return arr;
}

function partition(arr, left, right) {
	let pivot = (left+right)/2 | 0;
	let i = left;
	let j = right;

	while(i <= j) {
		while(pythag(arr[i]) < pythag(arr[pivot])) {
			i++;
		}
		while(pythag(arr[j]) > pythag(arr[pivot])) {
			j--;
		}
		if(i <= j) {
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i++;
			j--;
		}
	} 
	return i;
}

function pythag(arr) {
	return Math.sqrt(Math.pow(arr[0],2) + Math.pow(arr[1],2));
}

var points = [
[-2,4],
[0,-2],
[-1,0],
[2,5],
[-2,-3],
[3,2],
]
console.log(points)
console.log(kClosest(points, 2))