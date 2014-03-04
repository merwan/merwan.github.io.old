var FizzBuzz = require('./fizzbuzz');

describe("FizzBuzz", function() {
  var fizzBuzz = new FizzBuzz();

  it("counts 1", function() {
    var result = fizzBuzz.count(1);
    expect(result).toEqual([1]);
  });

  it("counts 2", function() {
    var result = fizzBuzz.count(2);
    expect(result).toEqual([1, 2]);
  });

  it("counts 3", function() {
    var result = fizzBuzz.count(3);
    expect(result).toEqual([1, 2, "Fizz"]);
  });

  it("counts 5", function() {
    var result = fizzBuzz.count(5);
    expect(result).toEqual([1, 2, "Fizz", 4, "Buzz"]);
  });

  it("counts 6", function() {
    var result = fizzBuzz.count(6);
    expect(result).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]);
  });

  it("counts 10", function() {
    var result = fizzBuzz.count(10);
    expect(result).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]);
  });

  it("counts 15", function() {
    var result = fizzBuzz.count(15);
    expect(result).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
  });
});
