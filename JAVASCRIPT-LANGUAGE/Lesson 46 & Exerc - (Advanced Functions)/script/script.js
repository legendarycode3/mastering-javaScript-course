

/*  Arrow Function*/
const arrowFunction1 = () => {
    console.log(" Arrow function");
}
arrowFunction1();




/*  Regular Type of Function*/
const regularFunction1 = function() {
    console.log(" Regular function");
}
regularFunction1();




/* Arrow Function with 2 parameters & return statement added  */
const arrowfunction2  = (param_1, param_2) => {
    return param_1 + param_2;
}
let reg2  = arrowfunction2(4, 6);
 console.log(reg2);
// RESULTS:  10







//You can use this in regular function that is not inside another function
// let autoPlay = () => {

// }

// const obj1 = {
//     method: () => {
        
//     },
//     method() {

//     }
// };



/* Arrow Function with 1 parameter */
 const arrowFunction3  = (x_value) => {
    console.log(x_value * 7);
 };
 arrowFunction3(6);
// RESULTS:  42




 /* One-Line Arrow Function */
 const oneLine = () => 4 + 7;
 console.log(oneLine());
 // RESULTS:  11






  const buttonElement  = document.querySelector('.js-button');

 /** Using EVENT LISTENER */
const eventListener  = () => {
    console.log('click 1');
};
buttonElement.addEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {
    console.log("Click 2");
});





/**  Array Method "filter()" */
let filterElement = [2, -5, 8];
let filterNumbers = filterElement.filter((value, index) => {
    if(value >= 0){
        console.log(value);
        return true;
    }
    else{
        return false;
    }
    
    // OR USE THIS BELOW
    //return value >= 0;

}); 






/** Array Method "map()"  , do this to double the number*/
const numbers1  = [1, 3, 6, 8];
const doubleNumber1 = numbers1.map((num1, index) => {
    for (let index = 0; index < numbers1.length; index++) {
       console.log(`The Double Map Array Values includes: ${num1 * 2}`);
    }
    
});  // RESULTS: 2, 6, 12, 16



// OR do this to "Triple this values", using thesame map()  Array Method
const  numbers2 =  [4, 7, 9 ];
const  tripleNumber2 = numbers2.map((valueNum2, index) => {
    
    console.log(`The Double Map Array Values includes: ${valueNum2 * 3}`);
    return;
})
// RESULTS: 8, 12, 24, 32



// OR do this to "Fourple this values", using thesame map()  Array Method
console.log([5, 6, 10].map((valueNum3, index) => {
    return valueNum3 * 4
}));
// RESULTS: 20, 24, 40




// This code (for "Fourple" those thesame thing as the one on top , but its just a (Arrow function shortcut this) )
console.log([5, 6, 10].map(valueNum3 =>  valueNum3 * 4));
// RESULTS: 20, 24, 40