'use strict';

const chars = "abcdefghijklmnopqrstuvwxyz"

function median_to_letter(collection) {

  //在这里写入代码
  let arr = collection.sort((a, b) => a - b);
  let length = arr.length;
  let mid = Math.floor(length / 2);
  let median;
  if (length % 2 === 0) {
    median = (arr[mid - 1] + arr[mid]) / 2;
  }
  else {
    median = arr[mid];
  }
  return convert_number_to_char(Math.ceil(median));
}

function convert_number_to_char(number) {
  let result = ""
  while (number !== 0) {
    let remainder = number % 26;
    number = parseInt(number / 26);

    let letter = chars.charAt(remainder - 1);
    if (remainder === 0) {
      letter = "z"
      number--;
    }
    result = letter + result;
  }
  return result;
}

module.exports = median_to_letter;
