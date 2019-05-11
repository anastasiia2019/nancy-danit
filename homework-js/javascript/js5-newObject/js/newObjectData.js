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

