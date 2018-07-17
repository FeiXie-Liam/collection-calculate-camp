'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  let small_cnt = Math.floor(collection.length / 3);
  let sorted_arr = collection.sort((a, b) => a - b);
  let result_arr = [];
  for (let i = 0; i < collection.length; ++i) {
    if (i < small_cnt * 3) {
      if ((i + 1) % 3 !== 0) {
        result_arr.push(sorted_arr[i + 1]);
      }
      else {
        result_arr.push(sorted_arr[i - 2]);
      }
    }
    else {
      result_arr.push(sorted_arr[i]);
    }

  }
  return result_arr;
}
module.exports = rank_by_two_large_one_small;
