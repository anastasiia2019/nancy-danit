"use strict";
let firstNumber = parseInt(+prompt("Enter number 1:"));
if (isNaN(firstNumber) || firstNumber == "" || firstNumber == null) {
    firstNumber = +prompt("Sorry, you didn't enter the first number, please enter");
}
let secondNumber = parseInt(+prompt("Enter number 2:"));
if (isNaN(secondNumber) || secondNumber == "" || secondNumber == null) {
    secondNumber = +prompt("Sorry, you didn't enter the second number, please enter");
}
let operation = prompt("Please, choose operation(+, -, *, /)");
if (operation === "+" || operation === "-" || operation === "*" || operation === "/") {
    calculator();
} else {
    operation = prompt("Sorry, you didn't enter the operation, please enter operation(+, -, *, /)");
}
function calculator() {
    switch (operation) {
        case "+":
            return (firstNumber + secondNumber);
            break;
        case "-":
            return (firstNumber - secondNumber);
            break;
        case "*":
            return (firstNumber * secondNumber);
            break;
        case "/":
            return (firstNumber / secondNumber);
            break;

        default :
            alert("i dont know such operations");
    }
}
console.log(calculator(firstNumber, secondNumber, operation));
alert(calculator(firstNumber, secondNumber, operation));

