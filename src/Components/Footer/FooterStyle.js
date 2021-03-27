import styled, { css } from 'styled-components/macro';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

export const FooterSection = styled.div
    `
    background: #000E19;
    color: #FFF;
    display:flex;
    padding: 2%;

    @media (max-width:991px){
        display:block;
    }
`;

export const LeftSection = styled.div
    `
    width: 60%;

    h3{
        font-size: 80px;
        margin: 20% 3% 15%;
    }

    @media (max-width:991px){
        width: 100%;

        h3{
            font-size: 40px;
            margin: 10% 3% 15%;
        }
    }
`;



export const Icons = styled.div
    `
    margin-left: 3%;
`;



export const Icon = css
    `
    font-size:40px;
    margin-right: 5%;
    color: #CD853F;

    &:hover{
        color: #FFF;
    }
`;

export const Anco = styled.a
    `
`;

export const FaceIcon = styled(FaFacebookF)
    `
    ${Icon}
`;

export const InstIcon = styled(FiInstagram)
    `
    ${Icon}
`;

export const YoutubeIcon = styled(FaYoutube)
    `
    ${Icon}
`;

export const LinkedIcon = styled(FaLinkedinIn)
    `
    ${Icon}
`;


export const RightSection = styled.div
    `
    margin: 14% 0% 0 7%; 

    h4{
        font-weight: 500;
        margin-bottom: 15%;
        font-size:20px;
    }

    p{
        font-size: 14px;
        margin: 10% 0;
    }

    @media (max-width:991px){

        h4{
            font-weight: 400;
            margin-bottom: 0%;
            font-size:20px;
        }
        
        p{
            margin: 5% 0;
        }
    }

`;
