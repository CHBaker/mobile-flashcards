import { AsyncStorage } from 'react-native';

const DECK_KEY = 'DeckStorageKey';

INIT_DECKS = {
    React: {
        title: 'React',
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
    const deck = { 'title': title, questions: [] }
    AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(
        {
            [title]: deck
        }
    ))
    .catch(error => console.log(errer))
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