// https://www.hackerrank.com/challenges/lonely-integer/problem

// You will be given an array of integers. All of the integers except one occur twice. That one is unique in the array.
// Given an array of integers, find and print the unique element.

function lonelyinteger(a) {
    // Complete this function
    var map = new Map();
    for(let i=0; i<a.length; i++) {
        map.set(a[i], map.has(a[i]) ? 2 : 1);
    }
    var answer;
    //console.log(map)
    map.forEach((val, key) => {
        if(val === 1) {
           answer = key;
        }
    })
    return answer;
}
