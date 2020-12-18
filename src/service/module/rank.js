import request from '../request'
// 获取排行榜标题列表
export function getAllTopList(){
    return request({
        url:'/toplist',
    })
}
// 获取内容
export function getTopListDetail(id){
    return request({
        url:'/top/list',
        params:{
            id
        }
    })
}