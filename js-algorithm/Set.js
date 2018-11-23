/*

add(value) ：向集合添加一个新的项。
delete(value) ：从集合移除一个值。
has(value) ：如果值在集合中，返回 true ，否则返回 false 。
clear() ：移除集合中的所有项。
size() ：返回集合所包含元素的数量。与数组的 length 属性类似。
values() ：返回一个包含集合中所有值的数组。

*/

function Set() {
  let items = {};
  this.has = function(value) {
    return items.hasOwnProperty(value);
  };
  
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value; 
      return true;
    }
    return false;
  };

  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value]; 
      return true;
    }
      return false;
  };
  this.clear = function() {
    items = {}; 
  };

  this.size = function() {
    return Object.keys(items).length; 
  };

  // this.values = function() {
  //   let values = [];
  //   for (let i=0, keys=Object.keys(items); i<keys.length; i++) {
  //     values.push(items[keys[i]]);
  //   }
  //   return values;
  // };

  this.valuesLegacy = function(){
    let values = [];
    for(let key in items) { 
      if(items.hasOwnProperty(key)) { 
        values.push(items[key]);
      }
    }
      return values;
    };
}