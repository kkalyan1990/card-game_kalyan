import CardGame from './CardGame.js';

const newGame = new CardGame();

while(!newGame.isGameOver && !(newGame.isUserStay && newGame.isComputerStay)) {
    newGame.userTurn();
}
console.log('exiting the game');
process.exit();