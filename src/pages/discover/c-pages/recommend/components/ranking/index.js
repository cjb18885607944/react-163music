import React, { memo, useEffect } from 'react'
import RecommendThemeHeader from '@/components/recommend-theme-header'
import {RankingWrapper} from './style'
import { useDispatch,shallowEqual, useSelector } from 'react-redux'
import {getRankingAction} from '../../store/actionCreators'
import TopRanking from '@/components/top-ranking'

function Ranking() {

    const {upRanking,newRanking,originRanking} = useSelector(state => ({
        upRanking:state.recommend.upRanking,
        newRanking:state.recommend.newRanking,
        originRanking:state.recommend.originRanking
    }),shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRankingAction(0))
        dispatch(getRankingAction(2))
        dispatch(getRankingAction(3))
    },[dispatch])
    
    return (
        <div>
            <RankingWrapper>
                <RecommendThemeHeader title="榜单"/>
                <div className="tops">
                    <TopRanking info={upRanking}/>
                    <TopRanking info={newRanking}/>
                    <TopRanking info={originRanking}/>
                </div>
            </RankingWrapper>
        </div>
    )
}

export default  memo(Ranking)