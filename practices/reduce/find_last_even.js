'use strict';

function find_last_even(collection) {
  //在这里写入代码
  collection=collection.reverse();
  let indexs = collection.findIndex(elem => elem % 2 === 0);
  return collection.length - indexs - 1;
}

module.exports = find_last_even;
