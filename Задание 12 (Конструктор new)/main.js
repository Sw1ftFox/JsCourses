// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.


// function Calculator() {

//   this.read = function() {
//     this.first = +prompt('Введите первое значение', '');
    
//     this.second = +prompt('Введите второе значениче', '');
//   };

//   this.sum = function() {
//     return this.first + this.second;
//   }; 

//   this.mul = function() {
//     return this.first * this.second;
//   };
// };

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


function Accumulator(startingValue) {

  this.value = startingValue;

  this.read = function() {
    let a = +prompt('Введите новое число', 0); // можно было так: this.value += +prompt('Сколько нужно добавить?', 0);

    this.value += a;
  };

};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений