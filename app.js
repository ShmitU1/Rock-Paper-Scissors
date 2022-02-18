// Selectors
const choiceBtn = document.querySelectorAll('button')
const resultDisplay = document.querySelector('.result')
const playerScore = document.querySelector('.score-player')
const computerScore = document.querySelector('.score-computer')
const playerChoiceDisplay = document.querySelector('.player-choice')
const computerChoiceDisplay = document.querySelector('.computer-choice')

// Veriabels
const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice
let playerCount = 0
let computerCount = 0


// Functions
const handleClick = (e) => {
    userChoice = e.target.id
    playerChoiceDisplay.innerText = `Your choice: ${userChoice}`
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerText = `Computer choice: ${computerChoice}`
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerText = `You win!`
            playerCount++
            playerScore.innerHTML = playerCount
            break;
        case 'paperscissors':
        case 'rockpaper':
        case 'scissorsrock':
            resultDisplay.innerText = `You lose!`
            computerCount++
            computerScore.innerHTML = computerCount
            break;
        case 'rockrock':
        case 'scissorsscirssors':
        case 'paperpaper':
            resultDisplay.innerText = `It's a draw!`
            break;
    }
}


// Event listeners
choiceBtn.forEach(choice => {
    choice.addEventListener('click', handleClick)
})




