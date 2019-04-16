/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if(!root) return []
  let result = []
  let stack = []
  stack.push(root)
  while(stack.length) {
    let current = stack.pop()
    result.push(current.val)
    if(current.right) {
      stack.push(current.right)
    }
    if(current.left) {
      stack.push(current.left)
    }
  }
  return result
};
