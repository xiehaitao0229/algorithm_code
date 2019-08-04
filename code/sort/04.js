//  922. 按奇偶排序数组 II
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(arr) {
    //  先对数组进行排序
    arr.sort((a,b)=>a-b)
    let res = [];
    let odd = 1 ; //  奇数下标
    let even = 0; //  偶数下标
    arr.forEach(item => {
        if(item%2==1){
            res[odd] = item;
            odd+=2;
        }else{
            res[even] = item;
            even+=2
        }
    });
    return res
};

console.log(sortArrayByParityII([4,2,5,7]))