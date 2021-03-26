import styled from 'styled-components';

export const InteriorSection = styled.div
    `
    background:#000E19;
    width: 100%;
    height: 100vh;
    display: flex;

    @media (max-width: 991px){
        display: unset;
        background:none;
    }

`;

export const Descriptions = styled.div
    `
    background:#FFF;
    margin: 12% 0 12%;
    padding: 3% 6%;
    width: 60%;

    h1{
        margin-bottom: 4%;
    }
    p{
        margin-bottom: 3%;
        color: #444;
        font-size: 16px;
    }

    @media (max-width: 991px){
        width: 100%
    }
`;

export const Image = styled.img
    `
    margin: 7% 0 7%;
    width: 40%;

    @media (max-width: 991px){
        width: 100%
    }
`;