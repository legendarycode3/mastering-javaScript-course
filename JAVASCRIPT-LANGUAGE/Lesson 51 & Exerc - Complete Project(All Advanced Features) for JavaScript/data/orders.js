/**
 * CREATING AN "ARRAY" TO CONTAIN ALL OF OUR ORDERS.
 * "POST BECUS WE ARE MAKING USE OF IT, IT LETS YOU "CREATE SOMETHING" FROM THE BACKEND
 */



//LETS LOAD THE "ORDERS" FROM STORAGE.

//WE  NEED TO CONVERT THIS "localStorage.getItem('orders')" BACK TO AN ARRAY(using "JSON.Parse") BECUS IT IS A STRING 'orders'.  
export const orders = localStorage.getItem('orders') || [];


// export const orders = [];


// A FUNCTION FOR ADDING AN "Order" TO THE ARRAY ABOVE
// EXPORT  THE "addOrder" TO "paymentSummary.js"
export function addOrder(order) {
    //ADDING AN ORDER TO THE FRONT ORDER OF THE ARRAY USING "ushift" METHOD.
    orders.unshift(order);

    saveToStorage();
}


//SAVING OUR "ORDERs" INTO LOCALSTORAGE (AND REMEMBER "LocalStorage" ONLY SUPPORT STRINGS, SO WE WILL CONVERT IT TO STRING).
// CREATED A FUNCTION FOR "SAVING OUR ORDERS"
function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}
