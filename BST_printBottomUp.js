// https://careercup.com/question?id=5712224583680000

// Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
// (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7], 
/// ***NOTE: I replaced the 9->2 and 7->27, since it wasn't a BST otherwise.
/// ***NOTE: So the new array is [3,2,20,15,7]
//     3
//    / \
//   2  20
//     /  \
//    15   27
// return its bottom-up level order traversal as:
// [
//   [15,27],
//   [2,20],
//   [3]
// ]

// public List<List<Integer>> levelOrderBottom(TreeNode root) {
// }


// var Node = (value, left, right) => {
// 	this.value = value;
// 	this.left = left;
// 	this.right = right;
// };

var Node = function(value, left, right) {
	this.value = value;
	this.left = left;
	this.right = right;
};

var arr = [3,2,20,15,27];
var listOfList = [];
var rootNode = new Node(arr[0], null, null);

// modifies rootNode and makes the tree
function makeTree(arr, i, node) {
	if(i >= arr.length) return;

	if(arr[i] > node.value) {
		if(node.right === null) {
			node.right = new Node(arr[i], null, null);
			makeTree(arr, i+1, rootNode);
		}
		else {
			makeTree(arr, i, node.right);
		}
	}
	else {
		if(node.left === null) {
			node.left = new Node(arr[i], null, null);
			makeTree(arr, i+1, rootNode);
		}
		else {
			makeTree(arr, i, node.left);
		}
	}	
}

// modifies listOfList to have subarrays representing each level of the tree
function makeBottomUp(arr, level, node) {
	if(node === null) {
		return;
	}

	if(!arr[level]) {
		arr[level] = [];
	}
	arr[level].push(node.value);

	makeBottomUp(arr, level+1, node.left);
	makeBottomUp(arr, level+1, node.right);
}

// for debugging
function printTree(root) {
	if(root === null) { 
		return;
	}
	console.log(root.value);
	printTree(root.left);
	printTree(root.right);
}

makeTree(arr, 1, rootNode);
makeBottomUp(listOfList,0,rootNode);
for(let i = listOfList.length-1; i >= 0; i--) {
	console.log(listOfList[i]);
}