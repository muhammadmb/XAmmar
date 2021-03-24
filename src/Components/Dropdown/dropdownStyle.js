import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";


export const DropdownContainer = styled.div
    `
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: 0.3s ease-in-out;
    background: #CD853F;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div
    `
    position:absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size:2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)
    `
    color:#000;

`;

export const DropdownWrapper = styled.div
    `

`;

export const DropdownMenu = styled.div
    `
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-bottom:4rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4,60px);
    }

`;

export const DropdownLink = styled(Link)
    `
    display:flex;
    align-items:center;
    justify-content: center;
    color:#FFF;
    font-size: 1.5rem;
    list-style:none;
    cursor: pointer;
    transition: .2s ease-in-out;
    text-decoration: none;

    &:hover{
        color:#000d1a;
    }
`;

export const BtnWrap = styled.div
    `
    display:flex;
    justify-content: center;
`;
