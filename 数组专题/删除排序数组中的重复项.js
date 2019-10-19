/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
  函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
  你不需要考虑数组中超出新长度后面的元素。
 */

var removeDuplicates = function(nums) {
  //定义两个指针i j，其中j是快指针，i是慢指针
  //如果number[i] === number[j]，则j++ 跳过重复的项
  //如果number[i] !== number[j]，则i++, 吧number[j]的值放在number[i]处
  //最终i指向的位置+1就是数组的长度
  var length = nums.length, i = 0
  for(var j = 1; j < length; j++) {
    if(nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i+1
};