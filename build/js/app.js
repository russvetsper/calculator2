(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/calculator2.js":1}]},{},[2]);
