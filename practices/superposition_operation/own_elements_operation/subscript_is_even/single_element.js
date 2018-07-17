'use strict';
var single_element = function (collection) {
  let even_arr = collection.filter((v, k) => k % 2 === 1);

  let repeat_arr = [];
  let result = [];

  even_arr.forEach(elem => {
    if (repeat_arr.includes(elem) === false) {
      if (result.includes(elem)) {
        result.splice(result.indexOf(elem), 1);
        repeat_arr.push(elem);
      }
      else {
        result.push(elem);
      }
    }
  })

  return result;

};
module.exports = single_element;
