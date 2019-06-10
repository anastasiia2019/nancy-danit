// "use strict";
function isCheckName(name) {
    while ((!name)||(name == null)||(!isNaN(name))) name = prompt('Enter your name:', name);
    return name;
}
function createNewUser() {
    let newUser = {
        firstName: isCheckName(prompt('Enter your first name:')),
        lastName: isCheckName(prompt('Enter your last name:')),
        getLogin: function(){
            return (this.firstName.charAt(0) + this.lastName).toLowerCase();
        },
        setFirstName: function(value) {
            Object.defineProperty(this, 'firstName', {
                writable: true
            });
            this.firstName = value;
            Object.defineProperty(this, 'firstName', {
                writable: false
            });
        },
        setLastName: function(value) {
            Object.defineProperty(this, 'lastName', {
                writable: true
            });
            this.lastName = value;
            Object.defineProperty(this, 'lastName', {
                writable: false
            });
        }
    };
    Object.defineProperties(newUser, {
        'firstName': {
            writable: false
        },
        'lastName': {
            writable: false
        }
    });
    return newUser;
}
let user = new createNewUser();
console.log(user.getLogin());
console.log(user);

// user.setFirstName('Nastya2');
// console.log(user);
// user.firstName = 'Nastya';
// console.log(user);



//
// function createNewUser() {
//     let user = {};
//
//     Object.defineProperty(user, 'firstName', {
//         value: prompt('Enter name'),
//         writable: false
//     });
//     Object.defineProperty(user, 'lastName', {
//         value: prompt('Enter surname'),
//         writable: false
//     });
//
//     setFirstName = function (value) {
//         Object.defineProperty(user, 'firstName', {
//             writable: true
//         });
//         user.firstName = value;
//     };
//     setLastName = function (value) {
//         Object.defineProperty(user, 'lastName', {
//             writable: true
//         });
//         user.lastName = value;
//     };
//
//     user.getLogin = function () {
//         return (user.firstName.charAt(0).toLowerCase() + user.lastName.toLowerCase());
//     };
//
//     return user;
// }
//
//
// const user = new createNewUser();
//
// // console.log(user);
// user.getLogin();
// console.log(user.getLogin());