/*  ALGORITHM - Steps To solve this probem 

1.  Create a Loop (for-loop).

2. Check if the number is divisible by 3,if yes display 'Fizz' , instead of the number - (using if else statement)

3. Check if the number is divisible by 5, if yes display 'Buzz' instead.  -(using if else statement)

4. Check if the number is divisible by 3 & 5 , if yes display 'FizzBuzz' instead 

*/



function clickButton() {
    for (let index = 1; index <= 20; index++) {

     let  number = index;

    if(number % 3 === 0 && number % 5 === 0 ){
        console.log(`Fizz Buzz ${number}`);

        // document.querySelector('.js-display-result').innerHTML = number;

    }
    else if (number % 5 === 0) {
        console.log(`Buzz`);
    } 
    else if  (number % 3  === 0) {
         console.log(`Fizz`);
    }

    else {
        console.log(number);
    }
     
}

}

