// given an array that contains either integers or arrays (of which also contains either integers or arrays, and so on),
// return how many times the number 1 appears.
// This method should be done recursively.

function countOne(arr) {
	var count = 0;
	for(let i=0; i<arr.length; i++) {
		if(typeof arr[i] === typeof []) {
			count += countOne(arr[i]);
		}
		else if(arr[i] === 1) {
			count++;
		}
	}
	return count;
}

// testing my solution here
var arr = [
[1,2,3],
1,
[],
[[[[[[[[[[[[[[[[[[],1]]]]]]]]]]]]]]]]],
2,
[1,[1,[1,[1,[1,[0,[1]]]]]],[1]],
1,
[3, [1,2,3,[4,[5]]], 4, 1],
[[[[[1],4,5,6],9,1,2,[1]]]],
4,
5,
6,
[7,6,1],
[[1,2,[1,[2],[1,1,1]]],[1,2,3],5],
1,
];

console.log(countOne(arr));