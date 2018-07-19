import * as Api from '../utils/api';

export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';

export const getDecks = () => dispatch => {
    Api.getDecks().then(decks =>
        dispatch({
            type: GET_DECKS,
            decks
        })
    ).catch(error => console.log(error))
}

export const addDeck = () => dispatch => {
    Api.addDack().then(deck =>
        dispatch({
            type: ADD_DECK,
            deck
        })
    ).catch(error => console.log(error))
}