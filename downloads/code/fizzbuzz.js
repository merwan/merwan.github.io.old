var FizzBuzz = function() {
  this.count = function(max) {
    var i, result = [];
    for (i = 1; i <= max; i += 1) {
      var value = "";
      if (i % 3 !== 0 && i % 5 !== 0) {
        value = i;
      }
      if (i % 3 === 0) {
        value += "Fizz";
      }
      if (i % 5 === 0) {
        value += "Buzz";
      }
      result.push(value);
    }
    return result;
  }
}

module.exports = FizzBuzz;
