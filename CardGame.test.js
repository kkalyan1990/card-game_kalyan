import Card from "./Card.js";
import CardGame from "./CardGame.js"

// const CardGame = require('./CardGame.js');


test('userturn function updates boolean value of isUserTurn',() => {
    const cardGameObj = new CardGame();
    let initialVal = cardGameObj.isUserTurn;
    cardGameObj.userTurn();
    expect(cardGameObj.isUserTurn).toBe(!initialVal);
})

test('display message when user decides to stay',() => {
    const cardGameObj = new CardGame();

    console.log = jest.fn();
    cardGameObj.isUserStay = true;
    cardGameObj.handleStayScenario();
    expect(console.log).toHaveBeenCalledWith('User has decided to stay');
  })

test('isGamover variable updated if userscore is 25', () => {
    const cardGameObj = new CardGame();
    cardGameObj.userScore = 25;
    const cardObj = new Card(0);
    cardGameObj.checkTotalScore(cardObj);
    expect(cardGameObj.isGameOver).toBe(true);
})

test('console show user lost message if user score is more than 25', () => {
    const cardGameObj = new CardGame();

    console.log = jest.fn();
    cardGameObj.userScore = 26;
    const cardObj = new Card(0);
    cardGameObj.checkTotalScore(cardObj);
    expect(console.log).toHaveBeenCalledWith('user lost');
})


test('User stays the game if userscore is more than 20', () => {
    const cardGameObj = new CardGame();
    cardGameObj.userScore = 21;
    const cardObj = new Card(0);
    cardGameObj.checkTotalScore(cardObj);
    expect(cardGameObj.isUserStay).toBe(true);
})

test('Computer stays the game if computerscore is more than 20', () => {
    const cardGameObj = new CardGame();
    cardGameObj.computerScore = 22;
    const cardObj = new Card(0);
    cardGameObj.checkTotalScore(cardObj);
    expect(cardGameObj.isComputerStay).toBe(true);
})

test('Computer has decided to stay message is shown when isComputerStay variable is true', () => {
    const cardGameObj = new CardGame();

    console.log = jest.fn();
    cardGameObj.isComputerStay = true;
    cardGameObj.handleStayScenario();
    expect(console.log).toHaveBeenCalledWith('Computer has decided to stay');
})

test('Userscore is updated when a new card is picked by the user', () => {
    const cardGameObj = new CardGame();
    cardGameObj.userScore = 10;
    cardGameObj.isUserTurn = true;
    cardGameObj.isUserStay = false;
    let cardObj = new Card(5);
    cardGameObj.updateScores(cardObj);
    expect(cardGameObj.userScore).toBe(15);
})


test('Display user won message when both user and computer stayed, both scores are less than 25 and userscore is more than computerscore', () => {
    const cardGameObj = new CardGame();

    console.log = jest.fn();
    cardGameObj.isComputerStay = true;
    cardGameObj.isUserStay = true;
    cardGameObj.userScore = 24;
    cardGameObj.computerScore = 22;
    cardGameObj.handleDisplayResult();
    expect(console.log).toHaveBeenCalledWith('winner is User');

})

test('Display computer won message when both user and computer stayed, both scores are less than 25 and computer score is more than userscore', () => {
    const cardGameObj = new CardGame();

    console.log = jest.fn();
    cardGameObj.isComputerStay = true;
    cardGameObj.isUserStay = true;
    cardGameObj.userScore = 22;
    cardGameObj.computerScore = 24;
    cardGameObj.handleDisplayResult();
    expect(console.log).toHaveBeenCalledWith('winner is computer');

})

test('Display game draw message when both user and computer stayed, both scores are less than 25 and computer score is same as userscore', () => {
    const cardGameObj = new CardGame();

    console.log = jest.fn();
    cardGameObj.isComputerStay = true;
    cardGameObj.isUserStay = true;
    cardGameObj.userScore = 22;
    cardGameObj.computerScore = 22;
    cardGameObj.handleDisplayResult();
    expect(console.log).toHaveBeenCalledWith('score draw');

})