const SPCE_SYMBOL = ['-', ':', '['];

function count_same_elements(collection) {
  let result = group_input(collection);

  result = change_format(result);
  return result;

}

function change_format(hist) {
  keys_arr = Object.keys(hist);
  values_arr = Object.values(hist);

  let result = [];
  for (let i = 0; i < keys_arr.length; ++i) {
    let dict = {};
    dict['name'] = keys_arr[i];
    dict['summary'] = values_arr[i];
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
  let result;
  SPCE_SYMBOL.findIndex(symbol => elem.includes(symbol)) === -1 ? result = false : result = true;
  return result;
}

function push_special_input(lst, elem) {
  let spce_symbol = SPCE_SYMBOL.find(symbol => elem.includes(symbol));
  let refine_elem = elem.split(spce_symbol);
  let times;
  if (spce_symbol === '[') {
    let splited = refine_elem[1].split(']');
    times = parseInt(splited[0], 10);
  }
  else {
    times = parseInt(refine_elem[1], 10);
  }
  lst = push_general_input(lst, refine_elem[0], times);
  return lst;
}

function push_general_input(grouped_list, elem, times = 1) {
  elem in grouped_list ? grouped_list[elem] += times : grouped_list[elem] = times;
  return grouped_list;
}

module.exports = count_same_elements;
