/**
 * 682. 棒球比赛  难度：简单
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (arr) {
    //  使用数组实现堆栈结构
    let result = [];
    //  上一轮的数据
    let pre1;
    //  上上轮的数据
    let pre2;
    arr.forEach(item => {
        switch (item) {
            case 'C':
                if(result.length){
                    result.pop();
                }
                break;
            case 'D':
                pre1 = result.pop();
                result.push(pre1,pre1*2)
                break;
            case '+':
                pre1 = result.pop();
                pre2 = result.pop();
                result.push(pre2,pre1,pre1+pre2)
                break;
            default:
                result.push(item*1)
                break;
        }
    })
    return result.reduce((total,sum)=>total+sum)
};

console.log(calPoints(["5","2","C","D","+"]))