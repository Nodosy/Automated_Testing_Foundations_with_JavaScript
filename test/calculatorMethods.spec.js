let chai = require("chai");
let expect = chai.expect;
let Calculator = require("../script.js");

describe("Calculator", () => {
  it("should work addition", () => {
    let calculator = new Calculator(3, 4, 5);
    expect(calculator.add()).to.equal(12);
  });
  it("should work multiply", () => {
    let calculator = new Calculator(3, 4, 5);
    expect(calculator.multiply()).to.equal(60);
  });
});
