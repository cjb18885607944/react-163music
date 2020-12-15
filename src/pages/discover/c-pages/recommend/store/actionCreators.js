import * as actionTypes from './constants'
import {getBanners,getHotRecommends,getNewAlbum,getRanking} from '@/service/module/recommend'

const changeBannerAction = res => ({
    type:actionTypes.CHANGE_BANNERS,
    banners:res
})
export const getBannersAction = () => {
    return dispatch => {
        getBanners().then(res => {
            dispatch(changeBannerAction(res.banners))
        })
    }
}

const changeHotRecommendsAction = res => ({
    type:actionTypes.RECOMMEND_HOT_RECOMMENDS,
    hotRecommends:res
})
export const getHotRecommendsAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendsAction(res.result))
        })
    }
}

const changeNewAlbumAction = res => ({ 
    type:actionTypes.RECOMMEND_NEW_ALBUM,
    newAlbum:res
})
export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(res => {
            dispatch(changeNewAlbumAction(res.albums))
        })
    }
}

const  changeUpRankingAction = res => ({
    type:actionTypes.RECOMMEND_UP_RANKING,
    upRanking:res
})
const  changeNewRankingAction = res => ({
    type:actionTypes.RECOMMEND_NEW_RANKING,
    newRanking:res
})
const  changeOriginRankingAction = res => ({
    type:actionTypes.RECOMMEND_ORIGIN_RANKING,
    originRanking:res
})
export const getRankingAction = (idx) => {
    return dispatch => {
        getRanking(idx).then(res => {
            switch (idx){
                case 0:
                    dispatch(changeUpRankingAction(res.playlist))
                    
                case 2:
                    dispatch(changeNewRankingAction(res.playlist))
                    
                case 3:
                    dispatch(changeOriginRankingAction(res.playlist))
                    
            }
        })
    }
}