import * as actionTypes from './constants'

const defaultState = {
  banners: [],
  hotRecommends:[],
  newAlbum:[],
  upRanking:[],
  newRanking:[],
  originRanking:[],
};

function reducer(state = defaultState, action) {
    switch(action.type){
        case actionTypes.CHANGE_BANNERS:
            return {...state,banners:action.banners}
        case actionTypes.RECOMMEND_HOT_RECOMMENDS:
            return {...state,hotRecommends:action.hotRecommends}
        case actionTypes.RECOMMEND_NEW_ALBUM:
            return {...state,newAlbum:action.newAlbum}
        case actionTypes.RECOMMEND_UP_RANKING:
            return {...state,upRanking:action.upRanking}
        case actionTypes.RECOMMEND_NEW_RANKING:
            return {...state,newRanking:action.newRanking}
        case actionTypes.RECOMMEND_ORIGIN_RANKING:
            return {...state,originRanking:action.originRanking}
        default:
            return state
    }
}

export default reducer