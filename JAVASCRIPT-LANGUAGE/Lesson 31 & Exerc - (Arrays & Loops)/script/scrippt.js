

function buyClickedMotorcycles() {
    const motorcycles = [
        "Boxer",
        "Jinchin",
        "Hyju"
    ];

    //console.log(motorcycles[0]);
    
    console.log(motorcycles);

    // Changing the value in an Array
    motorcycles[2] = "Ladies";
    console.log(motorcycles);
    
    document.querySelector('.js-motorcycles').innerHTML = `I have ${motorcycles}`;

    [1, "welcome", true, { name: 'socks'}, [3,8]]
    
    //To know if an Array is an object 
    console.log(typeof [3,8]);

    // To check is this value an Array
    console.log(Array.isArray([3,8]));
    

    //Return the length size of an array
    console.log(`The Length Of The MotorCycle Array is: ${motorcycles.length} `);

    //Adds a new element or value to the end of an array.
    motorcycles.push("Mobile");
    console.log(motorcycles);
}



function personalDetails() {
    const person = {
        firstName: "LegendaryCode",
        lastName: "Madu",
        id: 1912,
        
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
         document.querySelector('.js-personalDetails').innerHTML = person.fullName();
}



/* FOR SPLICE array methos */

function fruitsCollection() {
    const fruits = [
        "Banana",
        "Orange",
        "Mango",
        "Pineapple",
        "WeterMelon",
        "Grape"
    ];
    // document.querySelector('js-fruits').innerHTML = fruits;
    fruits.splice(3,0, "Lemon", "Cherry");
    document.querySelector('.js-fruits').innerHTML = fruits;

} 
//RESULT: Banana,Orange,Mango,Lemon,Cherry,Pineapple,WeterMelon,Grape


/* FOR SLICE array methos */
function watchesCollection() {
    const watches = [
        "Rolex",
        "Apple",
        "Pexels",
    ];
    // document.querySelector('.js-watches').innerHTML = watches;
    const wat = watches.slice(1)
    document.querySelector('.js-watches').innerHTML = watches + "<br><br>" + wat;

  
}




    let x = 1;    // Loop Variable
    while(x < 15) { // Loop Condition
        console.log(x);
        x = x + 1; //increement steps
    }


   
    for(let y = 5; y < 20; y++) {
        console.log(y);
    }

    

    /*  RANDOM NUMBER GEREATION */

    let randomNumber = 0;
    while(randomNumber < 0.5) {
        randomNumber = Math.random();
    }
    console.log(randomNumber);

    // for( let randonNumber = 0; randonNumber < 0.5; randonNumber++) {
    //     randonNumber = Math.random();
    //     console.log(randonNumber);
    // }


/*
    const dailRoutineList = [
    'Make Meal',
    'Footballer',
    'Music',
    'Code'
];
    for(let index = 0; index <= dailRoutineList.length -1; index++) {
       const value =  dailRoutineList[index];
        console.log(value);
    }
*/


    const numbers = [1, 1, 3];
    let total = 0;  // The accumulator variable

    for(let index = 0; index < numbers.length; index++) {
        const num = numbers[index]; //Let get the numbers for each index
        total = total + num; //Accumulator variable assigning
    }
    console.log(total);

    // RESULT: 5




    /* Create A Copy Of The Array [1, 1, 3] With Each Number Doubled [2, 2, 6] */
    const doubled = [];
    for(let index = 0; index < numbers.length; index++) {
        const num = numbers[index];  //Let get the numbers for each index
        doubled.push(num * 2);
    }
    console.log(doubled);

     // RESULT: [2, 2, 6] 



     let originalArray = [9, 2, 3, 4, 5];
originalArray.reverse();
console.log(originalArray); // Output: [5, 4, 3, 2, 9]




 