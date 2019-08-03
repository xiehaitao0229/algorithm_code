//  26. 删除排序数组中的重复项  简单
//  使用双指针的方法解决
//  当遇到旧数组的指针与当前数值指针值不一致时，赋值给新的数组
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==nums[j]){
            j++;
            nums[j] = nums[i]
        }
    }
    return j+1
};

console.log(removeDuplicates([1,1,2]))