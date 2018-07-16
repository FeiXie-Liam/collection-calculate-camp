'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter(elem => elem%3===0)
  //在这里写入代码
}

module.exports = choose_multiples_of_three;
