/*
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

输入: "hello"
输出: "holle"
示例 2:

输入: "leetcode"
输出: "leotcede"
说明:
元音字母不包含字母"y"。
*/

var reverseVowels = function(s) {
  s = s.split('')
  var x  = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  var i = 0, j = s.length - 1
  while(i < j) {
    while(!x.includes(s[i]) && i < j) {
      i++
    }
    while(!x.includes(s[j]) && j > 0) {
      j--
    }
    if(s[i] !== s[j] && i < j) {
      var temp = s[i]
      s[i] = s[j]
      s[j] = temp
    }
    i++
    j--
  }
  return s.join('')
}