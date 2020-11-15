Array.prototype.filters = function () {
  let i;
  for (i = 0; i < this.length; i++) {
    if (this[i] < 5) {
      this.splice(i, 1);
      i = i - 1;
    }
  }
  return this;
};

var main = function () {
  let myArr = new Array();
  myArr.push(7);
  myArr.push(6);
  myArr.push(4);
  myArr.push(5);
  myArr.push(2);
  myArr.push(9);
  return myArr.filters();
};
console.log(main());
