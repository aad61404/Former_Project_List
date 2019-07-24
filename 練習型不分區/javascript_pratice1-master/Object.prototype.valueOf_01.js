function MyNumberType(n) {
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  
  const object1 = new MyNumberType(4);
  
  console.log(object1 + 3);
  // expected output: 7


  var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
// The properties are overwritten by other objects that have the same properties later in the parameters order.