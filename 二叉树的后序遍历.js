//非递归，双栈
var postorderTraversal = function (root) {
  if (!root) return []
  let result = []
  let stack1 = [],
    stack2 = []
  stack1.push(root)
  while (stack1.length) {
    let current = stack1.pop()
    stack2.push(current.val)
    if (current.left) {
      stack1.push(current.left)
    }
    if (current.right) {
      stack1.push(current.right)
    }
  }
  while (stack2.length) {
    result.push(stack2.pop())
  }
  return result
};
//非递归 一个栈
var postorderTraversal = function (root) {
  if (!root) return []
  let result = []
  let head = root   //代表最近一次弹出的节点
  let current = null  //  代表当前栈顶节点
  let stack = [head]
  while (stack.length !== 0) {      //如果栈不为空，则循环遍历
    current = stack[stack.length - 1]  //将栈顶的值保存在current中
    if (current.left && head !== current.left && head !== current.right) { //如果存在左子树
      stack.push(current.left)   
    } else if (current.right && head !== current.right) { //如果结点存在右子树
      stack.push(current.right) 
    } else {
      result.push(stack.pop().val)
      head = current
    }
  }
  return result
};