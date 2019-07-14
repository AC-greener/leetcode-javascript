// // var twoSum = function (nums, target) {
// //   var length = nums.length
// //   for (let i = 0; i < length - 1; i++) {
// //     for (let j = i + 1; j < length; j++) {
// //       if (nums[i] + nums[j] === target) {
// //         return [i, j]
// //       }
// //     }
// //   }
// //   return null
// // };
// // twoSum([2, 7, 11, 15], 9)
// var twoSum = function (nums, target) {
//   var length = nums.length
//   let left = 0, right = length
  
//   return null
// };
// twoSum([2, 7, 11, 15], 9)








Array.prototype.map = function(fn) {
  let result = []
  for(let i = 0; i < this.length; i++) {
    result.push(fn(i, this[i], this))
  }
  return result
}
// let str = 'http://www.baidu.com?id=3&username=xyz'

// {id:3,username:'xyz'}

function fn(str) {
  let index = -1
  let subStr = ''
  let arr = []
  let result = {}
  index = str.firstIndexOf('?')
  subStr = str.slice(index)
  arr = subStr.split('&')
  arr.forEach(item => {
    let key = '', value = ''
    let index = item.firstIndexOf('&')
    key = item.slice(0, index)
    value = item.slice(index + 1)
    result[key] = value
  })
  return result
}





















