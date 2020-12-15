import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';

import { AlbumWrapper } from './style';

export default memo(function HYAlbumCover(props) {
  // state and props
  const { info, size = 130, width = 153, bgp = "-845px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt=""  title={info.name}/>
        <a href="/todo" className="cover image_cover" title={info.name}>{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap" title={info.name}>{info.name}</div>
        <div className="artist text-nowrap" title={info.artist.name}>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
