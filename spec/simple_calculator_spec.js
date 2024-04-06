const { add, multiply } = require("../src/simple_calculator.js");

describe("add", () => {
  it("should return the sum of positive integers", () => {
    expect(add(1, 2, 3)).toBe(6);
  });

  it("should return the sum of positive and negative integers", () => {
    expect(add(-1, -2, 3)).toBe(0);
  });

  it("should return the sum of float numbers and a positive integer", () => {
    expect(add(1, 2.5, 3.2)).toBe(6.7);
  });

  it("should return the sum of positive and negative integers", () => {
    expect(add(-1, 7, -3)).toBe(3);
  });

  it("should return the sum of a single positive integer", () => {
    expect(add(1)).toBe(1);
  });

  it("should return the sum of positive and negative integers", () => {
    expect(add(-1, -2, -3, 8, 9, 10)).toBe(21);
  });
});

describe("multiply", () => {

  it("should return the multiple of positive and negative integers", () => {
    expect(multiply(1, 2, 3)).toBe(6);
  });

  it("should return the multiple of float numbers and positive integers", () => {
    expect(multiply(1.5, 2.5, 3)).toBe(11.25);
  });

  it("should return the multiple of positive and negative integers", () => {
    expect(multiply(1, -2, 3)).toBe(-6);
  });

  it("should return the multiple of single postive integer", () => {
    expect(multiply(2)).toBe(2);
  });

  it("should return the multiple of postive integers", () => {
    expect(multiply(1, 3)).toBe(3);
  });

  it("should return the multiple of positive and negative integers", () => {
    expect(multiply(1, 0, 3, 8, 9)).toBe(0);
  });
});