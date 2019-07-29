//  14. 最长公共前缀  难度:简单
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let one = strs.length > 0 ? String(strs[0]).split("") : false;  //  拿出数组中其中一个就可以
    let str = "";
    if (!one) { return str; };
    for (let i = 0; i < one.length; i++) {
        let num = 0;
        strs.map(item => {  //  便利每个单词是否和第一个单词有最长公共前缀
            item.charAt(i) == one[i] ? num++ : null
        })
        console.log(num)
        if (num === strs.length) { str = str + one[i] } else { break }
    }
    return str;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))