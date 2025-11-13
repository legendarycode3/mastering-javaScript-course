alert('Hello dear , you are doing good');

console.log (2+2);
console.log('some' + 'text');

/* Javascript can remove everything on the body (we can say updating ) & replace it by this, by doing this below*/
document.body.innerHTML = 'Legendary';



/*1. Can declare and call a function like this */
(function () {
    /* Start of your code */
    function greetMe(yourName) {
      alert(`Hello ${yourName}`);
    }
  
    greetMe("World, Hi Williams");
    /* End of your code */
})();




/*2 Also you Can declare and call a function like this */
    function congratulate(name) {
        alert(`God did ${name}`);
    }
      congratulate("Hazard");


