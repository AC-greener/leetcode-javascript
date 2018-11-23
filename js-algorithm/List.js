/*
append(element) ：向列表尾部添加一个新的项。
insert(position, element) ：向列表的特定位置插入一个新的项。
indexOf(element) ：返回元素在列表中的索引。如果列表中没有该元素则返回 -1 。
removeAt(position) ：从列表的特定位置移除一项。
remove(element) ：从列表中移除一项。
isEmpty() ：如果链表中不包含任何元素，返回 true ，如果链表长度大于0则返回 false 。
size() ：返回链表包含的元素个数。
toString() ：用字符串的形式打印出链表所有元素的值
getHead() : 返回链表的head元素
*/

function LinkedList() {
  var Node = function(element) { 
    this.element = element;
    this.next = null;  //让元素的next指向空
  };
  var length = 0;    //链表的长度
  var head = null;  //头指针
  this.append = function(element){
    var node = new Node(element); 
    var current;
    if(head == null) {
      head = node;
    } else {
      current = head;
      //找到链表的最后一项
      while(current.next) {
        current = current.next;
      }
      //找到最后一项，将其next赋为node，建立链接
      current.next = node;
    }
    console.log('添加元素:',node.element)
    length++;
  };
  this.insert = function(position, element){
    if(position >= 0 && position <= length) {
      var node = new Node(element),
          index = 0,
          current = head,
          previous;
      if(position === 0) {    //在第一个位置添加
        node.next = current.next;
        head= node;
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current
        previous.next = node;
      }
      length++;
      console.log('插入成功')
      return true;
    } else {
      console.log('插入失败')
      return false;
    }
  };
  this.removeAt = function(position){
    //检查position是否越界
    if(position > -1 && position < length) {
      var current = head;
      var previous;
      var index = 0;
      if(position === 0) {
        head = current.next;
      } else {
        
        while(index++ < position) {
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项链接起来：跳过current，从而移除它
        previous.next = current.next;
      }
      length--;
      console.log('移除元素是：', current.element)
      return current.element;
    } else {
      console.log('元素位置不合法！')
      return null
    }
  };
  this.indexOf = function(element){
    var current = head,
        index = 0;
    while(current) {
      if(current.element === element) {
        console.log('元素的位置是：', index)
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };
  this.remove = function(element){
    var index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.isEmpty = function() {
    return length === 0;
  };
  this.size = function() {
    return length;
  };
  this.toString = function(){
    var current = head, 
    string = ''; 
    while (current) {
      string += current.element + ' '; 
      current = current.next; 
    }
    console.log(string)
    return string; 
  };
  this.getHead = function(){
    return head;
  };
 
  }
  

 