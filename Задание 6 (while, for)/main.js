// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
//   }

// while (true) {
//     num = prompt('Введите число, большее чем 100', '');
//     if (num <= 100) {
//         continue;
//     } else {
//         alert('Вы ввели правильное число');
//         break;
//     }
// }

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}