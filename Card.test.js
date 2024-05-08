import Card from "./Card.js";



test('getCardValue function returns value of the card',() => {
    const cardObj = new Card(10);
    expect(cardObj.getCardValue()).toBe(10);
})
