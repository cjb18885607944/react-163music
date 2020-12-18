import request from '../request'

// 获取轮播图
export function getBanners(){
    return request({
        url:'/banner'
    })
}
// 获取热门推荐
export function getHotRecommends(limit){
    return request({
        url:'/personalized',
        params:{
            limit
        }
    })
}
// 获取新碟上架
export function getNewAlbum(limit){
    return request({
        url:'/top/album',
        params:{
            limit
        }
    })
}
// 获取榜单数据（排行榜）
// idx :  0:云音乐飙升榜  2 ： 云音乐新歌榜  3： 云原创歌曲榜
export function getRanking(idx){
    return request({
        url:'/top/list',
        params:{
            idx
        }
    })
}
// 获取入驻歌手
export function getArtist(limit,cat){
    return request({
        url:'/artist/list',
        params:{
            limit,
            cat
        }
    })
}
// 获取热门歌手
export function getHotArtist(limit){
    return request({
        url:'/top/artists',
        params:{
            offset:0,
            limit
        }
    })
}