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
    let human = humanChoice
    let computer = computerChoice
    console.log('player chooses ' + human)
    console.log( 'computer chooses ' + computer)
    //returns if there is a tie
    if (human == computer) {
      console.log("it was a tie try again")
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
        console.log(`computer wins with ${computerScore} points`)
        computerScore = 0
        humanScore = 0
        return
    }
    //checks to see if game is over with player victory
    if(humanScore === 5) {
        console.log(`player wins with ${humanScore} points`)
        computerScore = 0
        humanScore = 0
        return
    }
    console.log("human has " + humanScore + " points")
    console.log("computer has " + computerScore + " points")
}