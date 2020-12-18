import React, { memo } from 'react'
import {LyricWrapper} from './style'
export default memo(function LyricBar(props) {
    const {lyric} = props
    return (
        <LyricWrapper lyric={lyric}>
            <div className="lyricContent">{lyric}</div>
        </LyricWrapper>
    )
})
