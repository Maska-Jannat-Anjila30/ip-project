function greet() {
  console.log("Hello!");
}

greet();
greet("Anjila");


// Parameters and return value

function add(a, b) {
  return a + b;
}

let result = add(1.7,5.3);
console.log(result);

// Default parameter

function greet(name = "Student") {
  console.log(`Hello, ${name}!`);
}

greet();
greet("Maska");

// Function expression

const multiply = function (a,b) {
  return a * b;
};

console.log(multiply(5.4,6.7));

// Pass function as an argument

function greetUser(greetFunction, name) {
  greetFunction(name);
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

greetUser(sayHello, "Jannat");
