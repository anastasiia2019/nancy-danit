// Створюємо Listener що виконуватиме функції по id
document.getElementById('inputText').addEventListener("focus", focusFunction);
document.getElementById('inputText').addEventListener("blur", blurFunction);

// Функція що при фокусі додає стиль inputForm
function focusFunction() {
    document.getElementById('inputText').classList.add('number');
    this.classList.add("input-border");
    let errors = document.getElementById("error");
    if (!errors.classList.contains("display-none")) {
        errors.classList.add("display-none");
    }

}

// Функція що при знятті фокуса перевіряє чи введено число + додає стиль inputForm- червоний та error
// у випадку провалу та створює новий контейнер з полем даних та кнопкою
function blurFunction() {
    //Передаємо значення input в змінну
    let inputValue = document.getElementById('inputText').value;
    //Виконуємо перевірку на введене число в полі input
    if (!inputValue || isNaN(inputValue) || +inputValue <= 0) {
        // Якщо умова виконуэться то робимо input червоним, додаємо стиль
        document.getElementById('inputText').classList.add("errorInput");
        // Видаляємо стиль невидимки-поля error в html
        document.getElementById("error").classList.remove("display-none");
        // у випадку не виконання умови і задання числа повертаємо його значення у функцію
        return;
    }
    // Видаляємо cтиль рамки в input у випадку введення даних
    this.classList.remove("input-border");
    // Видаляємо cтиль рамки в input у випадку не введення даних
    this.classList.remove("errorInput");
    // Видаляємо стиль-невидимки в span полі
    document.getElementById('spanPrice').classList.remove("display-none");


//Створюємо контейнер як обгортку для span та кнопки Х
    let div = document.createElement("div");

// Створюємо елемент span
    let spanElement = document.createElement('span');

//Вставляємо текст всередину спану
    spanElement.innerText = `Поточна ціна:${inputText.value}, UAH`;

// Створюємо елемент кнопки Х
    let closeBtn = document.createElement('button');

//Вставляємо текст всередину кнопки

    closeBtn.innerText = 'X';
    // Створюємо Listener для обробки подій та виконання функції
    closeBtn.addEventListener("click", function (){
        // При кліці видаляється контейнер разом з span та кнопкою
        div.remove();
        // очищаємо поле введеного значення в input
        inputText.value = "";
    });

    //дадаємо стиль span
    div.classList.add('spanPrice');

    //Додаємо в контейнер спан
    div.appendChild(spanElement);

    //Додаємо в контейнер кнопку
    div.appendChild(closeBtn);

    closeBtn.classList.add('btnStyle');

    //дадаємо стиль тексту Input-зелений
    document.getElementById('inputText').classList.add("valueInput");
    // Додаємо div контейнер в div html
    document.getElementById('spanPrice').appendChild(div);

    console.log();


}

