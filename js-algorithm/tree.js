/*
二叉搜索树：左节点比父节点小,  右节点比父节点大
 insert(key) ：向树中插入一个新的键。
 search(key) ：在树中查找一个键，如果节点存在，则返回 true ；如果不存在，则返回false 。
 inOrderTraverse ：通过中序遍历方式遍历所有节点。
 preOrderTraverse ：通过先序遍历方式遍历所有节点。
 postOrderTraverse ：通过后序遍历方式遍历所有节点。
 min ：返回树中最小的值/键。
 max ：返回树中最大的值/键。
 remove(key) ：从树中移除某个键
*/
function BinarySearchTree() {
  var Node = function (key) { //{1}
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null; //{2}

  this.insert = function (key) {
    var newNode = new Node(key); //{1}
    if (root === null) { //{2}
      root = newNode;
    } else {
      insertNode(root, newNode); //{3}
    }
  };
  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) { //{4}
      if (node.left === null) { //{5}
        node.left = newNode; //{6}
      } else {
        insertNode(node.left, newNode); //{7}
      }
    } else {
      if (node.right === null) { //{8}
        node.right = newNode; //{9}
      } else {
        insertNode(node.right, newNode); //{10}
      }
    }
  };
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback); //{1}
  };
  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) { //{2}
      inOrderTraverseNode(node.left, callback); //{3}
      callback(node.key); //{4}
      inOrderTraverseNode(node.right, callback); //{5}
    }
  };
  var tree = {
    value: "-",
    left: {
      value: '+',
      left: {
        value: 'a',
      },
      right: {
        value: '*',
        left: {
          value: 'b',
        },
        right: {
          value: 'c',
        }
      }
    },
    right: {
      value: '/',
      left: {
        value: 'd',
      },
      right: {
        value: 'e',
      }
    }
  }
  //先序遍历
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback);
  };

  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key); //{1}
      preOrderTraverseNode(node.left, callback); //{2}
      preOrderTraverseNode(node.right, callback); //{3}
    }
  }

  function preOrder(root, callback) {
    var stack = [],
      node = root
    if (node) {
      stack.push(node)
      while (stack.length !== 0) {
        node = stack.pop()
        callback(node)
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
      }
    }
  }

  function inOrder(root, callback) {
    var stack = [], node = root
    if (node) {
      while (stack.length !== 0 || node) {
        if (node) {
          stack.push(node)
          node = node.left
        } else { //左子树为空，即没有左子树的情况
          node = stack.pop()
          callback(node)
          node = node.right
        }
      }
    }
  }
  /*
  后续非递归遍历的思想是：
  1.从根节点一直往下找左孩子节点，直到最后一个左孩子节点（将路径保存到栈中，但不访问）2.弹出栈访问最后一个左孩子节点
   3.进入最后一个左孩子节点的兄弟节点，如果兄弟节点是叶节点就访问它，否则将该节点重复 1， 2步骤, 直到栈中的元素为空，循环结束。3.访问根节点
   */
  var postOrder = function (root, callback) {
    var node = root
    if (node) { //判断二叉树是否为空
      var stack = [node]; //将二叉树压入栈
      var tmp = null; //定义缓存变量
      while (stack.length !== 0) { //如果栈不为空，则循环遍历
        tmp = stack[stack.length - 1]; //将栈顶的值保存在tmp中
        if (tmp.left && node !== tmp.left && node !== tmp.right) { //如果存在左子树
          stack.push(tmp.left); //将左子树结点压入栈
        } else if (tmp.right && node !== tmp.right) { //如果结点存在右子树
          stack.push(tmp.right); //将右子树压入栈中
        } else {
          callback(stack.pop().value);
          node = tmp;
        }
      }
    }
  }
  var result = inOrder(tree)
  console.log(result)
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback);
  };
  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback); //{1}
      postOrderTraverseNode(node.right, callback); //{2}
      callback(node.key); //{3}
    }
  };

  this.min = function () {
    return minNode(root); //{1}
  };
  var minNode = function (node) {
    if (node) {
      while (node && node.left !== null) { //{2}
        node = node.left; //{3}
      }
      return node.key;
    }
    return null; //{4}
  };

  this.max = function () {
    return maxNode(root);
  };
  var maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) { //{5}
        node = node.right;
      }
      return node.key;
    }
    return null;
  };
  this.search = function (key) {
    return searchNode(root, key); //{1}
  };
  var searchNode = function (node, key) {
    if (node === null) { //{2}
      return false;
    }
    if (key < node.key) { //{3}
      return searchNode(node.left, key); //{4}
    } else if (key > node.key) { //{5}
      return searchNode(node.right, key); //{6}
    } else {
      return true; //{7}
    }
  };
}