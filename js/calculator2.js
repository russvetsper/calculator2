function Supermath() {}

Supermath.prototype.add = function(number1, number2) {
  return number1 + number2;
};

Supermath.prototype.subtract = function(number1, number2) {
  return number1 - number2;
};

Supermath.prototype.multiply = function(number1, number2) {
  return number1 * number2;
};

Supermath.prototype.divide = function(number1, number2) {
  return number1 / number2;
};

exports.mathModule = Supermath;
