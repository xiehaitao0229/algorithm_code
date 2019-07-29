//  28. 实现strStr()  简单

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length == 0) return 0;
    if(haystack.indexOf(needle)>-1){
        return haystack.indexOf(needle)
    }
    return -1
};

console.log(strStr('aaaaa', 'bba'))