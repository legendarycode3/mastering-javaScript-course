
// 5.1
import {cart, addToCart, calculateCartQuantity} from '../data/cart.js';

//5.4
import {products, loadProducts} from '../data/products.js';

//1.3 for utils file , importing here on amazon.js
import { formatCurrency} from './utils/money.js';



/** MAIN IDEA OF JAVASCRIPT (NUMBERING THEM ALL FROM 1  TO  3) 
 *  1.    SAVE THE DATA.
 *  2.    GENERATE THE HTML USING JAVASCRIPT (AFTER “SAVING” ,WE USE THE DATA TO GENERATE OUR HTML) , INSTEAD OF WRITING THE HTML.
 * 3. `   MAKE IT INTERACTIVE  (WE MAKE THE WEBSITE INTERACTIVE).
*/



//1.  
/** SAVING THE DATA's INSIDE OUR JAVASCRIPT  (for amazon-homepage.html)  . it is what we call */
// [{}] -> "array and object" declaration used 


// 2.3 INSTED OF USING THIS const products= [{}]; (array) -> We then used the data folder "product.js"




// const products = [
//     {
//     image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//         name:   'Black and Gray Athletic Cotton Socks - 6 Pairs',
//         rating:  {
//           stars: 4.5,
//           count: 87
//         },
//         priceCents: 1090
//     },
//     {
//         image:  'images/products/intermediate-composite-basketball.jpg',
//         name:   'Intermediate Size Basketball',
//         rating:  {
//            stars:  4,
//            count:  127
//         },
//         priceCents: 2095   
//     },
//     {
//         image:  'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//         name:   'Adults Plain Cotton T-Shirt - 2 Pack',
//         rating:  {
//            stars:  4.5,
//            count: 56
//         },
//         priceCents: 799
//     },
//     {
//     image:  'images/products/black-2-slot-toaster.jpg',
//     name:   '2 Slot Toaster - Black',
//     rating:   {
//         stars:  5,
//         count:  2197
//     },
//     priceCents:  1899
//     },
//     {
//       image:  'images/products/6-piece-white-dinner-plate-set.jpg',
//       name:   '6 Piece White Dinner Plate Set',
//       rating:   {
//           stars:  4,
//           count:  37
//       },
//       priceCents:  2067
//     }
// ];



  //BEFORE WE RUN ALL OF THE CODE BELOW, "loadProducts" FIRST WITH THE XMLREQUEST IMPORTED FROM "product.js" -- WE JUST CALLED , AND RUNED THE  "loadPoduct" CODE
  loadProducts(renderProductGrid);



function renderProductGrid() {
      // 2.1   COMBINING ALL THE STRING TOGETHER, AND PUT IT ON THE WEBPAGE
      let productHTML = '';


      // $${(product.priceCents / 100).toFixed(2)}


      // 2.   GENERATE THE HTML USING JAVASCRIPT (after “saving” , we use the data to generate our html) , instead of writing the html.
    products.forEach((product) => {

        // const html = 
        productHTML += `
            <div class="product-container">
              <div class="product-image-container">
                <img class="product-image"
                  src="${product.image}">
              </div>

              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>

              <div class="product-rating-container">
                <img class="product-rating-stars"
                  src="${product.getStarsUrl()}">
                <div class="product-rating-count link-primary">
                  ${product.rating.count}
                </div>
              </div>

              <div class="product-price">
                ${product.getPrice()}
              </div>

              <div class="product-quantity-container">
                <select>
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

             
              ${product.extraInfoHTML()}
              ${product.extraInfoHTML2()}

              <div class="product-spacer"></div>

              <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
              </div>

              <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                Add to Cart
              </button>
            </div>
        `;
    });
    // data-product-name="${product.name}"

    // console.log(productHTML);

    // products.forEach(function(product) {

    // });
    // product.priceCents * 100 - to display this in dollar , use * 100  (just to change/convert  the cent into dollar)


    //3. MAKING IT INTERATIVE (WE MAKE THE WEBSITE INTERACTIVE):-  PUT IT ON THE WEB PAGE (TAKE THE HTML , PUT IT ON THE WEB PAGE) , and we will do that using the “DOM”
    document.querySelector('.js-products-grid').innerHTML = productHTML;




    // // 6.1 THE "FUNCTION" CREATED TO JUST CALL IT WHEN NEEDED

    // function addToCart(productId) {
    //     let matchingItem;
    //        // 3.2.1.
    //       cart.forEach((item) => {
    //         if(productId  === item.productId){
    //            matchingItem = item;
    //         }
    //       });

    //       // 3.2.2.
    //       if(matchingItem) {
    //         matchingItem.quantity += 1;
    //       } else 
    //       {
    //         // 3.2.3.
    //         cart.push (
    //         {
    //           // productName: productName
    //           productId: productId,
    //           quantity:  1
    //         });
    //       }
    //     console.log(cart);
    // }


    6.2 
    function updateCartQuantity() {
        let cartQuantity = 0;
        cart.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
        });
        //  4.1 
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        console.log(cartQuantity);
    }


    // 7.2 Created a function that is called calculateCartQuantity() in cart.js ,  that is reused in both amazon.js and checkout.js
    // calculateCartQuantity();




    // 3
    document.querySelectorAll('.js-add-to-cart').forEach((button) => {
      button.addEventListener('click', () => {
          //  console.log(button.dataset.productName);
          //  const productName = button.dataset.productName;

          // GETTING THE PRODUCTID(productId) FROM THE BUTTON (for th "addToCart" Button)
          const productId = button.dataset.productId;

          /* 3.2 ALGORITHM (Steps on how to increment the "Quantity" on the cart) 
            3.2.1. Check if the product is already in the "cart".
            3.2.2. If it is in the "cart" , increase the quantity.
            3.2.3. If it not in the "cart" we add it to the "cart".
          */

    
            // CALLING "FUNCTION" RATHER , TO MAKE CODE MORE READABLE 
            addToCart(productId);
            
            updateCartQuantity();

            //calculateCartQuantity();
          //   let matchingItem;
          //  // 3.2.1.
          // cart.forEach((item) => {
          //   if(productId  === item.productId){
          //      matchingItem = item;
          //   }
          // });

          // // 3.2.2.
          // if(matchingItem) {
          //   matchingItem.quantity += 1;
          // } else 
          // {
          //   // 3.2.3.
          //   cart.push (
          //   {
          //     // productName: productName
          //     productId: productId,
          //     quantity:  1
          //   });
          // }
          
          //console.log(cart);


          /** 4. STEPS TO MAKE THE "CART" BUTTON (INTERACTIVE) ON THE TOP MOST CORNER FOR "amazon.html page"
              * 1. CAlCULATE THE QUANTITY.
              * 2. PUT THE QUANTITY ON THE PAGE.
          */
                // let cartQuantity = 0;
                // cart.forEach((item) => {
                //   cartQuantity = cartQuantity + item.quantity;
                // });
                // //  4.1 
                // document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
          //console.log(cartQuantity);
      });

    });


}