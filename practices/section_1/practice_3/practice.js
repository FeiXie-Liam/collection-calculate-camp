function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let sub_arr = object_b['value'];
  return collection_a.filter(elem => sub_arr.includes(elem));
}

module.exports = collect_same_elements;
