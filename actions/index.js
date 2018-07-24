import * as Api from '../utils/api'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const GET_DECK = 'GET_DECK'
export const ADD_CARD = 'ADD_CARD'
export const SET_CURRENT_DECK = 'SET_CURRENT_DECK'

export const getDecks = () => dispatch => {
    Api.getDecks().then(decks =>
        dispatch({
            type: GET_DECKS,
            decks
        })
    ).catch(error => console.log(error))
}

export const addDeck = (deck) => dispatch => {
    Api.addDeck(deck).then(deck => 
        dispatch({
            type: ADD_DECK,
            deck
        })
    ).catch(error => console.log(error))
}

export const getDeck = (id) => dispatch => {
    dispatch({
        type: GET_DECK,
        id
    })
}

export const setCurrentDeck = (deck) => dispatch => (
    dispatch({
        type: SET_CURRENT_DECK,
        deck
    })
)

export const addCard = (cardObj) => dispatch => {
    Api.addCard(cardObj).then(deck => {
        dispatch({
            type: ADD_CARD,
            deck
        })
    }
    ).catch(error => console.log(error))
}