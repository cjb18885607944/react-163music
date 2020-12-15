import React, { memo } from "react";
import {HeaderWrapper} from "./style";

function RecommendThemeHeader(props) {
  const { title, keywords } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{(title)}</h2>
        <div className="keyword">
          {
            keywords && keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="#/">{item}</a>
                  <span className="divider">|</span>
                </div>
              );
            })}
        </div>
      </div>
      <div className="right">
        <a href="#/">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
}

export default memo(RecommendThemeHeader);
