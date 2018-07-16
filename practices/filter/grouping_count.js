'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let hist = {};
  collection.forEach(elem=>{
    if (elem in hist) {
      hist[elem]++;
    } else {
      hist[elem]=1;
    }
  })
  return hist;
}


module.exports = grouping_count;
