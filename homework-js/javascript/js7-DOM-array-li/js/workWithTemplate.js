let keywords = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
let transformed = keywords.map(createList =>
    `<li>${createList}</li>`);

transformed = `<ul>${transformed.join('')}</ul>`;
document.body.innerHTML += transformed;

let ul = document.getElementsByTagName('ul');
ul[0].id = "two";

let seconds = document.getElementById("clock");

let countdown = setInterval(function() {
    seconds.innerText--;
    if (seconds.innerText <= 0) {
        document.getElementById("two").classList.add("one");
        seconds.classList.add("one");
        clearInterval(countdown);
    }
}, 1000);