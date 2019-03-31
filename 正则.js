function x(str) {
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}
//按奇偶排序， 数组中第k个最大元素，最大间距，缺失的第一个整数
