import React, { memo, useEffect, useState } from 'react'
import {getPlayListDetail} from '@/service/module/playList'
import {PlayListWrapper,PlatListLeft,PlatListRight} from './style'

export default memo(function PlayList(props) {

    // 获取id
    let playListId = props.match.params.id
    // react hook
    const [playListDetail,setPlayListDetail] = useState([])

    // 请求数据
    useEffect(() => {
        getPlayListDetail(playListId).then(res => {
            console.log(res);
            setPlayListDetail(res.playlist)
        })
    },[playListId])
    
    return (
        <PlayListWrapper  className="wrap-v2">
            <PlatListLeft>

            </PlatListLeft>
            <PlatListRight>

            </PlatListRight>
        </PlayListWrapper>
    )
})
