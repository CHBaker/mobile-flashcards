import { GET_DECKS, ADD_DECK, GET_DECK } from "../actions";

function appState(state = { decks: [], currentDeck: null }, action) {
    switch (action.type) {
        case GET_DECKS:
            const decks = []
            Object.keys(action.decks).forEach((deck) =>
                decks.push(action.decks[deck])            
            );
            return {
                ...state,
                decks: [ ...decks ]
            }
        case ADD_DECK:
            return {
                ...state,
                decks: [ ...state.decks, action.deck]
            }
        case GET_DECK:
            const deck = state.decks.find(deck => deck.id === action.id)
            return {
                ...state,
                currentDeck: { ...deck }
            }
        default:
            return state
    }
}

export default appState;