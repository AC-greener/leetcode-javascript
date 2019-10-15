/*

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

*/
var isPalindrome = function(s) {
  var reg = /[a-zA-Z0-9]/
  // 将字符串转换成小写
  s = s.toLowerCase()
  // 定义两个指针i j
  var i = 0, j = s.length - 1
  // 如果两个指针指向的元素是数字和字母，则进行比较
  while(i < j) {
    while(!reg.test(s[i])) {
      i++
    }
    while(!reg.test(s[j])) {
      j--
    }
    if(s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}
isPalindrome('A man, a plan, a canal: Panama')