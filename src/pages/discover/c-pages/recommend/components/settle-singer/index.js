import React,{useEffect,useState} from 'react'
import {SettleSingerWrapper} from './style'
import {getHotArtist} from '@/service/module/recommend'
import {getSizeImage} from '@/utils/format-utils'
export default function SettleSinger() {

    const [hotSinger,setHotSinger] = useState([])
    
    useEffect(() => {
        getHotArtist(10).then(res => {
            setHotSinger(res.artists)
            console.log(hotSinger);
        })
    }, [])
    
    return (
        <SettleSingerWrapper>
            <div className="head">
                <p className="title">热门歌手</p>
                <a href="#/" className="all">查看全部&gt;</a>
            </div>
            <ul className="list">
                {
                    hotSinger.map((item,index) => {
                        return (
                            <div className="item">
                                <div className="image" >
                                    <img src={getSizeImage(item.picUrl,62)}/>
                                </div>
                                <div className="info">
                                    <span className="name">{item.name}</span>
                                    <span className="rank">NO{index+1}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
            <button className="join-us">申请成为网易音乐人</button>
        </SettleSingerWrapper>
    )
}
