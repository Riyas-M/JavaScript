/* The reduce method executes a reducer function on each element of array, accumulating/outputting single value */

Array.prototype.reduce = function(cb, acc) {
  let output = acc;
  let startIndex = 0;
  if (output === undefined) {
    output = this[0];
    startIndex++;
  }

  for (let i = startIndex; i < this.length; i++) {
    output = cb(output, this[i], i, this);
  }
  return output;
};

const myFriends = [
  { name: "Riyas", places: ["Japan", "Saudi"] },
  { name: "Sharif", places: ["UAE", "Italy"] },
  { name: "Jalal", places: ["US", "Mexico"] }
];
const allPlaces = myFriends.myReduce((acc, cur) => [...acc, ...cur.places], []);

console.log(allPlaces);  // ["Japan", "Saudi", "UAE", "Italy", "US", "Mexico"]

/* We iterate over the array, applying the reducer function to accumulate the results. If no initial accumulator is provided, we use the first element of the array. */