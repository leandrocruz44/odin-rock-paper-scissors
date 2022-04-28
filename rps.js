function getName() {
    const button = document.querySelector('#btn');
    button.addEventListener('click', () => {
        const name = document.getElementById('challenger').value;
        if (name === '' || name === undefined) {
            return 'Mysterious Person';
        } else {
            return name;
        }
         
    })
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

function buttonPlay() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id == 1) {
                return (playRound('Rock', computerPlay()));
            } else if (button.id == 2) {
                return (playRound('Paper', computerPlay()));
            } else {
                return (playRound('Scissors', computerPlay()));
            }
        })
    })
}


//The function below put the guesses of the two challengers to collide and returns a number accordingly to the result fo the round. 0 for tie, 1 for victory of the player, 2 for the victory of the machine.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            return 0;
        } else if (computerSelection === 'Scissors') {
            return 1;
        } else if (computerSelection === 'Paper') {
            return 2;
        }
    }

    if (playerSelection === 'Paper'){
        if (computerSelection === 'Paper') {
            return 0;
        } else if (computerSelection === 'Rock') {
            return 1;
        } else if (computerSelection === 'Scissors') {
            return 2;
        }
    }

    if (playerSelection === 'Scissors'){
        if (computerSelection === 'Scissors') {
            return 0;
        } else if (computerSelection === 'Paper') {
            return 1;
        } else if (computerSelection === 'Rock') {
            return 2;
        }
    }
}


function game() {
    const name = getName();
    const playerCount = 0;
    const computerCount = 0;
    while (i < 5 || j < 5) {
        if (buttonPlay() === 0) {
            console.log(`That's a Tie! [${name}] ${playerSelection} -VS- ${computerSelection} [The MACHINE]`);
        } else if (buttonPlay() === 1) {
            console.log(`You WIN! [${name}] **${playerSelection}** -VS- ${computerSelection} [The MACHINE]`);
            playerCount += 1;
        } else if (buttonPlay() === 2) {
            console.log(`You LOSE! [${name}] ${playerSelection} -VS- **${computerSelection}** [The MACHINE]`);
            computerCount += 1;
        }
    }

    

    if (playerCount > computerCount) {
        console.log('You made', playerCount, 'point(s).');
        console.log('The MACHINE made', computerCount, 'point(s).');
        console.log(`${name}, you WON the whole thing! Congratulations!`);
    } else {
        console.log('You made', playerCount, 'point(s).');
        console.log('The MACHINE made', computerCount, 'point(s).');
        console.log(`${name}, you LOST the whole thing! Better luck next time.`)
    }
}

game()