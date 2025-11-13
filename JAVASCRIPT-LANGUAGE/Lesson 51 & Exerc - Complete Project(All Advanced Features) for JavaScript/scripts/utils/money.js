
// 1. for utils Page. THIS FOLDER CONTAINS "UTILITIES" FOR ALL REQUIRED PAGES 



// 1.1 Money Utility (utils) that will be shared for amazon.js file , checkout.js file
export function formatCurrency(priceCents){
   // return (priceCents / 100).toFixed(2);
    return (Math.round(priceCents) / 100).toFixed(2);
}

// 2. Money Utility (utils) Importing this to checkout.js, that will be shared for checkout.js file (using a "default export")
export default formatCurrency;