'use strict';

function average_uneven(collection) {

  //在这里写入代码
  const odd_arr = collection.filter(elem=>elem%2!==0);
  const odd_sum = odd_arr.reduce((sum, elem) => sum += elem, 0);
  return odd_sum/odd_arr.length;

}

module.exports = average_uneven;
