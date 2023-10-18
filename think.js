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

let computerChoise=getComputerChoice()
// let playerSelection = prompt ('Elige ctmr')
let playerSelection = "rock"

function playRound(computerChoise,playerSelection){
    let winner
    if(computerChoise === "paper" && playerSelection === "rock" ){
        winner="You Lose! Paper beats Rock"
    }if(computerChoise === "scissors" && playerSelection === "rock"){
        winner="You WIN! Rock beats Paper"
    }if(computerChoise === "gaa1" && playerSelection === "rock"){
        winner="FUCKING GENIO"
    }if(computerChoise === "rock" && playerSelection === "rock"){
        winner="Empate"
    }

    return winner
}

console.log(playRound(computerChoise,playerSelection));