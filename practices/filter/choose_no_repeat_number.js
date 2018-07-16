'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  let result_list = [];
  collection.forEach(elem => {
    if(result_list.includes(elem) == false){
      result_list.push(elem);
    }
  });
  return result_list;
}

module.exports = choose_no_repeat_number;
