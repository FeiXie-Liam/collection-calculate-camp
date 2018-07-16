'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  return collection.map(elem => elem * 3 + 2).reduce((sum, elem) => sum += elem, 0);
}

module.exports = hybrid_operation;

