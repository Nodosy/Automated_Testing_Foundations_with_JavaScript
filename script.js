// Create a calculator class with the following methods:
// add - this method should summarize the parameters passed to it and return the sum as a result
// multiply - this method should multiply the parameters passed to it and return the product as a result
// Create unit tests that verify that the critical calculator's methods are working correctly.
// Create a coverage reporter and take a screenshot, commit it to the homework repository.
class Calculator {
  constructor(...numbers) {
    this.numbers = numbers;
  }
  add() {
    var sum = 0;
    for (const num of this.numbers) {
      if (typeof num === "number" && Number.isNaN(num) === false) {
        sum += num;
      } else {
        throw new Error("Please enter number!!!");
      }
    }
    return sum;
  }
  multiply() {
    var product = 1;
    for (const num of this.numbers) {
      if (typeof num === "number" && Number.isNaN(num) === false) {
        product *= num;
      } else {
        throw new Error("Please enter number!!!");
      }
    }
    return product;
  }
}
// const calc1 = new Calculator(101, -1, 0, undefined);
// console.log(calc1.add());

module.exports = Calculator;
