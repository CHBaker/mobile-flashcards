import { AsyncStorage } from 'react-native';

const DECK_KEY = 'DeckStorageKey';

INIT_DECKS = {
    React: {
        title: 'React',
        id: '515050',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
    }
}

const newUID = () => {
    return Math.floor(Math.random()*8999999999999999+1000000000000000).toString();
}

export function initDecks() {
    return AsyncStorage.setItem(DECK_KEY, JSON.stringify(INIT_DECKS))
        .catch(error => console.log('error'));
}

export function getDecks() {
    return AsyncStorage.getItem(DECK_KEY)
        .then(result => {
            if (result) {
                return JSON.parse(result)
            }
            return []
        })
        .catch(error => console.log(error))
}

export function addDeck(title) {
    const deck = { 'title': title, 'id': newUID(), questions: [] }
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(
        {
            [title]: deck
        }
    ))
    .then(() => deck)
    .catch(error => console.log(error))
}

// React: {
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },