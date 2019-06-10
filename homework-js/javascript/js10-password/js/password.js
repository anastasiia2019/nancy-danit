let passwordValue = document.querySelectorAll('.fas');

for (let i = 0; i < passwordValue.length; i++) {
    passwordValue[i].addEventListener('click', showHidden);
}


function showHidden(event) {

    if (event.target.classList.contains('fa-eye')) {
        event.target.previousElementSibling.type = 'text';
        event.target.classList.remove('fa-eye');
        event.target.classList.add('fa-eye-slash');

    } else {
        event.target.classList.remove('fa-eye-slash');
        event.target.classList.add('fa-eye');
        event.target.previousElementSibling.type = 'password';
    }
}


function timer() {
    alert('You are welcome');
}
// btnCheck.addEventListener('click', checkPassword);
function checkPassword(event) {
    let inputFirst = document.getElementsByClassName("inputClass")[0].value;

    let inputSecond = document.getElementsByClassName("inputClass")[1].value;
    if (inputFirst === inputSecond) {

        document.getElementsByClassName('error')[0].style.visibility = 'hidden';

        setTimeout(timer, 0);


    } else {
        document.getElementsByClassName('error')[0].style.visibility = 'visible';

    }
}
