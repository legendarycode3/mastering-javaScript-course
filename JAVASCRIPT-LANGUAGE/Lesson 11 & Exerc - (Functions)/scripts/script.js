

function playGame(playerMove) {
    const computerMove = pickComputerMove();
            
    let result = '';

    
    if(playerMove === 'Scissor') {
        if (computerMove === 'rock'){
            result = 'You Lose';
        } else if(computerMove === 'Paper') {
            result = 'Tie';
        } else if(computerMove === 'Scissor'){
            result = 'You Won';
        }
    }

    else if(playerMove === 'Paper') {
        if (computerMove === 'rock'){
            result = 'Tie';
        } else if(computerMove === 'Paper') {
            result = 'You Won';
        } else if(computerMove  === 'Scissor'){
            result = 'You Lose';
        }        
    }

    else if (playerMove === 'rock') {
        if (computerMove === 'rock'){
            result = 'You won';
         } else if(computerMove === 'Paper') {
            result = 'You Lose';
         } else if(computerMove === 'Scissor'){
            result = 'Tie';
         }
    }
        console.log(result);
        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
   
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