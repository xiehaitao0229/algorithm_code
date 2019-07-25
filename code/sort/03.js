//  leecode 164题. 最大间距  等级：困难

/**
 * @param {number[]} nums
 * @return {number}
 */
/* export default (nums) =>{
    if (nums.length < 2) return 0;
    let sortArr = nums.sort((a,b)=>a-b);
    let maxDiff = Math.abs(sortArr[0] - sortArr[1])
    for (let i = 1, len = sortArr.length ; i < len; i++) {
        let diff = Math.abs(sortArr[i] - sortArr[i + 1])
        if (maxDiff < diff) {
            maxDiff = diff;
        }
    }
    return maxDiff
}; */

export default (arr) => {
    if (arr.length < 2) return 0;
    let max = 0;
    let maxDiff;
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            let tmp = arr[j];
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp
            }
        }
        if (i < len) {
            maxDiff = Math.abs(arr[i + 1] - arr[i]);  //  拿到已经在末尾排好序的差值
            if (maxDiff > max) {
                max = maxDiff
            }
        }
    }
    return Math.max(max, arr[1] - arr[0])
}
