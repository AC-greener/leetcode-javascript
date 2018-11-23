var moveZeroes2 = function(nums) {
  var len = nums.length
  var count = 0
  for(var i = 0, j = 0; i < len; i++) {
    if(nums[i] === 0) {
      continue
    } else {
      count++
      nums[j++] = nums[i]
    }
  }
  console.log(count)
  for(var k = count; k < len; k++) {
    nums[k] = 0
  }
  console.log(nums)
  return nums
}
moveZeroes2([0, 1, 3, 0, 5])
moveZeroes2([0,1,0])