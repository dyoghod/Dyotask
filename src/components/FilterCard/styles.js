import styled from 'styled-components'




export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#ee6b26' : '#20295f'};
    padding: 10px;
    cursor: pointer;

    border-radius: 5px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img{
        width: 25px;
        height: 25px;
        color: #fff;
    }

    span{
        color: #fff;
        font-weigh: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover{
        background: #ee6b26;
    }

`