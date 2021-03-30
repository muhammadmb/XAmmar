import styled from 'styled-components';

export const AboutDiv = styled.div
    `
    height: 800px;
    width: 100vw;
    overflow: hidden;

    @media (max-width: 991px){
        height:1000px;
    }
`;

export const Wrapper = styled.div
    `
    width: 100%;
    height: 100%;
    background: #000;
`;

export const Img = styled.img
    `
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:800px;
    object-fit: cover;
    opacity: .7;

    @media (max-width: 991px){
        height:1000px;
    }
`;

export const Content = styled.div
    `
    position: relative;
    padding: 15% 10%;
    width: 50%;
    z-index: 10;
    color: #5fb4ba;

    span{
        margin-left: -5px;
    }

    h3{
        margin-top: 2%;
        font-size: 34px;
        font-weight: 800;
        text-transform: uppercase;
    }

    p{
        margin: 5% 0;
        line-height: 1.7;
    }

    @media (max-width: 991px){

    position: relative;
    padding: 15% 10%;
    width: 100%;
    z-index: 10;
    color: #5fb4ba;
    }
`;

export const Cards = styled.div
    `
    z-index: 10;
    padding: 17% 0;
    margin: 0 auto;

    @media (max-width: 991px){
        padding: 0;
    }
`;

export const Page = styled.div
    `
    display: flex;
    flex-wrap: wrap;
`;