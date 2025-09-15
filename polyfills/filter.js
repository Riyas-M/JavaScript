/* The filter method creates a new array with all elements that pass the condition implemented by the provided function. */

Array.prototype.filter = function(cb, cntxt) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(cntxt, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

let inputArr = [1, 2, 4, 8, 16];

let context = { filterCondition: 5 };

let updatedArray = inputArr.filter(function(val) {
  return val > this.filterCondition;
}, context);

console.log(updatedArray);  // [8, 16]

/* Similar to map, but filter only includes elements that pass the condition in the callback function */
