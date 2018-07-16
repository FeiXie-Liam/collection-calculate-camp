'use strict';

const chars = "abcdefghijklmnopqrstuvwxyz"

var number_map_to_word_over_26 = function(collection){
  return collection.map(convert_number_to_char);
};

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


module.exports = number_map_to_word_over_26;
