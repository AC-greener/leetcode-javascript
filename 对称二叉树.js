var isSymmetric = function (root) {
  return isMirror(root, root)
  function isMirror(p, q) {
    if(!p && !q) return true
    if(!p || !p) return false
    if(p.val === q.val) {
      return isMirror(p.left, q.right) && isMirror(p.right, q.left)
    } else {
      return false
    }
  }
};

