let chai = require("chai");
let expect = chai.expect;
let Calculator = require("../script.js");

describe("Calculator", () => {
  it("should work addition", () => {
    let calculator = new Calculator(3, 4, 5);
    expect(calculator.add()).to.equal(12);

    let calculator2 = new Calculator(-3, -4, -5);
    expect(calculator2.add()).to.equal(-12);

    let calculator_3 = new Calculator(0, 1);
    expect(calculator_3.add()).to.equal(1);

    let calculator_4 = new Calculator(-1, 0);
    expect(calculator_4.add()).to.equal(-1);

    let calculator_5 = new Calculator(-1, 3);
    expect(calculator_5.add()).to.equal(2);

    let calculator_6 = new Calculator(101, -1, 0, undefined);
    expect(function () {
      calculator_6.add();
    }).to.throw();

    let calculator_7 = new Calculator(101, -1, 0, null);
    expect(function () {
      calculator_7.add();
    }).to.throw();

    let calculator_8 = new Calculator(101, -1, 0, "I am not a number");
    expect(function () {
      calculator_8.add();
    }).to.throw();
  });
  it("should work multiply", () => {
    let calculator = new Calculator(3, 4, 5);
    expect(calculator.multiply()).to.equal(60);

    let calculator2 = new Calculator(-3, -4);
    expect(calculator2.multiply()).to.equal(12);

    let calculator_3 = new Calculator(0, 1);
    expect(calculator_3.multiply()).to.equal(0);

    let calculator_4 = new Calculator(-1, 0);
    expect(calculator_4.multiply()).to.equal(0);

    let calculator_5 = new Calculator(-2, 3);
    expect(calculator_5.multiply()).to.equal(-6);

    let calculator_6 = new Calculator(101, -1, 0, undefined);
    expect(function () {
      calculator_6.multiply();
    }).to.throw();

    let calculator_7 = new Calculator(101, -1, 0, null);
    expect(function () {
      calculator_7.multiply();
    }).to.throw();

    let calculator_8 = new Calculator(101, -1, 0, "I am not a number");
    expect(function () {
      calculator_8.multiply();
    }).to.throw();
  });
});

// npm test
