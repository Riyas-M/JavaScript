/* 1. Functional Inheritance */

function Parent(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Hello from ${this.name}`);
  };
}

function Child(name, age) {
  Parent.call(this, name); // Call Parent function
  this.age = age;
}

const child = new Child('Bob', 12);
child.sayHello();
console.log(`Age: ${child.age}`);

/* Output: 

    Hello from Bob
    Age: 12

*/



/* 2. Constructor Overriding: */

class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call Parent constructor
    this.age = age;
  }
}

const child = new Child('Tom', 20);
console.log(`Name: ${child.name}, Age: ${child.age}`);

/* Output: Name: Tom, Age: 20 */



/* 3. Inheritance from built-in data types: */

// In JavaScript, we can extend the functionality of the non-primitive built-in data types, such as array, error, map, and set, to create custom classes. 

class CustomArray extends Array {
  sum() {
    return this.reduce((acc, val) => acc + val, 0);
  }
}

const numbers = new CustomArray(1, 2, 3, 4, 5);
console.log(numbers.sum());

/* Output: 15 */