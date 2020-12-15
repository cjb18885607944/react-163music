import React, { memo, useCallback, useEffect,useRef, useState } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {getBannersAction} from '../../store/actionCreators'

import { Carousel } from 'antd';
import {
    BannerWrapper,BannerLeft,BannerRight,BannerControl
} from './style'

function Banners() {
    // 记录轮播图当前index
    const [currentIndex,setCurrentIndex] = useState(0)

    const {banners} = useSelector(state => ({
        banners:state.recommend.banners
    }),shallowEqual)
    const dispatch = useDispatch()

    const bannerRef = useRef()
    useEffect(() => {
        dispatch(getBannersAction())
    },[dispatch])

    // 轮播图切换的回调
    const bannerChange = useCallback((from,to) => {
        setCurrentIndex(to)
    },[])

    // 获取轮播图背景图
    const bgImage = banners[currentIndex] && banners[currentIndex].imageUrl + '?imageView&blur=40x20'
    
    return (
        <div>
            <BannerWrapper bgImage={bgImage}>
                <div className="banner wrap-v2">
                    <BannerLeft>
                        <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                            {
                               banners.map((item,index) => {
                                   return (
                                       <div className="banner-item" key={item.imageUrl}>
                                           <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                                       </div>
                                   )
                               }) 
                            }
                        </Carousel>
                    </BannerLeft>
                    <BannerRight></BannerRight>
                    <BannerControl>
                        <div className="btn left" onClick={e => bannerRef.current.prev()}></div>
                        <div className="btn right" onClick={e => bannerRef.current.next()}></div>
                    </BannerControl>
                </div>
            </BannerWrapper>
        </div>
    )
}

export default memo(Banners)