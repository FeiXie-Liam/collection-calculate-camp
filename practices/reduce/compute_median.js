'use strict';

function compute_median(collection) {
  //在这里写入代码
  let arr = collection.sort((a, b) => a - b);
  let length = arr.length;
  let mid = Math.floor(length / 2);
  if (length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  }
  else {
    return arr[mid];
  }
}

module.exports = compute_median;


