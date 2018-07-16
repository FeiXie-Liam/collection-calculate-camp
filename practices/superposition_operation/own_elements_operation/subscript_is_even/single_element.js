'use strict';
var single_element = function (collection) {
    let even_arr = [];
    for (let i = 1; i < collection.length; i += 2) {
        even_arr.push(collection[i]);
    }
    let result = [];

    let hist = {};
    even_arr.forEach(elem => {
        if (elem in hist) {
            hist[elem]++;
        } else {
            hist[elem] = 1;
        }
    })
    let keys = Object.keys(hist);
    keys.forEach(elem=>{
        if(hist[elem]===1){
            result.push(parseInt(elem,10));
        }
    })
    return result;

};
module.exports = single_element;
