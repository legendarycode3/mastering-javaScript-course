
let autoplayInterval; // To store the interval ID for clearing
let isAutoplaying = false; // To track the autoplay state

function startAutoplay() {
    // Your autoplay logic here (e.g., advanceSlide(), playNextMedia())
    console.log("Autoplay is running..."); 
}

function toggleAutoplay() {
    const autoplayButton = document.getElementById('autoplayToggle');

    if (!isAutoplaying) {
        // clearInterval(autoplayInterval); // Stop the autoplay
        // autoplayButton.textContent = "Start Autoplay";
        // isAutoplaying = false;
        autoplayInterval = setInterval(startAutoplay, 3000); // Start autoplay every 3 seconds
        autoplayButton.textContent = "Stop Autoplay";
        isAutoplaying = true;
    } else {
        // autoplayInterval = setInterval(startAutoplay, 3000); // Start autoplay every 3 seconds
        // autoplayButton.textContent = "Stop Autoplay";
        // isAutoplaying = true;
        clearInterval(autoplayInterval); // Stop the autoplay
        autoplayButton.textContent = "Start Autoplay";
        isAutoplaying = false;
    }
}

/* Attach the toggleAutoplay function to the button's click event */

// document.getElementById('autoplayToggle').addEventListener('click', toggleAutoplay);














function greeting(){
    console.log("Good Morning, Greeting 1")
}

greeting(); 



 // FROM NUMBER 9 TO NUMBER 49 , THEY ARE ALL ANYNOMOUS FUNCTIONs EXAMPLES

// Functions are values . example here 'function1' is a value
const function1 = function greeting(){
    console.log("Greeting 2");
}

console.log(function1);




/* Callback  */
setTimeout(function() {
    console.log("GoodLuck Jeffery, This runs after 2 seconds");
}, 2000);



/* Immediately invoked function execution */
(function() {
    console.log("IIFE");
})();




/* Sometime you might want to pass arguments into an anynomous funtion, like this example below */
let persons = {
    firstName: "LegendaryCode",
    lastName: "Maduchem"
};

(function() {
    console.log(`${persons.firstName} ${persons.lastName}`);
}) (persons);




/* This function below */
let foods = function () {
    console.log("Mango , apple All on an Anynomous Function");
};
/* Can be ShortHand (shortended using arrow function) */
let food = () => console.log("Just need Orange on this shorthand usage"); 





const object1 = {
    score: 8,
    // When function saved inside an object it is called a method
    fun:  function wins() {
        console.log("You have a great score");
    }
};

object1.fun();






/* Passing A Function Into Another FUnction */
function welcome(greatings) {
    greatings();
}
welcome( function(){  //passing in this call-back function
    console.log("Williams is back to being Champion");
});





/** Asyncronous Code  with "setTimeout"*/
console.log("Beginning of the SetTimeOut program");

setTimeout(function() {
    console.log("TimeOut 1");
    console.log("TimeOut 2");
}, 6000);
console.log("Ending of the SetTimeOut Program")





/** Asyncronous Code  with "setInterval"*/
console.log("Beginning of the SetInterval Program");

// setInterval(function(){
//     console.log("Interval 1");
//     console.log("Interval 2");
// }, 6000);

setInterval(() => {
    console.log("Interval 1");
    console.log("Interval 2");
}, 6000);

console.log("End of the SetInterval Program");

















/**  LOOPING THROUGH AN ARRAY WITH  -  forEach() method */
const numbersMultiplier = [
    4, 6, 8, 10, 12, 14
]

numbersMultiplier.forEach(function(numValue, index){
    if (numValue === 8) {
        return;  // Will skip 8 & continue
    }
    console.log(`The Number Index Is: ${index}`);
    console.log(numValue * 2);
});
        // RESULTS: 8 12 16 20 24 28








/**  LOOPING THROUGH AN OBJECT WITH  -  forEach() method  (note: you have to convert it to array first using the technics properties like: key, values , entries) --- Here we geting the "key" only */
const userNumbers = {
    num1: 4,
    num2: 6,
    num3: 4,
    num4: 6,
    num5: 8
};

let numbers = Object.keys(userNumbers);
numbers.forEach(function(number1) {
    console.log(number1);
});







 /**  LOOPING THROUGH AN OBJECT WITH  -  forEach() method  (note: you have to convert it to array first using the technics properties like: key, values , entries)  --- Here we geting the "key" & "value"*/
const clientNumbers = {
    num6: 10,
    num7: 12,
    num8: 14,
    num9: 16,
    num10: 18
};

let allNumberArray = Object.entries(clientNumbers);
allNumberArray.forEach(function(number2){
    console.log(number2);
});





