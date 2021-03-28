import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

export const Card = styled.div
    `
    width: 300px;
    height: 328px;
    background-color: #FFF;
    border-radius: 5px;
    margin: 2% 1%;
    overflow: hidden;
    box-shadow: 1px 2px 15px #000;

    @media (max-width: 991px){
        margin: 2% auto;
        width: 400px;
        height: 380px;
    }
    `;

export const Status = styled.span
    `
    position: relative;
    top: 20px;
    left: 10px;
    color: #EEE;
    background-color: #4A4A4A;
    padding: 2%;
    border-radius: 5px;
`;

export const HomeImg = styled.img
    `
    width: 100%;
    object-fit: cover;
    margin-top: -7%;
    height:200px; 
`;

export const Details = styled.div
    `
    color: #4a4a4a;
    max-height: 120px;
    margin-top: ${({ open }) => (open ? '-100px' : '-20px')};
    background-color: #FFF;
    position: relative;
    transition: all 1s;
    padding: 3%;
    background: rgba(255, 255, 255, 0.8);
`;

export const Price = styled.span
    `
    font-family: Arapey, "Times New Roman", serif;
    font-size: 32px;
    letter-spacing: -1px;
`;

export const MainDetails = styled.p
    `
    margin-top: 3%;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 16px;
`;

export const Description = styled.p
    `
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 14px;
    margin-top: 3%;
    width: 90%;
`;

export const ArrowUp = styled(IoIosArrowUp)
    `
    position: relative;
    bottom: -100px;
    left: 90%;
    cursor: pointer;
    color: #F7841B;
    font-size: 25px;
    transition: all 1.3s;
    transform: ${({ open }) => open === true ? 'rotate(180deg)' : ""};
    z-index: 5;
    
    @media (min-width: 500px) and (max-width: 991px){
        bottom: -85px;
    }
`;
