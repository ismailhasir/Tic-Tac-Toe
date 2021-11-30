const restart = document.querySelector(".restart");
const buttons = document.querySelectorAll(".btn");
const text = document.querySelectorAll(".main-text");

//Player Objects
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

//Creating Players
const player1 = new Player("Player1", "X");
const player2 = new Player("Player2", "O");
activePlayer = 1;

//Clicking Function
buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    if (activePlayer == 1) {
      button.textContent = `${player1.marker}`;
      button.disabled = true;
      text.textContent = `${player1.name}'s Turn!`;
      activePlayer = 2;
      console.log(activePlayer);
    } else if (activePlayer == 2) {
      button.textContent = `${player2.marker}`;
      button.disabled = true;
      text.textContent = `${player2.name}'s Turn!`;
      activePlayer = 1;
    }
  });
});

//Restart the game
restart.addEventListener("click", () => {
  buttons.forEach(function (button) {
    button.textContent = "";
    button.disabled = false;
    text.textContent = `Player 1's turn`;
  });
});
