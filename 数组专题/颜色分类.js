/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var left = 0, current = 0, right = nums.length - 1
  while(current <= right) {
    if(nums[current] === 2) {
      swap(nums, current, right)
      right--
    } else if(nums[current] === 0) {
      swap(nums, left, current)
      current++
      left++
    } else if(nums[current] === 1) {
      current++
    }
  }
};
function swap(nums, a, b) {
  var temp = nums[a]
  nums[a] = nums[b]
  nums[b] = temp
}
sortColors([1,1,0,0,2,2])