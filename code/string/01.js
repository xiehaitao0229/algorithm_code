//  反转字符串中的单词  ，leedcode 557题

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');  //  变成一个数组
    let result = [];
    for(let i=0,len=arr.length;i<len;i++){
        let item = arr[i];  //  获取每个单词
        item = arr[i].split('').reverse().join('');  //  每个单词反转
        result.push(item)
    }
    return result.join(' ')  // 拼接成原来的字符串
};

