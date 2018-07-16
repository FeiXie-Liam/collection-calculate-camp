'use strict';
var calculate_median = function(collection){
    let arr = collection.filter(elem=>elem%2===0);
    let length = arr.length;
    let mid = Math.floor(length / 2);
    let median;
    if (length % 2 === 0) {
      median =  (arr[mid - 1] + arr[mid]) / 2;
    }
    else {
      median = arr[mid];
    }
    return median;
};
module.exports = calculate_median;
