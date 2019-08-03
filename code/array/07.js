//  122. 买卖股票的最佳时机 II
//  思路:只要后一天比前一天大就累加，很简单

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<prices[i+1]){
            sum+=prices[i+1]-prices[i];
        }
    }
    return sum;
};

console.log(maxProfit([7,6,4,3,1]))