'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let res_arr = [];
  res_arr.push(number);
  while (number > 0) {
    number = number - interval;
    if (Math.abs(number) <= 1e-6) {
      number = 0;
      res_arr.push(0);
    }
    else {
      res_arr.push(parseFloat(number.toPrecision(1)));
    }
  }
  return res_arr;
}

module.exports = spilt_to_zero;
