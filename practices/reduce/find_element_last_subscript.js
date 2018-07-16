'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  collection=collection.reverse();
  let indexs = collection.findIndex(elem => elem === element);
  return collection.length - indexs - 1;
}

module.exports = calculate_elements_sum;
