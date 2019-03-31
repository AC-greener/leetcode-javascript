var maximumGap = function(nums) {
  if(nums.length < 2) return 0
  nums = sort(nums)
  var max = Number.MIN_SAFE_INTEGER
  for(let i = 0; i < nums.length; i++) {
    let temp = nums[i+1] - nums[i]
    if(temp > max) {
      max = temp
    }
  }
  return max
};

function sort(arr) {
  for(let i = 0; i < arr.length-1; i++) {
    for(let j = 0; j < arr.length-1-i; j++) {
      temp = arr[j]
      if(temp > arr[j+1]) {
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}