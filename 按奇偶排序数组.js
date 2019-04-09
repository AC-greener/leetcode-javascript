var sortArrayByParityII = function (arr) {
  arr = quickSort(arr, 0, arr.length-1)
  let result = [], m = 0, n = 1
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {  //偶数
      result[m] = arr[i]
      m += 2
    } else { //奇数
      result[n] = arr[i]
      n += 2
    }
  }
  return result
}

function quickSort(array, left, right) {
  let index
  index = partition(array, left, right)
  if(left < index-1) {
    quickSort(array, left, index-1)
  }
  if(index < right) {
    quickSort(array, index, right)
  }
  return array
}

function partition(array, left, right) {
  let point = array[Math.floor((right + left) / 2)]
  let i = left, j = right
  while(i <= j) {
    while(array[i] < point) {
      i++
    }
    while(array[j] > point) {
      j--
    }
    if(i <= j) {
      let temp
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
      i++
      j--
    }
  }
  return i
}
// var xxx = [2, 3, 1, 0, 9, 9, 8]

// quickSort(xxx, 0, 6)
sortArrayByParityII([4,2,5,7])