import React, { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import Banners from "./components/banners";
import HotRecommend from './components/hot-recommend'
import NewAlbum from './components/new-album'
import Ranking from './components/ranking'
import UserLogin from './components/user-login'
import HotAnchor from './components/hot-anchor'
import SettleSinger from './components/settle-singer'

function Recommend(props) {
  return (
    <RecommendWrapper>
      <Banners />
      <Content className="wrap-v2">
          <RecommendLeft>
              <HotRecommend/>
              <NewAlbum/>
              <Ranking/>
          </RecommendLeft>

          <RecommendRight>
            <UserLogin/>
            <SettleSinger/>
            <HotAnchor/>
          </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(Recommend);

// function Recommend(props) {
//     const {getBanners,banners} = props
//     useEffect(() => {
//         getBanners()
//     },[getBanners])

//     return (
//         <div>
//             {banners.length}
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//     banners:state.recommend.banners
// });
// const mapDispatchToProps = dispatch => ({
//     getBanners:() => {
//         dispatch(getBannersAction())
//     }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
