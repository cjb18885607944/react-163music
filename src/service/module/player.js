import request from '../request'

// 根据idx获取歌曲信息
export function getSongDetail(ids){
    return request({
        url:'/song/detail',
        params:{
            ids
        }
    })
}