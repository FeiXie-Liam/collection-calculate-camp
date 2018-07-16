function count_same_elements(collection) {
  //在这里写入代码
  let hist = {}
  collection.forEach(elem => {
    if (elem in hist) {
      hist[elem]++;
    }
    else {
      hist[elem] = 1;
    }
  })

  keys_arr = Object.keys(hist);
  values_arr = Object.values(hist);

  let result = [];
  for (let i = 0; i < keys_arr.length; ++i) {
    let dict = {};
    if(keys_arr[i].includes('-')){
      
    }
    dict['key'] = keys_arr[i];
    dict['count'] = values_arr[i];
    result.push(dict)
  }
  return result;
}

module.exports = count_same_elements;
