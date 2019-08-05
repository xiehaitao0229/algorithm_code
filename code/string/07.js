/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(nums) {
    let arr = String(nums).split('');
    return arr.join('')===arr.reverse().join('');
};

console.log(isPalindrome(-121))   