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
        this.isGameOver = false; // Flag to track if the game is over 
    }


     userTurn = () => {        
            let card = new Card(Math.floor(Math.random()*10));
            this.checkTotalScore(card);
            this.isUserTurn = !this.isUserTurn;
    }

    /**
     * 
     * @param {} card 
     */

    checkTotalScore(card) {
        this.handleStayScenario();

        this.updateScores(card);
        // Print scores at current step in table format
        console.table({ 'userscore': this.userScore, 'computerScore': this.computerScore});

        if(this.userScore === 25 || this.computerScore === 25) {
            this.isGameOver = true;
            console.log(this.userScore === 25 ? 'user won' : 'computer won');
        } else if (this.userScore > 25 || this.computerScore > 25) {
            this.isGameOver = true;
            console.log(this.userScore > 25 ? 'user lost' : 'computer lost');;
        } else {
            console.log('no result yet');
            if(this.userScore > 20) {
                this.isUserStay = true;
            }
            if(this.computerScore > 20) {
                this.isComputerStay = true;
            }
        }
    }

    /**
     * Display messages if computer/user has decided to stay
     */
    handleStayScenario() {
        if(this.isUserStay) {
            console.log('User has decided to stay');
        } else if(this.isComputerStay) {
            console.log('Computer has decided to stay');
        }
    }

    /**
     * Update computer/user scores based on picked value and previous cards
     */
    updateScores(card) {
        if(this.isUserTurn && !this.isUserStay) {
            console.log('Current turn is that of user and picked up card is ', card.getCardValue());
            this.userScore = this.userScore + card.getCardValue();
        } else if(!this.isComputerStay) {
            console.log('Current turn is that of computer and picked up card is ', card.getCardValue());
            this.computerScore = this.computerScore + card.getCardValue();
        }
    }

    handleDisplayResult() {
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


