const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal); // dog inherits from animal
dog.barks = true;

console.log(dog.eats);   // true (inherited)
dog.walk();              // "Animal walks"
console.log(dog.__proto__ === animal); // true
