import styled from 'styled-components';

export const MainCard = styled.div
    `
    float: left;
    width: 200px;
    height: 300px;
    box-sizing: cover;
    border-radius: 10px;
    color: #FFF;
    background-image: ${({ background }) => `Url(${background})`};
    padding: 15px;
    margin-right: 15px;
    transition: all .4s;

    h2{
        position: relative;
        bottom: -180px;
        background: rgba(0,0,0,.5);
        padding: 5px;
        border-radius: 5px;
    }

    &:hover{
        transform: scale(1.1);
    }
`;