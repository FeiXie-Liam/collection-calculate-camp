'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let flatten_arr = [].concat.apply([], collection);
  let result_arr = []
  flatten_arr.forEach(elem=>{
    if(result_arr.includes(elem) === false){
      result_arr.push(elem)
    }
  })
  return result_arr;
}

module.exports = double_to_one;
