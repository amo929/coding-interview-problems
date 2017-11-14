// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)

// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0
// In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let highest = Number.MIN_SAFE_INTEGER;
    let lowest = Number.MAX_SAFE_INTEGER;
    let profit = 0;

    for(let i=0; i<prices.length; i++) {
        let cur = prices[i];

        if(cur < lowest) {
            lowest = cur;
            highest = Number.MIN_SAFE_INTEGER;
        }
        else if(cur > highest) {
            highest = cur;
        }

        if(highest - lowest > profit) {
            profit = highest - lowest;
        }
        console.log("(i-low,high): (" + i + "-"+lowest+","+highest+")" + "\n--- max profit: " + profit);
    }
    return profit;
};

var arr;

arr = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr));

arr = [7, 6, 4, 3, 1];
console.log(maxProfit(arr));

arr = [3,2,6,5,0,3];
console.log(maxProfit(arr));

arr = [3];
console.log(maxProfit(arr));