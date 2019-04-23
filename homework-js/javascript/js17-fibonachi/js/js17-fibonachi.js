"use strict";
//считаем число Фиббоначи
function fib(n){
    if (n===1||n===2) return 1;
    else if(n<0) return undefined;
    else return fib(n-2)+fib(n-1);
}
let userNum=+prompt('Enter a number to calculate fibonacci');
alert(fib(userNum));

//Считаем число Факториал и отрицательное значение числа в тч
function factorial(num) {
    if (num === 0) {
        return 1;
    } else if (num > 0) {
        return num * factorial(num - 1);
    } else {
        return Math.pow(-1, num) * Math.abs(num) * factorial(Math.abs(num) - 1);
    }
}
let number=prompt('Enter a number to calculate factorial')
alert(factorial(number));



