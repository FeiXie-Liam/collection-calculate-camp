'use strict';

const letter_mapper = 'abcdefghij'
function even_to_letter(collection) {

  //在这里写入代码
  return collection.filter(elem=>elem%2===0).map(elem=>letter_mapper.charAt(elem - 1));
}

module.exports = even_to_letter;
