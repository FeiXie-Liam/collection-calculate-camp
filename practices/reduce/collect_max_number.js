'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((res, elem) => res > elem ? res : elem, 0);
}

module.exports = collect_max_number;
