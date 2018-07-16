'use strict';

const chars = "abcdefghijklmnopqrstuvwxyz"

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let desc = number_a > number_b ? true : false;
  let left = desc ? number_b : number_a;
  let right = desc ? number_a :number_b;

  let arr = range(right-left+1,left);
  let result = arr.map(convert_number_to_char);

  if(desc){
    result = result.reverse();
  }
  return result;
}

function convert_number_to_char(number){
  let result = ""
  while(number!==0){
    let remainder = number % 26;
    number = parseInt(number/26);

    let letter = chars.charAt(remainder-1);
    if(remainder === 0){
      letter = "z"
      number--;
    }
    result =  letter + result;
  }
  return result;
}

function range(size, startAt=0){
  return [...Array(size).keys()].map(i=>i+startAt);
}

module.exports = get_letter_interval_2;

