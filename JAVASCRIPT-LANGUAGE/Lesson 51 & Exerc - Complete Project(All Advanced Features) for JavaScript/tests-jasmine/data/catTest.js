import {addToCart, cart, loadFromStorage} from '../../data/cart.js';



// CREATING A TEST SUITE (using 'describe')
describe('test suite: addToCart', () => {

    // CREATING OUT FIRST TEST WITH (it) -- "1st TEST, WHEN THE PRODUCT IS IN THE CART"
    it('adds an existing product to the cart', () => {
        
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
       
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        
        expect(cart.length).toEqual(1);
        
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        
        expect(cart[0].quantity).toEqual(2);
    });






    //"2nd TEST, WHEN THE PRODUCT IS NOT IN THE CART"
    it('adds a new product to the cart', () => {

        spyOn(localStorage, 'setItem');
        // ANOTHER FUNCTION OF JASMINE (spyOn). IT HELPS IN OTHER TO USE MOCK , TO REPLACE A FAKE VERSION.  spyOn() function , takes 2 parameter. The First is the parameter we want to mock,  And the second 2nd parameter is the method of the item we want to mock
        spyOn(localStorage, 'getItem').and.callFake(() => {

            // RETURNS A STRING(THIS BASICALLY WILL CONVERT WHATEVER IN THE BRACKET TO A JSON STRING)
            return JSON.stringify([])
        });
        // console.log(localStorage.getItem('cart'));
        loadFromStorage();


        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        /* LET CHECK IF THE CART.LENGTH (cart.length = 0) IS CORRECT
        LET ASSUME WE START WITH AN EMPTY , WHEN WE ADD A PRODUCT, THE (cart.lemgth) SHOULD BE ONE
        **/
       expect(cart.length).toEqual(1);
       expect(localStorage.setItem).toHaveBeenCalledTimes(1);
       // THE METHOD"toHaveBeenCalledTimes" CHECKS HOW MANY TIMES [localStorage.setItem] WAS CALLED ABOVE


       /**
        *  TO CHECK THE FIRST 1st PRODUCT IN THE TEST (cart)
        * AND MAKE SURE THAT THE PRODUCTID , MATCHES THE STRING HERE, WHICH IS ('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        */
       expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');



        /**
            * "QUANTITY"  -- ANOTHER THING WE CAN CHECK IS THE QUANTITY, WHEN WE ADD A NEW PRODUCT TO THE CART, THE QUANTITY SHOULD START OUT AS (1)
            * 
        */
       expect(cart[0].quantity).toEqual(1);
    });

});