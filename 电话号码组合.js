function fn(digits) {
  let hash = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let a = []
  digits.split('').forEach(item => {
    a.push(hash[item])
  })
  let letterCombinations = function (arr) {
    let temp = []
    for (let i = 0, iLen = arr[0].length; i < iLen; i++) {
      for (let j = 0, jLen = arr[1].length; j < jLen; j++) {
        temp.push(arr[0][i].concat(arr[1][j]))
      }
    }
    arr.splice(0, 2, temp)
    if(arr.length > 1) {
      letterCombinations(arr)
    }
    return arr
  }
  return letterCombinations(a)
  
}
fn('23')