import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js';

import {addOrder} from '../../data/orders.js'


/**  AS ALWAYS WHEN CREATING WEBSITE , EACH SECTION  WE WANT TO BE INTERACTIVE , WE USUALLY FOLLOW THREE(3) STEPS PROCESS: 
 * 
 * A. SAVE THE DATA (in MVC , this is called the "Model")
 * B. GENEATE THE HTML
 * C. MAKE IT INTERACTIVE
 *  Now, this is for "PAYMENTSUMMARY.js" PAGE
*/



//A. SAVING(SAVE) THE DATA (in MVC , this is called the "Model") (Saving the data) FOR "PAYMENTSUMMARY"

/** (FOR TOTAL COST OF THE CART, SELECTED) -- (FOR THE "COST OF THE PRODUCT CALCULATION" TOTAL - "ITEM" CALCULATION)  FOR  "PAYMENTSUMMARY.js" TO BE DISPLAYED ON THE "CHECKOUT" PAGE 
 *  STEPS OR ALGORITHM TO THE PAYMENTSUMMARY
 *      1. Loop through the cart. (so therefore , we will import the "cart.js" ).
 *      2. For each product ,  price  * quantity.
 *      3. Add everything together 
 * */ 


// 1. JUST AS THE "ORDERSUMMARY.js" FILE LETS PUT ALL OUR CODE FOR "PAYMENTSUMMARY.JS" FILE IN A FUNCTION. (FOR  "PAYMENTSUMMARY.js" TO BE DISPLAYED ON THE "CHECKOUT" PAGE)
export function renderPaymentSummary() {
    // JUST RUNNIING THE "CONSOLE.LOG() FILE" TO KNOW IF OUR CODE IS WORKING
        // console.log('payment summary .....');


    //  (FOR TOTAL COST OF THE CART, SELECTED)  (FOR  "PAYMENTSUMMARY.js" TO BE DISPLAYED ON THE "CHECKOUT" PAGE)
    //3.1  ADDING EVERYTHING TOGETHER ON HTML 
    let productPriceCents = 0;

    // 2.1 (FOR SHIPPING PRICE) 
    let  shippingPriceCents = 0;

    // (FOR TOTAL BEFORE TAX)
    // let totalBeforeTaxCents;

    //1.1 LOOPING THROUGH the "CART.JS" FILE
    cart.forEach((cartItem) => {
        //1.2 To get the full productID and lets save this product(getProduct) in a variable
       const product = getProduct(cartItem.productId);
       


       // 2.1 (FOR TOTAL COST OF THE CART, SELECTED)  
       // For Each product , price * quantity (FOR  "PAYMENTSUMMARY.js" TO BE DISPLAYED ON THE "CHECKOUT" PAGE)
       // EVERYTIME WE LOOP THROUGH THE (cart), WE GOONA ADD THIS () to the variable ()
       productPriceCents +=  product.priceCents * cartItem.quantity;





       /** STEPS / ALGORITHM (TO CALCULATE "SHIPPING PRICE") - (FOR "SHIPPING COST" OF THE CART)
         * 1. LOOP THROUGH THE CART (cart)
         * 2. ADD ALL THE SHIPPING COSTS TOGETHER.
        */

       // 1.1 (FOR SHIPPING PRICE) AFTER LOOPING THROUGH THE CART , NOW WE CAN GET THE PRICE FOR THE "DELIVERY OPTION"
       const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
      

       // 1.2 ADD ALL THE SHIPPING COSTS TOGETHER
        // EVERYTIME WE LOOP THROUGH THE (cart), WE GOONA ADD THIS () to the variable ()
       shippingPriceCents += deliveryOption.priceCents;


       //(FOR TOTAL-BEFORE-TAX) ON ORDER SUMMARY
    //    totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    
    });
        //console.log(productPriceCents);
        //console.log(shippingPriceCents);
        
        //(FOR TOTAL-BEFORE-TAX  ) ON ORDER SUMMARY
        const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
        //console.log(totalBeforeTaxCents);
        
        // (FOR TAX-CENT  ON ORDER SUMMARY) 10/100 * totalBeforeTax
        const taxCents = totalBeforeTaxCents * 0.1;
        //console.log(taxCents);

        // (FOR ORDER-TOTAL) ON ORDER SUMMARY
        const orderTotal =  totalBeforeTaxCents + taxCents;
        //console.log(orderTotal); 






     




        //B. GENEATE THE HTML (in MVC , THIS IS CALLED THE "View") FOR "PAYMENT-SUMMARY"
        const paymentSummaryHTML = 
        `
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div class="js-quantity"> </div>

            <div class="payment-summary-money">
                $${formatCurrency(productPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
                $${formatCurrency(shippingPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
                $${formatCurrency(totalBeforeTaxCents)}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
                $${formatCurrency(taxCents)}    
            </div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
                $${formatCurrency(orderTotal)}
            </div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
        `;


        

        // C. MAKE IT INTERACTIVE (in MvC , this is the "CONTROLLER")
        document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;


        // MAKING THE "js-place-order" INTERACTIVE SO THAT IT WOULD LOAD FROM THE BACKEND  (THIS IS HOW A REAL-WORLD WEBSITE WORK. INSTEAD OF CREATING THE ORDER ON THE WEBPAGE  OR ON OUR COMOUTER, RATHER WE SEND A HTTP REQUEST TO THE BACKEND)
        /**
         * ADDING "async" AND "await" FOR ASYNCRONOUS PROGRAMMING. AND BECUS WE USE "async" WE CAN SAVE THE "response" IN A VARIABLE
         * 
           * HERE WHEN WE "click the button", WE GOONA MAKE A REQUEST TO THE BACKEND "ASYCHRONOUSLY" TO CREATE THE ORDER.
           * 
           * INSTEAD OF JUST LOADING IT "SYNCHRONOUSLY".
           *  
           * ONLY IF YOU HAVE A BACKEND YOU WONT TO USE OR LOAD FROM.
           * 
           * WE WILL ALSO CREATE A "POST" REQUEST (TO create Something from the backend) WHEN SENDING DATA TO THE BACKEND.
           *  
           * "headers" GIVES THE BACKEND MORE INFORMATION ABOUT OUR REQUEST.
           * 
           * NOTE: "WE CANTS SEND AN OBJECT DIRECTLY IN OUR REQUEST" , WE NEED TO CONVERT IT TO JSON
           *  */
        document.querySelector('.js-place-order')
          .addEventListener('click', async () => {
          
            try {
                // SAVING THE "response" IN A VARIABLE
                const response = await fetch('https://supersimplebackend.dev/orders', {
                    method: 'POST',
                    headers: {
                      //THIS "content-type", TELL THE BACKEND WHAT TYPE OF DATA WE ARE SENDING IN OUR REQUEST
                      'Content-Type': 'application/json'
                    },
                    // CONVERTING OUR REQUEST TO "JSON" STRING cart
                    body: JSON.stringify({
                      cart: cart
                    })

                }); 
                // GETING THE DATA THAT IS ATTACHED TO THE "json" , WE NEED  TO USE response.json" AND USE "await" IN IT FRONT, TO WAIT FOR THE PROMISE TO FINISH BEFORE GOING TO THE NEXT LINE.    
                const order = await response.json();
                // console.log(order);
                addOrder(order);  

            } catch (error) {
               console.log("Unexpected Order Error, Try Again Later");
            }


            /**
             * AFTER WE CREATE AN "order" WITH THE HELP OF window.location, WE CAN GO TO THE ORDER.html PAGE instantly IMMEDIATELY WE CLICK THE EVENT LISTENER.
             * s
             * "window.location" IS A SPECIAL OBJECT, PROVIDED BY JAVASCRIPT , USED TO "CONTROL THE URL AT THE TOP OF THE BROWSER".
             */
            window.location.href = 'orders.html';
        });
        
       



      function updateCartQuantity() {
        let cartQuantity = 0;
        cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
        });
        //  4.1 
        document.querySelector('.js-quantity').innerHTML = `items (${cartQuantity}):`;
      }


      updateCartQuantity();
     
      
}










// C. MAKE IT INTERACTIVE (MAKING IT INTERATIVE THE PAYMENT SUMMARY) - (IN mvc is called the "CONTROLLER")

/** C. 3 MAKE IT INTERACTIVE (MAKING IT INTERATIVE THE PAYMENT SUMMARY)
 * 
 * 3.1  WHEN WE CLICK THE LINK, FIRST WE WANT TO UPDATE THE DATA. AND WE ALREADY DONE THAT USING THE FUNCTION "removeFromCart" ,
 * 
 * 3.2  AND NEXT STEP ACCORDING  TO "MVC" , IS TO REGENERATE ALL THE HTML FOR THE PAYMENT SUMMARY, USING THE FUNCTION "renderPaymentSummary".  THE WILL RE-CALCULATE ALL THE NUMBERS AND THEN REGENERATE THE HTML.
 * SO LET IMPORT THE FUNCTION , IN (orderSummary.js) FILE.
 */


