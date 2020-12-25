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