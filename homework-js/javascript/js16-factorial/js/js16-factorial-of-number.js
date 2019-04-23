"use strict";
function factorial(num) {
    if (num<1) {
        return 1;}
    else  {
        return num*factorial(num-1);
    }
}

let enterNumber=+prompt("Enter a number");
while (isNaN(enterNumber) === true || enterNumber === "" || enterNumber === null){
    enterNumber = prompt("Please, enter number");
}
alert(factorial(enterNumber));




