import * as Api from '../utils/api';

export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const GET_DECK = 'GET_DECK';

const newUID = () => {
    return Math.floor(Math.random()*8999999999999999+1000000000000000).toString();
}

export const getDecks = () => dispatch => {
    Api.getDecks().then(decks =>
        dispatch({
            type: GET_DECKS,
            decks
        })
    ).catch(error => console.log(error))
}

export const addDeck = (title) => dispatch => {
    const deck = { 'title': title, 'id': newUID(), questions: [] }
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