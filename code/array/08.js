//  122. 买卖股票的最佳时机 III
//  思路:只要后一天比前一天大就累加，很简单

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length==0) return 0;
    let sum = 0;
    let sumArr = [];
    for(let i=0;i<prices.length;i++){
        if(prices[i]<prices[i+1]){
            let total = prices[i+1]-prices[i]
            sumArr.push(total)
            console.log(total,111)
            sum+=total;
        }
    }
    sumArr.sort((a,b)=>a-b);
    let result = sumArr.length>0 ?sumArr[sumArr.length-1]+sumArr[sumArr.length-2]:0
    return result;
};

console.log(maxProfit([1,2,3,4,5]))