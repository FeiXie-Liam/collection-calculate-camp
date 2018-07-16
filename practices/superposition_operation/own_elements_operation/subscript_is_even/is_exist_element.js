'use strict';
var is_exist_element = function (collection, element) {
    let even_arr = [];
    for (let i = 0; i < collection.length; i += 2) {
        even_arr.push(collection[i]);
    }
    return even_arr.includes(element);
};
module.exports = is_exist_element;
