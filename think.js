function getComputerChoice(){
    randomValue=Math.floor(Math.random()*4)
    let computerChoise
    if(randomValue=== 1 ){
        computerChoise="rock"        
    }if(randomValue === 2 ){
        computerChoise="paper"        
    }if(randomValue === 3){
        computerChoise="scissors"
    }if(randomValue === 0){                
        computerChoise="gaa1"
    } 
    return computerChoise
}


// let playerSelection = prompt ('Elige ctmr')
// let playerSelection = "rock"

function playRound(computerChoise,playerSelection){
    let winnertxt
    let winner
    if(computerChoise === "paper" && playerSelection === "rock" ){
        winnertxt="You Lose! Paper beats Rock"
        winner="computerChoise"
    }if(computerChoise === "scissors" && playerSelection === "rock"){
        winnertxt="You WIN! Rock beats Paper"
        winner="playerSelection"
    }if(computerChoise === "gaa1" && playerSelection === "rock"){
        winnertxt="FUCKING GENIO"
        winner="playerSelection"
        
    }if(computerChoise === "rock" && playerSelection === "rock"){
        winnertxt="Empate"        
    }
    return {winnertxt,winner}
}

// console.log(playRound(computerChoise,playerSelection));

function game(){
    let result
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt ('Elige!')
        playerSelection = playerSelection.toLowerCase()
        let computerChoise=getComputerChoice()
         console.log(result = playRound(computerChoise,playerSelection));
         if (index===4) {
            console.log('End of the game!');
         }
    }  
}

console.log(game());