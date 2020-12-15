import {getSongDetail} from '@/service/module/player'
import * as action from './constants'

const changeSongDetailAction = currentSong => ({
    type:action.CHANGE_CURRENT_SONG,
    currentSong
})
export const getSongDetailAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then(res => {
            dispatch(changeSongDetailAction(res.songs[0]))
        })
    }
}