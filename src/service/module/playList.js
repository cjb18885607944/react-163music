import request from '../request'

export function getPlayList(cat,limit,offset){
    return request({
        url:`/top/playlist`,
        params:{
            cat,
            limit,
            offset
        }
    })
}

export function getPlayListDetail(id){
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}