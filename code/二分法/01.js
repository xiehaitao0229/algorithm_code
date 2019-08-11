/**
 * 278 第一个错误的版本    难度：简单
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    return function (n) {
        let i = 0, j = n;
        while (i <= j) {
            let mid = parseInt((j-i)/2)+i;
            if (isBadVersion(mid)) {
                j = mid - 1;
            } else {
                i = mid + 1
            }
        }
        return i;
    };
};