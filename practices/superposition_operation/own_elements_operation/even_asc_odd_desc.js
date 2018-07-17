'use strict';
var even_asc_odd_desc = function(collection){
    let even_arr = collection.filter(x=>x%2===0).sort((a,b)=>a-b);
    let odd_arr = collection.filter(x=>x%2!==0).sort((a,b)=>b-a);
    return even_arr.concat(odd_arr);
};
module.exports = even_asc_odd_desc;
