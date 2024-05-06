import CardGame from './CardGame.js';

const newGame = new CardGame();
console.log('game started', newGame.isGameOver);
while(!newGame.isGameOver) {
    newGame.userTurn();
}