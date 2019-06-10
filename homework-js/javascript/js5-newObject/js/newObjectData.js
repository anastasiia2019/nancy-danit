'use strict';

function nameEnter(name) {
    while ((name === null) || (!isNaN(name)))
        name = prompt('Please, enter your Name');
    return name;
}

function surnameEnter(surname) {
    while ((surname === null) || (!isNaN(surname)))
        surname = prompt('Please, enter your Surname')
    return surname;
}

function CreateNewUser() {
    let obj = {
        firstName: nameEnter(prompt('Enter your first name')),
        lastName: surnameEnter(prompt('Enter your last name')),
        birthday: prompt('Enter your birthday', 'dd.mm.yyyy')
    };

    Object.defineProperties(obj, {
        'firstName': {
            writable: false
        },
        'lastName': {
            writable: false
        }
    });

    return obj;

}

let newUser = new CreateNewUser();
newUser.getLogin = function () {
    console.log(`${newUser.firstName[0].toLowerCase()}${newUser.lastName.toLowerCase()}`)
};
newUser.getAge = function () {
    let birth = newUser.birthday.split('.');
    let birthFullData = +birth[2], month = +birth[1] - 1, day = +birth[0];
    let todayDate = new Date();
    let age = todayDate.getFullYear() - birthFullData;
    if (((month === todayDate.getMonth()) && (todayDate.getDate() < day)) || (todayDate.getMonth() < (month))) {
        age--;
    }
    return age;
};
newUser.getPassword = function () {
    let birth = newUser.birthday.split('.');
    let yearData = +birth[2];
    return newUser.firstName.charAt(0).toUpperCase() + newUser.lastName.toLowerCase() + yearData;
};

console.log(newUser);
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());



//
//
// function createNewUser() {
//     let user = {};
//     setFirstName = function (value) {
//         Object.defineProperty(this, 'firstName', {
//             writable: true
//         });
//         this.firstName = value;
//         Object.defineProperty(this, 'firstName', {
//             writable: false
//         });
//     };
//     setLastName = function (value) {
//         Object.defineProperty(this, 'lastName', {
//             writable: true
//         });
//         this.lastName = value;
//         Object.defineProperty(this, 'lastName', {
//             writable: false
//         });
//     };
//     user.firstName = prompt('Enter name');
//     user.lastName = prompt('Enter surname');
//     user.birthday = prompt("Enter date of your birthday(dd.mm.yyyy");
//     user.getLogin = function () {
//         let LetterFirstName = this.firstName.charAt(0);
//         return (LetterFirstName.toLowerCase() + this.lastName.toLowerCase());
//     };
//
//     let yearOfbirthday = user.birthday.substring(6, 10);
//     user.getAge =  function () {
//         return new Date().getFullYear() - yearOfbirthday;
//     };
//     user.getPassword = function () {
//         let letterFirstName = this.firstName.charAt(0);
//         return (letterFirstName.toUpperCase() + user.lastName.toLowerCase() + yearOfbirthday);
//
//     };
//
//     return user;
// }
//
// const user = createNewUser();
// user.getLogin();
// user.getPassword();
// user.getAge();
// console.log(user);
// console.log(user.getAge());
// console.log(user.getPassword());



