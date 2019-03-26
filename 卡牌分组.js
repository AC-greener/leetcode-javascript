var hasGroupsSizeX = function(deck) {
  let hash = {}, minCount = Number.MAX_SAFE_INTEGER, result = true
  deck.forEach(item => {
    if(hash[item]) {
      hash[item]++
    } else {
      hash[item] = 1
    }
  })
  let keys = Object.keys(hash)
  keys.forEach(item => {
    if(hash[item] < minCount) {
      minCount = hash[item]
    }
  })
  keys.forEach(item => {
    if(hash[item] % minCount != 0) {
      result = false
      return 
    }
  })
  if(minCount < 2) {
    result = false
  }  
  console.log(result)    
};
hasGroupsSizeX([1,1,2,2,2,2,3,3])
hasGroupsSizeX([1,1,1,2,2,2,3,3])
hasGroupsSizeX([1])
hasGroupsSizeX([1,1])
hasGroupsSizeX([1,1,2,2,2,2])
hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2])