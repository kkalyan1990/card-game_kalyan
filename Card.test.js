import Card from "./Card.js";

describe('After instantiating a card ', () => {
    test('getCardValue function returns value of the card',() => {
        const cardObj = new Card(10);
        expect(cardObj.getCardValue()).toBe(10);
    })
})


