function add(number1, number2) {
    return number1 + number2;
}

console.log(add(3, 7));



/* LET'S SAY, IN THE AMZON PROJECT WE HAVE A BASKETBALL PRODUCT. THIS PRODUCT HAS A NAME OF "basketball" A PRICE OF 2095 CENTS. CREATE AN OBJECT TO REPRESENT THIS PRODUCT AND DISPLAY IT IN CONSOLE. */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

const myProducts = new Product("basketball" , 2095);
console.log(myProducts);


//TO UPDATE THE PROPERTY TO THE OBJECT
console.log(myProducts.price = 2595);


//TO ADD A PROPERTY TO THE OBJECT
console.log(myProducts['delivery-time'] = '3 days');





/* CREATE A FUNCTION , comparePrice(product1, product2), which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function */

Product1 = {
    name: 'Ifeanyi',
    price: 300
};

Product2 = {
    name: 'nathaniel',
    price: 100
};

function comparePrice(Product1, product2){
    if(Product2.price < Product1.price ){
        console.log("yea");
    }
    console.log(Product2);
    return Product2;
}

comparePrice(300,100);





/* HOW  TO CONVERT A STRING TO ALL LOWERCASE WITH JAVASCRIPT ("LEGENDARYCODE" -> "legendarycode")*/
const myString = "LEGENDARY CODE";
const lowerCaseString = myString.toLowerCase();
console.log(lowerCaseString);




/* HOW TO REPEAT  A STRING MANY TIMES IN JAVASCRIPT */
let str = "test";
let repeatString = str.repeat(2);
console.log(repeatString);