/*
 push(element(s)) ：添加一个（或几个）新元素到栈顶。
 pop() ：移除栈顶的元素，同时返回被移除的元素。
 peek() ：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
 isEmpty() ：如果栈里没有任何元素就返回 true ，否则返回 false 。
 clear() ：移除栈里的所有元素。
 size() ：返回栈里的元素个数。这个方法和数组的 length 属性很类似。

*/

function Stack() {
  let items = [],
  this.push = function(element) {
    items.push(element)
  }

  this.pop = function(element) {
    return items.pop(element);
  }

  this.peek = function() {
    return items[items.length-1];
  }

  this.isEmpty = function() {
    return items.length == 0;
  }  

  this.clear = function() {
    items = [];
  }

  this.size = function() {
    return items.length;
  }
}


//Example 
function divideBy2(Number) {
  let stack = new Stack(),
      rem,
      binaryString = '';

  while(Number > 0) {
    rem = Number % 2;
    stack.push(rem);
    Number = Math.floor(Number / 2);
  }

  while(!stack.isEmpty()) {
    binaryString += stack.pop();
  }
  return binaryString;
}