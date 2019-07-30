// 35. 搜索插入位置  难度:简单
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)>-1){
        return nums.indexOf(target) //  target在数组的情况
    }else if(nums[nums.length-1]<target){
        return nums.length;  //  target不在数组，并且taregt比数组最大的值还大
    }
    else {
        for(let i=0,len=nums.length;i<len;i++){
            if(target<nums[i]){
                return i
            }
        }
    }
};

console.log(searchInsert([1,3,5,6],7))