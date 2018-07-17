'use strict';
var even_group_calculate_average = function (collection) {
  let odd_arr = [];
  for (let i = 1; i < collection.length; i += 2) {
    odd_arr.push(collection[i])
  }
  odd_arr = odd_arr.filter(elem => elem % 2 === 0);
  if (odd_arr.length === 0) {
    return [0];
  }
  let result = [];
  let temp_arr = odd_arr.filter(elem => elem >= 0 && elem <= 9);
  if (temp_arr.length !== 0) {
    result.push(get_average(temp_arr));
  }
  temp_arr = odd_arr.filter(elem => elem >= 10 && elem <= 99);
  if (temp_arr.length !== 0) {
    result.push(get_average(temp_arr));
  }
  temp_arr = odd_arr.filter(elem => elem >= 100 && elem <= 999);
  if (temp_arr.length !== 0) {
    result.push(get_average(temp_arr));
  }
  return result;
};

function get_average(arr) {
  const sum = arr.reduce((sum, elem) => sum += elem, 0);
  return sum / arr.length;
}

module.exports = even_group_calculate_average;
