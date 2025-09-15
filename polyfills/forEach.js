/* The forEach method executes a provided function once for each array element. */

Array.prototype.forEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const arrData = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'];

arrData.forEach((item) => {
  console.log(item);
});

/* Iterates over the array and call the provided callback function for each element. */