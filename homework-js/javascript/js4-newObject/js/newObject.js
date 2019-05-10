'use strict';

function CreateNewUser() {
    let obj = {
        firstName: prompt('Enter your first name', ''),
        lastName: prompt('Enter your last name', '')
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
console.log(newUser);
console.log(newUser.getLogin());

