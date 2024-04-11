// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
//P.S. Есть «подводный камень» при работе с типами.

// let a = +prompt('Введите число а', '0');

// let b = +prompt('Введите число b', '0');

// let sum = a + b;

// alert(sum);


// function readNumber() {
    
//     let a;
  
//     do {
//       a = +prompt('Введите число', 0);
//     } while ( !isFinite(a) );

//     if (a === undefined || a === "" || a === null) {
//       return null;
//     }

//     return a;
// }

// alert(`Число: ${readNumber()}`);


// function randomInteger(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert(randomInteger(1, 5));


function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
} 

alert(randomInteger(1, 5));