/* The map method creates a new array populated with the results of calling a provided function on every element in the calling array. */

Array.prototype.map = function(cb, cntxt) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb.call(cntxt, this[i], i, this));
  }
  return arr;
};

let arr = [1, 3, 5, 8, 9];

let context = { multiplier: 5, offset: 10 };

let updatedArray = arr.map(function(value) {
  return value * this.multiplier + this.offset;
}, context);

console.log(updatedArray);  // [15, 25, 35, 50, 55]

/* The map function iterates over the array, applying the callback function to each element, and use `call` to set the context. The results are stored in a new array. */
