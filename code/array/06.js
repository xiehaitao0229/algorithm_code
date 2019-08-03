//  121. 买卖股票的最佳时机

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length==0) return 0
    let min = prices[0];
    let res = 0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min){
            min = prices[i];
            continue;
        }

        if(res<prices[i]-min){
            res = prices[i]-min;
            continue;
        }
    }
    return res;
};

console.log(maxProfit([7,6,4,3,1]))