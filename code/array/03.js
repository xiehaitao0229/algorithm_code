//  种花问题  605题
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let max = 0; // 定义计数器
    for (let i = 0, len = flowerbed.length; i < len; i++) {
        if (flowerbed[i] === 0) {
            if ((i === 0 && flowerbed[1] === 0)||len===1) {  //  左边界问题， 情况 [0]  或者[0,0]等等情况
                max++;
                i += 1;
            } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                max++;
                i += 1;
            } else if (i===len-1 && flowerbed[len - 2] === 0) {  //  右边界问题
                max++;
                i += 1
            }
        }
    }
    console.log(max)
    return max >= n
};

/* console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)) */
console.log(canPlaceFlowers([0], 1))

export default canPlaceFlowers;