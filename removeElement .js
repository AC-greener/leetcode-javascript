/*
 移除元素
给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1:

给定 nums = [3,2,2,3], val = 3,

函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

你不需要考虑数组中超出新长度后面的元素。
*/

//第一种
var removeElement = function(nums, val) {
  var len = nums.length
  for(var i = 0; i < len; ) {
    if(nums[i] === val) {
      nums.splice(i, 1)
      i = 0
    } else {
      i++
    }
  }
  console.log(nums)
  return nums.length
};

//第二种，双指针实现
var removeElement2 = function(nums, val) {
  var len = nums.length,
      i = -1,
      j = 0
  while(j < len) {
    if(nums[j] !== val) {
      i++
      nums[i] = nums[j]
    }
    j++
  }
  console.log('i', i)
  console.log(nums)
  return i+1

}
// removeElement([0,1,2,2,3,0,4,2], 2)
// removeElement([3, 3], 3)
removeElement2([1,0,2,1,3,2], 2)
removeElement2([3, 3], 3)

function Parent() {
  this.name = 'parent'
}

var a = new Parent()

var person = {
  name: 'zhansgan',
  '': 1212,
  self: person
}