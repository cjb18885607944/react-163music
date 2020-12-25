import styled from 'styled-components'

export const PlayListWrapper = styled.div`

    padding:40px;
    .head{
        height: 42px;
        border-bottom: 2px solid #c20c0c;
        p{
            font-size:24px;
        }
    }
    .content{
        display: flex;
        padding-top:10px;
        flex-wrap:wrap;
        justify-content:space-between;
        &>div{
            margin-right:20px;
            margin-bottom:10px;
            &:nth-child(5n+0){
                margin-right:0
            }
        }
    }
    .ant-pagination-options{
        display: none;
    }
    .pagenation{
        text-align: center;
        margin-top:20px;
        .ant-pagination{
            display: inline-block;
            &>*{
                width: 24px;
                height: 24px;
                line-height: 24px;
                color:#A2161B;
                &:hover{
                    border-color:#A2161B;
                    a,button{
                        color:#A2161B;
                        border-color:#A2161B;
                    }
                }
                a{
                    padding:0;
                }
            }
            .ant-pagination-item-link-icon{
                color:#A2161B;
            }
        }
        .ant-pagination-item-active{
            background-color:#A2161B;
            border:1px solid #d9d9d9;
            &:hover{
                border:none;
                a{
                    color:#FFF;
                }
            }
            &>*{
                color:#FFF;
                line-height: 24px;
            }
        }
    }
    
`