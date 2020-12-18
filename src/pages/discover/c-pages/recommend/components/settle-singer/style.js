import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
    padding:0 20px;
    margin-top:15px;
    .head{
        display: flex;
        justify-content:space-between;
        border-bottom:1px solid #CCC;
        height: 24px;
        .title{
            font-weight: bold;
        }
    }
    .list{
        padding-top:5px;
        .item{
            cursor: pointer;
            margin-top:15px;
            display: flex;
            .image{
                width: 75.5px;
                height: 62px;
                overflow:hidden;
                img{
                    height:62px;
                    width:auto;
                    text-align: center;
                }
            }
            .info{
                border:1px solid #e9e9e9;
                width:calc(100% - 75.5px);
                line-height:62px;
                .name{
                    font-weight: bold;
                    margin-left:10px;
                    &:hover{
                        text-decoration:underline;
                    }
                }
                .rank{
                    float:right;
                    margin-right:15px;
                }
            }
            &:nth-child(1) .rank{
                color:red;
                font-weight: bold;
            }
            &:nth-child(2) .rank{
                color:red;
                font-weight: bold;
            }
            &:nth-child(3) .rank{
                color:red;
                font-weight: bold;
            }
            
        }
    }
    .join-us{
        border:1px solid #CCC;
        border-radius:4px;
        font-weight: bold;
        height: 30px;
        width:100%;
        margin-top:20px;
    }
`