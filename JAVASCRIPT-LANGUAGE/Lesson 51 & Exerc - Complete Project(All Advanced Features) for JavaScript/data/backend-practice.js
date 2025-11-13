/** 
 * TO SEND AN HTTP MESSAGE , WE GOONA USE A CLASS , CALLED "XMLHttpRequest", 
 * 1st , CREATE A NEW HTTP MESSAGE (WE GENERATE AN "OBJECT" USING THE CLASS) --- const xhr = new XMLHttpRequest();
 * 
 * 2nd , WE SETUP THE REQUEST [goona give open() 2 parameters, one is 'what type of http message to send'. second par is where to send the Http request'] --- xhr.open("GET", url);
 * 
 * 3rd , WE SEND THE MESSAGE --- xhr.send();
 */

const xhr = new XMLHttpRequest();

// THIS METHOD "addEventListener" WAITS FOR AN EVENT, THEN IT RUN A FUNCTION.[2 parameter it takes: 1st is the one we want to wait for. 2nd is a function that we want to run after this loading'response' event happens]
xhr.addEventListener('load', () => {
    // GETTING THE RESPONSE USING A PROPERTY "response" E>g xhr.response
    console.log(xhr.response);
});


const url = "https://supersimplebackend.dev/images/apple.jpg"
xhr.open("GET", url);
xhr.send();
console.log(xhr);





// const xhr = new XMLHttpRequest();
// const url =  "https://supersimplebackend.dev";
// xhr.open("GET", url);
// xhr.send();
// console.log(xhr);


// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://supersimplebackend.dev');
// xhr.withCredentials = true;
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status === 200){
//         console.log(xhr.responseText);
//     }
// };
// xhr.send(null);


