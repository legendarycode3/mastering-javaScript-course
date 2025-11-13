/* ALGORITHM FOR THIS PROJECT STEPS

1. Create a button.

2. When clicking the button, after 1 second  the text inside the button changes to "Finished".

3. Use setTimeOut() and Dom.
*/

let autoPlayInterval;
let isAutoChanged = false;


function autoChangeText() {  // Changing logic here 
    document.querySelector('.js-toggleButton').innerHTML = "Finished";
}


function toggleButtonText() {
    const toggleButton =  document.querySelector('.js-toggleButton');

    // let myToggle = document.querySelector('.js-toggleButton');
    // myToggle.classList.toggle('is-toggled');

    if(!isAutoChanged){
        autoPlayInterval = setTimeout( autoChangeText , 2000);

        toggleButton.textContent = "Loading...";
        isAutoChanged = true ;
        //myToggle.classList.add('is-toggled');

    }
    else {
        clearTimeout(autoPlayInterval);
        toggleButton.textContent = "Start";

        isAutoChanged = false;
        //myToggle.classList.remove('is-toggled');
    }
}