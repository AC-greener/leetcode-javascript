function sum(a, b) {
  return a + b;
}

// function reverse(str) {
//   var arr = str.split(' ')
//   arr = arr.map(item => {
//     return item = item.split('').reverse().join('')
//   }).join(' ')
  
//   console.log(arr)
//   return arr
// }
function reverse(str) {
  var arr = str.split(/\s/g)
  arr = arr.map(item => {
    return item = item.split('').reverse().join('')
  }).join(' ')
  return arr
}

function x(str) {
  var hash = {}
  
}
export { sum ,reverse, }