const restart = document.querySelector(".restart");
const buttons = document.querySelectorAll(".btn");
const text = document.querySelector(".main-text");

const tile1 = document.getElementById("tile1").textContent;
const tile2 = document.getElementById("tile2").textContent;
const tile3 = document.getElementById("tile3").textContent;
const tile4 = document.getElementById("tile4").textContent;
const tile5 = document.getElementById("tile5").textContent;
const tile6 = document.getElementById("tile6").textContent;
const tile7 = document.getElementById("tile7").textContent;
const tile8 = document.getElementById("tile8").textContent;
const tile9 = document.getElementById("tile9").textContent;

//Player Objects
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

//Creating Players
const player1 = new Player("Player1", "X");
const player2 = new Player("Player2", "O");
activePlayer = 1;
let moves1 = [];
let moves2 = [];

//Clicking Function
buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    if (activePlayer == 1) {
      button.textContent = `${player1.marker}`;
      button.disabled = true;
      text.textContent = `${player2.name}'s Turn!`;
      activePlayer = 2;
      moves1.push(button.id);
    } else if (activePlayer == 2) {
      button.textContent = `${player2.marker}`;
      button.disabled = true;
      text.textContent = `${player1.name}'s Turn!`;
      activePlayer = 1;
      moves2.push(button.id);
    }
  });
});

//Restart the game
restart.addEventListener("click", () => {
  buttons.forEach(function (button) {
    button.textContent = "";
    button.disabled = false;
    text.textContent = `Player 1's turn`;
    activePlayer = 1;
  });
});

//Winning Conditions
const winningConditions = [
  ["tile1", "tile2", "tile3"],
  ["tile4", "tile5", "tile6"],
  ["tile7", "tile8", "tile9"],
  ["tile1", "tile4", "tile7"],
  ["tile2", "tile5", "tile8"],
  ["tile3", "tile6", "tile9"],
  ["tile1", "tile5", "tile9"],
  ["tile3", "tile5", "tile7"],
];
//console.log(moves1);
//console.log(moves2);
//console.log(winningConditions[0]);

const gameEnd = function () {
  for (let i = 0; i < winningConditions.length; i++) {
    if (winningConditions[i] === [...moves1]) {
      text.textContent = `Congratulations! ${player1.name} won the game!`;
    } else if (winningConditions[i] === [...moves2]) {
      text.textContent = `Congratulations! ${player2.name} won the game!`;
    }
  }
};
gameEnd();
