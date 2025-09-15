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
function getHumanChoice(){
    return prompt("Please enter your choice!\n- rock\n- paper\n- scissors")
}

// to play the entire game of 5 rounds
function playGame(){

    // store the human and computer scores
    let humanScore = 0
    let computerScore = 0

    // play a single round
    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice) {
            alert("It's a tie!")
        } else if (
            (humanChoice == 'rock' && computerChoice == 'paper') || 
            (humanChoice == 'paper' && computerChoice == 'scissors') ||
            (humanChoice == 'scissors' && computerChoice == 'rock')){
                alert(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;

        } else {
            alert(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }
    }
    alert("Let's start the game of Rock, Papers and Scissors\nThe game is of 5 rounds\nLet's Begin")

    //loop for 5 times
    for (let i = 0; i < 5; i++) {
        alert(`Round ${i+1}: Make your choice`)
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore){
        console.log(
            `Congratulations! You won the game:
            Your score: ${humanScore}
            Computer Score: ${computerScore}`)
    } else if(computerScore > humanScore) {
        console.log(
            `You Lost! Better Luck Next Time:
            Your score: ${humanScore}
            Computer Score: ${computerScore}`)
    } else {
        console.log(`
            Dang! It's a Tie
            Your score: ${humanScore}
            Computer Score: ${computerScore}`)
    }


}