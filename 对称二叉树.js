var isSymmetric = function (root) {
  return isMirror(root, root)
  function isMirror(p, q) {
    if(!p && !q) return true   //两个节点都是null
    if(!p || !p) return false  //有一个是null
    if(p.val === q.val) {
      return isMirror(p.left, q.right) && isMirror(p.right, q.left)
    } else {
      return false
    }
  }
};

