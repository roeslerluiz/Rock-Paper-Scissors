let humanScore = 0;
let computerScore = 0;

// -- Computer choice -- 

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1){
        return "paper"
    } else {
        return "scissor"
    }
}

// -- Human Choice --

function getHumanChoice() { // create a function to get the human's choice
    const question = prompt('Type:  [ROCK]  [PAPER]  [SCISSOR]') // ask to type a choice
    const format = question.toLowerCase(); // it transform the human's choice in lower case to case-sensitive
    return format;
}

// -- Round logic --

function playRound(humanChoice, computerChoice){
    if( (humanChoice === 'rock' && computerChoice === 'rock') ||
        (humanChoice === 'paper' && computerChoice === 'paper') ||
        (humanChoice === 'scissor' && computerChoice === 'scissor')){
    return 'The computer chose the same | TIE !'
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore +=1
        return 'Computer: [PAPER] | You: [ROCK] | You LOST (+1 Computer Score!)'
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissor'){
        humanScore +=1
        return 'Computer: [SCISSOR] | You: [ROCK] | You WIN  (+1 Human Score!)'
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore +=1
        return 'Computer: [ROCK] | You: [PAPER] | You WIN  (+1 Human Score!)'
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissor'){
        computerScore +=1
        return 'Computer: [SCISSOR] | You: [PAPER] | You LOST  (+1 Computer Score!)'
    }
    else if (humanChoice === 'scissor' && computerChoice === 'rock'){
        computerScore +=1
        return 'Computer: [ROCK] | You: [SCISSOR] | You LOST  (+1 Computer Score!)'
    }
    else if (humanChoice === 'scissor' && computerChoice === 'paper'){
        humanScore +=1
        return 'Computer: [PAPER] | You: [SCISSOR] | You WIN  (+1 Human Score!)'
    }
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

// alert(playRound(humanSelection, computerSelection));

// -- Game logic --

// #1 Create a new function name playGame
// #2 Move your playRound function and score variables so that they're declared inside the new playGame function. 
// #3 Play 5 rounds by calling playRound 5 times

function playGame(){
    for (let i = 0; i < 5; i++){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    alert(playRound(humanChoice, computerChoice));
    alert('Human score: ' + humanScore + ' | Computer score: ' + computerScore);
    }
}
 playGame();