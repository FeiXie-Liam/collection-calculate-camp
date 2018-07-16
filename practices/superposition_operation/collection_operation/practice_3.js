'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(elem => elem % 2 !== 0).map(elem => elem * 3 + 5).reduce((sum, elem) => sum += elem, 0);

}

module.exports = hybrid_operation_to_uneven;

