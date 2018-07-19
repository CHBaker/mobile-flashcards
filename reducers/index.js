import { GET_DECKS } from "../actions";

function appState(state = { decks: [] }, action) {
    switch (action.type) {
        case GET_DECKS:
            console.log('action ', action)
            const decks = []
            Object.keys(action.decks).forEach((deck) =>
                decks.push(action.decks[deck])            
            );
            console.log('decks list ', decks)
            return {
                ...state,
                decks: [ ...decks ]
            }
        default:
            return state
    }
}

export default appState;