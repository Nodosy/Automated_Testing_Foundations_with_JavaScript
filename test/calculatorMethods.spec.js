let chai = require("chai");
let expect = chai.expect;
let Calculator = require("../script.js");

describe("Calculator", () => {
  describe("Addition", () => {
    it("should add three positive numbers", () => {
      let calculator0 = new Calculator(3, 4, 5);
      expect(calculator0.add()).to.equal(12);
    });
    it("should add three negative numbers", () => {
      let calculator1 = new Calculator(-3, -4, -5);
      expect(calculator1.add()).to.equal(-12);
    });
    it("should add 0 and 1", () => {
      let calculator2 = new Calculator(0, 1);
      expect(calculator2.add()).to.equal(1);
    });
    it("should add -1 and 0", () => {
      let calculator3 = new Calculator(-1, 0);
      expect(calculator3.add()).to.equal(-1);
    });
    it("should add -1 and 3", () => {
      let calculator4 = new Calculator(-1, 3);
      expect(calculator4.add()).to.equal(2);
    });
    it("should not add undefined", () => {
      let calculator5 = new Calculator(101, -1, 0, undefined);
      expect(function () {
        calculator5.add();
      }).to.throw();
    });
    it("should not add null", () => {
      let calculator6 = new Calculator(101, -1, 0, null);
      expect(function () {
        calculator6.add();
      }).to.throw();
    });
    it("should not add string", () => {
      let calculator7 = new Calculator(101, -1, 0, "I am not a number");
      expect(function () {
        calculator7.add();
      }).to.throw();
    });
  });
  describe("Multiplication", () => {
    it("should multiply three positive numbers", () => {
      let calculator0 = new Calculator(3, 4, 5);
      expect(calculator0.multiply()).to.equal(60);
    });
    it("should multipkly two negative numbers", () => {
      let calculator1 = new Calculator(-3, -4);
      expect(calculator1.multiply()).to.equal(12);
    });
    it("should multiply 0 and 1", () => {
      let calculator2 = new Calculator(0, 1);
      expect(calculator2.multiply()).to.equal(0);
    });
    it("should multiply -1 and 0", () => {
      let calculator3 = new Calculator(-1, 0);
      expect(calculator3.multiply()).to.equal(0);
    });
    it("should multiply -2 and 3", () => {
      let calculator4 = new Calculator(-2, 3);
      expect(calculator4.multiply()).to.equal(-6);
    });
    it("should not multiply undefined", () => {
      let calculator5 = new Calculator(101, -1, 0, undefined);
      expect(function () {
        calculator5.multiply();
      }).to.throw();
    });
    it("should not multiply null", () => {
      let calculator6 = new Calculator(101, -1, 0, null);
      expect(function () {
        calculator6.multiply();
      }).to.throw();
    });
    it("should not multiply string", () => {
      let calculator7 = new Calculator(101, -1, 0, "I am not a number");
      expect(function () {
        calculator7.multiply();
      }).to.throw();
    });
  });
});
