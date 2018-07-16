'use strict';
var calculate_average = function(collection){
    const even_arr = collection.filter(elem=>elem%2===0);
    const even_sum = even_arr.reduce((sum, elem) => sum += elem, 0);
    return even_sum/even_arr.length;
};
module.exports = calculate_average;
