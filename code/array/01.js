//  leecode 17. 电话号码的字母组合

export default (str) => {
    // 建立电话号码键盘映射
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
    let num = str.split('');
    // 保存键盘映射后的字母内容，
    let code = [];  //     如 23=>['abc','def']
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item])
        }
    });

    //  两两组合
    let compose = (arr) => {
        // 临时变量用来保存前两个组合的结果
        let tmp = [];
        // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
        for (let i = 0, len = arr[0].length; i < len; i++) {
            for (let j = 0, len = arr[1].length; j < len; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        //   此时tmp = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

        arr.splice(0, 2, tmp);  //  移除前两项插入组合后的数组

        if (arr.length > 1) {
            //  递归下去
          compose(arr);
        } else {
            return tmp;
        }
        return arr[0];  //  当用户输入一个数字的时候直接返回第一个
    }

    return compose(code)
}

