// Create a car object, add a color property to it with the value equals 'black'
let car = {};
car.color = "black";
console.log("color: ", car.color);

// Change the color property of the car object to 'green'
car.color = "green";
console.log("color: ", car.color);

// Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function (power) {
  console.log(power);
};
console.log(car.power(199));

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
let countFruits = function (pearsNumber, applesNumber) {
  return pearsNumber + applesNumber;
};
let acceptedPearsApples = countFruits(10, 20);
console.log(acceptedPearsApples);

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
const NAME = "Nodari";
if (NAME === "Nodari") {
  console.log(`Hello ${NAME}`);
} else {
  console.log("There is no such name.");
}

// Write a function for calculating the type of argument and type output to the console
let arguments = function (argument) {
  console.log(typeof argument);
};
arguments("hi");
arguments(false);

// Write a function that determines whether a number is prime or not
let primeNumber = function (number) {
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};
let num1 = primeNumber(4);
let num2 = primeNumber(5);
console.log(num1);
console.log(num2);
