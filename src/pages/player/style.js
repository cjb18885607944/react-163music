import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`

export const PlayerLeft = styled.div`
  width: 710px;
  border-left: 1px solid #d3d3d3;
  .song-detail-contain{
    display: flex;
    .singer-pic{
      padding:40px 40px;
      position:relative;
      width: 285px;
      .pic{
        width: 205px;
        height: 205px;
        display: block;
        padding:38px 38px 37px 37px;
      }
      .mask{
        position:absolute;
        background-position: -140px -580px;
        top: 40px;
        left: 40px;
        width: 205px;
        height: 205px;
      }
      .creatLink{
        display: block;
        margin-top:20px;
        text-align: center;
        color:#0c73c2;
        text-decoration:underline;
      }
    }
    .song-detail-right{
      width: 505px;
      .song-detail{
        padding-top:40px;
        .song-name{
          display: flex;
          height: 30px;
          align-items:center;
          margin-bottom:20px;
          .name-tag{
            width: 54px;
            height: 24px;
            background-position: 0 -463px;
            display: block;
          }
          .name{
            font-size: 24px;
            margin:0 15px;
          }
          .name-icon{
            cursor: pointer;
            width: 21px;
            height: 18px;
            background-position: 0 -18px;
          }
        }
        .singer-name,.album-name{
          cursor: pointer;
          color:#999;
          margin-bottom:10px;
          span{
            color:#0c73c2;
            &:hover{
              text-decoration:underline;
            }
          }
        }
      }
      .song-btn-con{
        display: flex;
        button{
          padding:0 10px;
          height: 31px;
          line-height: 28px;
          margin-right:6px;
          border:1px solid #ccc;
          border-radius:3px;
          cursor: pointer;
          &.play{
            color:#FFF;
            background-position: right -387px;
            background-repeat:repeat-x;
          }
          span{
            font-size:16px;
            margin-right:2px;
          }
        }
      }
      .lyric-con{
        padding-top:40px;
        overflow: hidden;
        .lyric-item{
          line-height:26px;
        }
      }
      .toggle{
        color:#0c73c2;
        cursor: pointer;
      }
    }
  }
`

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .about-album{
    .title{
      border-bottom: 1px solid #ccc;
      color: #333;
      height:23px;
      font-weight: bold;
      margin-bottom:20px;
    }
    .albun-item{
      cursor: pointer;
      margin-bottom:10px;
      display: flex;
      .info{
        width:148px;
        &>*{
          padding-left:10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          height:25px;
          line-height:25px;
        }
        .album-name{
          font-size:14px;
          &:hover{
            text-decoration:underline
          }
        }
        .album-time{
          color:#999;
        }
      }
    }
  }
  .simi-song{
    margin-top:40px;
    .title{
      border-bottom: 1px solid #ccc;
      color: #333;
      height:23px;
      font-weight: bold;
      margin-bottom:20px;
    }
    .simi-song-item{
      display: flex;
      justify-content:space-between;
      align-items:center;
      margin-top:10px;
      .song-name{
        cursor: pointer;
        &:hover{
          text-decoration:underline;
        }
      }
      .singer-name{
        cursor: pointer;
        color:#999;
        &:hover{
          text-decoration:underline;
        }
      }
      .btn{
        color:#999;
        font-size:16px;
        &>*{
          cursor: pointer;
          margin-right:10px;
        }
      }
    }
  }
`
