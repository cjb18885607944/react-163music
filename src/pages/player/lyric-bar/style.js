import styled from 'styled-components'

export const LyricWrapper = styled.div`
    position:fixed;
    left:50%;
    bottom:100px;
    transform:translateX(-50%);
    color:#f10c00;
    background-color:rgba(0,0,0,.2);
    font-size:22px;
    display:${props => props.lyric ? "display" : "none"};
    border-radius:30px;
    transition:all .5s;
    &:hover{
        background-color:rgba(0,0,0,.6);
        color:#FFF;
    }
    .lyricContent{
        margin:10px 40px;
    }
`