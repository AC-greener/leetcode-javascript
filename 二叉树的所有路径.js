//1,求以root为根节点的所有path
var binaryTreePaths = function(root) {
  let paths = []

  //递归的出口
  if(root == null) {
    return paths
  }

  if(root.left == null && root.right == null) {
    paths.push('' + root.val)
    return paths
  }

  //2,递归拆解
  let leftPath = binaryTreePaths(root.left)
  let rightPath = binaryTreePaths(root.right)

  for(let path of leftPath) {
    paths.push(`${root.val}->${path}`)   //'2->5'
  }
  for(let path of rightPath) {
    paths.push(`${root.val}->${path}`)  //'3'
  }

  return paths
};

