"use strict";
let A;
let B;
do {
    B = +prompt("Enter a number");
}
while (B < 0 || B === "" || B === null || isNaN(B));

if (B % 5 === 0) {
    for (A = 0; A <= B; A += 5) {
        console.log(`${A}`);
    }
} else {
    alert("Sorry, no numbers");
}