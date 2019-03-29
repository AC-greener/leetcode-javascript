var grayCode = function(n) {
   function getCode(n) {
    if(n === 0) {
      return ['0']
    }
    if(n === 1) {
      return ['0', '1']
    }
    let prev = getCode(n -1)
    let result = [], max = Math.pow(2, n) - 1

    for(let i = 0; i < prev.length; i++) {
      result[i] = `0${prev[i]}`
      result[max-i] = `1${prev[i]}`
    }
    return result
   }
   var code = getCode(n)
   code = code.map(item => {
     return parseInt(item, 2)
   })
   console.log(code)
   return code
};
grayCode(11)