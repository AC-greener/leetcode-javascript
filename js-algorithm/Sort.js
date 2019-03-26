function ArrayList(){
  var array = []; 

  this.insert = function(item){ 
    console.log(item)
    array.push(item);
  };

  this.toString= function(){ //{3}
    return array.join();
  };

  var swap = function(array, index1, index2){
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
  //冒泡排序，主要思想，从数组的第一项开始依次与下一项作比较，如果后者大于前者，则交换两元素位置
  this.bubbleSort = function() {
    var length = array.length;
    for(var i = 0; i < length; i++) {
      for(var j = 0; j < length-1; j++) {
        if(array[j] > array[j+1]) {
          swap(array, j, j+1);
        }
      }
    }
  }

  //优化冒泡排序
  this.modifiedBubbleSort = function() {
    var length = array.length;
    for (var i=0; i<length; i++){
      for (var j=0; j<length-1-i; j++ ){ //{1}
        if (array[j] > array[j+1]){
        swap(j, j+1);
      }
      }
    }
  };
  
  //选择排序，每次寻找数组中最小或最大的数，然后数组的第一项交换
  this.selectSort = function() {
    var length = array.length,
        minIndex;  
    for(var i = 0; i < length-1; i++) {
      minIndex = i //假设每次迭代的第一个元素最小
      for(var j = i; j < length; j++) {
        if(array[minIndex] > array[j]) {
          minIndex = j;
        }
      }
      if(minIndex !== i) {
        swap(array, minIndex, i)
      }
    }
  }

  //计数排序，用一个hash来存储排序的结果，吧数组出现的数字作为hash的key，吧该数字出现的次数记为value
  var countSort = function(arr) {
    var i = 0,
        length = arr.length,
        hash = {}
    while(i < length) {
      if(hash[arr[i]] === undefined) {
        hash[arr[i]] = 1
      } else {
        hash[arr[i]]++
      }
      i++
    }
    console.log(hash)
    return hash
  }
  countSort([1,2,2,6,1,7,2])
 
}
var swap = function(array, index1, index2){
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

 //快速排序
 function quickSort(array, left, right) {
  var index
  
  if(array.length > 1) {
    //index 将数组划分成较小值的数组和较大值的数组
    index = partition(array, left, right) 
    if(left < index-1) {
      quickSort(array, left, index-1)
    }
    if(index < right) {
      quickSort(array, index, right)
    }
  }
}
function partition(array, left, right) {
  let point = array[Math.floor((right + left) / 2)]    //取数组的中间值
  let i = left, j = right
  while(i <= j) {
    while(array[i] < point) {
      i++
    }
    while(array[j] > point) {
      j--
    }
    if(i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }
  return i
}
var xxx = [2,3,1,0,9,9,8]

quickSort(xxx, 0, 6)

console.log(xxx)

