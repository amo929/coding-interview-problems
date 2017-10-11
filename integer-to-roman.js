// https://leetcode.com/problems/integer-to-roman/description/

// Given an integer, convert it to a roman numeral.
// Input is guaranteed to be within the range from 1 to 3999.


// (I,1) (V,5) (X,10) (L,50) (C,100) (D, 500) (M,1000)

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    let answer = [];
    let coeff = 0;

    // handle all multiples of 1000 (M)
    if(num >= 1000) {
        let count = num/1000 >> 0;
        for(let i=0; i<count; i++) {
            answer.push('M');
        }
        num -= count*1000;
    }

    //handle if num is between 500 to 999 (D or CM)
    if(num >= 500) {
        if(num >= 900) {
            answer.push('CM');
            num -= 900;
        }
        else {
            answer.push('D');
            num -= 500;
        }
    }

    //handle all multiples of 100 (C or CD)
    if(num >= 100) {
        if(num >= 400 && num <= 499) {
            answer.push('CD');
            num -= 400;
        }
        else {
            let count = num/100 >> 0;
            for(let i=0; i<count; i++) {
                answer.push('C')
            }
            num -= count*100;
        }
    }

    // handle if num is between 50 and 99 (XC or L)
    if(num >= 50) {
        if(num >= 90) {
            answer.push('XC');
            num -= 90;
        }
        else {
            answer.push('L');
            num -= 50;
        }
    }

    // handle all multiples of 10 (X or XL)
    if(num >= 10) {
        if(num >= 40 && num <= 49) {
            answer.push('XL');
            num -= 40;
        }
        else {
            let count = num/10 >> 0;
            for(let i=0; i<count; i++) {
                answer.push('X')
            }
            num -= count*10;
        }
    }

    // handle if num is between 5 and 9 (IX or V)
    if(num >= 5) {
        if(num >= 9) {
            answer.push('IX');
            num -= 9;
        }
        else {
            answer.push('V');
            num -= 5;
        }
    }

    // handle if num is less than 4 (IV or I)
    if(num >= 1) {
        if(num === 4) {
            answer.push('IV')
        }
        else {
            while(num > 0) {
                answer.push('I');
                num--;
            }
        }
    }

    return answer.join("");
};

// function helper(num, )
console.log(intToRoman(10));
