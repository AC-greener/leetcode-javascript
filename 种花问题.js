var canPlaceFlowers = function(flowerbed, n) {
  var count = 0
  for(var i = 0; i < flowerbed.length; i++) {
    if(flowerbed[i-1] !== 1 && flowerbed[i] === 0 && flowerbed[i+1] !== 1) {
      flowerbed[i] = 1
      count++
    }
  }
  return count >= n
};
var flowerbed = [1,0,0,0,1], n = 2
var flowerbed = [1,0,0,0,1,0,0], n = 2
var flowerbed = [0,0,0,0,1,0,0,0,1,0,0], n = 2
canPlaceFlowers(flowerbed, n)