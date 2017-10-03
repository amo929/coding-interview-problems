// https://www.careercup.com/question?id=5678803027230720

// * Given a string on length N. You can swap only the adjacent elements
// and each element can be swapped atmost once.
// Find the no of permutations of the string that can be generated after
// performing the swaps as mentioned.
// Ex –
// string – “12345”
// Ans = 8
// Explanations- (All the permutations)
// 12345
// 21345
// 13245
// 12435
// 12354
// 21435
// 13254
// 21354

var str = "12345";
var count = 1;
var arr = [str];

function swap(str, i, wasSwapped) {
	if(i > str.length-1) {
		return;
	}

	let swapped= str.substring(0,i) + str.charAt(i+1) + str.charAt(i) + str.substring(i+2)
	if(wasSwapped) {
		count++;
		arr.push(str);
		swap(str, i+1, false)
	}
	else {
		swap(swapped, i+1, true);
		swap(str, i+1, false)
	}
}

swap(str, 0, false);

console.log(count);
console.log(arr.toString())