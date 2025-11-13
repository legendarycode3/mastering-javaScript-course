let calculation = '';

function oneButton() {
   calculation += 1;
    console.log(`${calculation}`);

    let inputElement = document.querySelector('.js-cal-input');
    
    let calResult = Number(inputElement.value);

   document.querySelector('.js-cal-input').innerHTML =  `${calResult}`;
   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function plusButton() {
    calculation += ' + ';
    console.log(`${calculation}`);

    document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}

function equaButton() {
    calculation = eval(calculation);
    console.log(calculation);

    document.querySelector('.js-cal-result').innerHTML =  ` ${calculation}`;
}