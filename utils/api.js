import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'StudyNotifications'
const DECK_KEY = 'DeckStorageKey'

INIT_DECKS = {
    'React': {
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
            return null
        })
        .catch(error => console.log(error))
}

export function addDeck(deck) {
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(
        {
            [deck.title]: deck
        }
    ))
        .then(() => deck)
        .catch(error => console.log(error))
}

export function addCard(cardObj) {
    return AsyncStorage.getItem(DECK_KEY)
        .then(decks => {
            const deckObj = JSON.parse(decks)
            let updatedDeck
            Object.keys(deckObj).forEach((deck) => {
                if (deckObj[deck].id === cardObj.id) {
                    const question = { question: cardObj.question, answer: cardObj.answer }
                    deckObj[deck].questions = [ ...deckObj[deck].questions, question ]
                    AsyncStorage.clear()
                    AsyncStorage.setItem(DECK_KEY, JSON.stringify(deckObj))
                    return updatedDeck = deckObj[deck]
                }
            })
            return updatedDeck
        })
        .catch(error => console.log(error))
}

export function clearLocalNotifications() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
    return {
        title: 'Study Time!',
        body: "🤙 Don't forget to study today!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            console.log('data ', data)
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        console.log('asking, ', status)
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(20);
                            tomorrow.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    })
            }
        })
        .catch((error) => console.log(error))
}