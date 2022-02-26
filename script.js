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
      sum += num;
    }
    return sum;
  }
  multiply() {
    var product = 1;
    for (const num of this.numbers) {
      product *= num;
    }
    return product;
  }
}

// let calc1 = new Calculator(3, 4, 5);
// let calc2 = new Calculator(3, 4, 5);

// console.log(calc1.add());
// console.log(calc2.multiply());

module.exports = Calculator;
