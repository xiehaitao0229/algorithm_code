/* export default (str) => {
    // 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
    let arr = str.split(' ')
    // 对数组进行遍历，然后每个元素进行反转
    let result = arr.map(item => {
        return item.split('').reverse().join('')
    })
    return result.join(' ')
} */

/* export default (str) => {
    // 1.字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
    // 2.对数组进行遍历，然后每个元素进行反转
    return str.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
} */

//  使用正则方式解题
/* export default (str) => {
    // 1.字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
    // 2.对数组进行遍历，然后每个元素进行反转  
    return str.split(/\s/g).map(item => {  //  /\s/g  == 空格
        return item.split('').reverse().join('')
    }).join(' ')
} */

//  使用正则方式解题
export default (str) => {
    // 1.字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
    // 2.对数组进行遍历，然后每个元素进行反转  
    return str.match(/[\w']+/g).map(item => {  //  https://blog.csdn.net/sinat_34719507/article/details/54434312
        return item.split('').reverse().join('')
    }).join(' ')
}
