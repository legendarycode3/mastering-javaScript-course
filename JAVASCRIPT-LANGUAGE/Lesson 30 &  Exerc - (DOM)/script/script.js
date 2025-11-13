let calculation = '';


function oneButton() {
   calculation += 1;
    console.log(`${calculation}`);

    // let inputElement = document.querySelector('.js-cal-input');
    
    // let calResult = Number(inputElement.value);
   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function twoButton() {
    calculation += 2;
    // console.log(`${calculation}`);

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function threeButton() {
    calculation += 3;

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function plusButton() {
    calculation += ' + ';

    document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function fourButton() {
    calculation += 4;

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function fiveButton() {
    calculation += 5;

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function sixButton() {
    calculation += 6;

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function minusButton() {
    calculation += '-';
    document.querySelector('.js-cal-result').innerHTML = `${calculation}`;
}


function sevenButton() {
    calculation += 7;

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function eightButton() {
    calculation += 8;

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function nineButton() {
    calculation += 9;

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function timesButton() {
    calculation += '*';
    document.querySelector('.js-cal-result').innerHTML = `${calculation}`;
}


function zeroButton() {
    calculation += 0;

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}


function dotButton() {
    calculation += '.';

   document.querySelector('.js-cal-result').innerHTML =  `${calculation}`;
}

function equaButton() {
    calculation = eval(calculation);

    document.querySelector('.js-cal-result').innerHTML =  ` ${calculation}`;
}



function divideButton() {
    calculation += '/';
    document.querySelector('.js-cal-result').innerHTML = `${calculation}`;
}



function clearButton() {
     calculation = ``;
     document.querySelector('.js-cal-result').innerHTML = `${calculation}`;
}

























