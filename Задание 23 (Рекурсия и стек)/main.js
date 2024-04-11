// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.


// alert(sumTo(1));// = 1
// alert(sumTo(2));// = 2 + 1 = 3
// alert(sumTo(3));// = 3 + 2 + 1 = 6
// alert(sumTo(4));// = 4 + 3 + 2 + 1 = 10
// alert(sumTo(100));// = 100 + 99 + ... + 2 + 1 = 5050

//Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

/*Цикл*/
// function sumTo(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//    sum += i; 
//   }

//   return sum;
// }

/*Рекурсия*/
// function sumTo(n) { 
//   return (n == 1) ? 1 : n + sumTo(n-1);
// }

/*Формула арифметической прогрессии*/
// function sumTo(n) {
//   return ((1 + n) / 2) * n;
// } 

// alert( sumTo(100) ); // 5050



// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

// function factorial(n) {
//   return (n == 1) ? 1 : n * factorial(n - 1);
// }

// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6


// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2); -- очень медленный метод для больших чисел 
// }

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// alert( fib(77) ); // 5527939700884757


// Допустим, у нас есть односвязный список

// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

/*Цикл*/ 
// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     alert(tmp.value);
//     tmp = tmp.next;
//   }

// }

/*Рекурсия*/
// function printList(list) {

//   alert(list.value); // выводим текущий элемент

//   if (list.next) {
//     printList(list.next); // делаем то же самое для остальной части списка
//   }

// }

// printList(list);


// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

/*Цикл*/
// function printReverseList(list) {
//   let arr = [];
//   let tmp = list;

//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     alert( arr[i] );
//   }
// }


/*Рекурсия*/
function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

printReverseList(list);