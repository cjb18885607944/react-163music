import React, { useEffect, useState } from 'react'
import SongsCover from '@/components/song-cover'
import {PlayListWrapper} from './style'
import {getPlayList} from '@/service/module/playList'
import { Pagination } from 'antd';
export default function Playlist() {

    // 歌单分类
    const [cat,setCat] = useState('全部')
    // 页数
    const [page,setPage] = useState(1)
    //取出歌单数量 
    const [limit,setLimit] = useState(35)
    // 数据总数
    const [total,setTotal] = useState(0)
    // 歌单
    const [playList,setPlayList] = useState([])
    
    
    // 获取歌单
    useEffect(() => {
        let offset = (page - 1) * limit

        getPlayList(cat,limit,offset).then(res => {
            setPlayList(res.playlists)
            setTotal(res.total)
        })
    },[page,cat,limit])
    
    // 其他处理
   
    
    return (
        <PlayListWrapper className="wrap-v2">
            <div className="head">
                <p>全部</p>
            </div>
            <div className="content">
                {
                    playList.map((item,index) => {
                        return (
                            <SongsCover info={item}/>
                        )
                    })
                }
            </div>
            <div className="pagenation">
                <Pagination current={page} total={total} onChange={page => setPage(page)}/>
            </div>
        </PlayListWrapper>
    )
}
