/* // Parent object constructor.
function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log("The " + this.constructor.name + " makes a sound.");
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}

// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Create a new instance of Dog.
const bolt = new Dog("Bolt");

// Call methods on the child object.
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"
 */

/* 
// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create a new object using the constructor function
let john = new Person("John", 30);

// The new object has access to the methods defined on the prototype
john.sayHello(); // "Hello, my name is John and I am 30 years old."

// The prototype of the new object is the prototype of the constructor function
console.log(john.__proto__ === Person.prototype); // true

// You can also get the prototype using Object.getPrototypeOf()
console.log(Object.getPrototypeOf(john) === Person.prototype); // true

// You can set the prototype of an object using Object.setPrototypeOf()
let newProto = {
  sayGoodbye: function () {
    console.log(`Goodbye, my name is ${this.name}`);
  },
};

Object.setPrototypeOf(john, newProto);

// Now john has access to the methods defined on the new prototype
john.sayGoodbye(); // "Goodbye, my name is John"

// But no longer has access to the methods defined on the old prototype
console.log(john.sayHello); // undefined
 */

// Define a constructor function
function Animal(name) {
  this.name = name;
}

// Add a method to the prototype
Animal.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};

// Define a new constructor function
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Set the prototype of Dog to inherit from Animal's prototype
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the Dog prototype
Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Create a new object using the Dog constructor function
let fido = new Dog("Fido", "Labrador");

// The new object has access to the methods defined on its own prototype and the Animal prototype
fido.bark(); // "Woof!"
fido.sayName(); // "My name is Fido"

// If we try to access a method that doesn't exist on the Dog prototype or the Animal prototype, JavaScript will return undefined
console.log(fido.fly); // undefined
