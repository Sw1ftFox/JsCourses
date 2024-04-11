// let nameJs = prompt('Какое официальное название JS?', 'Введите сюда ответ');
// if (nameJs == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете?');
//     alert('ECMAScript!');
// }

// let number = prompt('Введите число', 'Поле для ввода числа');
// if (number > 0) {
//     alert('1');
// } else if (number < 0) {
//     alert('-1');
// } else {
//     alert('0');
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' : 
    (login == 'Директор') ? 'Здравствуйте':
    (login == '') ? 'Нет логина':
    '';