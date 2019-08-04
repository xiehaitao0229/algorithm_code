//  41. 缺失的第一个正数
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var firstMissingPositive = function (nums) {
    let index;
    let len = nums.length;
    nums.sort((a, b) => a - b);
    if (nums.length == 0) return 1 ;  //  case: nums=[]  返回 1
    if (nums[len - 1] <= 0) return 1; //  case: nums=[-1,-2]或者nums=[-1]  返回 1
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            index = i
            break;
        }
    }

    for (let j = index; j < len; j++) {
        if (nums[index] >1) {
            return 1  
        } else if (nums[j + 1] - nums[j] > 1) {
            return nums[j] + 1  //  case: nums=[3,4,-1,1]  返回 2
        }
    }

    return nums[len-1]+1  //  case: nums=[1,2,0]  返回 3
}; */

//  利用选择排序来优化性能
var firstMissingPositive = function (nums) {
    let arr = nums.filter(item => item > 0)
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                let tmp = min;
                min = arr[j];
                arr[j] = tmp;
            }
        }
        arr[i] = min;
        if(i>0){
            if(arr[i]-arr[i-1]>1){
                return arr[i-1]+1
            }
        }else{
            if(min!==1){
                return 1
            }
        }
    }
    return arr.length?arr.pop()+1:1
};

console.log(firstMissingPositive([7,8,9,11,12]), 111)
