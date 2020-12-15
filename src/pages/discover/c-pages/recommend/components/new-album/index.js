import React, { memo, useEffect,useRef } from 'react'
import {Carousel} from 'antd'
import RecommendThemeHeader from '@/components/recommend-theme-header'
import {getNewAlbumAction} from '../../store/actionCreators'
import { shallowEqual,useSelector,useDispatch } from 'react-redux'
import {AlbumWrapper} from './style'
import AlbumCover from '@/components/album-cover'

function NewAlbum() {

    const carouselRef = useRef()
    
    const newAlbum = useSelector(state => state.recommend.newAlbum,shallowEqual)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    },[dispatch])
    
    // console.log(newAlbum)
    return (
        <div>
            <AlbumWrapper>
                <RecommendThemeHeader title="新碟上架"/>
                <div className="content">
                    <button 
                    className="arrow arrow-left sprite_02"
                    onClick={e => carouselRef.current.prev()}></button>
                    <div className="album">
                        <Carousel dots={false} ref={carouselRef}>
                            {
                                [0,1].map((item,index) => {
                                    return(
                                        <div className="page" key={item}>
                                            {
                                                newAlbum.slice(item*5,(item+1)*5).map(v => {
                                                    return (
                                                        <AlbumCover
                                                            key={v.name}
                                                            info={v} 
                                                            bgp="-570px"
                                                            width="118" 
                                                            size="100"/>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <button 
                        className="arrow arrow-right sprite_02"
                        onClick={e => carouselRef.current.next()}></button>
                </div>
            </AlbumWrapper>
        </div>
    )
}

export default  memo(NewAlbum)