/* The call method calls a function with a given this value and arguments provided individually. */

Object.prototype.call = function (callObj, ...params) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }
  callObj.tempFunc = this;
  const result = callObj.tempFunc(...params);
  delete callObj.tempFunc;
  return result;
};

let objA = {
  f_Name: "Riyas",
  l_Name: "Mohammed",
  printDetails: function (gender) {
    return this.f_Name + " " + this.l_Name + " " + gender;
  },
};

let objB = { f_Name: "Sharif", l_Name: "Ismail" };

console.log(objA.printDetails.call(objB, "Male")); // Sharif Ismail Male

/* This method temporarily assigns the function to the callObj object, calls it with provided arguments, then removes the temporary function to avoid polluting the object. */
