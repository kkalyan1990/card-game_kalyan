
export default class Card {
    constructor(value) {
        this.value = value;
        // this.type = type; // could be 'club','diamond', 'heart', 'spade'
    }

    getCardValue() {
        return this.value;
        // if(this.value > 1 || this.value < 11) {
        //     return this.value;
        // }
        // if(this.value === 'J' || this.value === 'Q' || this.value === 'K') {
        //     return 10;
        // }
        // return 1; // value for Ace
    }
}