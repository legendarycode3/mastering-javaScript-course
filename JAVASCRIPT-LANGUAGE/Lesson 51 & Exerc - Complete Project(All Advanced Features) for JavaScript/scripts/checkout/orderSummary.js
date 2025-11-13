//1.2 for checkout page
// import {cart, removeFromCart, calculateCartQuantity, addToCart, saveToStorage, updateDeliveryOption} from '../data/cart.js';
import {cart, removeFromCart, calculateCartQuantity, addToCart, saveToStorage, updateDeliveryOption} from '../../data/cart.js';

// import {products} from '../data/products.js';
import {products, getProduct} from '../../data/products.js';

// 1.2 formatCurrency for utils file , imported
// import {formatCurrency} from './utils/money.js';
import {formatCurrency} from '../utils/money.js';

//5. importing external library FOR  checkout.js page(here the code is coming from the internet) - Output to be "hello"
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';

import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

// import { deliveryOptions} from '../data/deliveryOptions.js';
// 1.5 IMPORTING THE deliveryOptionHTML on checkout.page

import { deliveryOptions, getDeliveryOption, calculateDeliveryDate} from '../../data/deliveryOptions.js';

//3.3 IMPORTING THE "renderPaymentSummary" FUNCTION ON "orderSummary.js" FILE
import {renderPaymentSummary} from './paymentSummary.js';
 

/** MAIN IDEA OF JAVASCRIPT (NUMBERING THEM ALL FROM 1  TO  3) FOR  CHECKOUT PAGE
 *  1.    SAVE THE DATA.
 *  2.    GENERATE THE HTML USING JAVASCRIPT (AFTER “SAVING” ,WE USE THE DATA TO GENERATE OUR HTML) , INSTEAD OF WRITING THE HTML.
 * 3. `   MAKE IT INTERACTIVE  (WE MAKE THE WEBSITE INTERACTIVE).
*/   


/** #####   (BETTER WAY TO UPDATE THE PAGE) ANOTHER WAY USING FUNCTION  ########
 * NOW WE GOONA LEARN A BETTER WAY TO UPDATE THE PAGE  
 *  ANOTHER WAY TO UPDATE THE PAGE IS:
 * - AFTER WE UPDATE OUR DATA,WE JUST NEED TO RE-RUN ALL THE CODE (LIKE the html generated whole files, etc )  AND RE-GENERATE ALL THE HTML
 * 
 * 1). FIST, WE GOT TO PUT ALL THE CODE IN A FUNCTION (the generated HTML) SO WE CAN RE-REUN IT anytime  
 * 
 * Render  simply means to "display on the page"
 * */ 

// function renderOrderSummary() {
export function renderOrderSummary() {

   
    //2.4 combinnning all html (CREATING A VARIABLE TO STORE THE "HTML")
    let cartSummaryHTML = '';



    //2. For Checkout Page.  GENERATE THE HTML USING JAVASCRIPT (after “saving” , we use the data to generate our html)- (WE ARE LOOPING THROUGH THE "cart" TO GENERATE THE HTML) , instead of writing the html.  SIMPLY , LOOPING THE (cart) TO GENERATE THE HTML
    cart.forEach((cartItem) => {
            //2.1 This below will be used tosearch for the full product.
            const productId = cartItem.productId;
            
            // HERE WE HAVE SOME CODE THAT TAKES A "PODUCTID" AND FIND THE "MATCHING PRODUCT"
            //2.2 creating a variable to save the result. This for checkout page 
                // let matchingProduct;

                //SINCE WE AE NO LONGER UPDATING THE VARIABLE 'matchingPoduct', WE CAN CHECK FROM 'let to const' 
                const matchingProduct = getProduct(productId);

            //2.3 CHECKING IF THE "product.id" FOR "product.js" IS EQUAL TO "productId" FOR "checkout.js" PAGE
                // products.forEach((product) => {
                //     if (product.id === productId){
                //         matchingProduct = product;
                //     }
                // });

            // console.log(matchingProduct);

            // shared on utils js file instead of using this  for formating curreny 
            // $${(matchingProduct.priceCents / 100).toFixed(2)}




            //2.7 FOR DELIVERYOPTIONID - HERE WE WANT TO GET THE FULL DELIVERYOPTION [WE GOONA USE THIS ID "deliveryOptionId" to find the full deliveryOption , ]  --- >>  With this , we can use it to get the "deliveryDays" and then calculate the day that we need here
            const deliveryOptionId = cartItem.deliveryOptionId;


            //2.8 Same as we did for ProductId
            // let deliveryOption = getDeliveryOption(deliveryOptionId);
            const deliveryOption = getDeliveryOption(deliveryOptionId);


            //LONG PROCESS HERE, BUT YOU CAN USE THIS FUNCTION CREATED TO DO THE SHORTER WAY , WE DID ABOVE.
            // deliveryOptions.forEach((option) => {
            //     if(option.id === deliveryOptionId){
            //         deliveryOption = option;
            //     }
            // });

        



            /** INSTEAD OF REPEATING THESAME CODE EVERYWHERE, LETS RE-USE IT . SO THAT'S WHY WE COMMENTING ON THIS */
            

            // const today = dayjs();
            // //const dateString = calculateDeliveryDate(deliveryOption);
            // const deliveryDate = today.add(
            //     deliveryOption.deliveryDays, 
            //     'days'
            // );
            // //2.9 DISPLAYING IT IN AN EASY TO USE FORMAT (for deliveryOption Date) to get the date
            // const dateString = deliveryDate.format(
            //     'dddd, MMMM, D'
            // );

            const dateString = calculateDeliveryDate(deliveryOption);

            cartSummaryHTML += `
            <div class="cart-item-container 
                js-cart-item-container
                js-cart-item-container-${matchingProduct.id}">
                <div class="delivery-date">
                    Delivery date: ${dateString}
                </div>

                <div class="cart-item-details-grid">
                    <img class="product-image"
                    src="${matchingProduct.image}">

                    <div class="cart-item-details">
                        <div class="product-name">
                            ${matchingProduct.name}
                        </div>
                        <div class="product-price">
        
                            ${matchingProduct.getPrice()}
                            
                        </div>
                        <div class="product-quantity
                         js-product-quantity-${matchingProduct.id}">
                
                            <span>
                            Quantity: <span class="quantity-label1 current-quantity"> ${cartItem.quantity} </span>
                            </span>
                            <span class="update-quantity-link link-primary quantity-label2 js-update-link" data-product-id="${matchingProduct.id}">
                                Update 
                            </span>

                            <div class="update-controls">
                                <input type="number" class="quantity-input input-quantity-link js-quantity-input" min="1" value="1">
                                <span class="save-quantity-link link-primary js-save-link"> Save  </span>
                            </div>
                            
                            <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
                                Delete
                            </span>
                        </div>
                    </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">
                            Choose a delivery option:
                        </div>
                        
                        ${deliveryOptionsHTML(matchingProduct,cartItem)}
                    </div>
                </div>
            </div>
            `;
    });



        // 2 ADDING THE deliveryOptionHTML function (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
    function deliveryOptionsHTML(matchingProduct, cartItem) {
        /* WE GOONA DO 3 STEPS HERE, WE WILL :
        2.1  Loop through deliveryOption 
        2.2  For-Each option, generate some HTML
        2.3  Combine the HTML together
        */

        //2.3 combinnning all html (we create this variable to save the result)
        let deliveryHTML = '';

        //  2.    GENERATE THE HTML USING JAVASCRIPT (AFTER “SAVING” ,WE USE THE DATA TO GENERATE OUR HTML) , INSTEAD OF WRITING THE HTML (THIS IS FOR "deliveryOption genrating").
        
        deliveryOptions.forEach((deliveryOption) => {



            //  const today = dayjs();
            // //const dateString = calculateDeliveryDate(deliveryOption);
            // const deliveryDate = today.add(
            //     deliveryOption.deliveryDays, 
            //     'days'
            // );
            // //2.3 DISPLAYING IT IN AN EASY TO USE FORMAT (for deliveryOption Date) to get the date
            // const dateString = deliveryDate.format(
            //     'dddd, MMMM, D'
            // );

            
            /** INSTEAD OF REPEATING THESAME CODE EVERYWHERE, LETS RE-USE IT . SO THAT'S WHY WE COMMENTING ON THIS */
            const dateString = calculateDeliveryDate(deliveryOption);

         

            // const deliveryOption = cartItem.deliveryOption;
            // const dateString = calculateDeliveryDate(deliveryOption);
            //  calculateDeliveryDate(deliveryOption);


            
            // USING A "TERNARY OPERATOR" HERE AS AN "IF-ELSE STATEMENT" to get the price  same thing (for the deliveryPrice)
            const priceString =  deliveryOption.priceCents === 0 ? 'FREE' :  `$${ formatCurrency(deliveryOption.priceCents)} -`;

            //2.6 parse in the "isChecked" on this function, so to access it from the other function
            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
            

            deliveryHTML += ` 
                <div class="delivery-option js-delivery-option" 
                data-product-id="${matchingProduct.id}"
                data-delivery-option-id="${deliveryOption.id}">
                    <input type="radio"
                    ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                    <div>
                        <div class="delivery-option-date">
                            ${dateString}
                        </div>
                        <div class="delivery-option-price">
                            ${priceString} Shipping
                        </div>
                    </div>
                </div>
            `;

        });

        // 2.4 we will return the result html "deliveryHTML" from the function "deliveryOptionsHTML"
        return deliveryHTML;

        // 2.5 After this we insert the  funtion "deliveryOptionsHTML" to the HTML above we created called "cartSummaryHTML"  , That is instead of created this HTML (below) directly , we will rather delete it and insert the function itself & also parse in the "matchingProduct" so to access it from the other function
                //     <div class="delivery-option">
                //                         <input type="radio" checked
                //                        class="delivery-option-input"
                //                         name="delivery-option-${matchingProduct.id}">
                //                          <div>
                //                          <div class="delivery-option-date">
                //                           Tuesday, June 21
                //                         </div>
                //                          <div class="delivery-option-price">
                //                              FREE Shipping
                //                          </div>
                //                          </div>
                //                        </div>
                //                      <div class="delivery-option">
                //                          <input type="radio"
                //                          class="delivery-option-input"
                //                          name="delivery-option-${matchingProduct.id}">
                //                          <div>
                //                              <div class="delivery-option-date">
                //                                  Wednesday, June 15
                //                             </div>
                //                              <div class="delivery-option-price">
                //                                  $4.99 - Shipping
                //                              </div>
                //                          </div>
                //                     </div>
                //                      <div class="delivery-option">
                //                          <input type="radio"
                //                          class="delivery-option-input"
                //                          name="delivery-option-${matchingProduct.id}">
                //                          <div>
                //                              <div class="delivery-option-date">
                //                                 Monday, June 13
                //                              </div>
                //                              <div class="delivery-option-price">
                //                                  $9.99 - Shipping
                //                              </div>
                //                          </div>
                //                      </div>
    }

    

        //3.  for "checkout page"  MAKING IT INTERATIVE (WE MAKE THE WEBSITE INTERACTIVE):-  PUT IT ON THE WEB PAGE (TAKE THE HTML , PUT IT ON THE WEB PAGE) , and we will do that using the “DOM”
        document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

        updateCartQuantity();
        //calculateCartQuantity();

        //console.log(cartSummaryHTML);



        //3.1 for checkout page
        document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            // forEach of the link we gonna add an EvenetListener
            link.addEventListener('click', () => {
                // console.log('deletes');

                /* 3.2 Algorithm Steps For The 'DELETE' Buttons (steps)
                    1. Remove the product from the cart .
                    2. Update the HTML
                */

                //geting it the data attribute, to access it. (Using the link element , we can get that productId , to access the dataset attribute)
                const productId = link.dataset.productId;
                //console.log(productId);

                // WE UPDATE THE DATA OR THE MODEL AND THEN REGENRATE IT (USING THE MVC)
                removeFromCart(productId);

            
                updateCartQuantity();
             //calculateCartQuantity();

                /* 3.3 How to delete the element from the page (STEPS) 
                1.) Use the DOM to get the element to remove
                2.) Use .remove() method
                */
                // 3.3.1  for checkout page 
                const container = document.querySelector(
                    `.js-cart-item-container-${productId}`
                );
                console.log(container);


                /** C. 3 MAKE IT INTERACTIVE (MAKING IT INTERATIVE THE PAYMENT SUMMARY)
                 * 
                 * 3.1 WHEN WE CLICK THE DELETE, FIRST WE WANT TO "UPDATE THE DATA". AND WE ALREADY DONE THAT USING THE FUNCTION "removeFromCart" ,
                 * 
                 * 3.2 AND NEXT STEP ACCORDING  TO "MVC" , IS TO "REGENERATE ALL THE HTML FOR THE PAYMENT SUMMARY", USING THE FUNCTION "renderPaymentSummary".  THESE WILL RE-CALCULATE ALL THE NUMBERS AND THEN REGENERATE THE HTML.
                 * 
                 * SO LET IMPORT THE FUNCTION , IN (orderSummary.js) FILE, HERE. 
                 */


                // to remove it from the page
                container.remove();

                
                //WHEN DELETING A PRODUCT FROM THE CART , INSTEAD OF USING THE "DOM" , AND UPDATING THE PAGE DIRECTLY WITH (.delete()), REGENERATING THE "HTML"  FOR THE "ORDER-SUMMARY"
                renderOrderSummary();


                //3.2 (FOR PAYMENT-SUMMARY)  - REGENRATING THE HTML FOR THE PAYMENT-SUMMARY. THESE WILL RE-CALCULATE ALL THE NUMBERS AND THEN REGENERATE THE HTML.
                renderPaymentSummary();
            });
        });

            // ADDING LOCAL STORAGE TO OUR CART (checkout.js) INSTEAD OF VARIABLE SAVING (which will not be saved even after refreshed the deleted cart)
        

    function updateCartQuantity() {
        let cartQuantity = 0;
        cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
        });
        
         //4.1 
        document.querySelector('.js-header-quantity').innerHTML = `Checkout (${cartQuantity} items)`;
        console.log(cartQuantity);       
    }

        


    document.querySelectorAll('.js-update-link')
    .forEach((link) => {

        link.addEventListener('click', (event) => {
            const productId = link.dataset.productId;

            // removeFromCart(productId);

            // console.log(productId);

            const cartItem = event.target.closest('.cart-item-container');

            const quantityLabe1 = cartItem.querySelector('.quantity-label1');
            const quantityLabe2 = cartItem.querySelector('.quantity-label2');

            const updateControl = cartItem.querySelector('.update-controls');
            
            const currentQuantity = cartItem.querySelector('.current-quantity');
            const quantityInput = cartItem.querySelector('.quantity-input');


        
            // Hide the display and show the edit fields
            quantityLabe1.style.display = 'none';
            quantityLabe2.style.display = 'none';

            updateControl.style.display = 'block';
            

            // Set the input field's value to the current quantity
            quantityInput.value = currentQuantity.textContent;
        




            // Get all 'save' buttons
        const saveButtons = document.querySelectorAll('.js-save-link');

        saveButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                
                const cartItem = event.target.closest('.cart-item-container');

                const quantityLabe1 = cartItem.querySelector('.quantity-label1');
                const quantityLabe2 = cartItem.querySelector('.quantity-label2');

                const updateControl = cartItem.querySelector('.update-controls');
                
                const currentQuantity = cartItem.querySelector('.current-quantity');
                const quantityInput = cartItem.querySelector('.quantity-input');

                
                
                const newQuantity = parseInt(quantityInput.value);
                

                // Basic validation: Ensure quantity is a positive number
                if (isNaN(newQuantity) || newQuantity < 1) {
                    alert('Please enter a valid quantity (a positive number).');
                    return;
                }
                if (newQuantity > 1) {
                    alert('Please enter a number 1');
                    return;
                }
    
                
                // Hide edit fields and show display fields
                updateControl.style.display = 'none';

                quantityLabe1.style.display = 'block';
                quantityLabe2.style.display = 'block';

                addToCart(productId);
                updateCartQuantity();

            
                //document.querySelector('.current-quantity').innerHTML = `${newQuantity}`;
                document.querySelector('.current-quantity').innerHTML = `${cartQuantity}`;
                //newQuantity =  document.querySelector('.current-quantity').innerHTML = `${cartQuantity}`;
            
                
                // In a real application, you would send this new quantity to your backend
                // For example, using fetch() or XMLHttpRequest
                console.log(`Updated quantity for product to: ${newQuantity}`);
            });

            saveToStorage();   
        });
            
        });
    });





    // For External Link we used on the <Script> </Script>
    //hello();

    // console.log(dayjs());

    /* 4. ALGORITHM (STEPS)TO GET THE DATES FOR THE "checkout.js"   FOR  checkout.js page
        1. Get todays  date.
        2. Do calculations(Add 7 days, ...)
        3. Display the date in easy-to-read format. 
    */
    // INSTEAD OF THESE  STEPS (long steps , we will rather use a shorter way wih similar to go) , WE GONNA USE AN EXTERNAL LIBRARY CALLED "DayJS"


    // 4.1  takes 2 parameters: 1st, "is the number of time that we want to add", 2nd "is the length of time that we want to add"
    // const today = dayjs();

    // //4.2 Do calculation 
    // const deliveryDate = today.add(7, 'days');

    // // console.log(deliveryDate);
    // let realTime =  deliveryDate.format('dddd, MMMM, D');
    // console.log(realTime);





    //3.   MAKE IT INTERACTIVE (for DeliveryOption) 
    document.querySelectorAll('.js-delivery-option')
        .forEach((element) => {
            element.addEventListener('click', () => {
            
            /**
             * 3.2. Update deliveryOptionId in the cart##
             * 3.3  Update the page. 
             */


            /** 3.4 How do we get this 2 values "productId" , "deliveryOptionId" the answer is , if we scrool up , on the "HTML" fo the deliveyOption, you will see we have access to the 'productId', we also have access to the 'deliveryOptionId', So we can use DATA ATTRIBUTE to attach it to the element there. And get the values out of those VALUES out of the DATA ATTRIBUTES using this below (dataset)  */
            const {productId, deliveryOptionId} = element.dataset;

            // const productId = deliveryElement.dataset.productId;
            // const deliveryOptionId  = deliveryElement.dataset.deliveryOptionId;

            //3.1
            updateDeliveryOption(productId, deliveryOptionId);

            renderOrderSummary();


            //3.3 (FOR PAYMENT-SUMMARY) - REGENRATING THE HTML FOR THE PAYMENT-SUMMARY. THESE WILL RE-CALCULATE ALL THE NUMBERS AND THEN REGENERATE THE HTML.
            // WE UPDATE THE DATA OR THE MODEL AND THEN REGENRATE IT (USING THE MVC)
            renderPaymentSummary();

            
        })
    });


}


// Running the function at the start of our page . Since all the Codes are enclosed on the summary function
// renderOrderSummary();