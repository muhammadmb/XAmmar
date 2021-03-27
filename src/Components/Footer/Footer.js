import React from 'react';
import {
    FooterSection,
    LeftSection,
    Icons,
    Anco,
    FaceIcon,
    InstIcon,
    YoutubeIcon,
    LinkedIcon,
    RightSection
} from './FooterStyle';

const Footer = () => {
    return (
        <FooterSection>
            <LeftSection>
                <h3>Let's find your Dream Home.</h3>
                <Icons>
                    <Anco href="https://www.fb.com" target="_blank"><FaceIcon /></Anco>
                    <Anco href="https://www.instagram.com" target="_blank"><InstIcon /></Anco>
                    <Anco href="https://www.youtube.com" target="_blank"><YoutubeIcon /></Anco>
                    <Anco href="https://www.linkedin.com" target="_blank"><LinkedIcon /></Anco>
                </Icons>
            </LeftSection>
            <RightSection>
                <h4>Contact Us</h4>
                <p>FAQ</p>
                <p>Support</p>
                <p>Questions</p>
            </RightSection>
            <RightSection>
                <h4>Offices</h4>
                <p>United States</p>
                <p>Africa</p>
                <p>Europe</p>
            </RightSection>
        </FooterSection>
    )
}

export default Footer;
