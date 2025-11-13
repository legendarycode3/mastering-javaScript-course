import {formatCurrency} from  '../../scripts/utils/money.js';



// WE GOONA GIVE A NAME TO THE "TEST SUITE" which is the stinged text
describe('test suite: formatCurrency', () => {
    // TO CREATE A "TEST IN JASMINE", WE GOONA USE ANOTHER FUNCTION CALLED " it() ". 
    // "it()" IS ANOTHER FUNCTION, PROVIDED BY JASMINE.

    

    it('converts cents into dollars', () => {
        //CREATING A TEST NAME, AS ('converts cents into dollars')
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    // LETS GIVE A NAME TO THE TEST, WE GOONA GIVE IT A STRING "", AND IT GOONA BE THE TEST NAME e.g ('converts cents into dollars'). 

    // WE GONNA ALSO ADD SOME EXTRA CODE, INTO OUR "JASMINE". TO DO THAT IN JASMINE, WE GOONA GIVE IT A SECOND PARAMETER, WHICH IS ANOTHER FUNCTION. 

    // IN THIS TEST , WE NEED TO COMPARE, THESE 2 VALUES(if ( formatCurrency(2095) === '20.95') {), AND DISPLAY THE RESULT.  

    // NOTE: IN JASMINE, INSTEAD OF CREATING AN "if statement" AND CREATING THE RESULT OURSELVE, JASMINE PROVIDES US ANOTHER FUNCTION , TO DO ALL OF THE COMPARATION. 

    // AND THE FUNCTION IS CALLED "expect();". 

    // SO EXPECT LETS US COMPARE ANOTHER VALUE TO ANOTHER VALUE

    







    // 2ND TEST , USING JASMINE
    it('Work with 0, 2nd Test', () => {
        //CREATING A TEST NAME, AS ('Work with 0, 2nd Test')
        expect(formatCurrency(0)).toEqual('0.00');
    });









    // 3RD TEST , USING JASMINE
    it('Rounds up to the nearest cent, 3rd Test', () => {
        //CREATING A TEST NAME, AS ('Rounds up to the nearest cent, 3rd Test')
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
    
});