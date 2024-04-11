// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert( ucFirst("вася") ); // Вася


// function checkSpam(str) {

//   let lowerStr = str.toLowerCase();

//   if ( lowerStr.includes('viagra') || lowerStr.includes('xxx') ) {
//     return true;
//   } 

//   return false;
// }

// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));


// function truncate(str, maxlength) {

//   if (str.length > maxlength) {
//       return str.slice(0, maxlength - 1) + '…';
//   }

//   return str;
// }

// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); //"Вот, что мне хотело…"

// alert(truncate("Всем привет!", 20)); //"Всем привет!"


function extractCurrencyValue(str) { 

  return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); // true