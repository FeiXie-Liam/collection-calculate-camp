'use strict';

const letter_mapper = 'abcdefghij'

function average_to_letter(collection) {
  const sum = collection.reduce((res,elem)=>res+=elem,0);
  const ave = Math.ceil(sum/collection.length);
  return letter_mapper[ave-1];
  //在这里写入代码
}

module.exports = average_to_letter;

