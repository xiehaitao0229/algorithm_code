//  leecode  824. 山羊拉丁文

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    let result = []
    //  获取一个单词数组
    let words = S.split(' ');
    let yuanyinMap = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];  // 元音字母的列表
    let tmp = ''  //  用来累加需要加多少个a字母的变量
    for (let i = 0, len = words.length; i < len; i++) {
      tmp += 'a';
      let word = words[i]; //  获取每个单词
      if (yuanyinMap.includes(word.substring(0, 1))) {   //  元音字母
        word += 'ma' + tmp;
        result.push(word)
      } else {  //  截取从第二个字母开始的字符串
        word = word.substring(1) + word.substring(0, 1) + 'ma' + tmp;
        result.push(word);
      }
    }
    return result.join(' ')
  };
  
  console.log(toGoatLatin('I speak Goat Latin'))