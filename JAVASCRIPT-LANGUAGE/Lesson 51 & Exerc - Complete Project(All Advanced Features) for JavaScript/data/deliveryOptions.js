 import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


/** MAIN IDEA OF JAVASCRIPT (NUMBERING THEM ALL FROM 1  TO  3) FOR  CHECKOUT PAGE  on deliveingOption
 *  1.    SAVE THE DATA.
 *  2.    GENERATE THE HTML USING JAVASCRIPT (AFTER “SAVING” ,WE USE THE DATA TO GENERATE OUR HTML) , INSTEAD OF WRITING THE HTML.
 * 3. `   MAKE IT INTERACTIVE  (WE MAKE THE WEBSITE INTERACTIVE).
*/   

// 1. deliveryOption (data file) Importing this to checkout.js, that will be shared for checkout.js file (for deliveryOptions )  
export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];


 


//TO GET AND CALCULATE THE SHIPPING PRICE
export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        }
    });

    /* LETS "RETURN" THE DELIVERYOPTION SO WE CAN USE IT OUTSIDE OF THIS FUNCTION   & ALSO GIVE  GIVE THIS A "DEFAULT VALUE" , IF WE DONT FIND DELIVERYOPTION. 
    THEREFORE, WE WILL USE THE "DAFAULT OPERATOR" OR AND LET MAKE THE "DAFAULT VALUE" THE FIRST DELIVERY OPTION --    ||  deliveryOptions[0];
    */
    return deliveryOption ||  deliveryOptions[0];
}




//  deliveryOptions.forEach((option) => {
//             //     if(option.id === deliveryOptionId){
//             //         deliveryOption = option;
//             //     }
//             // });







function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}





export function calculateDeliveryDate(deliveryOption) {
    const today = dayjs();

    let deliveryDate = today.add(
        deliveryOption.deliveryDays, 
        'days'
    );

    /*  HERE CODE HERE, HELPS TO SKIP ALL SATURDAY "SATURDAYS" AND "SUNDAYS" 
        FOR PRICECENT : 0 =  7 "DELIVERYDAY DAYS"
        FOR PRICECENT : 499 =  3 "DELIVERY DAYS"
        FOR PRICECENT : 999 = 1 "DELIVERY DAY"
    */ 
    let remainingDays = deliveryOption.deliveryDays;
     
    deliveryDate = dayjs();
    while (remainingDays > 0) {
        deliveryDate = deliveryDate.add(1, 'day');

        if (!isWeekend(deliveryDate)) {
         remainingDays--;
        // This is a shortcut for:
        // remainingDays = remainingDays - 1;
        }
    }



    const dateString = deliveryDate.format(
        'dddd, MMMM, D'
    );   

    return dateString;

}


