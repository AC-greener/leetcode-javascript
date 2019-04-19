const binarySearch = function (nums, target) {
  if(nums === null || nums.length === 0) {
    return -1
  }
  let left = 0,
    right = nums.length - 1
  while(left <= right) {
    let middle = left + Math.floor((right - left) / 2)
    if(target < nums[middle]) {
      right = middle - 1
    } else if(target > nums[middle]) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}

binarySearch([1, 4, 4, 5, 7, 7, 8, 9, 9, 10], 1)