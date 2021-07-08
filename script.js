let playerScore = 0
let computerScore = 0
let roundCount = 0
const results = document.querySelector('#results')
const playerButtons = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('#player-score')
const cpuScoreDisplay = document.querySelector('#cpu-score')
const winner = document.querySelector('#winner')

const disableButtons = () => {
    playerButtons.forEach((button) => {
        button.disabled = true;
    })
}

const computerPlay = () => {
    let computerChoice = Math.floor(Math.random() * 3)
    switch (computerChoice) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

const playRound = (playerChoice, computerChoice) => {
    if(playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper'){
            playerScore++
            roundCount++
            return `Player chooses ${playerChoice} and beats CPU's choice ${computerChoice}`
    } else if 
        (playerChoice === 'rock' && computerChoice === 'paper' ||
        playerChoice === 'paper' && computerChoice === 'scissors' ||
        playerChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++
            roundCount++
            return `Player chooses ${playerChoice} and loses against CPU's choice ${computerChoice}`
        } else {
            roundCount++
            return `You both chose ${playerChoice}. It's a tie game.`
        }
}

playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.id){
            case 'rock-button':
                 results.textContent = (playRound('rock', computerPlay()));
                 playerScoreDisplay.textContent = `Player: ${playerScore}`
                 cpuScoreDisplay.textContent = `CPU: ${computerScore}`
                 break;
            case 'paper-button':
                 results.textContent = (playRound('paper', computerPlay()));
                 playerScoreDisplay.textContent = `Player: ${playerScore}`
                 cpuScoreDisplay.textContent = `CPU: ${computerScore}`
                 break;
            case 'scissors-button':
                 results.textContent = (playRound('scissors', computerPlay()));
                 playerScoreDisplay.textContent = `Player: ${playerScore}`
                 cpuScoreDisplay.textContent = `CPU: ${computerScore}`
                 break;
        }
        if(playerScore > computerScore && roundCount === 5) {
            disableButtons()
            winner.textContent = `Player wins the Match!`;
        } else if (computerScore > playerScore && roundCount === 5){
            disableButtons()
            winner.textContent = `Computer wins the match.`;
        } else if(playerScore === computerScore && roundCount === 5) {
            disableButtons()
            winner.textContent = `Nobody wins...?`;
        }
    })
})

