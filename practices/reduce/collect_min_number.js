'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((res, elem) => res < elem ? res : elem, Number.MAX_VALUE);
}

module.exports = collect_min_number;

