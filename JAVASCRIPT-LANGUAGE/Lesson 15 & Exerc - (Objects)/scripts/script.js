
// /* CREATING AN OBJECT*/
// const product = {
//     name: 'socks',
//     price: 1050
// };

// console.log(product);
// console.log(`The Total Price Cost: ${product.price}`);

// // Changing the values initialy assigned onth Products
// product.price = 3000;
// product.name = 'LegendarycCode';
// console.log(product);

// /* Delecting a value from an object created */
// delete product.name;
// console.log(product);

// /* Adding  a New value To an object created */
// product.newProperty = 'Williams';
// product.newProperty = true;
// console.log(product);





const product2 = {
    name: 'shirt',
    ['quantity-rates']: 6 ,

    grading: {
        identity: 'legend',
        amount: '4.4 GP'
    },
    //Another type of value we can put in an “object” is   a function(It works becus a function is another type value in javascript ).
    fun: function funtion1(){
        console.log('function inside an object');
    }
};
console.log(product2);
console.log(product2.name);



// another way of accessing values inside objects which is using square
console.log(product2['name']);

console.log(product2['quantity-rates']);

console.log(product2.grading['amount']);
product2.fun();

JSON.stringify(product2);

console.log(typeof console.log);

/* Converting: JAVASCRIPT OBJECT ->  JSON */
console.log( JSON.stringify(product2));


/* CONVERTING BACK TO:   JSON ->  JAVASCRIPT OBJECT */
const jsonString = JSON.stringify(product2);
let result;
result = JSON.parse(jsonString); //built-in json 
console.log(result); 




console.log('welcome'.length); //.length property
console.log('Hello'.toUpperCase()) //.toUpperCase method
/* Javascript has a special property called "Auto BOxing". */

*/Javascript automatically wraps the strings in a special object.  Auto-Boxing also works with "nubmer & boolean" */

3.0.toString();
true.toString();



/* OBJECTS ARE REFERENCES */
const object1 = { //Even do we use const , we can still change the values inside the value.
    message: 'hello'
};
const object2 = object1;  //Copying  by reference

object1.message  = 'Thanks for updating it the message one content, Leonardo';
console.log(object1); 
console.log(object2);  


// Trying To Compare Objects
const object3 = {
    message: 'Thanks for updating it the message one content, Leonardo'
};

console.log(object3 === object1);
console.log(object2 === object1);



/* "Destructing shortcut" Object4 ex. - An easier way to take properties out of an object e.g below*/
const object4 = {
    message: 'Welcome Sir',
    price: 900
};
//If we want to get the message property of 'object4' out of this object  with a SHORT-CUT format, we do this below:
// const message = object4.message;
const { message, price } = object4;  //Destructuring -  short-cut code for this above 
console.log(message);
console.log(price);


/** "Short-Hand property"  object5 ex. - */
const object5 = {
    // message: message,
    message
};
console.log(object5)



/** "Short-Hand Method" object6 ex.*/
const object6 = {
    // method: function function1() {
    //     console.log('method');
    // }

    /**  Below is a Short-Cut for writing object6 "Short-Hand Method"  */
    method() {
        console.log('method');
    }
};
console.log(object6);
object6.method();

//  add(5);


aEYUI-[]=   