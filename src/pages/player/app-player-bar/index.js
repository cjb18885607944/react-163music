import React, { memo, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSongDetailAction} from '../store/actionCreators'
import { Slider } from 'antd';
import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'

export default memo(function AppPlayerBar() {

    const currentSong = useSelector(state => state.player.currentSong)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongDetailAction(167876))
    },[dispatch])
    
    console.log('---',currentSong.ar);
    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play"></button>
                    <button className="sprite_player next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <img src="http://s4.music.126.net/style/web2/img/default/default_album.jpg"/>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.ar&&currentSong.ar[0].name || '--'}</span>
                            <span className="singer-name">{currentSong.name || '--'}</span>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30}/>
                            <div className="time">
                                <span className="now-time">2:30</span>
                                <span className="devider">/</span>
                                <span className="duration">4:30</span>
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
        </PlaybarWrapper>
    )
})
