// return "rock", "paper" or "scissors" radnomly
function getComputerChoice(){
    const choice = Math.floor(Math.random() * 100) 
    if (choice <= 33){
        return "rock";
    } else if (choice <= 66){
        return "paper";
    } else {
        return "scissors";
    }
}

// return the user choice
function getHumanChoice(e){
    return e.target.alt
}

let humanScore = 0
let computerScore = 0


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const gameStatusDiv = document.querySelector('.game-status');
const gameStatus = document.createElement('p');
const btn = document.querySelector(".game-buttons");
const resetButton = document.createElement('p')

btn.addEventListener('click', function playRound(e){
    gameStatusDiv.appendChild(gameStatus);
    gameStatus.style.display = 'flex';
    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();
    const yourScore = document.querySelector('.your-score');
    const compScore = document.querySelector('.computer-score');
    if (humanChoice == undefined) {
        gameStatus.textContent = "Please retry and click in the middle"
        
    } else if (humanChoice == computerChoice) {
        gameStatus.textContent = "It's a tie!";
    } else if (
        (humanChoice == 'rock' && computerChoice == 'paper') || 
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')){
            gameStatus.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
            

    } else {
        gameStatus.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
        
    }
    compScore.textContent = "Computer Score: " + " " + computerScore;
    yourScore.textContent = "Your Score: " + " " + humanScore;
    if (computerScore == 5 || humanScore == 5) {
        resetButton.style.display = 'flex';
        gameStatus.textContent = computerScore == 5 ? "The computer has beaten You!" : "You Won!"
        resetButton.textContent = 'Replay'
        gameStatusDiv.appendChild(resetButton)
        resetButton.addEventListener('click', () => {
            computerScore = 0
            humanScore = 0
            gameStatus.style.display = 'none';
            compScore.textContent = "Computer Score: " + " " + computerScore;
            yourScore.textContent = "Your Score: " + " " + humanScore;
            resetButton.style.display = 'none';
        })
    }

})
const img = document.querySelectorAll('img');

img.forEach((elem) => {
    elem.addEventListener('mouseover', (e) => {
        const foc = e.target;
        foc.classList.toggle('on-hover');
})
})

img.forEach((elem) => {
    elem.addEventListener('mouseout', (e) => {
        const foc = e.target;
        foc.classList.toggle('on-hover');
})
})
