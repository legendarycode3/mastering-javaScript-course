
/* Algorithm For (Amazon Shipping Calculator) 
When we click a Button:
1. Get the text in the textBox
2. If amount below < $40 dollars  add +10 dollars
3.  Display total on the page
*/

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    
     //let costResult = inputElement.value;
     let costResult = Number(inputElement.value);
    
    if(costResult > 0 && costResult <=40){
       //costResult = eval(costResult) + 10;
       costResult = costResult + 10;
         document.querySelector('.js-result').innerHTML = `Result: $${costResult}`;
    }
    else {
      costResult = costResult;
      document.querySelector('.js-result').innerHTML = `Error: cost can not be less than $0`;
    }
    
}

/* Steps if pressed a key :
1. Check if the key is "Enter"  -> onkeydown event 
2. If it is , do thesame thing as the calculate button
*/
function handleCostKeydown(event) {
  //  console.log(event.key);
   if(event.key === 'Enter') {
      calculateTotal();
   }
   else {
     document.querySelector('.js-result').innerHTML = `please, press enter`;
   }
}


