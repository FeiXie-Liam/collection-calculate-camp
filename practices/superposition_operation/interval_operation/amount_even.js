'use strict';

function amount_even(collection) {

  //在这里写入代码
  return collection.filter(elem=>elem%2===0).reduce((sum, elem) => sum += elem, 0);
}

module.exports = amount_even;
