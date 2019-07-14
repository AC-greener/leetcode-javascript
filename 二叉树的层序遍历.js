/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  //创建队列并把起始节点入队(第一层)
  let queue = [],
    result = []
  queue.push(root)
  while (queue.length !== 0) {
    //从上一层节点拓展到下一层
    let level = [] //保存当前层过结果
    let size = queue.length //当前层的size
    for (let i = 0; i < size; i++) {
      node = queue.shift()
      level.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    result.push(level)
  }
  return result
};


// var levelOrder = function(root) {
//   if(root === null || root.length === 0){
//     return [];
//   }
//     let index = 0
//     //创建队列并把起始节点入队(第一层)
//     let queue = [], result = []
//     queue.push(root[index])
//     while(queue.length !== 0) {
//       //从上一层节点拓展到下一层
//       let level = []  //保存当前层过结果
//       let size = queue.length
//       for(let i = 0; i < size; i++) {
//         let head = queue.shift()
//         level.push(head)
//         if(root[++index]) {
//           queue.push(root[index])
//         }
//         if(root[++index]) {
//           queue.push(root[index])
//         }
//       }
//       result.push(level)
//     }
//     console.log(result)
//     return result
// };
// levelOrder([3,9,20,null,null,15,7])