// https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var canPlantHere = true;
    for(let i=0; i<flowerbed.length; i++) {
        if(flowerbed[i] === 0 && flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1) {
            flowerbed[i++] = 1;
            n--;
        }
    }
    return n <= 0;
};