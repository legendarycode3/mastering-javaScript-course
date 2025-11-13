
/*const array1 = [1 ,2, 3];

const array2 = array1;

array2.push(8);

console.log(array1);
console.log(array2);


//Results:  array1 = [1, 2, 3, 4]     array2 = [1, 2, 3, 4]
*/


const array1 = [1 ,2, 3];
const array2 = array1.slice();

array2.push(8);

console.log(array1);
console.log(array2);
//Results:  array1 = [1, 2, 3]     array2 = [1, 2, 3, 4]





/* Let say we want to get the FIRST and SECOND value out of the array. We will use the "Index method" to get the value out of the array, to solve this*/
/*
const array3 = [5, 9, 2];
const firstValue = array3[0];
const secondValue = array3[1];

console.log(firstValue);
console.log(secondValue);
//Results:  5   9

*/




/*
const [firstValue, secondValue] = [8, 12, 0];

console.log(firstValue);
console.log(secondValue);
//Results:  8 and  12
*/


/* */
/*
for(let index = 1; index <= 10; index++){
  
    if(index % 3 === 0 ){
        continue;
    }
      console.log(index);
} */
//Results:  1, 2, 4, 5, 7, 8, 10




/* Lets say we want to count from 1 to 10 using a while loop */
let index = 1;
while(index <= 10){

    if(index % 3 === 0){
        index++;
        continue;
    }
   console.log(index);
         index++;
}
    //Results:  1, 2, 4, 5, 7, 8, 10


    




/* Create A Copy Of The Array [1, 4, 9] With Each Number Doubled [2, 8, 18] */

//if we want to use thisloop in a different array as well
function doubleArray(numbers) {
    
    // const numbers = [1, 4, 9];
    const doubled = [];

    for(let index = 0; index < numbers.length; index++) {
        const num = numbers[index];  //Let get the numbers for each index
        
        if(num === 0){
            //break;
            return doubled;
        }
        doubled.push(num * 2);
    }
    //console.log(doubled);

    // We are returning the result
     return  doubled;
}

//Calling the function several times.
//Console logging outside of the function.
console.log(doubleArray([1, 4, 9]));
console.log(doubleArray([8, 7, 2, 5, 0]));

    // RESULT 1: [2, 8, 18] 
    // RESULT 2: [16, 14, 4]