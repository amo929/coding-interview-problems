// https://leetcode.com/problems/simplify-path/discuss/

// Given an absolute path for a file (Unix-style), simplify it.

// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"

// click to show corner cases.
// Corner Cases:

//     Did you consider the case where path = "/../"?
//     In this case, you should return "/".
//     Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
//     In this case, you should ignore redundant slashes and return "/home/foo".

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    arr = path.split('/').filter(item => item);
    answer = [];
    for(let i=0; i<arr.length; i++) {
    	let curr = arr[i];
    	if(curr === "..") {
    		answer.pop();
    	}
    	else if(curr === ".") {
    		continue;
    	}
    	else {
    		answer.push(curr);
    	}
    }

    if(answer.length === 0) 
    	return "/";

    return "/" + answer.join("/");
};

var s;
s =simplifyPath("/a/./b/../../c/");
console.log(s);
s = simplifyPath("/home/");
console.log(s);
s = simplifyPath("/../");
console.log(s);
s = simplifyPath("/home//foo/");
console.log(s);
s = simplifyPath("/home//foo/../");
console.log(s);