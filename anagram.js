// https://www.hackerrank.com/challenges/anagram/problem

// Sid is obsessed with reading short stories. 
// Being a CS student, he is doing some interesting frequency analysis with the books. 
// Your task is to help him find the minimum number of characters of the first string he needs to change to enable him to make it an anagram of the second string.
// Note: A word x is an anagram of another word y if we can produce y by rearranging the letters of x.

// Output Format
// An integer corresponding to each test case is printed in a different line, i.e. the number of changes required for each test case. 
// Print -1 if it is not possible.

// Sample Input
// 6
// aaabbb
// ab
// abc
// mnop
// xyyx
// xaxbbbxx

// Sample Output
// 3
// 1
// -1
// 2
// 0
// 1

// Explanation
// Test Case #01: We have to replace all three characters from the first string to make both of strings anagram. 
// Here, = "aaa" and = "bbb". So the solution is to replace all character 'a' in string a with character 'b'.

// Test Case #02: You have to replace 'a' with 'b', which will generate "bb".

// Test Case #03: It is not possible for two strings of unequal length to be anagram for each other.

// Test Case #04: We have to replace both the characters of first string ("mn") to make it anagram of other one.

// Test Case #05: and are already anagram to each other.

// Test Case #06: Here S1 = "xaxb" and S2 = "bbxx". He had to replace 'a' from S1 with 'b' so that S1 = "xbxb" and we can rearrange 
// its letter to "bbxx" in order to get S2.

function anagram(s){
    // Complete this function
    var answer = 0;
    if(s.length%2 !== 0) return -1;
    var map = new Map();
    for(let i=0; i<s.length/2|0; i++) {
        let curr = s.charAt(i)
        if(map.has(curr)) {
            map.set(curr, map.get(curr)+1)
        }
        else {
            map.set(curr, 1);
        }
    }
    for(let i=s.length/2; i<s.length; i++) {
        let curr = s.charAt(i);
        if(map.has(curr)) {
            answer++;
            if(map.get(curr) === 1) {
                map.delete(curr)
            }
            else {
                map.set(curr, map.get(curr)-1);
            }
        }
    }
    return s.length/2 - answer;
}