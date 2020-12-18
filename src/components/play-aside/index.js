import React, { memo } from 'react'
import {
    FolderAddOutlined,
    DeleteOutlined,
    CloseOutlined,
    CaretRightOutlined,
    LinkOutlined
  } from '@ant-design/icons';
import {PlayAsideWrapper} from './style'
import { useDispatch, useSelector } from 'react-redux';
import { formatMinuteSecond } from '@/utils/format-utils.js'
import {getSongDetailAction} from '@/pages/player/store/actionCreators.js'
export default memo(function PlayAside(props) {

    const {playList,currentSong,lyric,currentLyricIndex} = useSelector(state => ({
        playList:state.player.playList,
        currentSong:state.player.currentSong,
        lyric:state.player.lyric,
        currentLyricIndex:state.player.currentLyricIndex,
    }))
    const dispatch = useDispatch()

    const {changeShowPlayAside} = props
    // 显示隐藏
    const handleClose = () => {
        changeShowPlayAside(false)
    }
    // 点击歌曲
    const changePlaySong = id => {
        dispatch(getSongDetailAction(id))
    }
    
    return (
        <PlayAsideWrapper className="playside_bg">
            <div className="title playside_bg_title">
                <div className="title-left">
                    <span className="play-list">播放列表({playList.length})</span>
                    <div className="btn-con">
                        <a href="#/" className="icon-item">
                            <span  className="icon">
                                <FolderAddOutlined />
                            </span>
                            <span className="text">收藏全部</span>
                        </a>
                        <span className="line"></span>
                        <a href="#/" className="icon-item">
                            <span  className="icon">
                                <DeleteOutlined />
                            </span>
                            <span className="text">清除</span>
                        </a>
                    </div>
                </div>
                <div className="title-right">
                    <span className="song-name">{currentSong.name}</span>
                    <span className="close">
                        <CloseOutlined onClick={e => handleClose()}/>
                    </span>
                </div>
            </div>
            <div className="content">
                <div className="content-left">
                    <ul>
                        {
                            playList.map((item,index) => {
                                return (
                                    <li className={[item.id === currentSong.id ? 'active song-item':'song-item']} 
                                        key={item.id}
                                        onClick={e => changePlaySong(item.id)}>
                                        <div className="item-left">
                                            <span className="icon" style={{display:(item.id === currentSong.id ? 'block' : 'none')}}>
                                                <CaretRightOutlined />
                                            </span>
                                            <span className="song-name">{item.name}</span>
                                        </div>
                                        <div className="item-right">
                                            <span className="singer">
                                                {
                                                    item.ar.map((val,i) => {
                                                        if(i < item.ar.length-1){
                                                            return val.name + '/'
                                                        }else{
                                                            return val.name
                                                        }
                                                    })
                                                }
                                            </span>
                                            <span className="time">{formatMinuteSecond(item.dt) || '00:00'}</span>
                                            <span>
                                                <LinkOutlined />
                                            </span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="content-right">
                    <ul>
                        {
                            lyric.map((item,index) => {
                                return(
                                    <li className={currentLyricIndex === index ? 'lyric-item active' : 'lyric-item'}>
                                        {item.content}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </PlayAsideWrapper>
    )
})
