/*  ALGORITHM FOR THIS PROJECT (STEPS)
    1.  Create a "function" removeEgg(foods) .
    2.  Create an "array" of strings.
    3.  Loop throgh the array  using (for-loop)
    4.  Check if each string is 'egg'. If is 'egg' use continue to skip it
    4.  If is not , add it to the result.
    4. "Return" an array where the string  'egg' is removed 
*/




function removeEgg(foods) {

    const gallaryOfFoods = [];

    for(let index = 0; index < foods.length; index++ ) {
        let food = foods[index];  // Let us get the Strings from each index looped through

        if(food === "egg") {
            continue;
            //return gallaryOfFoods;
        }

        gallaryOfFoods.push(food);
             // To remove 2 element from the array
        //foods.splice(0,2);
       
    }

    return gallaryOfFoods;
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham", "yam"]));






let filterElement = [2, -5, 8];
let filterNumbers = filterElement.filter((value, index) => {
    if(value >= 0){
        console.log(value);
        return true;
    }
    else{
        return false;
    }

}); 

