import styled from 'styled-components';
import { FiMapPin } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

export const Contact = styled.section
    `
    position: relative;
    min-height: 100vh;
    padding: 150px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background: #DC5000 url('https://images.unsplash.com/photo-1572312279015-ae4164319fa3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80') no-repeat;

    @media (max-width: 991px){
        padding: 150px 50px;
    }

    `;

export const Content = styled.div
    `
    max-width: 800px;
    text-align: center;

    h2{
        font-size: 36px;
        font-weight: 500;
        color: #fff;
    }

    p{
        font-weight: 300;
        color: #fff;
    }
`;

export const Container = styled.div
    `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    @media (max-width: 991px){
        flex-direction: column;
    }
`;

export const ContactInfo = styled.div
    `
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 991px){
        width: 100%;
        margin-bottom: 40px;
    }
`;

export const Box = styled.div
    `
    position: relative;
    padding: 20px 0;
    display: flex;
`;

export const Icon = styled.div
    `
    min-width: 60px;
    height: 60px;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
`;

export const Details = styled.div
    `
    display: inline-block;
    margin-left: 20px;
    font-size: 16px;
    color: #fff;
    width: 40%;
    font-weight: 300;

    h3{
        font-weight: 500;
        color: #06517D;
    }
`;

export const AddressIcon = styled(FiMapPin)
    `

`;

export const EmailIcon = styled(MdMail)
    `

`;

export const PhoneIcon = styled(FaPhoneAlt)
    `

`;

export const ContactForm = styled.div
    `
    width: 40%;
    padding: 40px;
    background: #fff;

    h2{
        font-size: 30px;
        color: #333;
        font-weight: 500;
    }

    @media (max-width: 991px){
        width: 100%;
    }
`;


export const InputBox = styled.div
    `
    position: relative;
    width: 100%;
    margin-top: 10px;
    
    textarea,
    input{
        border: none;
        width: 100%;
        padding: 5px 0;
        font-size: 16px;
        border-bottom: 2px solid #333;
        outline: none;
        resize: none;
        margin: 10px 0;
    }

    input:valid ~ span,
    textarea:valid ~ span,
    input:focus ~ span,
    textarea:focus ~ span{
        color: #e91e63;
        font-size: 12px;
        transform: translateY(-20px);
    }

    span{
        position: absolute;
        left: 0;
        margin: 10px 0;
        padding: 5px 0;
        font-size: 16px;
        pointer-events: none;
        transition: 0.5s;
        color: #666;
    }

    input[type=submit]{
        width: 100px;
        background: #06517D;
        color: #FFF;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 18px;
    }
`;