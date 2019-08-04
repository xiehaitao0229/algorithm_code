//  215. 数组中的第K个最大元素
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* var findKthLargest = function(nums, k) {
    //  倒序排序
    nums.sort((a,b)=>b-a);
    return nums[k-1]
}; */

//  使用冒泡排序提升性能 只需遍历len-k次就OK
var findKthLargest = function(nums, k) {
    let len = nums.length;
    for(let i=len;i>len-k;i--){
        for (let j = 0; j < i; j++) {
            let tmp = nums[j];
            if (tmp > nums[j + 1]) {
                nums[j] = nums[j+1];
                nums[j + 1] = tmp
            }
        }
    }
    return nums[len-k]
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4))



