'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (array, base) => {
  return array.reduce(function(result, element) {
  return result + element;
}, base);
  },

  someObjsContainProp: (array, prop) => {
    return array.some(function (element,index,arr){
      return element.hasOwnProperty(prop)
    })
  },

  convertNameArrayToObject: (array) => {
    return array.map(function(element,index,arr){
      var obj = {};
      obj.first = arr[index][0];
      obj.last = arr[index][1];
      return(obj)
    })

  },

  objContainsProp: (array, prop) => {
    return array.every(function(element,index,arr){
      if (element.hasOwnProperty(prop)){
        return true
      }return false
    })
  },

  stringMatch: (array, str) => {
    return array.filter(function(element,index,arr){
      return element.includes(str)
    })
  },
};
