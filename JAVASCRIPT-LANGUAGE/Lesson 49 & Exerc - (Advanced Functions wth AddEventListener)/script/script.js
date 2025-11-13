/* ALGORITHM / STEPS TO SOLVE THE PROJECT THAT INCREASES WITH 2 

    1. Create a funtion addNum(array, num)
    2.  Lets it takes an array of numbers.
    3.  Return an array where each number is increased by 'num'
*/






// const array = [1,2,3];

// const addNum = array.map(num => 
//       num + 2 
// );
// console.log(addNum);
// // Output: [3, 4, 5]





// function addNumss(array1, num1) {
//     let array;
//     let addNumbers = array.map((num2) => {
//         return array1 + num1;
//     })
// }
// let nums = addNumss([6,7,8], 2);
// console.log(nums);'





function removesEggs(foods) {
    
    let filterElement = [];
    let food = filterElement.filter((value, index) => {
        if(value === "egg") {
    
        console.log(value);
           return filterElement;
        }

        filterElement.filter(foods);

    }); 
    return filterElement;
}

console.log(removesEggs(["egg", "apple", "egg", "egg", "ham", "yam"]));
