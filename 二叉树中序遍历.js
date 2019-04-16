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
function TreeNode(val) {
  this.root = val
  this.left = this.right = null
}
var inorderTraversal = function(root) {
   let result = []
   let stack = []
   while(root !== null) {
    stack.push(root)
    root = root.left
   }
   while(stack.length) {
     let current = stack.pop()
     result.push(current.val)
     current = current.right
     while(current) {
       stack.push(current)
       current = current.left
     }
   }
   return result
};