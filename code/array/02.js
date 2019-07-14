//  leetcode  914  卡牌分组
/**
 * 给定一副牌，每张牌上都写着一个整数
 * 此时，你需要选定一个数字X，使我们可以将整副牌按下述规则分成1组活更多组:
 * *  每组都有X张牌
 * *  组内所有的牌上都写着相同的整数
 * 仅当你可选的X >=2时返回 true
 * 示例 1 :
 *      输入: [1,2,3,4,4,3,2,1]
 *      输出: true;
 *      解释:可行的分组是 [1,1],[2,2],[3,3],[4,4]
 * 示例 2 : 
 *      输入: [1,1,1,2,2,2,3,3]
 *      输出: false;
 *      解释:没有满足要求的分组
 */

export default (arr) => {
    // 对这副牌进行排序，升序、降序都可以
    arr.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER
    let dst = [];  // 保存分组后的数组
    let result = true;

    //  进行分组
    for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
        tmp.push(arr[i]);
        for (let j = i + 1; j < len; j++) {
            if (arr[i] == arr[j]) {
                tmp.push(arr[j]);
            } else {
                if (min > tmp.length) {
                    min = tmp.length;
                }
                dst.push([].concat(tmp));
                tmp.length = 0; //  清空临时数组；
                i = j;  //  重点，跳到不满足分组当前位置
                break
            }
        }
    }

    //  检查所有分组的长度都是最小分组长度的整数倍
    dst.every(item => {
        if (item.length % min !== 0) {
            return false
        };
        return true;
    })
    return result
}