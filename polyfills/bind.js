/* The bind method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. */

Object.prototype.bind = function(bindObj, ...params) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }
  const self = this;

  return function(...args) {
    return self.apply(bindObj, [...params, ...args]);
  };
};

let objA = {
  f_Name: "Riyas",
  l_Name: "Mohammed",
  printDetails: function(gender, city) {
    return this.f_Name + " " + this.l_Name + " " + gender + " " + city;
  }
};

let objB = { f_Name: "Sharif", l_Name: "Ismail" };

let bindedFunction = objA.printDetails.bind(objB, 'Male', "Mumbai");
console.log(bindedFunction());  // Sharif Ismail Male Mumbai

/* The bind function returns a new function. When this new function is called, it calls the original function with the bindObj and combines the bound parameters with new ones. */
