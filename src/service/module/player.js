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
// 获取歌词
export function getLyric(id) {
    return request({
      url: "/lyric",
      params: {
        id
      }
    })
  }
// 获取歌手专辑
export function getSingerAlbum(id,limit) {
    return request({
      url: "/artist/album",
      params: {
        id,
        limit
      }
    })
  }
// 获取相似歌曲
export function getSimiSong(id) {
    return request({
      url: "/simi/song",
      params: {
        id
      }
    })
  }