'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(elem => is_divisible_by_array(elem, collection_b))
}

function is_divisible_by_array(num, arr){
  for(let i = 0;i<arr.length;++i){
    if(is_divisible(num, arr[i])){
      return true;
    }
  }
  return false;
}

function is_divisible(num, divisor){
  return num%divisor === 0;
}

module.exports = choose_divisible_integer;
