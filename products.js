let products = function (arr) {
  const constArr = arr;
  let newArr = arr;
  let returnArr = [];
  for (i = 0; i < arr.length; i++) {
    let hold = newArr[i];
    newArr[i] = 1;
    let product = newArr[0];
    for (k = 0; k < newArr.length; k++) {
      product *= newArr[k];
    }
    newArr[i] = hold;
    returnArr.push(product);
    console.log(newArr);
  }
  return returnArr;
};

console.log(products([1, 3, 9, 4]));
