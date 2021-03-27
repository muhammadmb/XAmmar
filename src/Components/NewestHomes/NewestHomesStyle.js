import styled from 'styled-components';
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export const HomesSection = styled.div
    `
    margin: 4% 8%;

    h2{
        text-transform:capitalize;
        font-size: 35px;
        margin: 0 0 5% -2%;
    }

`;

export const Newest = styled.div
    `
    display: flex;

    @media(max-width: 991px){
        display: block;
    }
`;

export const Home = styled.div
    `
    margin-right: 2%;
    margin-top: ${({ direction }) => direction === "left" ? '0' : '10%'};
    
    img{
        width: 100%;
    }

    p{
        margin: 4%;
        font-style: italic;
    }

    @media(max-width: 991px){
        margin-top: 10%;
    }
`;


export const LinkIcon = styled(IoMdArrowRoundForward)
    `
    font-size: 12px;
`;

export const DetailsLink = styled(Link)
    `
    color: #000444;
    text-decoration: none;

    &:hover{
        transform: rotate(10deg);
    }
`;