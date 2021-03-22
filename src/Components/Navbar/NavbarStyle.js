import styled, { css } from "styled-components/macro";
import { Link } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/all';

export const Nav = styled.nav`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    background-color: #CCC;
`;

const NavLink = css`
    color:#777;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration:none;
`;

export const Logo = styled(Link)`
    ${NavLink}
    font-style:italic;
    font-weight: bold;
`;

export const MenuBars = styled(CgMenuRight)`
    display:none;

    @media screen and (max-width:768px){
        display: block;
        font-size: 36px;
        cursor: pointer;
        transform: translate(-50%, 35%);
        position: absolute;
        top:0;
        right:0;
    }
`;

export const NavManu = styled.div`
    display:flex;
    align-items:center;
    margin-right: 48px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavManuLinks = styled(Link)`
    ${NavLink}
`;

export const NavBtn = styled.div`
    display:flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;