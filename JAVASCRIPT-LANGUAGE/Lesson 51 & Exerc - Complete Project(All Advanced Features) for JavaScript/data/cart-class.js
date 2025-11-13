/**CREATING OUR FIRST CLASS.  Class = Object generator 
 * CLASS IS A BETTER WAY OF GENERATING "OBJECT" THAN USING "FUNCTION" (just as we did on the cart-oop.js file)*/ 

class Cart {
        // ADDING A PROPERTY TO A CLASS
    // cartItems = undefined;
    // localStorageKey = undefined;
        // SHORTCUT USED BELOW
    cartItems;

    #localStorageKey;


    /** 
     *  "contructor" ALLOWS US TO RUN SETUP CODE , AFTER CREATING AN OBJECT(INSIDE THE CLASS).
     * "Contructor" , IS A METHOD FOR INITIALIZING OBJECT METHOD 
    */
    constructor(localStorageKey) {
        //"this" POINTS TO THE OBJECT THAT WE GENERATE
        this.#localStorageKey = localStorageKey;
        // bussinessCart.localStorageKey = 'cart-bussiness';

        this.#loadFromStorage();
        // bussinessCart.loadFromStorage();
    }

        //"#" PRIVATE METHOD (loadFromStorage)
    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
        // for now we are using a default value for the "cart" localstoring
        if(!this.cartItems) {
          this.cartItems = 
          [
            {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            // 1.1 ADDING THE deliveryOption (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
            deliveryOptionId: '1'

            }, 
            {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', 
            quantity: 1,
            // 1.2 ADDING THE deliveryOption  (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
            deliveryOptionId: '2'
            }]; 
        }
    }


    saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }


    addToCart(productId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
      
          if(productId  === cartItem.productId){
            matchingItem = cartItem;
          }
        });

        if(matchingItem) {
          matchingItem.quantity += 1;
        } else 
        {
          this.cartItems.push (
          {
    
            productId: productId,
            quantity:  1,

            deliveryOptionId: '1'
            
          });
        }

        /**  "this" ALLOWS YOU TO ACCESS "THE FUNCTION" INSIDE OF AN OBJECT WHEN USING OOP
         * 
         */
        this.saveToStorage();      
    }


    removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
    
          if(cartItem.productId !== productId) {
      
            newCart.push(cartItem);
          }
        });

        this.cartItems = newCart;

        saveToStorage();
    }


    calculateCartQuantity() {
        let cartQuantity = 0;
        this.cartItems.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
        });
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        console.log(cartQuantity);
    }

    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem;

      this.cartItems.forEach((cartItem) => {
          if(productId  === cartItem.productId){
              matchingItem = cartItem;
          }
      });

      matchingItem.deliveryOptionId = deliveryOptionId;

      this.saveToStorage();
    }

}





// GENERATING "cart" OBJECT BELOW USING A CLASS
const cart = new Cart('cart-oop');
const bussinessCart = new Cart('cart-bussiness');



//SETUP CODE
// cart.localStorageKey = 'cart-oop';
// bussinessCart.localStorageKey = 'cart-bussiness';


// cart.loadFromStorage();



// IN OTHER TO ADD A PRODUCT TO THE P"PRODUCT" , "cart" OBJECT, addToCart WAS SAVED HERE . SO TO ACCESS IT WE WILL DO THESE BELOW .. MAKE SURE TO ADD THE "PRODUCT ID" TO  THE PRODUCT
// cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');

console.log(cart);


// bussinessCart.loadFromStorage();

console.log(bussinessCart);


// CHECKING IF AN OBJECT IS "AN INSTANCE OF A CLASS"
console.log(bussinessCart instanceof Cart);

