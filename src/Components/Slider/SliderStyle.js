import styled, { css } from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const SliderSection = styled.section
    `
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

export const SliderWrapper = styled.div
    `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

export const Slide = styled.div
    `
    z-index: 1;
    width: 100%;
    height: 100%;
    `;

export const MainSlider = styled.div
    `
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;

    &::before{
        content:'';
        position:absolute;
        z-index:2;
        width:100%;
        height:100vh;
        bottom:0vh;
        left:0;
        overflow:hidden;
        opacity:0.4;
        background: linear-gradient(
                0deg, 
                rgba(0,0,0,.2) 0%,
                rgba(0,0,0,.2) 50%,
                rgba(0,0,0,.6) 100%
            )
    }
    `;

export const SliderImg = styled.img
    `
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    object-fit: cover;
`;

export const SliderContent = styled.div
    `
    position:absolute;
    z-index:10;
    display:flex;
    flex-direction:column;
    max-width:1600px;
    width:cala(100% - 100px);
    color: #FFF;
    left:0;
    margin-left: 3rem;

    h1{
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align:left;
        margin-bottom: .8rem;
    }

    p{
        margin-bottom:1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
`;


export const Arrow = styled(IoMdArrowRoundForward)
    `
        margin-left:.5rem;
    `;

export const ArrowButtons = css
    `
    width: 50px;
    height:50px;
    color: #FFF;
    cursor: pointer;
    background: #000D1A;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: .3s;

    &:hover{
        background: #CD853F;
        transform: scale(1.05);
    }
`;

export const SliderButtons = styled.div
    `
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: fix;
    z-index: 10;
`;

export const PrevArrow = styled(IoArrowBack)`${ArrowButtons}`;
export const NextArrow = styled(IoArrowForward)`${ArrowButtons}`;
