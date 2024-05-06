// import {Card} from "./Card.js";

// export default class CardDeck {
//     constructor() {
//         const types = ['club','diamond', 'heart', 'spade'];
//         const cards = [];
//         for(let val=2; val < 11; val ++) {
//             for(const tempType of types) {
//                 const card = new Card(val,tempType);
//                 cards.push(card);
//             }
//         }

//         const highCards = ['J', 'Q', 'K', 'A'];
//         for(const highCardObj of highCards) {
//             for(const type of types) {
//                 const card = new Card(highCardObj, type);
//                 cards.push(card);
//             }
//         }
//         return cards;
//     }
// }
