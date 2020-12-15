import {combineReducers}  from 'redux'
import {reducer as RecommendReducer} from '../pages/discover/c-pages/recommend/store/index'
import {reducer as playReducer} from '../pages/player/store'

const cReducer = combineReducers({
    recommend:RecommendReducer,
    player:playReducer
})

export default cReducer