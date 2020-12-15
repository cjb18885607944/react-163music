import React, { memo, useCallback, useEffect,useRef, useState } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {getSongDetailAction} from '../store/actionCreators'
import { Slider } from 'antd';
import {getSizeImage,formatMinuteSecond,getPlaySong} from '@/utils/format-utils.js'
import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'

export default memo(function AppPlayerBar() {
    // props and state
    const [currentTime, setCurrentTime] = useState(0)
    const [progress,setProgress] = useState(0)
    const [isChangeProgress,setIsChangeProgress] = useState(false)
    const [isPlayMusic,setIsPlayMusic] = useState(false)
    
    // redux hook
    const currentSong = useSelector(state => state.player.currentSong,shallowEqual)
    const dispatch = useDispatch()

    // other hook
    const audioRef = useRef()
    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    },[dispatch])
    useEffect(() => {
        audioRef.current.src=getPlaySong(currentSong.id)
    },[currentSong])
    
    // other handle
    let picUrl = (currentSong.al&&currentSong.al.picUrl) || 'http://s4.music.126.net/style/web2/img/default/default_album.jpg'
    let songName = (currentSong.ar&&currentSong.ar[0].name) || '--'
    let singerName = currentSong.name || '--'
    let duration = currentSong.dt || 0
    let currentPlayTime = formatMinuteSecond(currentTime)
    
    // 播放音乐
    const playMusic = () => {
        isPlayMusic ? audioRef.current.pause() : audioRef.current.play()
        setIsPlayMusic(!isPlayMusic)
    }
    // 监听播放进度回调
    const timeUpdated = (e) => {
        console.log(e);
        if(!isChangeProgress){
            setCurrentTime(e.target.currentTime * 1000)
            setProgress(currentTime / duration * 100)
        }
    }
    // 滑动条事件
    const sliderChange = useCallback((val) => {
        setIsChangeProgress(true)
        const nowTime = val / 100 * duration / 1000
        setCurrentTime(nowTime *1000)

        setProgress(val)
    })
    const sliderChangeEnd = useCallback((val) => {
        const nowTime = val / 100 * duration / 1000
        audioRef.current.currentTime = nowTime
        setCurrentTime(nowTime *1000)
        setIsChangeProgress(false)
        if(!isPlayMusic){
            audioRef.current.play()
            setIsPlayMusic(true)
        }
    },[duration])
    
    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control isPlaying={isPlayMusic}>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play" onClick={e => playMusic()}></button>
                    <button className="sprite_player next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <img src={getSizeImage(picUrl,35)}/>
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
                                onAfterChange={sliderChangeEnd}/>
                            <div className="time">
                                <span className="now-time">{currentPlayTime}</span>
                                <span className="devider">/</span>
                                <span className="duration">{formatMinuteSecond(duration)}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdated}/>
        </PlaybarWrapper>
    )
})
