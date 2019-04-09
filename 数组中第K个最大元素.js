var findKthLargest = function(nums, k) {
    nums = quickSort(nums, 0, nums.length-1)
    console.log(nums[k-1])
    return nums[k-1]
};
function quickSort(arr, left, right) {
  let index
  index = partition(arr, left, right)
  if(left < index-1) {
    quickSort(arr, left, index-1)
  }
  if(index < right) {
    quickSort(arr, index, right)
  }
  return arr
}

function partition(arr, left, right) {
  let point = arr[Math.floor((left + right) / 2)]
  let i = left, j = right
  while(i <= j) {
    while(arr[i] > point) {
      i++
    }
    while(arr[j] < point) {
      j--
    }
    if(i <= j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }
  return i
}
findKthLargest([3,2,1,5,6,4], 2)