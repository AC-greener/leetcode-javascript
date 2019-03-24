  /*
    移动零
  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

  示例:

  输入: [0,1,0,3,12]
  输出: [1,3,12,0,0]
  说明:

  必须在原数组上操作，不能拷贝额外的数组。
  尽量减少操作次数。
  */

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