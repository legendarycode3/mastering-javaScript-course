
/* ALGORITHM STEPS FOR THE PROBLEM SOLUTIONS */
/* Steps::

    When we click the button,
  1.) If the text is  "Subscribe" => "Subscribed"
  2.) Otherwise,  Change it back  => "Subscribe"  
*/






 function subcribe() {
        const subscribeButtonElement = document.querySelector('.js-subscribe-button');
            
        if(subscribeButtonElement.innerText === 'Subscribe'){
            subscribeButtonElement.innerHTML = 'Subscribed';
                
            subscribeButtonElement.classList.add('is-subscribed');
        }
        else {
            subscribeButtonElement.innerHTML = 'Subscribe';

        }

        // subscribeButtonElement.classList.toggle('is-subscribed');

        // if(subscribeButtonElement.classList.contains('is-subscribed')) {
        //     console.log('Class "is-subscribed" is present');
        // }
        // else {
        //     console.log('Class "is-subscribed" is not present');
        // }
}


const myToggle  = document.querySelector('.myToggle');
 const button = document.querySelector('.toggle');
 
 button.addEventListener('click', () => {
    myToggle.classList.toggle('is-subscribed');

    if(myToggle.classList.contains('is-subscribed')) {
        console.log('Class "is-subscribed" is on');
    }
    else {
        console.log('Class "is-subscribed" is not on');
    }

 })

