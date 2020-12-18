import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { getSizeImage} from '@/utils/format-utils.js'

import { CustomerServiceOutlined,
        FolderAddOutlined,
         PlayCircleOutlined,
         ShareAltOutlined,
         DownloadOutlined,
         MessageOutlined,
         DownOutlined,
         UpOutlined,
         CaretRightOutlined,
         PlusOutlined } from '@ant-design/icons'
import {PlayerWrapper,PlayerLeft,PlayerRight} from './style'
import {getSingerAlbum,getSimiSong} from '@/service/module/player'

export default memo(function Song(props) {

    // 定义变量
    let [isClosed,setIsclosed] = useState(true)
    let [albumList,setAlbumList] = useState([])
    let [simiSongList,setSimiSongList] = useState([])
    // 测试路由id
    let singerId = props.match.params.id
    console.log('歌曲id',singerId);
    //redux hooks
    const {currentSong,lyric} = useSelector(state => ({
        currentSong:state.player.currentSong,
        lyric:state.player.lyric,
    }),shallowEqual)
    //react hooks
    useEffect(() => {
        currentSong.ar&&getSingerAlbum(currentSong.ar[0].id,5).then(res => {
            setAlbumList(res.hotAlbums)
        })
        currentSong.id&&getSimiSong(currentSong.id).then(res => {
            setSimiSongList(res.songs)
        })
    }, [currentSong]);
    
    //other handle
    let picUrl = (currentSong.al && currentSong.al.picUrl) || 'http://s4.music.126.net/style/web2/img/default/default_album.jpg'
    
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <div className="song-detail-contain">
                        <div className="singer-pic">
                            <img className="pic" src={getSizeImage(picUrl,130)} alt={currentSong.songName} />
                            <div className="mask image_cover"></div>
                            <a href="#/" className="creatLink">
                                <CustomerServiceOutlined />
                                生成外链播放器
                            </a>
                        </div>
                        <div className="song-detail-right">
                            <div className="song-detail">
                                <div className="song-name">
                                    <span className="name-tag sprite_icon2"></span>
                                    <span className="name">{currentSong.name}</span>
                                    <span className="name-icon sprite_icon2"></span>
                                </div>
                                <div className="singer-name">
                                    歌手：
                                    <span>{currentSong.ar&&currentSong.ar[0].name}</span>
                                </div>
                                <div className="album-name">
                                    所属专辑：
                                    <span>{currentSong.al&&currentSong.al.name}</span>
                                </div>
                            </div>
                            <div className="song-btn-con">
                                <button className="play sprite_button">
                                    <span>
                                        <PlayCircleOutlined />
                                    </span>
                                    播放
                                </button>
                                <button>
                                    <span>
                                        <FolderAddOutlined />
                                    </span>
                                    收藏
                                </button>
                                <button>
                                    <span>
                                        <ShareAltOutlined />
                                    </span>
                                    分享
                                </button>
                                <button>
                                    <span>
                                        <DownloadOutlined />
                                    </span>
                                    下载
                                </button>
                                <button>
                                    <span>
                                        <MessageOutlined />
                                    </span>
                                    （123123）
                                </button>
                            </div>
                            <div className="lyric-con"
                                 style={{height: isClosed ? '330px' : 'auto'}}>
                                <ul>
                                    {
                                        lyric.map(item => {
                                            return(
                                                <li className="lyric-item">{item.content}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="toggle" 
                                    onClick={e => setIsclosed(!isClosed)}>
                                {isClosed? '展开' : '收起'}
                                {isClosed? <DownOutlined /> : <UpOutlined />}
                            </div>
                        </div>
                    </div>
                    <div className="comments-contain">
                        评论
                    </div>
                </PlayerLeft>
                <PlayerRight>
                    <div className="about-album">
                        <p className="title">歌手专辑</p>
                        {
                            albumList&&albumList.map(item => {
                                return(
                                    <div className="albun-item" key={item.id}>
                                        <img className="pic" src={getSizeImage(item.picUrl,50)} alt={item.name} />
                                        <div className="info">
                                            <p className="album-name">{item.name}</p>
                                            <p className="album-time">{new Date(item.publishTime).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="simi-song">
                        <p className="title">相似歌曲</p>
                        {
                            simiSongList&&simiSongList.map(item => {
                                return(
                                    <div className="simi-song-item">
                                        <div className="info">
                                            <p className="song-name">{item.name}</p>
                                            <p className="singer-name">{item.artists[0].name}</p>
                                        </div>
                                        <div className="btn">
                                            <CaretRightOutlined />
                                            <PlusOutlined />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
