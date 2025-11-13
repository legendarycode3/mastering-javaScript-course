/*Algorithm For (Rocks Paper Scissor)
        When we click a button:
1. Computer randomly selects a move.
2. Compare the moves to get the result.
3. Update the score.
4. Display the results and scores in a popUp */


// const score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
// };

//  /* Instead of this above commented,  we use this below to save locally but on javascript object format*/
    // let score =  JSON.parse(localStorage.getItem('score'));
/* for reset button */
    // if (score === null) { //!score
    //     score = {
    //         wins: 0,
    //         losses: 0,
    //         ties: 0
    //     };
    // }


 /* usimg a shorthand-boolean operator (default operator here instead of if statement like before) */
let score =  JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};


//   let scoreElement = document.querySelector('.js-score');
//   scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
updateScoreElement();




/* We calling the localStorage to get the item we saved. */
// Converting to JSON STRING 
console.log( localStorage.getItem('score')); 



/* Converting back to Javascript object */
console.log(JSON.parse(localStorage.getItem('score')));



function playGame(playerMove) {
    const computerMove = pickComputerMove();
            
    let result = '';

    
    if(playerMove === 'Scissor') {
        if (computerMove === 'rock'){
            result = 'You Lose.';
        } else if(computerMove === 'Paper') {
            result = 'Tie.';
        } else if(computerMove === 'Scissor'){
            result = 'You Won.';
        }
    }

    else if(playerMove === 'Paper') {
        if (computerMove === 'rock'){
            result = 'Tie.';
        } else if(computerMove === 'Paper') {
            result = 'You Won.';
        } else if(computerMove  === 'Scissor'){
            result = 'You Lose.';
        }        
    }

    else if (playerMove === 'rock') {
        if (computerMove === 'rock'){
            result = 'You Won.';
         } else if(computerMove === 'Paper') {
            result = 'You Lose.';
         } else if(computerMove === 'Scissor'){
            result = 'Tie.';
         }
    }
      
    //  For updating the score
    if (result === 'You Won.'){
        // score.wins = score.wins + 1;
        score.wins += 1 ;
    } else if(result === 'You Lose.'){
        score.losses += 1;
    } else if(result === 'Tie.') {
        score.ties +=1;
    }



        localStorage.setItem('score', JSON.stringify(score)); // Local Storage is used to save values more permanently compare to  variable saving. Variables are temporary and only exist on the current page before it’s refreshed.


        // HTML & JavaScript document Query selector assigning
        /* 
        let scoreElement = document.querySelector('.js-score');
        scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        */

       updateScoreElement();


       document.querySelector('.js-result').innerHTML = `${result}`;

       /*
          { document.querySelector('.js-moves').innerHTML = `You picked ${playerMove} ---  Computer picked ${computerMove}`; }
        */
          
          document.querySelector('.js-moves').innerHTML = 
            `You         
            <img  src="images/${playerMove}-emoji.png" class="move-icon">

            <img  src="images/${computerMove}-emoji.png" class="move-icon">
            Computer`;


        console.log(result);
        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \n Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

        
}



// UPDATE SCORE ELEMENT
function updateScoreElement() {
    let scoreElement = document.querySelector('.js-score');
        scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}




        //  USING A return  
function pickComputerMove() {
    const randomNumber = Math.random();
        
    let computerMove = '';
        
        if (randomNumber >= 0 && randomNumber < 1 / 3 ) {
            computerMove = 'rock';
        } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'Paper';
                // console.log(`Paper`);
        } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'Scissor';
        }
            console.log(computerMove);
        
            return computerMove;
}
        
        




// USING A GLOBAL VARIABLE :- you can remove outside like this and it works or you can use a return statement to be visible below exmple

// let computerMove = '';
// function pickComputerMove() {
//     const randomNumber = Math.random();

//     let computerMove = '';

//     if (randomNumber >= 0 && randomNumber < 1 / 3 ) {
//         computerMove = 'rock';
//     } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//         computerMove = 'Paper';
//         // console.log(`Paper`);
//     } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
//         computerMove = 'Scissor';
//     }
//     console.log(computerMove);
// }