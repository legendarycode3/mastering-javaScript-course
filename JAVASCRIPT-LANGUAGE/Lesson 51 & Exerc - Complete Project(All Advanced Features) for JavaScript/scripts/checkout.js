// IMPORTING THE "renderCheckoutHeader" FUNCTION FROM "checkoutHeader.js" file
// import { renderCheckoutHeader } from './checkout/checkoutHeader.js';

import {renderOrderSummary} from './checkout/orderSummary.js';
//  renderOrderSummary();


// Importing the "renderPaymentSummary" function from "paymentSummary.js" file
import {renderPaymentSummary} from './checkout/paymentSummary.js';
//  renderPaymentSummary();

import { loadProducts, loadProductsFetch } from '../data/products.js';

import { loadCart } from '../data/cart.js';



/**
 * 2.1 - USING "promises" FOR ASYNCHRONOUS CODE,  PROMISE IS A CLASS
 */
// new Promise((resolve) => {
//         //console.log('Starting the promise codes')
//     //WE RUN THESE "loadProduct" asynchronous code, AND WAIT FOR IT TO FINISH, AND THEN WE RUN ""resolve"" (resolve lets it go to the next step)
//     loadProducts(() => {
//         //console.log('Finished loading the load product');

//         //"RESOLVE" IS USED TO WAIT FOR EACH STEPS BEFORE GOING TO THE NEXT STEP , AND ALSO HELP US SHARE A VALUE BTW 2 STEP OF A PROMISE
//         resolve();
//     });

// }).then(() => {
//     return new Promise((resolve) => {
//         loadCart(() => {
//             //"RESOLVE" IS USED TO WAIT FOR EACH STEPS BEFORE GOING TO THE NEXT STEP
//             resolve();
//         });
//     });
//     //console.log('next step');
//     // renderOrderSummary();
//     // renderPaymentSummary();

// }).then(() => {
//     // RENDERING THE PAGE
//     renderOrderSummary();
//     renderPaymentSummary();
// });




/**
 * 3.  - USING  "ASYNC AWAIT" 
 */
async function loadPage() {
    try {

        //THIS "throw" WILL MANUALLY CREATE AN ERROR
        //throw 'error1';

        //console.log('load page');

        // "await" WILL WAIT FOR THIS LINE TO FINISH AND GET THE RESPONSE BEFORE GOING TO THE NEXT LINE.

        // FIRST 1st , "WE LOAD THE PRODUCTS"
        await loadProductsFetch();

        //SECONDLY 2nd THEN, "WE LOAD THE CART"
        await new Promise((resolve, reject) => {
            loadCart(() => {
                //reject('error3');

                //"RESOLVE" IS USED TO WAIT FOR EACH STEPS BEFORE GOING TO THE NEXT STEP
                resolve();
            });
        });

    } 
    catch (error) {
        console.log('wrong url. Please try again while loading this async await asyncronous code');
    }
    

    // THIRDLY 3rd THEN, "WE RENDER THE PAGE"
    renderOrderSummary();
    renderPaymentSummary();

    //return 'value2';
}
//BELOW WE RUN THE FUNCTION "loadPage()"
loadPage();
// loadPage().then((value) => {
//     console.log('Next Step');
//     console.log(value);
// });






// /**
//  * Promise.all : - 2.
//  * i).LETS US RUN MULTIPLY PROMISES AT THESAME TIME , WITHOUT WAITING FOR EACH PROMISE FIRST BEFORE THE NEXT STEP.
//  * 
//  * ii).Promise.all , IT WAIT FOR THE 2 STEPS TO FINISH FIRST , BEFORE GOING TO THE NEXT.
//  * 
//  * Promise.all , HELP CREATE AN ARRAY OF PROMISES
//  */
// Promise.all([
//     // "loadProductsFetch()" RETURNING A PROMISE
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             //"RESOLVE" IS USED TO WAIT FOR EACH STEPS BEFORE GOING TO THE NEXT STEP
//             resolve();
//         });
//     })

// ]).then((values) => {
//     console.log(values);
//     renderOrderSummary();
//     renderPaymentSummary();
// });






/**
 * USING A "CALLBACK" 1-- FOR ASYNCHRONOUS CODE.. PUT THE "renderOrderSummary" & "renderPaymentSummary" INSIDE THE (LoadProduct function) IN INORDER TO RUN THE CALL BACK FUNCTION TO DISPPLAY THE FILES, SINCE WE ARE USING XMLRequest
 * 
 * NESTED CALL-BACK
 */
// loadProducts( () => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
//     // renderOrderSummary();
//     // renderPaymentSummary();
// });




//import '../data/cart-class.js';
// IMPORTING THE "cart" FUNCTION FROM THE "cart-oop.js" file
// import '../data/cart-oop.js';
// import {cart} from '../data/cart-oop.js';

// import '../data/backend-practice.js'
