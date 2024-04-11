// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

// let date = new Date(2012, 1, 20, 3, 12);
// alert(date);


// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

//ПЕРВОЕ РЕШЕНИЕ
// function getWeekDay(date) {
//     let nameOfDay = date.getDay();

//     switch(nameOfDay) {
//         case 0:
//             return "ВС";
//             break;
//         case 1:
//             return "ПН";
//             break;   
//         case 2:
//             return "ВТ";
//             break;
//         case 3:
//             return "СР";
//             break;
//         case 4:
//             return "ЧТ";
//             break;   
//         case 5:
//             return "ПТ";
//             break;
//         case 6:
//             return "СБ";
//             break;
//     }
// }

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

//ВТОРОЕ РЕШЕНИЕ
// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
//     return days[date.getDay()];
//   }
  
//   let date = new Date(2014, 0, 3); // 3 января 2014 года
//   alert( getWeekDay(date) ); // ПТ


// В Европейских странах неделя начинается с понедельника (день номер 1), 
// затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// function getLocalDay(date) {

//     let day = date.getDay();
  
//     if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
//       day = 7;
//     }
  
//     return day;
//   }

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2


// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

// ПЕРВОЕ РЕШЕНИЕ
// function getDateAgo(date, days) {
//     let diff = +date - days*24*3600*1000;

//     return new Date(diff);
// }

//ВТОРОЕ РЕШЕНИЕ
// function getDateAgo(date, days) { 
//     let dateCopy = new Date(date);

//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
//   }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
  
//   return date.getDate();
// }

// alert( getLastDayOfMonth(2012, 0) ); // 31
// alert( getLastDayOfMonth(2012, 1) ); // 29
// alert( getLastDayOfMonth(2013, 1) ); // 28


//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// function getSecondsToday() {
//   let now = new Date();

//   return now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds();
// }

// alert(getSecondsToday());


//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

//ПЕРВОЕ РЕШЕНИЕ
// function getSecondsToTomorrow() {
//   let now = new Date();

//   return 24*3600 - now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds();
// }

//ВТОРОЕ РЕШЕНИЕ
// function getSecondsToTomorrow() {
//   let now = new Date();

//   // завтрашняя дата
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

//   let diff = tomorrow - now; // разница в миллисекундах
//   return Math.round(diff / 1000); // преобразуем в секунды
// }

// alert(getSecondsToTomorrow());


// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах

  if (diff < 1000) { // меньше 1 секунды
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + ' мин. назад';
  }

  // отформатировать дату
  // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );