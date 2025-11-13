
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
    
            }
            else {
                subscribeButtonElement.innerHTML = 'Subscribe';
                
            }
}

