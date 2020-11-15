const Array = require('./array');
const main = function () {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  return arr;
};
console.log(main());
//Array { length: 1, _capacity: 3, ptr: 0 }
//Array { length: 6, _capacity: 12, ptr: 3 }
//5 new items added(length: 6)
//after starting capacity of 3 is reached, new capacity is calculated by 3+1*Array.SIZE_RATIO=12 (_capacity: 12)
//Array { length: 3, _capacity: 12, ptr: 3 } 3 Items are removed from the array (length: 6)
//_resize() adds more memory to the end of the array once capacity is reached
