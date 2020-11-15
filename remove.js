let removeChars = function (str, chars) {
  let char;
  for (i = 0; i < chars.length; i++) {
    char = chars[i];
    let regex = new RegExp(`${char}`, 'g');
    str = str.replace(regex, '');
  }
  return str;
};

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
