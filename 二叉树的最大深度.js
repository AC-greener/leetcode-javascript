/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return helper(root)
};
//写完之后验证只有一个节点的情况
//求出以root为根的所有左子树和右子树的高度
function helper(root) {
  if(root == null) {
    return 0
  }
  //递归的拆解
  let left = helper(root.left)
  let right = helper(root.right)
  return Math.max(left, right) + 1
}

var maxDepth = function(root) {
  let depth = 0
  helper2(root, depth + 1)
  function helper2(node, currentDepth) {
    if(node == null) {
      return
    }
    if(currentDepth > depth) {
      depth = currentDepth
    }
    helper2(node.left, currentDepth + 1)
    helper2(node.right, currentDepth + 1)
  }
  return depth
};
