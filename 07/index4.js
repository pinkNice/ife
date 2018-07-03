/*
 实现一个字符串头尾去除空格的函数
 注意需要去除的空格，包括全角、半角空格
 暂时不需要学习和使用正则表达式的方式
 */
function diyTrim(str) {
    var result = "";
    var space = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';

    for (i = 0; i < str.length; i++) {
        if (space.indexOf(str.charAt(i)) === -1) {
            result = str.substring(i);
            break;
        }
    }
    for (i = result.length - 1; i >= 0; i--) {
        if (space.indexOf(result.charAt(i)) === -1) {
            result = result.substring(0, i + 1);
            break;
        }
    }

    result = space.indexOf(result.charAt(0)) === -1 ? result : '';
    return result;
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
// console.log(diyTrim('    ff   daf    ')); // ->ffdaf
// console.log(diyTrim('1    ')); // ->1
// console.log(diyTrim('　　f')); // ->f
// console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
// console.log(diyTrim(' ')); // ->
// console.log(diyTrim('　')); // ->
// console.log(diyTrim('')); // ->

/*
 去掉字符串str中，连续重复的地方
 */
function removeRepetition(str) {
    var result = "";
    for(var i = 0; i < str.length;i++){
        if(result.indexOf(str[i]) === -1){
            result += str[i];
        }
    }
    return result;  
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc