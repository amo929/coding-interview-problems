// https://leetcode.com/problems/climbing-stairs/description/

// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer. 

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1;

    let step1 = 1;
    let step2 = 1;
    for(let i=2; i<n; i++) {
        let temp = step1;
        step1 = step2;
        step2 += temp;
    }
    return step1 + step2;
};

console.log(climbStairs(3));
console.log(climbStairs(40));
console.log(climbStairs(100));
