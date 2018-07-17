const SPCE_SYMBOL = '-';
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  grouped_input = group_input(collection_a);

  result = change_format(grouped_input);

  for (let i = 0; i < result.length; ++i) {
    if (object_b.value.includes(result[i].key)) {
      result[i].count -= Math.floor(result[i].count/3);
    }
  }
  return result;
}

function change_format(hist){
  keys_arr = Object.keys(hist);
  values_arr = Object.values(hist);

  let result = [];
  for(let i = 0;i<keys_arr.length;++i){
    let dict = {};
    dict['key'] = keys_arr[i];
    dict['count'] = values_arr[i];
    result.push(dict)
  }
  return result;
}

function group_input(inputs) {
  let grouped_list = new Map();
  inputs.forEach(elem => {
      contain_spec_symbol(elem) ?
          grouped_list = push_special_input(grouped_list, elem) :
          grouped_list = push_general_input(grouped_list, elem);
  })
  return grouped_list;
}

function contain_spec_symbol(elem) {
  return elem.includes(SPCE_SYMBOL) === true;
}

function push_special_input(lst, elem) {
  let refine_elem = elem.split(SPCE_SYMBOL);
  let times = parseInt(refine_elem[1], 10);
  lst = push_general_input(lst, refine_elem[0], times);
  return lst;
}

function push_general_input(grouped_list, elem, times = 1) {
  elem in grouped_list ? grouped_list[elem] += times : grouped_list[elem] = times;
  return grouped_list;
}

module.exports = create_updated_collection;
