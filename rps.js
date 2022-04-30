function getName() {
    let name = document.getElementById('challenger').value;
    document.getElementById('btn').disabled = true;
    if (name == '') {
        name = 'Mysterious Person';
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

const container = document.querySelector('#container');

function play(name) {
    let playerScore = 0;
    let computerScore = 0;
    let score = document.createElement('p');
    score.textContent = `${name} -- ${playerScore} x ${computerScore} -- The MACHINE`
    container.append(score)
    let roundResult = document.createElement('p');
    roundResult.textContent = `Hey ${name}, let's win this thing!`
    container.append(roundResult)
    const buttons = document.querySelectorAll('.rps');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (endResult(playerScore, computerScore)) {
                if (button.id == 0) {
                    const playerChoice = 'Rock';
                    const computerChoice = computerPlay();
                    if (playRound(playerChoice, computerChoice) == 0) {
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `TIE - ${name} -- [[${playerChoice}]] x [[${computerChoice}]] -- The MACHINE`;
                    } else if (playRound(playerChoice, computerChoice) == 1) {
                        ++playerScore
                        displayScore(score, playerScore, computerScore, name)
                        roundResult.textContent = `YOU WON - ${name} -- [[${playerChoice}]] x [[${computerChoice}]] -- The MACHINE`;
                    } else if (playRound(playerChoice, computerChoice) == 2) {
                        ++computerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `YOU LOSE - ${name} -- [[${playerChoice}]] x [[${computerChoice}]] -- The MACHINE`;
                    }
                } else if (button.id == 1) {
                    const playerChoice = 'Paper';
                    const computerChoice = computerPlay();
                    if (playRound(playerChoice, computerChoice) == 0) {
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `TIE - ${name} -- [[${playerChoice}]] x [[${computerChoice}]] -- The MACHINE`;
                    } else if (playRound(playerChoice, computerChoice) == 1) {
                        ++playerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `YOU WON - ${name} -- [[${playerChoice}]] x [[${computerChoice}]] -- The MACHINE`;
                    } else if (playRound(playerChoice, computerChoice) == 2) {
                        ++computerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `YOU LOSE - ${name} -- [[${playerChoice}]] x [[${computerChoice}]] -- The MACHINE`;
                    }
                } else {
                    const playerChoice = 'Scissors';
                    const computerChoice = computerPlay();
                    if (playRound(playerChoice, computerChoice) == 0) {
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `TIE - ${name} -- [[${playerChoice}]] x [[${computerChoice}]] -- The MACHINE`;
                    } else if (playRound(playerChoice, computerChoice) == 1) {
                        ++playerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `YOU WON - ${name} -- [[${playerChoice}]] x [[${computerChoice}]] -- The MACHINE`;
                    } else if (playRound(playerChoice, computerChoice) == 2) {
                        ++computerScore
                        displayScore(score, playerScore, computerScore, name);
                        roundResult.textContent = `YOU LOSE - ${name} -- [[${playerChoice}]] x [[${computerChoice}]] -- The MACHINE`;
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
        endResult.textContent = 'YOU WON the match';
        keepPlaying = false
        disableButton();
    } else if (computerScore == 5) {
        endResult.textContent = 'You LOST the match';
        keepPlaying = false
        disableButton();
    } 
    return keepPlaying;
}

function disableButton() {
    const buttons = document.querySelectorAll('.rps');
    buttons.forEach((button) =>{
        button.disabled = true;
    })
}