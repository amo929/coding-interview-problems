// https://leetcode.com/problems/zigzag-conversion/description/
 
//  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR". 

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

	if(numRows<=1) return s;
	
	let row = 0, goingDown = true;
	let answer = [];

    for(let i=0; i<numRows; i++) {
    	answer.push([]);
    }

    for(let i=0; i<s.length; i++) {
    	answer[row].push(s.charAt(i));
    	row = goingDown ? ++row : --row;
    	if(row<=0 || row>=numRows-1) {
    		goingDown = !goingDown;
    	}
    }

    let x = "";
    answer.forEach((item) => {
    	item.forEach((char) => {
    		x += char;
    	});
    });
    return x;
    // return answer.toString();
};
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("AB", 2));
// console.log(convert("", 4));

