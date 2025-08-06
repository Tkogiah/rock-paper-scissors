let humanScore = 0;
let computerScore = 0;

const computerSelection = function getComputerChoice(){
    const choice = Math.random()
    if(choice >= .666) {
        return "rock"
    } else if (choice <= .665 && choice >= .333) {
        return "paper"
    } else return "scissors"
}

const humanSelection = () =>  prompt("choose rock, paper, or scissors")

function playRound(humanChoice, computerChoice) {
    display.innerText = ''
    let human = humanChoice
    let computer = computerChoice
    console.log('player chooses ' + human)
    console.log( 'computer chooses ' + computer)
    //returns if there is a tie
    if (human == computer) {
      display.innerText = "It was a tie try again"
    } 
    //returns if player wins
    if (human == 'paper' && computer == 'rock' ||
        human == 'scissors' && computer == 'paper' ||
        human == 'rock' && computer == 'scissors') 
        {
            console.log("player wins")
            humanScore += 1
        }
    //returns if player loses
    if (computer == 'paper' && human == 'rock' ||
        computer == 'scissors' && human == 'paper' ||
        computer == 'rock' && human == 'scissors') 
        {
            console.log("player loses")
            computerScore += 1
        }
    //checks to see if game is over with computer victory
    if(computerScore === 5) {
        score.innerText = `Computer wins with ${computerScore} points`
        display.appendChild(score)
        computerScore = 0
        humanScore = 0
        return
    }
    //checks to see if game is over with player victory
    if(humanScore === 5) {
        score.innerText = `Player wins with ${humanScore} points`
        display.appendChild(score)
        computerScore = 0
        humanScore = 0
        return
    }
    score.innerText = `Human has a score of ${humanScore} \n Computer has a score of ${computerScore}`
    display.appendChild(score)
    
}

const playRoundRock = () => playRound("rock", computerSelection());
const playRoundPaper = () => playRound("paper", computerSelection());
const playRoundScissors = () => playRound("scissors", computerSelection());

const rock = document.querySelector('.rock-button').addEventListener("click", e => {
    playRoundRock()
})
const paper = document.querySelector('.paper-button').addEventListener("click", e => {
    playRoundPaper()
})
const scissors = document.querySelector('.scissors-button').addEventListener("click", e => {
    playRoundScissors()
})

const display = document.querySelector('.console-display')
const score = document.createElement('div')
