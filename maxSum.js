Array.prototype.maxSum = function () {
  let arr1 = this;
  let i;
  let k;
  let n;
  let h;
  for (i = 0; i < arr1.length; i++) {
    if (i === 0) {
      k = arr1[i];
    } else if (k < arr1[i]) {
      k = arr1[i];
    }
  }
  this.splice(this.indexOf(k), 1);
  arr2 = this;
  for (n = 0; n < arr2.length; n++) {
    if (n === 0) {
      h = arr2[n];
    } else if (n < arr2[n]) {
      h = arr2[n];
    }
  }
  return h + k;
};

var main = function () {
  let myArr = new Array();
  myArr.push(7);
  myArr.push(6);
  myArr.push(40);
  myArr.push(5);
  myArr.push(2);
  myArr.push(10);
  return myArr.maxSum();
};
console.log(main());
