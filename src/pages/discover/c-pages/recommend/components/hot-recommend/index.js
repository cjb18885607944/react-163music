import React, { memo, useEffect } from 'react'
import {useDispatch, useSelector,shallowEqual} from 'react-redux'
import {getHotRecommendsAction} from '../../store/actionCreators'
import {RecommendWrapper} from './style'
import RecommendThemeHeader from '@/components/recommend-theme-header'
import SongsCover from '@/components/song-cover'

function HotRecommend() {

    const {hotRecommends} = useSelector(state => ({
        hotRecommends:state.recommend.hotRecommends
    }),shallowEqual)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getHotRecommendsAction(8))
    },[dispatch])
    
    return (
        <RecommendWrapper>
            <RecommendThemeHeader title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]}/>
            <div className="recommend-list">
                {
                    hotRecommends.map((item,index) => {
                        return <SongsCover info={item} key={index}/>
                    })
                }
            </div>
        </RecommendWrapper>
    )
}

export default memo(HotRecommend)