// https://www.hackerrank.com/challenges/beautiful-binary-string/problem

// Alice has a binary string, , of length . She thinks a binary string is beautiful if and only if it doesn't contain the substring .
// In one step, Alice can change a to a (or vice-versa). Count and print the minimum number of steps needed to make Alice see the string as beautiful.

// Input Format
// The first line contains an integer, (the length of binary string ).
// The second line contains a single binary string, , of length .

// Output Format
// Print the minimum number of steps needed to make the string beautiful.

// Sample Input 0
// 7
// 0101010
// Sample Output 0
// 2

// Sample Input 1
// 5
// 01100
// Sample Output 1
// 0

// Sample Input 2
// 10
// 0100101010
// Sample Output 2
// 3


function beautifulBinaryString(b) {
    // Complete this function
    var answer = 0;
    for(let i=0; i<b.length-2; i++) {
        if(b.charAt(i) === '0' && b.charAt(i+1) === '1' && b.charAt(i+2) === '0') {
            answer++;
            i+=2;
        } 
    }
    return answer;
}