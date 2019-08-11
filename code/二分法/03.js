/**
 * 349 两个数组的交集 难度：简单
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = [...new Set(nums1)];  //  去重
    nums2 = [...new Set(nums2)];
    let source,ontherSource;
    
    if(nums1.length>=nums2.length){
        source = nums1;
        ontherSource = nums2;
    }else{
        source = nums2;
        ontherSource = nums1;
    }

    const intersectionArr = ontherSource.filter(item=>source.includes(item));
    return intersectionArr
};

console.log(intersection())