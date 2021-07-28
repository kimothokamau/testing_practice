function stringLength(string) {
  const len = string.trim().length;
  const str = string;

  if (len > 1 && len <= 10) {
    return str.length;
  }
  else if (str === ''){
    return 'Invalid string/empty';
  }
  else {
    return 'Invalid string/too long';
  }
}

module.exports = stringLength;