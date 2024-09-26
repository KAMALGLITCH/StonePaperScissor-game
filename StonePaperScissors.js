let userScore = 0;
let compScore = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "Computer wins!";
        compScore++;
    }

    document.getElementById('userScore').innerText = userScore;
    document.getElementById('compScore').innerText = compScore;
    document.getElementById('gameMessage').innerText = 
        `You chose: ${userChoice}. Computer chose: ${computerChoice}. ${result}`;
}
