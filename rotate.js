let rotate = function (str1, str2) {
  str1 = str1.split('');
  str2 = str2.split('');
  for (i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) === -1) {
      return false;
    } else {
      str2.splice(str2.indexOf(str1[i]), 1);
    }
  }
  return true;
};
console.log(rotate('amazon', 'azxnam'));
