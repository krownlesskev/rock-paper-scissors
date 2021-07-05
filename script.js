let playerScore = 0
let computerScore = 0

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

const playerChoice = string => {
    if(string === undefined || string === null) {
        return 'Please enter rock, paper, scissors'
    } else {
        return string.toLowerCase()
    }
}

const playRound = (playerChoice, computerChoice) => {
    if(playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper'){
            playerScore++
            return `Player chooses ${playerChoice} and beats CPU's choice ${computerChoice}`
    } else if 
        (playerChoice === 'rock' && computerChoice === 'paper' ||
        playerChoice === 'paper' && computerChoice === 'scissors' ||
        playerChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++
            return `Player chooses ${playerChoice} and loses against CPU's choice ${computerChoice}`
        } else {
            return `You both chose ${playerChoice}. It's a tie game.`
        }
}

const game = () => {

    for(let i = 0; i < 5; i++){
        let playerPrompt = prompt(`Rock, Paper, Scissors?`)
       console.log(playRound(playerChoice(playerPrompt), computerPlay()))
       console.log(`Player Score: ${playerScore}`)
       console.log(`Computer Score: ${computerScore}`)
    }

    if(playerScore > computerScore) {
        console.log(`Player wins the Match!`)
    } else if (computerScore > playerScore){
        console.log(`Computer wins the match.`)
    } else {
        console.log(`Nobody wins...?`)
    }
}

game()