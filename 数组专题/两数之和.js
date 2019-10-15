/*
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
*/
//解法1
// var twoSum = function(numbers, target) {
//   var length = numbers.length
//   for(var i = 0; i < length; i++) {
//     for(var j = i + 1; j < length; j++) {
//       if(numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1]
//       }
//     }
//   }
// }
// //解法2  对撞指针
// var twoSum = function(numbers, target) {
//   var length = numbers.length,
//     i = 0,
//     j = length - 1
//   while(i < j) {
//     if(numbers[i] + numbers[j] === target) {
//       return [i + 1, j + 1]
//     } else if(numbers[i] + numbers[j] > target) {
//       j--
//     } else {
//       i++
//     }
//   }
// }
//解法3  二分查找
var twoSum = function(numbers, target) {
  for(var i = 0; i < numbers.length - 1; i++) {
    var index = binarySearch(target - numbers[i], numbers, i + 1)
    if(index > 0) {
      return [i + 1, index + 1]
    }
  }
}
function binarySearch(target, arr, left) {
  var right = arr.length - 1
  while(left < right) {
    debugger
    var mid = Math.floor((left + right) / 2)
    if(arr[mid] === target) {
      return mid
    } else if(arr[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  if(arr[left] === target) {
    return left
  } else {
    return -1
  }
}
twoSum([3,24,50,79,88,150,345], 6)

