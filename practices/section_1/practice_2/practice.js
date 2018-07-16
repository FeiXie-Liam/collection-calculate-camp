function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  collection_b = [].concat.apply([],collection_b);
  return collection_a.filter(elem => collection_b.includes(elem));
}

module.exports = collect_same_elements;
