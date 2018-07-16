'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let desc = number_a > number_b ? true : false;
  let left = number_a > number_b ? number_b : number_a;
  let right = number_a > number_b ? number_a :number_b;

  let result = range(right-left+1,left);
  if(desc){
    result = result.reverse();
  }
  return result;
}

function range(size, startAt=0){
  return [...Array(size).keys()].map(i=>i+startAt);
}

module.exports = get_integer_interval;

