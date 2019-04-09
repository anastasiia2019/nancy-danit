"use strict";

function validateNumber(userAge) {
    return (userAge < 1 || userAge > 110 ||(isNaN(userAge) ));
}

function validateName(userName) {
    return (userName === null  || userName === "");
}

let userName = prompt('Enter your name. ');
while (validateName(userName)) {
    userName = prompt("Please, entered your name if you forgot or check the correct entered your name", userName);
}
let userAge = prompt('Enter your age. ');
while (validateNumber(userAge)) {
    userAge = prompt("Please, check the correct entered information", userAge);
}

let urAllowed = 'Welcome, ';
let urNotAllowed = 'You are not allowed to visit this website.';
let areUsure = 'Are you sure you want to continue?';
if (userAge > 22) {
    alert(urAllowed + userName)
} else if (userAge >= 18 && userAge <= 22) {
    let result = confirm(areUsure);
    if (result) {
        alert(urAllowed + userName)
    } else {
        alert(urNoTAllowed)
    }
} else {
    alert(urNotAllowed)
}

