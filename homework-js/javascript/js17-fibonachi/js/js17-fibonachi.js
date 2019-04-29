"use strict";
//считаем число Фиббоначи
let firstNumber = +(parseInt(prompt('Enter your first number : ', '')));
let secondNumber = +(parseInt(prompt('Enter your second number : ', '')));
let n = +(parseInt(prompt('Enter sequence number: ', '')));

while (isNaN(firstNumber) || isNaN(secondNumber)) {
    firstNumber = +(parseInt(prompt('Please,enter your first number: ', `${firstNumber}`)));
    secondNumber = +(parseInt(prompt('Please,enter your second number: ', `${secondNumber}`)));
    n = +(parseInt(prompt('Please,enter sequence number: ', `${n}`)));
}
function fib(firstNumber, secondNumber, n){
    if(n>=0) {
        if (n==1) return firstNumber;
        else if (n==2) return secondNumber;
        else return fib(firstNumber, secondNumber, n - 1) + fib(firstNumber, secondNumber, n - 2);
    }
    else {
        if (n==-1) return firstNumber;
        else if (n==-2) return firstNumber;
        else return fib(firstNumber, secondNumber, n+ 1) + fib(firstNumber, secondNumber, n + 2);
    }
}
let resultFib=fib(firstNumber,secondNumber,n);
alert(resultFib);
``


