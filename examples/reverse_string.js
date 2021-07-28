function reverseString(str){
  let temp_string = str;
  if(str !== ''){
    return temp_string.split("").reverse("").join("");
  } {
      return 'String can\'t be blank'
  }
}

module.exports = reverseString