import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSongDetailAction, changePlaySequenceAction, changeCurrentSong,changeCurrentLyricIndex } from '../store/actionCreators'
import { Slider } from 'antd';
import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils.js'
import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'
import LyricBar from '../lyric-bar/index'
import PlayAside from '@/components/play-aside'
export default memo(function AppPlayerBar() {
    // props and state
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isChangeProgress, setIsChangeProgress] = useState(false)
    const [isPlayMusic, setIsPlayMusic] = useState(false)
    const [isShowPlayAside, setIsShowPlayAside] = useState(false)
    // redux hook
    const { currentSong, sequence, playList, lyric,currentLyricIndex } = useSelector(state => ({
        currentSong: state.player.currentSong,
        sequence: state.player.sequence,
        playList: state.player.playList,
        lyric: state.player.lyric,
        currentLyricIndex:state.player.currentLyricIndex
    }), shallowEqual)
    const dispatch = useDispatch()

    // other hook
    const audioRef = useRef()
    useEffect(() => {
        dispatch(getSongDetailAction(26305527))
    }, [dispatch])
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id)
        audioRef.current.play().then(res => {
            setIsPlayMusic(true)
        }).catch(err => {
            setIsPlayMusic(false)
        })
        // audioRef.current.play()
        // setIsPlayMusic(true)
    }, [currentSong])

    // other handle
    let picUrl = (currentSong.al && currentSong.al.picUrl) || 'http://s4.music.126.net/style/web2/img/default/default_album.jpg'
    let songName = currentSong.name || '--'
    let singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
    let duration = currentSong.dt || 0
    let currentPlayTime = formatMinuteSecond(currentTime)

    // 播放音乐
    const playMusic = useCallback(() => {
        isPlayMusic ? audioRef.current.pause() : audioRef.current.play()
        setIsPlayMusic(!isPlayMusic)
    }, [isPlayMusic])
    // 监听播放进度回调
    const timeUpdated = (e) => {
        const myCurrentTime = e.target.currentTime
        if (!isChangeProgress) {
            setCurrentTime(myCurrentTime * 1000)
            setProgress(myCurrentTime * 1000 / duration * 100)
        }

        let i = 0
        for (; i < lyric.length; i++) {
            let lyricItem = lyric[i]
            if (myCurrentTime * 1000 < lyricItem.time) {
                break
            }
        }
        if(i-1 !== currentLyricIndex){
            console.log('redux设置下标');
            dispatch(changeCurrentLyricIndex(i-1))
        }
    }
    // 歌曲播放完的回调
    const handleMusicEnded = () => {
        if (sequence === 2) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        } else {
            changeMusic(1)
        }
    }
    // 滑动条事件
    const sliderChange = useCallback((val) => {
        setIsChangeProgress(true)
        const nowTime = val / 100 * duration / 1000
        setCurrentTime(nowTime * 1000)

        setProgress(val)
    }, [duration])
    const sliderChangeEnd = useCallback((val) => {
        const nowTime = val / 100 * duration / 1000
        audioRef.current.currentTime = nowTime
        setCurrentTime(nowTime * 1000)
        setIsChangeProgress(false)
        if (!isPlayMusic) {
            playMusic()
        }
    }, [duration, playMusic, isPlayMusic])
    // 更改循环机制
    const changeSequence = () => {
        let currentSequence = sequence + 1
        if (currentSequence > 2) {
            currentSequence = 0
        }
        dispatch(changePlaySequenceAction(currentSequence))
    }
    // 切歌
    const changeMusic = (tag) => {
        dispatch(changeCurrentSong(tag))
    }
    // 切换播放拦的显示
    const changeShowPlayAside = (flag) => {
        let isShow = flag || !isShowPlayAside
        setIsShowPlayAside(isShow)
    }

    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control isPlaying={isPlayMusic}>
                    <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
                    <button className="sprite_player play" onClick={e => playMusic()}></button>
                    <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <NavLink to={"/discover/song/"+currentSong.id}>
                            <img src={getSizeImage(picUrl, 35)} alt={songName} />
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{songName}</span>
                            <span className="singer-name">{singerName}</span>
                        </div>
                        <div className="progress">
                            <Slider
                                defaultValue={0}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderChangeEnd} />
                            <div className="time">
                                <span className="now-time">{currentPlayTime}</span>
                                <span className="devider">/</span>
                                <span className="duration">{formatMinuteSecond(duration)}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
                        <button className="sprite_player btn playlist" onClick={e => changeShowPlayAside()}>{playList.length}</button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdated} onEnded={handleMusicEnded} />
            <LyricBar lyric={lyric[currentLyricIndex]&&lyric[currentLyricIndex].content}/>
            {isShowPlayAside &&<PlayAside changeShowPlayAside={changeShowPlayAside}/>}
        </PlaybarWrapper>
    )
})
