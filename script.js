class Calculator {
  constructor(...numbers) {
    this.numbers = numbers;
  }
  add() {
    let sum = 0;
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
    let product = 1;
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

module.exports = Calculator;
