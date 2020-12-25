import React, { memo } from 'react';

import { getCount, getSizeImage } from "@/utils/format-utils";

import { SongsCoverWrapper } from './style';

export default memo(function SongsCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap" title={info.name}>
        {info.name}
      </div>
      <div className="cover-source text-nowrap" title={info.copywriter || info.creator.nickname}>
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
