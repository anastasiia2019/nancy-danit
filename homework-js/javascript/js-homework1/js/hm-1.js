"use strict";

function validateNumber(n) {
    return /^[0-9]+$/.test(n);
}

function validateName(n) {
    return /^[a-zA-Z]+$/.test(n);
}

let userName = prompt('Enter your name. ');
let userAge = prompt('Enter your age. ');
let urAllowed = 'Welcome, ';
let urNotAllowed = 'You are not allowed to visit this website.';
let areUsure = 'Are you sure you want to continue?';

while (!validateName(userName)) {
    userName = prompt("Please, entered your name if you forgot or check the correct entered your name", userName);
}
while (!validateNumber(userAge) && userAge != null || userAge > 110) {
    userAge = alert("Please, check the correct entered information. It must be only number, not null and less then 110 years");
    userAge = prompt('How old are you?')
}
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


