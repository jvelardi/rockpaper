//Variables to manipulate DOM.

let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let choose = document.querySelectorAll('.choose');
let chooseH1 = document.querySelectorAll('.chooseH1');
let computerPoints = document.querySelector('.computerPoints');
let playerPoints = document.querySelector('.playerPoints');
let container = document.querySelector('.container');
let div = document.createElement("div");
let gamePrompt = document.querySelector('.gamePrompt');

// Variables to get random values for computer opponent.
let computer = ["rock", "paper", "scissors"];


//This function runs when line 31 is called.
function computerInput() {
    let empty = [];
    empty += computer[Math.floor(Math.random() * 3)];
    return empty;
}

// Variables to keep score and keep track of how many games are left.
let CPU = 0;
let Player = 0;
let Games = 0;

//Function used to get values for game and manipulate DOM.
function game(playerInput,computerInput) {
        if (playerInput === "rock" && computerInput === "paper") {
            gamePrompt.innerHTML = "<h1>You lose! Paper beats rock.</h1>";
            CPU++;
            computerPoints.innerHTML = "Computer " + CPU; 
        }
            else if (playerInput === "rock" && computerInput === "scissors") {
            gamePrompt.innerHTML = "<h1>You win! Rock beats scissors.";
            Player++;
            playerPoints.innerHTML = "Player " + Player;
        }
        else if (playerInput === "rock" && computerInput === "rock") {
            gamePrompt.innerHTML = "<h1>It's a tie. Computer chose Rock.</h1>";
        }
        else if (playerInput === "paper" && computerInput === "scissors") {
            gamePrompt.innerHTML = "<h1>You lose! Scissors beats paper</h1>";
            CPU++;
            computerPoints.innerHTML = "Computer " + CPU;
        }
        else if (playerInput === "paper" && computerInput === "rock") {
            gamePrompt.innerHTML = "<h1>You Win! Paper beats rock.</h1>";
            Player++;
            playerPoints.innerHTML = "Player " + Player;
        }
        else if (playerInput === "paper" && computerInput === "paper") {
            gamePrompt.innerHTML = "<h1>It's a tie. Computer chose Paper.</h1>"
        }
        else if (playerInput === "scissors" && computerInput === "rock") {
            gamePrompt.innerHTML = "<h1>You lose! Rock beasts scissors</h1>";
            CPU++;
            computerPoints.innerHTML = "Computer " + CPU;
        }
        else if (playerInput === "scissors" && computerInput === "paper") {
            gamePrompt.innerHTML = "<h1>You win! Scissors beats paper.</h1>";
            Player++;
            playerPoints.innerHTML = "Player " + Player;
        }
        else if (playerInput === "scissors" && computerInput === "scissors") {
            gamePrompt.innerHTML = "<h1>It's a tie. Computer chose Scissors.</h1>";
        }
    }

//This function cancels out the DOM manipulation from the function game() once all 5 rounds have been played.  
function gameOverMessage() {
    gamePrompt.innerHTML = "<h1>Game Over!</h1>";
    if (Player > CPU) {
        container.appendChild(div);
        div.classList.add("chooseH1");
        div.innerHTML = "Congrats, you win!";
    }
    else if (CPU > Player) {
        container.appendChild(div);
        div.classList.add("chooseH1");
        div.innerHTML = "Sorry, you lose!";
    } else {
        container.appendChild(div);
        div.classList.add("chooseH1");
        div.innerHTML = "Oh look, it's a tie!";
    }
}

//This function removes Rock, Paper and Scissors from the DOM once all 5 rounds have been played.
function gameOver() {
    if (Games >= 5) {
        container.removeChild(choose[0]);
        container.removeChild(choose[1]);
        container.removeChild(choose[2]);

        gameOverMessage();
}
}

//Onclick commands to start game.
scissors.addEventListener('click', function () {
    game("scissors", computerInput());
    Games++;
    gameOver();
});
rock.addEventListener('click', function () {
    game("rock", computerInput());
    Games++;
    gameOver();
});
paper.addEventListener('click', function () {
    game("paper", computerInput());
    Games++;
    gameOver();
});
