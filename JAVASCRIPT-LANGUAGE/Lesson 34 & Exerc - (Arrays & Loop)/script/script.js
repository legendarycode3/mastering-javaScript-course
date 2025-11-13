
/* CREATE A FUNCTION arraySwap(array) thats takes an array and returns an array where the "first" and "last" values are swapped (or switched). */
function arraySwap() {
    let arraySwap = [
        1,
        20, 
        22, 
        24, 
        5
    ];

    /*
         Syntax:
    Array.splice( index, remove_count, item_list )
    */

    arraySwap[0] = arraySwap.splice(arraySwap.length - 1, 1, arraySwap[0])[0];
    console.log(arraySwap);

}

arraySwap();