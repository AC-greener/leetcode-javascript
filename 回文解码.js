/*
现在有一个字符串，你要对这个字符串进行 n 次操作，每次操作给出两个数字：
(p, l) 表示当前字符串中从下标为 p 的字符开始的长度为 l 的一个子串。你要将这个子串左右翻转后插在这个子串原来位置的正后方，
求最后得到的字符串是什么。字符串的下标是从 0 开始的，你可以从样例中得到更多信息。
*/

function resolve(str, p ,l) {
  let result = ''
  l = p + l
  let str2 = str.slice(p, l).split('').reverse().join('')
  result = str.concat(str2)
  return result
}