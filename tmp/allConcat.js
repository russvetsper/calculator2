var Supermath = require('./../js/calculator2.js').mathModule;

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log(operator);
    var newMath = new Supermath();

    var result;
   if (operator === "add") {
     result = add(number1, number2);
   } else if (operator === "subtract") {
     result = subtract(number1, number2);
   } else if (operator === "multiply") {
     result = multiply(number1, number2);
   } else if (operator === "divide") {
     result = divide(number1, number2);
   }



    $("#output").append("<p>" + result + "/<p>");
  });
});

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
