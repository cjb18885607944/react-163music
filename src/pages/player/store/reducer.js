import * as actionType from './constants'

const defaultState = {
    currentSong:{}
}

function reducer(state = defaultState,action){
    switch(action.type) {
        case actionType.CHANGE_CURRENT_SONG:
            return {...state,currentSong:action.currentSong}
        default:
            return state
    }
}

export default reducer