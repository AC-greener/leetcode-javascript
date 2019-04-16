var minDepth = function (root) {
  return helper(root)
};
//递归的定义：求以root为根节点的最小深度
function helper(root) {
  //递归的出口
  if (root == null) {
    return 0
  }
  //递归的分解
  let left = helper(root.left)
  let right = helper(root.right)
  return (left && right) ? 1 + Math.min(left, right) : 1 + left + right //如果有一个左子树或者右子树为空，则不记录这棵树的高度
}