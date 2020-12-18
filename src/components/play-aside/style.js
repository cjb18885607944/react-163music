import styled from 'styled-components'

export const PlayAsideWrapper = styled.div`
    position:fixed;
    bottom:46px;
    left:50%;
    transform:translateX(-50%);
    width:986px;
    height:300px;
    background-position: -1014px 0;
    background-repeat: repeat-y;
    .title{
        height: 41px;
        background-position:2px 0;
        display: flex;
        .title-left{
            height: 41px;
            width: 559px;
            padding:0 20px 0 30px;
            line-height:41px;
            color:#e2e2e2;
            display: flex;
            justify-content:space-between;
            .play-list{
                font-weight: bold;
                font-size:14px;
            }
            .btn-con{
                .icon-item{
                    color:#CCC;
                    .icon{
                        margin:0 6px;
                        font-size:16px;
                        vertical-align:bottom;
                    }
                    .text{
                        font-size:12px;
                    }
                    &:hover{
                        text-decoration:underline;
                        color:#e2e2e2;
                        .icon{
                            color:#FFF;
                        }
                    }
                }
                .line{
                    height: 15px;
                    border-left: 1px solid #000;
                    border-right: 1px solid #2c2c2c;
                    margin:0 10px;
                }
            }
        }
        .title-right{
            position:relative;
            width: 427px;
            .song-name{
                width: 345px;
                margin:0 auto;
                display: block;
                height: 41px;
                line-height:41px;
                color: #fff;
                font-size: 14px;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .close{
                position:absolute;
                right:20px;
                top: 0;
                height: 41px;
                line-height:41px;
                color:#ccc;
                cursor:pointer;
            }
        }
    }
    .content{
        display: flex;
        height: 260px;
        .content-left{
            width: 553px;
            height: 260px;
            background-color:rgba(255,255,255,.1);
            margin-right:3px;
            .song-item{
                display: flex;
                justify-content:space-between;
                color:#ccc;
                padding:0 15px;
                height:28px;
                line-height:28px;
                cursor: pointer;
                .item-left{
                    display: flex;
                    position: relative;
                    .icon{
                        position: absolute;
                        left:0;
                        top:0;
                        color:red;
                        font-size:18px;
                    }
                    .song-name{
                        width: 250px;
                        display: block;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-left:20px;
                    }
                }
                .item-right{
                    display: flex;
                    &>*{
                        display: block;
                        margin:0 10px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .singer{
                        width: 65px;
                    }
                    .time{
                        width: 40px;
                    }
                }
                &.active{
                    color:#fff;
                    background-color:rgba(0,0,0,.4);
                }
                &:hover{
                    background-color:rgba(0,0,0,.5);
                    color:#fff;
                }
            }
        }
        .content-right{
            height: 260px;
            width: 417px;
            background-color:rgba(255,255,255,.1);
            margin-right:6px;
            margin-left:3px;
            color:#989898;
            text-align: center;
            overflow:hidden;            
            ul{
                height: 200px;
                margin:30px 0;
                overflow-y:auto;
                &::-webkit-scrollbar {
                    display: none;
                }
            }
            .lyric-item{
                height: 32px;
                line-height: 32px;
                &.active{
                    color:#f10c00;
                }
            }
            
        }
    }
`