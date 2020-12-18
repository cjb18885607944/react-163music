const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function transLyric(lyric){
    let lyricArr = []
    let arr = lyric.split('\n')
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if(item){
            const result = parseExp.exec(item)
            if(!result) continue
            const time1 = result[1] * 60 * 1000 //分
            const time2 = result[2] * 1000//秒
            const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10
            const time = time1 + time2 + time3
            const content = item.replace(parseExp,'').trim()
            const lyricObj = {time,content}
            lyricArr.push(lyricObj)
        }
    };
    return lyricArr
}