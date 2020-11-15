Array.prototype.urlify = function () {
  var i;
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].replace(/\s/g, '%20');
  }
};

var main = function () {
  const arr = new Array();
  arr.push('www.thinkful.com /tauh ida parv een');
  arr.urlify();
  return arr;
};
console.log(main());
