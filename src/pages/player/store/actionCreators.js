import { getSongDetail,getLyric } from '@/service/module/player'
import * as actionTypes from './constants'
import {transLyric} from '@/utils/trans-lyric.js'

// 获取歌曲信息，赋值currentSong
const changeSongDetailAction = currentSong => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})
// 更改播放列表
const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})
// 更改当前播放下标
const changeCurrentSongIndex = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})
// 更改循环机制
export const changePlaySequenceAction = (sequence) => ({
    type:actionTypes.CHANGE_SEQUENCE,
    sequence
})
// 更改当前歌曲下标
export const changeCurrentLyricIndex = (index) => ({
    type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    index
})
// 切歌
export const changeCurrentSong = (tag) => {
    return (dispatch,getState) => {
        const sequence = getState()['player']['sequence']
        let currentSongIndex = getState()['player']['currentSongIndex']
        const playList = getState()['player']['playList']
        switch(sequence){
            case 1://随机播放
                let randomIndex = Math.floor(Math.random() * playList.length)
                while(randomIndex === currentSongIndex){
                    randomIndex = Math.floor(Math.random() * playList.length)
                }
                currentSongIndex = randomIndex
                break
            default://顺序播放
                currentSongIndex += tag
                if(currentSongIndex >= playList.length){
                    currentSongIndex = 0
                }
                if(currentSongIndex < 0){
                    currentSongIndex = playList.length - 1
                }
        }
        let currentSong = playList[currentSongIndex]
        console.log(playList,currentSongIndex);
        dispatch(changeSongDetailAction(currentSong))
        dispatch(changeCurrentSongIndex(currentSongIndex))
    }
}
// 获取歌曲详情，并改变当前歌曲
export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 1.根据id判断播放列表是否有该歌曲
        const playList = getState()["player"]["playList"]
        const songIndex = playList.findIndex(song => song.id === ids)
        let song = null
        if (songIndex !== -1) {//播放列表有该歌曲，设置下表，设置当前歌曲
            dispatch(changeCurrentSongIndex(songIndex))
            song = playList[songIndex]
            console.log(songIndex,playList,song);
            dispatch(changeSongDetailAction(song))
            dispatch(getLyricAction(song.id))
        } else {//没有找到歌曲，请求歌曲数据
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0]
                if(!song) return
                // 将歌曲添加到播放列表
                const newPlayList = [...playList,song]
                dispatch(changePlayListAction(newPlayList))
                const index = newPlayList.length - 1
                dispatch(changeCurrentSongIndex(index))
                dispatch(changeSongDetailAction(song))
                
                // 请求歌词
                dispatch(getLyricAction(song.id))
            })
        }
    }
}

const changeLyricAction = (lyric) => ({
    type:actionTypes.CHANGE_LYRIC,
    lyric
})
export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            let lyricStr = transLyric(res.lrc.lyric)
            dispatch(changeLyricAction(lyricStr))
        })
    }
}