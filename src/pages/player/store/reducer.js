import * as actionType from './constants'

const defaultState = {
    playList:[],
    currentSongIndex:0, 
    currentSong:{},
    sequence:0,//0顺序，1随机，2单曲
    lyric:[],
    currentLyricIndex:0
}

function reducer(state = defaultState,action){
    switch(action.type) {
        case actionType.CHANGE_CURRENT_SONG:
            return {...state,currentSong:action.currentSong}
        case actionType.CHANGE_PLAY_LIST:
            return {...state,playList:action.playList}
        case actionType.CHANGE_CURRENT_SONG_INDEX:
            return {...state,currentSongIndex:action.index}
        case actionType.CHANGE_SEQUENCE:
            return {...state,sequence:action.sequence}
        case actionType.CHANGE_LYRIC:
            return {...state,lyric:action.lyric}
        case actionType.CHANGE_CURRENT_LYRIC_INDEX:
            return {...state,currentLyricIndex:action.index}
        default:
            return state
    }
}

export default reducer