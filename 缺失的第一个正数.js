var firstMissingPositive = function (nums) {
  nums = selectSort(nums.filter(item => item >= 0)) //吧小于零的数过滤掉，并排序
  if (!nums.length) return 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] !== 1 && nums[0] !== 0) {
      return 1
    }
    if (nums[i] !== nums[i+1] && nums[i] + 1 !== nums[i + 1]) {  //两个相邻的数不相等且前者加一之后不等于后者
      return nums[i] + 1
    }
  }
};

function selectSort(arr) {
  let len = arr.length,
    minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      let temp = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = temp
    }
  }
  return arr
}
firstMissingPositive([0, 2, 2, 1, 1])