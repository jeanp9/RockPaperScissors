// TESTING THE NEW BRANCH!

const buttons = document.querySelectorAll('button')
let playerSelection 
// buttons.forEach((button) => {
//     button.addEventListener('click',() => {
//         if(button.id === "1") {playerSelection = "rock"}
//         else if(button.id === "2") {playerSelection = "paper"}
//         else if(button.id === "3") {playerSelection = "scissors"}
//     game2();
//     });
// });

function handleButtonClick(){
    if(this.id === "1") {playerSelection = "rock"}
        else if(this.id === "2") {playerSelection = "paper"}
        else if(this.id === "3") {playerSelection = "scissors"}
     game2();
}
buttons.forEach(button => button.addEventListener('click',handleButtonClick) ) 

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
//  let playerSelection = "rock"
    let resultComputer=0;
    let resultPlayer=0;
function playRound(computerChoice, playerSelection){
    let winnerText;
    let winner;
    
    if(computerChoice === playerSelection){
        winnerText = "Empate";
    } else if((computerChoice === "rock" && playerSelection === "scissors") || 
              (computerChoice === "scissors" && playerSelection === "paper") || 
              (computerChoice === "paper" && playerSelection === "rock")){
        winnerText = `You Lose! ${computerChoice} beats ${playerSelection}`;
        winner = "computerChoice";
        resultComputer+=1
    } else if(computerChoice === "gaa1"){
        winnerText = `FUCKING GENIO`;
        winner = "playerSelection";
        resultPlayer+=1
    } else {
        winnerText = `You WIN! ${playerSelection} beats ${computerChoice}`;
        winner = "playerSelection";
        resultPlayer+=1
    }
    console.log("computer result" , resultComputer);
    console.log("player result",resultPlayer);
        return {winnerText, winner};    
}



// console.log(playRound(getComputerChoice(),playerSelection));

function game2(){
    let computerChoise = getComputerChoice();
    let result = playRound(computerChoise,playerSelection);
//  console.log(result.winnerText);
// console.log(`Winner: ${result.winner}`);
    const results = document.querySelector('#results')
    const content = document.createElement('h1')
    const content2 = document.createElement('h1')
    content.textContent = `Winner: ${result.winner}`
    content2.textContent = result.winnerText
    results.appendChild(content2)
    results.appendChild(content)
    //Score of the game
    const score = document.querySelector('#score')
    const gameScore = document.createElement('h3')
    gameScore.textContent = `Player score: ${resultPlayer} Computer Score:${resultComputer}`
    score.appendChild(gameScore)
    //Verify if it's over
    if(resultPlayer===5 || resultComputer===5){
        const gameEndMessage = document.createElement('h2')
        if(resultPlayer===5){
            gameEndMessage.textContent='Ganaste el juego!'
        }else{
            gameEndMessage.textContent='La maquina gano el juego'
        }
        score.appendChild(gameEndMessage);
        buttons.forEach(button => button.removeEventListener('click',handleButtonClick))
    }

}

// function game(){
//     let result
//     for (let index = 0; index < 5; index++) {
//         // let playerSelection = prompt ('Elige!')
//         playerSelection = playerSelection.toLowerCase()
//         let computerChoise=getComputerChoice()
//          console.log(result = playRound(computerChoise,playerSelection));
//          if (index===4) {
//             console.log('End of the game!');
//          }
//     }  
// }

// console.log(game());



