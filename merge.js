function merge(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    for (k = 0; k < arr2.length; k++) {
      if (arr2[k] < arr1[i]) {
        arr1.splice(i, 0, arr2.splice(k, 1)[0]);
      }
    }
  }
  return arr1;
}
console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
