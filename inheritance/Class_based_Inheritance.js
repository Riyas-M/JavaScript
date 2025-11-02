/* 1. Using the extend keyword: */

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog('Rex');
dog.speak();

/* Output: Rex barks */



/* 2. Using the super keyword: */

class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); 
    this.age = age;
  }

  details() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const child = new Child('Sharif', 30);
child.details();

/* Output: Name: Sharif, Age: 30 */



/* 3. Inheritance in static members: */

class Parent {
  static sayHello() {
    console.log('Hello from Parent');
  }
}

class Child extends Parent {}

Child.sayHello();

/* Output: Hello from Parent */