import React, { memo, useEffect, useState } from 'react'
import {getAllTopList,getTopListDetail} from '@/service/module/rank'
import {getSizeImage} from '@/utils/format-utils'
import {RankWrapper,RankWrapLeft,RankWrapRight} from './style'
import { NavLink } from 'react-router-dom'
import { Table } from 'antd';
import { 
    ClockCircleOutlined,
    PlayCircleOutlined,
    ShareAltOutlined,
    DownloadOutlined,
    MessageOutlined,
    FolderAddOutlined } from '@ant-design/icons';
import {columns} from './column'
function Toplist(props) {

    // 获取路由id
    const rankListId = props.match.params.id || 19723756
    console.log(props.match.params.id,rankListId);
    //react hook
    const [rankTitleList,setRankTitleList] = useState([])
    const [rankDetailList,setRankDetailList] = useState({})
    
    // 请求数据
    useEffect(() => {
        getAllTopList().then(res => {
            setRankTitleList(res.list)
        })
    },[])
    // 根据id请求排行榜歌曲
    useEffect(() => {
        getTopListDetail(rankListId).then(res => {
            setRankDetailList(res.playlist)
        })
    },[rankListId])
    
    return (
        <RankWrapper className="wrap-v2">
            <RankWrapLeft>
                <p className="rank-title">云音乐特色榜</p>
                {
                    rankTitleList.map((item,index) => {
                        if(index<4){
                            return(
                                <NavLink to={"/discover/toplist/"+item.id}>
                                    <div className={item.id ===rankListId ? "title-item active" : "title-item"}>
                                        <img src={getSizeImage(item.coverImgUrl,40)}></img>
                                        <div className="info">
                                            <div className="title">{item.name}</div>
                                            <div className="desc">{item.updateFrequency}</div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        }
                    })
                }
                <p className="rank-title">全球媒体榜</p>
                {
                    rankTitleList.map((item,index) => {
                        if(index>=4){
                            return(
                                <NavLink to={"/discover/toplist/"+item.id}>
                                    <div className="title-item">
                                        <img src={getSizeImage(item.coverImgUrl,40)}></img>
                                        <div className="info">
                                            <div className="title">{item.name}</div>
                                            <div className="desc">{item.updateFrequency}</div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        }
                    })
                }
            </RankWrapLeft>

            <RankWrapRight>
                <div className="rank-info">
                    <div className="img-box">
                        <img src={getSizeImage(rankDetailList.coverImgUrl,150)}/>
                        <span className="sprite_covor mask"></span>
                    </div>
                    <div className="detail-info">
                        <div className="rank-name">{rankDetailList.name}</div>
                        <div className="update-info">
                            <ClockCircleOutlined />
                            <span>最近更新：</span>
                            <span>{new Date(rankDetailList.updateTime).toLocaleDateString()}</span>
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
                                ({rankDetailList.subscribedCount})
                            </button>
                            <button>
                                <span>
                                    <ShareAltOutlined />
                                </span>
                                ({rankDetailList.shareCount})
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
                                （{rankDetailList.commentCount}）
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rank-detail-contain">
                    <div className="rank-table-title">
                        <p className="count">
                            <span>歌曲列表</span>
                            {rankDetailList.tracks&&rankDetailList.tracks.length}首歌
                        </p>
                        <p className="play-count">
                            播放：
                            <span>
                                {rankDetailList.playCount}
                            </span>
                            次
                        </p>
                    </div>
                    <Table pagination={false} dataSource={rankDetailList.tracks} columns={columns} />
                </div>
            </RankWrapRight>
        </RankWrapper>
    )
}

export default memo(Toplist)