/* The apply method calls a function with a given this value and arguments provided as an array. */

Object.prototype.apply = function (applyObj, params) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }
  applyObj.tempFunc = this;
  const result = applyObj.tempFunc(...params);
  delete applyObj.tempFunc;
  return result;
};

let objA = {
  f_Name: "Riyas",
  l_Name: "Mohammed",
  printDetails: function (gender, city) {
    return this.f_Name + " " + this.l_Name + " " + gender + " " + city;
  },
};

let objB = { f_Name: "Sharif", l_Name: "Ismail" };

console.log(objA.printDetails.apply(objB, ['Male', "Mumbai"])); // Sharif Ismail male Mumbai

/* Similar to myCall, This method myApply accepts an array of arguments which are spread when calling the function. */
