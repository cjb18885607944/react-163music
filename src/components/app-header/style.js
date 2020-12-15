import styled from 'styled-components'

export const HeadWrapper = styled.div`
    height:75px;
    background-color:#242424;
    color:#FFF;

    .content{
        height:70px;
        display:flex;
        justify-content:space-between;
        a.select-item{
            color:#CCC;
            height:70px;
            padding:0 19px;
            text-decoration:none;
            font-size:14px;
            height:70px;
            line-height:70px;
            position:relative;
            &:hover{
                background-color: #000;
            }
            &.active{
                color:#FFF;
                background-color: #000;
            }
            &.active>.icon{
                display: block;
                width: 12px;
                height: 7px;
                position: absolute;
                bottom: -1px;
                left: 50%;
                transform:translateX(-50%);
                background-image:url(${require("@/assets/img/sprite_01.png").default});
                background-position:-226px 0px
            }
            &:last-child{
                &::after{
                    position:absolute;
                    content:'';
                    width: 28px;
                    height:19px;
                    background-image:url(${require("@/assets/img/sprite_01.png").default});
                    background-position:-190px 0px;
                    top: 20px;
                    right: -15px;
                }
            }
        }
        a.logo{
            padding:0;
            display:block;
            width:176px;
            background-position:0px 0px
        }
    };
    .devider{
        height:5px;
        background-color:#C20C0C;
    }

`

export const HeaderLeft = styled.div`
    display:flex
`

export const HeaderRight = styled.div`
    display: flex;
    align-items:center;
    font-size:12px;
    .search{
        width: 158px;
        height: 32px;
        border-radius:32px;
        input::placeholder{
            font-size:12px;
            line-height:100px;
            color:#ccc;
        }
    }
    .creator{
        width: 90px;
        height: 32px;
        margin-left:12px;
        box-sizing: border-box;
        text-align: center;
        border: 1px solid #4F4F4F;
        background-position: 0 -140px;
        line-height: 32px;
        color: #ccc;
        border-radius: 20px;
        background:rgba(0,0,0,0);
        cursor: pointer;
        &:hover{
            color:#FFF;
            border-color:#FFF;
        }
    }
    .login{
        margin-left:20px
    }
`