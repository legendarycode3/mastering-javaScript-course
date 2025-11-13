import { renderOrderSummary} from '../../scripts/checkout/orderSummary.js'; 

import {loadFromStorage, cart} from '../../data/cart.js';

import {loadProducts, loadProductsFetch} from '../../data/products.js';

// CREATING A TEST SUITE (using 'describe')
describe('test suite: renderOrderSummary', () => {

    // PUTING THESE 2 VARIABLES OUTSIDE OF THE FUNCTION (beforeEach()) , BECAUSE OF scope() --> IN ORDER TO ACCESS THEM
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
        
    // "beforeAll" IT WILL RUN A FUNCTION "loadProduct" BEFORE ALL OF OUR TEST.."done()" IS A FUNCTION TO WAIT  ---- TESTING FOR THE BACKEND
    beforeAll((done) => {
        // loadProducts(() => {
        //     done();
        // });
        loadProductsFetch().then(() => {
            done();
        });
    
    });

    // CREATING "HOOK"
    beforeEach(() => {
        spyOn(localStorage, 'setItem');

        // THESE WILL SETUP THE HTML PRODUCT THAT WE NEED AS WELL AS THE CART
         document.querySelector('.js-test-container').innerHTML = ``;
        //  <div class="js-order-summary"> </div>
        // <div class="js-payment-summary"> </div>

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                // [{
                //     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                //     quantity: 1,
                //     deliveryOptionId: '1'
                // }]
                productId: productId1,
                quantity: 2,
                // 1.1 ADDING THE deliveryOption (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
                deliveryOptionId: '1'

                }, {
                productId: productId2, 
                quantity: 1,
                // 1.2 ADDING THE deliveryOption  (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
                deliveryOptionId: '2'
            }] );
        });
        
        loadFromStorage();

        //RENDERING THE ORDER SUMMARY
        renderOrderSummary();
    });


    /** 
     * TWO (2) TINGS TO TEST ARE:
     * 1. HOW THE PAGE LOOKS
     * 
     * 2. HOW THE PAGE BEHAVES 
     */


    // 1. HOW THE PAGE LOOKS
    it('displays the cart', () => {
        // document.querySelector('.js-test-container').innerHTML = `
        // <div class="js-order-summary"> </div>`;


        // const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        // const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
        
        // spyOn(localStorage, 'getItem').and.callFake(() => {
        //     return JSON.stringify([{
        //         // [{
        //         //     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        //         //     quantity: 1,
        //         //     deliveryOptionId: '1'
        //         // }]
        //         productId: productId1,
        //         quantity: 2,
        //         // 1.1 ADDING THE deliveryOption (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
        //         deliveryOptionId: '1'

        //         }, {
        //         productId: productId2, 
        //         quantity: 1,
        //         // 1.2 ADDING THE deliveryOption  (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
        //         deliveryOptionId: '2'
        //     }] );
        // });
        
        // loadFromStorage();

        // // CALLING THE FUNCTION
        // renderOrderSummary();

        //document.querySelectorAll('.js-cart-item-container');

        expect(
            // THESE CODE HERE, GIVES US AN ARRAY OF ELEMENT
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(2);
           // AND "toEqual" CHECKS IF WE HAVE TWO OF THESE ELEMENT ('.js-cart-item-container') IN THE PAGE


        // document.querySelector(`.js-product-quantity-${productId1}`)
        expect(
            document.querySelector(`.js-product-quantity-${productId1}`).innerText
        ).toContain('Quantity: 2');

         // document.querySelector(`.js-product-quantity-${productId1}`)
        expect(
            document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain('Quantity: 1');

        
        document.querySelector('.js-test-container').innerHTML = '';

        //ALL THE HTML THAT WE CREATED WAS PLEASED INSIDE OF THIS HTML
        //  document.querySelector('.js-test-container').innerHTML = `
        // <div class="js-order-summary"> </div>`;
        
    });









    //2. HOW THE PAGE BEHAVES 
    it('removes a product', () => {

        // spyOn(localStorage, 'setItem');

        // // THESE WILL SETUP THE HTML PRODUCT THAT WE NEED AS WELL AS THE CART
        //  document.querySelector('.js-test-container').innerHTML = `
        // <div class="js-order-summary"> </div>
        // <div class="js-payment-summary"> </div>
        // `;
        


        // const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
        // const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
        
        // spyOn(localStorage, 'getItem').and.callFake(() => {
        //     return JSON.stringify([{
        //         // [{
        //         //     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        //         //     quantity: 1,
        //         //     deliveryOptionId: '1'
        //         // }]
        //         productId: productId1,
        //         quantity: 2,
        //         // 1.1 ADDING THE deliveryOption (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
        //         deliveryOptionId: '1'

        //         }, {
        //         productId: productId2, 
        //         quantity: 1,
        //         // 1.2 ADDING THE deliveryOption  (to make selection of delivery time arrival) for checkout.js from (deliveryOption.js Page)
        //         deliveryOptionId: '2'
        //     }] );
        // });
        
        // loadFromStorage();

        // //RENDERING THE ORDER SUMMARY
        // renderOrderSummary();

        document.querySelector(`.js-delete-link-${productId1}`).click();

        expect(
            // THESE CODE HERE, GIVES US AN ARRAY OF ELEMENT
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(1);

        expect (
            document.querySelector(`js-cart-item-container-${productId1}`)
        ).toEqual(null);

        // expect (
        //     document.querySelector(`js-cart-item-container-${productId2}`)
        // ).not.toEqual(null);


        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(productId2);

        document.querySelector('.js-test-container').innerHTML = '';
    });
    
}); 