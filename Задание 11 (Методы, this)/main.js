let calculator = {
    read() {
       this.x = Number(prompt('Введите первое значение', ''));

       this.y = +prompt('Введите второе значение', '');
    },

    sum() {
        return this.x + this.y;
    }, 

    mul() {
      return this.x * this.y;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );


//   let ladder = {
//     step: 0,
//     up() {
//       this.step++
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;
//     }
//   };

//   ladder
//   .up()
//   .up()
//   .down()
//   .showStep()
//   .down()
//   .showStep();