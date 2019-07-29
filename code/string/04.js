//  58. 最后一个单词的长度  难度：简单
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim();
    if(s.length==0) return 0;
    let strArr = s.split(' ');
    let newArr = [];
    for(let i=0,len=strArr.length;i<len;i++){
        if(strArr[i]!=''){
            newArr.push(strArr[i])
        }
    }
    return newArr[newArr.length-1].length
};

console.log(lengthOfLastWord("a "))