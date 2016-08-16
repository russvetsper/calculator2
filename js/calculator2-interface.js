var Supermath = require('./../js/calculator2.js').mathModule;

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    console.log(operator);
    var newMath = new Supermath();

    var result = newSupermath.add(number1, number2);

    var result = newSupermath.subtract(number1, number2);

    var result = newSupermath.multiply(number1, number2);

    var result = newSupermath.divide(number1, number2);

    $("#output").append("<p>" + result + "/<p>");
  });
});
