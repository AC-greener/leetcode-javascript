// var x = document.getElementsByTagName("*")
var x = document.querySelectorAll("*")
var hash = {}
for(let i = 0; i < x.length; i++) {
  let key = x[i].tagName.toLowerCase()
  if(hash[key]) {
    hash[key]++
  } else {
    hash[key] = 1
  }
}
console.log(hash)