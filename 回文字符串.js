var isPalindrome = function(s) {
    let length = s.length
    if(length === 0 || length === 1) return false
    let left = 0, right = length - 1
    while(left < right) {
      if(s[left++] != s[right--]) {
        return false
      }
    }
    return true
};