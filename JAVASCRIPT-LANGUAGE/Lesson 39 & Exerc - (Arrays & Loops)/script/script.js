
/* Algorithm For (Arrays Of String) 
    1. Create an array of string.
    2. Use a For-loop to loop over it.
    3. Create a "if-else statement" to check if there is a string named 'search' inside of the array
    4. If it is available inside the array , then console.log()  the index of 'search' in the array 
    5. if not, then console.log '-1' =>  ['not','found'].
*/ 

let names = ["hello", "search", "good", "search"];

for(let index = 1; index < names.length; index++) {
    const name = names[index];

    if(name  === "search" ){
        console.log(`${name} ${index}`);
        
        break;
    }
    else  {
        console.log(`Not found `);
    }
}


/**A Code that prints out all the the names in the array with a sentence that describe the character length of each name */
/*
let namess = ["Jeff", "Bob", "Joe", "John", "Terri", "Sara", "Laura", "Josh", "David", "Tim"];

for (i = 0; i < namess.length; i++)
{
    if( namess.length > 3)
    {
        console.log("The name " + names + " has more than three letters!");
    }
    else
    {
        console.log("The name " + names + " has equal to or less than three letterss!");
    }
}
    */

