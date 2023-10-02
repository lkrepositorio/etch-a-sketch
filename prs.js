let playerScore, computerScore, playerSelection, computerSelection, roundWinner;
let resultadoFinal=[]; 

function getComputerChoice(){
    const eleccionrandom = ["rock","paper","scissors"];
    const numerorandom = Math.floor(Math.random()*3);
    return eleccionrandom[numerorandom];

}
function oneRound(playerSelection, computerSelection){
    
    if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        playerScore++;
        roundWinner = "player" 
    }else if (
            (computerSelection === "rock" && playerSelection === "scissors") || 
            (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")){
            computerScore++;
            roundWinner = "computer" 
                
    }else if (playerSelection === computerSelection){
        roundWinner="Empate";
    }else {
        roundWinner="error";
    } return roundWinner;
}

function game(){
    for (let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("rock, paper or scissors?");
        resultadoFinal[i]=oneRound(playerSelection, computerSelection);  
        console.log(`el resultado es de la ${i} ronda es: `  + resultadoFinal[i]);
    }   
}
game();