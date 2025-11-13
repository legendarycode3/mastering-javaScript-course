  // 5.1
// export const cart = [];



// 1.1  For checkout page
/** SAVING THE DATA's INSIDE OUR JAVASCRIPT  (for checkout.html &  checkout.js)  . it is what we call...  Below is "an array of objects  above*/
// export let cart = [{
//   productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//   quantity: 2,
// }, {
//   productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
//   quantity: 1
// }];
 

// 
/** SAVING THE DATA's INSIDE OUR JAVASCRIPT  (for checkout.html)  . it is what we call...  Below is "an array of objects */

// 7.3  Getting the cart from "Local Storage" instead of just using a "variable saving" which is (json) 
export let cart;
//  = JSON.parse(localStorage.getItem('cart'));
// // for now we are using a default value for the "cart" localstoring
// if(!cart) {
//   cart = [{
//     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//     quantity: 2,
//     // 1.1 ADDING THE deliveryOption (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
//     deliveryOptionId: '1'

//   }, {
//     productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', 
//     quantity: 1,
//     // 1.2 ADDING THE deliveryOption  (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
//     deliveryOptionId: '2'
//   }]; 
// }


loadFromStorage();


/** A FUNCTION TO RE-RUN THE "cartTest.js"  JASMINE TEST
 * 
 */
export function loadFromStorage() {
  //WE  NEED TO CONVERT THIS "localStorage.getItem('cart')" BACK TO AN ARRAY BECUS IT IS A STRING 'cart'
  cart = JSON.parse(localStorage.getItem('cart'));
// for now we are using a default value for the "cart" localstoring
  if(!cart) {
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      // 1.1 ADDING THE deliveryOption (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
      deliveryOptionId: '1'

    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', 
      quantity: 1,
      // 1.2 ADDING THE deliveryOption  (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
      deliveryOptionId: '2'
    }]; 
  }

}



// 3.1 CREATED THE cart.js , SO THAT WHEN "ADD TO CART" IS CLICKED FROM amazon.html PAGE, IT WILL ADD IT      

// const cart =  [
// ];


// 7. Saving the checkout.js file(added to the carts) locally instead of just using ordinary json variable asigning.  We will use this function , so that when ever we "update the cart" we will save it to the Local Storage.
export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}







// 6.1 THE "FUNCTION" CREATED TO JUST CALL IT WHEN NEEDED
export function addToCart(productId) {
      /** 3.2 STEPS FOR ADD A PRODUCT IN THE CART WHEN CLICKED ON THE "addToCart" BUTTON
     * 1. CHECK IF THE CART IS ALREADY IN THE CART
     * 2. IF IT IS ALREADY IN THE CART WE JUST INCREASE THE QUANTITY BY ONE (1)
     * 3. IF IT IS NOT IN THE CART, WE ADD IT  TO THE CART (WHEN CLICKED ON "addToCart")
     * 
     */

      // CREATED THIS VARIABLE SO WE CAN USE IT LATTER
    let matchingItem;

       // 3.2.1. 
      cart.forEach((cartItem) => {
        // 3.2.1. CHECK IF THE CART IS ALREADY IN THE CART (checking ,if the productId ==== to the "productId" already in the cart)
        if(productId  === cartItem.productId){
           matchingItem = cartItem;
        }
      });

      // 3.2.2. IF IT IS ALREADY IN THE CART WE JUST INCREASE THE QUANTITY BY ONE (1)
      if(matchingItem) {
        matchingItem.quantity += 1;
      } else 
      {
        // 3.2.3. IF IT IS NOT IN THE CART, WE ADD IT  TO THE CART (WHEN CLICKED ON "addToCart") - ADDING THE PRODUCT TO THE CART(cart)
        cart.push (
        {
          // productName: productName
          productId: productId,
          quantity:  1,

           // 1.3 HERE ADDING A PRODUCT TO THE CART  (to make selection of delivery time arrival) for checkout.js
          // GIVING IT A "deliveryOptionId" WHEN WE ADD A NEW PRODUCT  (for new product give id '1', to select the first one) ---  from (deliveryOption.js Page)
          deliveryOptionId: '1'
          
        });
      }
     
      console.log(cart);
      // 7.1
      saveToStorage();      
}



export function calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    //  4.1 
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    console.log(cartQuantity);
}



// 3.2 for checkout page (A function for removing the product in the cart)
/** 3.2.1 Algorithm steps
 * 1. Create a new array
 * 2. Loop through the cart
 * 3. Add each product to the new array except for this "productId".
 * 
 */

export function removeFromCart(productId) {
  // 3.2.1
  const newCart = [];

  // 3.2.2
  cart.forEach((cartItem) => {
  
    //3.2.3
    if(cartItem.productId !== productId) {
      // The result of this , is goona contain all the "cartItem" that dont match the productID. 
      // It will show us the remaining product
      newCart.push(cartItem);
    }
  });

  // taking our newCart and replace it with the cart up 
  cart = newCart;

  //7.2
  saveToStorage();
} 
/** MAIN IDEA OF JAVASCRIPT (NUMBERING THEM ALL FROM 1  TO  3) FOR  CHECKOUT PAGE (DELIVERY OPTION )
 *  1.    SAVE THE DATA.
 *  2.    GENERATE THE HTML USING JAVASCRIPT (AFTER “SAVING” ,WE USE THE DATA TO GENERATE OUR HTML) , INSTEAD OF WRITING THE HTML.
 * 3. `   MAKE IT INTERACTIVE  (WE MAKE THE WEBSITE INTERACTIVE).
*/   







/** STEPS (FOR "DELIVERYOPTION")  3. MAKING IT INTERACTIVE  (WE MAKE THE WEBSITE) -- "the Controller" INTERACTIVE).   [WHEN WE CLICK A DELIVERY OPTION, WE NEEN TO DO " THINGS"]
 * 
 * 3.1)  Update DELVERYOPTIONID (deliveryOptionId) in the cart.
 * 3.2.) Update the page
 * 
 * 
*/


//FUNCTION CODE, THAT TAKES A "PRODUCT ID" , AND FINDS THE "MATCHING PRODUCT" IN THE CART
// ON THE FUNCTION PARAMETER (WE NEED TO KNOW THE "PRODUCT" THAT WE WANT TO UPDATE, AS WELL AS THE "DELIVERYOPTION" THAT WE CHOOSE) i. product  ii. Delivery Option
export function updateDeliveryOption(productId, deliveryOptionId) {
// 3. export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  //3.1 WE WANT TO LOOP THROUGH THE CART AND FIND THE PRODUCT.
      // 3.1.1.
  cart.forEach((cartItem) => {
      if(productId  === cartItem.productId){
          matchingItem = cartItem;
      }
  });

  //3.2.1  EACH CARTITEM HAS IT PROPERTY CALLED ('deliveryOptionId') SO WE JUST GOONA UPDATE THE PROPERTY.
  matchingItem.deliveryOptionId = deliveryOptionId;

  //3.2.2  BECAUSE WE "UPDATED THE CART", WE SHOULD SAVE IT TO (LOCAL STORAGE)
  saveToStorage();
}






// export let products =  [];

  // CREATING A "FUNCTION" TO LOAD THESE PRODUCTS FROM THE BACKEND
  //"loadProduct" IS ASYNCHRONOUS
export function loadCart(fun) {
  // CREATING A REQUEST (USING "XML")
  const xhr = new XMLHttpRequest();

  // IN ORDER TO WAIT FOR A RESPONSE
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    
    /**
     * CONVERTING THESE "JSON RESPONSE" BACK TO "JAVASCRIPT ARRAY OR OBJECT" USING JSON.parse  --  
     * AND ALSO CONVERTING AGAIN THE "PRODUCTS OBJECTS" INTO A CLASS USING (.map)
    */
    // products = JSON.parse(xhr.response);
   
    //console.log('load products');

    fun();

  });
  //   //const url  = "https://supersimplebackend.dev/products";
  xhr.open("GET", 'https://supersimplebackend.dev/cart');
  xhr.send();
}