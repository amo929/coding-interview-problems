// https://leetcode.com/problems/candy/description/

// There are N children standing in a line. Each child is assigned a rating value.
// You are giving candies to these children subjected to the following requirements:
//     Each child must have at least one candy.
//     Children with a higher rating get more candies than their neighbors.

// What is the minimum candies you must give? 

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let amount = new Array(ratings.length).fill(1);
    let answer = 0;
    
    // we do 2 passes through ratings, the idea is that:
    // the first pass (0 to n) will have the correct amount relative to the left neightbors
    // the second pass (n to 0) will have the correct amount relative to the right neighbors
    for(let i=0, j=1; j<ratings.length; i++, j++) {
    	if(ratings[i] > ratings[j]) {
    		if(amount[i] <= amount[j]) {
    			amount[i] = amount[j]+1;
    		}
    	}
    	else if(ratings[j] > ratings[i]) {
    		if(amount[j] <= amount[i]) {
    			amount[j] = amount[i]+1;
    		}
    	}
    }
    for(let i=ratings.length-1, j=ratings.length-2; j>=0; i--, j--) {
    	if(ratings[i] > ratings[j]) {
    		if(amount[i] <= amount[j]) {
    			amount[i] = amount[j]+1;
    		}
    	}
    	else if(ratings[j] > ratings[i]) {
    		if(amount[j] <= amount[i]) {
    			amount[j] = amount[i]+1;
    		}
    	}
    }
    amount.forEach((value) => {
    	answer += value;
    });
    return answer;
};

console.log(candy([2,1,3]));
console.log(candy([3,1,4,5,7,2]));
console.log(candy([1,3,4,5,7,2]));
console.log(candy([3,2,1]));