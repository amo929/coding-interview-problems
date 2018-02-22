// https://www.hackerrank.com/challenges/alternating-characters/problem

// You are given a string containing characters and only, your task is to change it into a string such that every two consecutive characters are different. To do this, you are allowed to delete one or more characters in the string.
// Your task is to find the minimum number of required deletions.
// For example, string should be changed to by deleting one character .

// Input Format
// The first line contains an integer , i.e. the number of test cases.
// The next lines contain a string .

// Output Format
// For each test case, print the minimum number of deletions required in a new line.

// Sample Input
// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

// Sample Output
// 3
// 4
// 0
// 0
// 4

function alternatingCharacters(s){
    // Complete this function
    var answer = 0;
    var curr = s.charAt(0);
    for(let i=1; i<s.length; i++) {
        if(s.charAt(i) === curr) {
            answer++;
        }
        else {
            curr = s.charAt(i);
        }
    }
    return answer;
}