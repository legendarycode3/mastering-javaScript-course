// const variable1 = 3;
// console.log(variable1);

// const calculation = 4 + 7;
// console.log(calculation);

// console.log(calculation + 10);

// let variable2 = 8;
// variable2 = variable2 + 4;
// console.log(variable2);

let cartQuantity = 0;


function addCart() {
        cartQuantity += 1;
        console.log(`Cart Quantity: ${cartQuantity}`);

        //document.querySelector('.js-add-cart').innerHTML;

        document.querySelector('.displayQuantity').innerHTML = `CART QUANTITY: ${cartQuantity}`;
}

function plusTwo() {
    cartQuantity = cartQuantity + 2;
    console.log(`Cart Quantity: ${cartQuantity}`);

    document.querySelector('.displayQuantity').innerHTML = `CART QUANTITY: ${cartQuantity}`;
}


function plusThree() {
    cartQuantity += 3;
    console.log(`Cart Quantity: ${cartQuantity}`);

    document.querySelector('.displayQuantity').innerHTML = `CART QUANTITY: ${cartQuantity}`;
}


function plusFour() {
        cartQuantity = 0;
        console.log(`Cart was reset.`);
        console.log(`Cart Quantity: ${cartQuantity}`);

        document.querySelector('.displayQuantity').innerHTML = `CART QUANTITY: ${cartQuantity}`;
}


