const screen = document.querySelector('input')

const fillInput = {
  Fill(event) {
    let buttonValue = event.path[0].innerText;
    screen.value += buttonValue;
  },
}

const calculate = {
  startCalc(){
    const values = screen.value.split('');

    if (values.includes('+')) {
      const separated = screen.value.split('+');

      let a = separated[0];
      let b = separated[1];

      this.sum(a, b)


    } if(values.includes('-')){
      const separated = screen.value.split('-');

      let a = separated[0];
      let b = separated[1];

      this.minus(a,b)
    } if(values.includes('*')){
      const separated = screen.value.split('*');

      let a = separated[0];
      let b = separated[1];

      this.times(a,b)
      
    } if (values.includes('/')) {
      const separated = screen.value.split('/');

      let a = separated[0];
      let b = separated[1];

      this.divide(a,b)
    }
  },
  sum(a,b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);

    const result = number1 + number2;

    screen.value = result

  },
  minus(a,b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);

    const result = number1 - number2;

    screen.value = result;
  },
  times(a,b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);

    const result = number1 * number2;

    screen.value = result;
  },
  divide(a,b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);

    const result = number1 / number2;

    screen.value = result;
  },
}