// https://www.hackerrank.com/challenges/two-strings/problem

// Given two strings, and , determine if they share a common substring.

// Sample Input
// 2
// hello
// world
// hi
// world

// Sample Output
// YES
// NO

// Explanation

// We have pairs to check:
//     a="hello", b="world". The substrings 'o' and 'l' and are common to both a and b, so we print YES on a new line.
//     a="hi", b="world". Because a and b have no common substrings, we print NO on a new line.

function twoStrings(s1, s2){
    // Complete this function
    var map = new Map();
    if(s1.length < s2.length) {
        let temp = s1;
        s1 = s2;
        s2 = temp;
    }
    for(let i=0; i<s1.length; i++) {
        map.set(s1.charAt(i), 1);
    }
    for(let i=0; i<s2.length; i++) {
        if(map.has(s2.charAt(i))) {
            return "YES"
        }
    }
    return "NO";
}