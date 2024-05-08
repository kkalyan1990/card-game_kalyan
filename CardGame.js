// import {CardDeck} from './CardDeck.js'
import Card from './Card.js';
import rl from "readline-promise";

export default class CardGame {
    constructor() {
        this.cards = [] ; // new CardDeck();
        this.userScore = 0;
        this.computerScore = 0;
        this.isUserTurn = false;
        this.isUserStay = false;
        this.isComputerStay = false;
        this.isGameOver = false;
        console.table({ 'userscore': this.userScore, 'computerScore': this.computerScore});
    }


     userTurn = () => {
        let card;
        if(this.isUserTurn) {

            const readline = rl.default;
            const rlp = readline.createInterface({
                input: process.stdin,
                output: process.stdout
              });
              console.log('sample2');
              var waitForUserInput = function() {
                rlp.question("Pick a card ( Enter a number between 1 and 10) /n", answer => {
                  if (answer > 0 && answer < 11) {
                    console.log(`answer is ${answer}`);
                        // card = new Card(number);
                        // this.checkTotalScore(card);
                        rlp.close();
                  } else {
                    console.log('recursive');
                      waitForUserInput();
                  }
                });
              }
              waitForUserInput();

           
            // const readline = rl.default;
            // const rlp = readline.createInterface({
            //     input: process.stdin,
            //     output: process.stdout
            //   });
              
            //   var waitForUserInput = function() {
            //     rlp.question("Pick a card ( Enter a number between 1 and 10) /n", answer => {
            //       if (answer > 0 && answer < 11) {
            //         console.log('user turn12');
            //             card = new Card(number);
            //             this.checkTotalScore(card);
            //             rlp.close();
            //       } else {
            //           waitForUserInput();
            //       }
            //     });
            //   }
            //   waitForUserInput();

            //   rlp.question('Pick a card ( Enter a number between 1 and 10)', number => {

            //     console.log(`You have entered ${number}!`);
            //     if(number >0 && number <11) {
            //         card = new Card(number);
            //         this.checkTotalScore(card);
            //         // this.isUserTurn = !this.isUserTurn;
            //         rlp.close();
            //     } else {
            //         console.log('Enter a number between 1 and 10');
            //     }
                
            //   });
              
            //   rlp.question('Who are you?', name => {
            //     console.log(`Hey there ${name}!`);
            //     rlp.close();
            //   });
        } else {
            card = new Card(Math.floor(Math.random()*10));
            this.checkTotalScore(card);
            // this.isUserTurn = !this.isUserTurn;
        }
        // console.log('in user turn');
        // const card = this.cards[Math.floor(Math.random()*10)];
        // console.log(this.isUserTurn);
        this.isUserTurn = !this.isUserTurn;
    }

    getScore() {
        return this.score;
    }

    checkTotalScore(card) {


        if(this.isUserStay) {
            console.log('User has decided to stay');;
        } else if(this.isComputerStay) {
            console.log('Computer has decided to stay');
        }
        if(this.isUserTurn && !this.isUserStay) {
            console.log('Current turn is that of user and picked up card is ', card.getCardValue());
            this.userScore = this.userScore + card.getCardValue();
        } else if(!this.isComputerStay) {
            console.log('Current turn is that of computer and picked up card is ', card.getCardValue());
            this.computerScore = this.computerScore + card.getCardValue();
        }
        // console.log(`current user score is ${this.userScore} and current computer score is ${this.computerScore}`);
        console.table({ 'userscore': this.userScore, 'computerScore': this.computerScore});
        if(this.userScore === 25 || this.computerScore === 25) {
            this.isGameOver = true;
            console.log(this.userScore === 25 ? 'user won' : 'computer won');
        } else if (this.userScore > 25 || this.computerScore > 25) {
            this.isGameOver = true;
            console.log(this.userScore > 25 ? 'user lost' : 'computer lost');;
        } else {
            // this.isGameOver = false;
            console.log('no result yet');
            if(this.userScore > 20) {
                this.isUserStay = true;
            }
            if(this.computerScore > 50) {
                this.isComputerStay = true;
            }
        }

        if(this.isComputerStay && this.isUserStay) {
            if(this.userScore > this.computerScore) {
                console.log('winner is User');
            } else if(this.userScore < this.computerScore) {
                console.log('winner is computer');
            } else {
                console.log('score draw');
            }
        }
    }

}


