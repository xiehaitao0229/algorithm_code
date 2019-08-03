//  53. 最大子序和   第一种方法：时间O(N^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var maxSubArray = function(nums) {
    let max = nums[0];
    for(let i=0;i<nums.length;i++){
        let sum = 0;
        for(let j=i;j<nums.length;j++){
            sum+=nums[j];
            if(sum>max){
                max = sum;
            }
        }
    }
    return max;
}; */


//  O(N)解法
var maxSubArray = function(nums) {
   let maxSum,maxHere;
   maxSum = maxHere = nums[0];
   for(let i=1;i<nums.length;i++){
       if(maxHere<=0){
           maxHere = nums[i]
       }else{
           maxHere+=nums[i];
       }
       if(maxHere>maxSum){
           maxSum = maxHere;
       }
   }
   return maxSum;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))