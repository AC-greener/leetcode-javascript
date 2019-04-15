
/*
输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
*/
var restoreIpAddresses = function(s) {
  let result = []  //保存结果

  function search(current, sub) {
    if(current.length === 4 && current.join('') === s) {
      result.push(current.join('.'))
    } else {
      let len = Math.min(3, sub.length)   //ip的每一部分最大长度是3
      let temp
      for(let i = 0; i < len; i++) {
        temp = sub.substr(0,  i + 1)   //拿到IP的前一部分
        if(temp < 256) {
          search(current.concat([temp]), sub.substr(i + 1))   //吧sub的后一部分传给下一次
        }
      }

    }
  }
  search([], s)
  return result
};
restoreIpAddresses("25525511135")

