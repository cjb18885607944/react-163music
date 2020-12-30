import styled from 'styled-components'
import headBg from '@/assets/img/sprite_table.png'
export const RankWrapper = styled.div`
    display: flex;
`

export const RankWrapLeft = styled.div`
    width: 240px;
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
    padding:20px 0;
    .rank-title{
        padding: 0 10px 12px 15px;
        font-size: 16px;
        color: #000;
        margin-top:20px;
        font-weight: bold;
    }
    .title-item{
        padding: 10px 0 10px 20px;
        display: flex;
        height: 62px;
        cursor: pointer;
        .info{
            padding-left:10px;
            .title{
                width: 150px;
                overflow: hidden;
                margin-top: 2px;
                margin-bottom: 7px;
            }
            .desc{
                color:#999;
            }
        }
        &:hover{
            background-color: #f4f2f2;
        }
        &.active{
            background-color:#e6e6e6;
        }
    }
    .active>.title-item{
        background-color:#e6e6e6;
    }
`
export const RankWrapRight = styled.div`
    width: 740px;
    border-right:1px solid #ccc;
    .rank-info{
        padding: 40px;
        display: flex;
        .img-box{
            position:relative;
            padding:3px;
            border:1px solid #ccc;
            .mask{
                position:absolute;
                width: 150px;
                height: 150px;
                background-position: -230px -380px;
                top: 3px;
                left: 3px;
            }
        }
        .detail-info{
            margin-left:30px;
            .rank-name{
                line-height: 24px;
                font-size: 20px;
                height: 40px;
                margin-top: 20px;
            }
            .update-info{
                color:#666;
                &>*{
                    margin:0 2px;
                }
            }
            .song-btn-con{
                margin-top:20px;
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
      }
    }
    .rank-detail-contain{
        padding: 0 30px 40px 40px;
        .rank-table-title{
            display: flex;
            justify-content:space-between;
            height: 35px;
            line-height: 35px;
            border-bottom: 2px solid #c20c0c;
            .count{
                color:#666;
                span{
                    font-size:20px;
                    color:#333;
                    margin-right:20px;
                }
            }
            .play-count{
                span{
                    color:#c20c0c;
                    font-weight: bold;
                }
            }
        }
        .ant-table-content{
            border: 1px solid #d9d9d9;
            thead>tr{
                background-color: #f7f7f7;
            }
            th{
                padding: 8px 10px!important;
                color:#666!important;
                font-size: 12px!important;
                background:url(${headBg}) no-repeat;
                background-position: -1px -56px;
                border-bottom:1px solid #ccc;
                box-sizing:border-box;
            }
            td{
                padding: 6px 10px!important;
                color:#333!important;
                font-size: 12px!important;
                border:none!important;
            }
            .song-info-name{
                .anticon{
                    color:#999;
                    font-size:16px;
                    margin:0 10px;
                    vertical-align:middle;
                }
                .mv{
                    width: 23px;
                    height: 17px;
                    margin: 1px 0 0 0;
                    background-position: 0 -151px;
                    display: inline-block;
                    vertical-align:middle;
                    margin-left:5px;
                }
            }
            .song-time{
                color:#999!important;
            }
        }
    }
`