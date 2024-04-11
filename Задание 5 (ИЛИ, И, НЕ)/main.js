// let age = prompt('Введите ваш возраст', '');
// if (14 <= age <= 90) {
//     alert('Вы попали в диапазон!');
// } else {
//     alert('Увы, вы не попали в диапазон.');
// }

// if (!(age >= 14 && age <= 90));

// if (age < 14 && age > 90);

let login = prompt('Кто там?', 'Поле для ввода логина');

if (login == 'Админ') {

    let password = prompt('Пароль?', 'Поле для ввода пароля');

    if (password == 'Я главный') {
        alert('Здравствуйте!');
    } else if (password == '' || password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    } 

} else if (login == '' || login === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}