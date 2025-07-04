//A Simple Tic-Tac-Toe program

// Choices to choose from i.e rock, paper and scissor.
let choiceOne = 'rock';
let choiceTwo = 'paper';
let choiceThree = 'scissors';


function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
        }
    let valueInt = getRandomInt(2);
    let valueString;

    if (valueInt === 0) {
            valueString = choiceOne;
        } else if (valueInt === 1) {
            valueString = choiceTwo;
        } else {
            valueString = choiceThree;
        }
    
    return (valueString)
}

function getHumanChoice() {
    let value = prompt("What is your choice");
    return value.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
            console.log(("Draw!"));
        } else if (humanChoice === choiceOne && computerChoice === choiceThree) {
            humanScore += 1;
            console.log(("You win! " + humanChoice + " beats " + computerChoice));
        } else if (humanChoice === choiceTwo && computerChoice === choiceOne) {
            humanScore += 1;
            console.log(("You win! " + humanChoice + " beats " + computerChoice));
        } else if (humanChoice === choiceThree && computerChoice === choiceTwo) {
            humanScore += 1;
            console.log(("You win! " + humanChoice + " beats " + computerChoice));
        } else {
            computerScore += 1;
            console.log(("You lose! " + computerChoice + " beats " + humanChoice));
        }

}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore) {
        console.log("You have won by " + humanScore + "/5. Congrats!");
    } else if (computerScore > humanScore) {
        console.log("You have lost by " + computerScore + "/5. Better luck next time.");
    } else {
        console.log ("You have drawn.")
    }