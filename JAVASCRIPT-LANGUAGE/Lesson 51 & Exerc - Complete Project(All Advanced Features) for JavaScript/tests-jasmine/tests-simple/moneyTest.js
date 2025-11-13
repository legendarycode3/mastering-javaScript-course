// 1. THIS IS OUR FIRST AUTOMATED TEST

import {formatCurrency} from  '../../scripts/utils/money.js';
// '../../scripts/utils/money.js'

/**  AS AN "EXAMPLE"
 *  AS A REMAINDER, FORMAT CURRENCY TAKES A NUMBER IN "CENTS" LIKE (2095) AND THEN CONVERTS IT INTO DOLLARS LIKE (20.95) CENTS 
 */

// TEST SUITE:
console.log('TEST SUITE: FormatCurrency'); 

// TEST CASE 1:       -- >  "BASIC TEST CASE"     [AUTOMATED TEST]
console.log('Converts cents into dollars, 1st Test');
if ( formatCurrency(2095) === '20.95') {
    console.log(`1st Test: passed`);
} else {
    console.log(`1st Test: passed`);
}





// HARD TO TEST FOR EVERY SITUATION (EXAMPLE)
// TEST CASE 2:   For "SHIPPING AND HANDLING"   ----> "EDGE TEST CASE"     [AUTOMATED TEST]

// TEST SUITE:
console.log('Work with 0, 2nd Test');

if (formatCurrency(0) ===  '0.00') {
    console.log(`2nd Test: passed`);
} else { 
    console.log(`2nd Test: failed`);
}







// TEST CASE 3:  for ESTIMATED TAX      ----->  "EDGE TEST CASE"   [AUTOMATED TEST]

// TEST SUITE:
console.log('Rounds up to the nearest cent, 3rd Test');

if (formatCurrency(2000.5) === '20.00') {
    console.log(`3rd Test: passed`);
} else {
    console.log(`3rd Test: failed`);
}




//TEST CASE 4:       ----->  "EDGE TEST CASE"       [AUTOMATED TEST]
console.log('Rounds Down to the nearest cent, 4th Test');
if (formatCurrency(2000.4) === '20.02') {
    console.log(`4th Test: passed`);
} else {
    console.log(`4th Test: failed`);
}