function getName() {
    let placeholder = document.querySelector('#challenger')
    let name = document.getElementById('challenger').value;
    document.getElementById('btn').disabled = true;
    if (name == '') {
        name = 'Nameless Person';
        placeholder.textContent = 'Ok then...'
        play(name);
    } else {
        play(name);
    } 
}

//The function below makes the machine generate a random number and tranforms this number into a string. 0 becomes Rock, 1 becomes Paper and 2 becomes Scissors
function computerPlay() {
    const play = Math.floor(Math.random() * 3);
    if (play === 0){
        return 'Rock';
    } else if (play === 1){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function computerPlayMove(choice) {
    let boxFour = document.getElementById('4');
    let boxFive = document.getElementById('5');
    let boxSix = document.getElementById('6');
    boxFour.style.cssText = 'transition: background-color 0.2s linear; background-color: white'
    boxFive.style.cssText = 'transition: background-color 0.2s linear; background-color: white'
    boxSix.style.cssText = 'transition: background-color 0.2s linear; background-color: white'
    if (choice == 'Rock') {
        boxFour.style.cssText = 'background-color: red; transform: scale(1.2); transition: background-color: white all .07s ease;';
    } else if (choice == 'Paper') {
        boxFive.style.cssText = 'background-color: red; transform: scale(1.2); transition: all .07s ease;';
    } else if (choice == 'Scissors') {
        boxSix.style.cssText = 'background-color: red; transform: scale(1.2); transition: all .07s ease;';
    }
}

const container = document.querySelector('#container');

function play(name) {
    let playerScore = 0;
    let computerScore = 0;
    let score = document.createElement('p');
    score.innerText = `Come on, ${name}! We're gonna defeat The MACHINE! Choose your weapon now!`
    container.append(score)
    let roundResult = document.createElement('p');
    container.append(roundResult)
    const buttons = document.querySelectorAll('.rps');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (endResult(playerScore, computerScore)) {
                if (button.id == 0) {
                    const playerChoice = 'Rock';
                    const computerChoice = computerPlay();
                    computerPlayMove(computerChoice);
                    if (playRound(playerChoice, computerChoice) == 0) {
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `${playerChoice} ties ${computerChoice}`;
                    } else if (playRound(playerChoice, computerChoice) == 1) {
                        ++playerScore
                        displayScore(score, playerScore, computerScore, name)
                        roundResult.textContent = `${playerChoice} beats ${computerChoice}`;
                    } else if (playRound(playerChoice, computerChoice) == 2) {
                        ++computerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `${playerChoice} gets beaten by ${computerChoice}`;
                    }
                } else if (button.id == 1) {
                    const playerChoice = 'Paper';
                    const computerChoice = computerPlay();
                    computerPlayMove(computerChoice);
                    if (playRound(playerChoice, computerChoice) == 0) {
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `${playerChoice} ties ${computerChoice}`;
                    } else if (playRound(playerChoice, computerChoice) == 1) {
                        ++playerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `${playerChoice} beats ${computerChoice}`;
                    } else if (playRound(playerChoice, computerChoice) == 2) {
                        ++computerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `${playerChoice} gets beaten by ${computerChoice}`;
                    }
                } else {
                    const playerChoice = 'Scissors';
                    const computerChoice = computerPlay();
                    computerPlayMove(computerChoice);
                    if (playRound(playerChoice, computerChoice) == 0) {
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `${playerChoice} ties ${computerChoice}`;
                    } else if (playRound(playerChoice, computerChoice) == 1) {
                        ++playerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `${playerChoice} beats ${computerChoice}`;
                    } else if (playRound(playerChoice, computerChoice) == 2) {
                        ++computerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `${playerChoice} gets beaten by ${computerChoice}`;
                    }
                }
            }
        })
    })
}

function displayScore(score, playerScore, computerScore, name) {
    score.textContent = `${name} -- ${playerScore} x ${computerScore} -- The MACHINE`
}


//The function below put the guesses of the two challengers to collide and returns a number accordingly to the result fo the round. 0 for tie, 1 for victory of the player, 2 for the victory of the machine.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
        ) {
        return 1
    } else {
        return 2
    }
}


function endResult(playerScore, computerScore) {
    let endResult = document.createElement('h3');
    let keepPlaying = true;
    container.append(endResult);
    if (playerScore == 5) {
        disableButton();
        endResult.textContent = 'YOU WON the match! CONGRATULATIONS!';
        keepPlaying = false
    } else if (computerScore == 5) {
        disableButton();
        endResult.textContent = 'You LOST the match... Better luck next time.';
        keepPlaying = false
    } 
    return keepPlaying;
}

function playAgain() {
    let playAgain = document.createElement('button');
    container.append(playAgain);
    playAgain.addEventListener('click', () => {
        window.location.reload()
    })
}

function disableButton() {
    const buttons = document.querySelectorAll('.rps');
    buttons.forEach((button) =>{
        button.disabled = true;
    })
}