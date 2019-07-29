//  345. 反转字符串中的元音字母  难度：简单
//  思路  先找出元音字母位置和所有元音字母，插入

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(s.length<2) return s;  //  判断 输入s=""或者s=" "  这种情况
  
    var arr = s.split('');
    var yuan = [];
    var newarr  = arr.map( function(x){
        if(/[aeiouAEIOU]/.test(x)){  //  匹配到元音字母
            yuan.push(x);
            return '-1';
        }else{
            return x;
        }
    });

    for(var i in newarr){
        if(newarr[i] == '-1'){
            newarr[i] = yuan.pop();  //  插入
        }
    }

    return newarr.join('');
    
    
};


console.log(reverseVowels('leecode'))