import { GET_DECKS, ADD_DECK } from "../actions";

function appState(state = { decks: [] }, action) {
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
        default:
            return state
    }
}

export default appState;