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
  

  this.selectSort = function() {
    var length = array.length,
        minIndex;
    for(var i = 0; i < length-1; i++) {
      minIndex = i
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



function createNonSortedArray(size){ //{6}
  var array = new ArrayList();
  for (var i = size; i> 0; i--){
    array.insert(i);
  }
  return array;
}

var array = createNonSortedArray(5); //{7}
console.log(array.toString()); //{8}
array.selectSort(); //{9}
console.log(array.toString());


