import React, { useEffect } from 'react';
import { Button } from '../Button/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Container,
    Section,
    ColumnLeft,
    ColumnRight
} from './InfoStyle'

const Info = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLable,
    reverse,
    image }) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Section>
            <Container>
                <ColumnLeft data-aos="fade-left" reverse={reverse}>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" primary="true">{buttonLable}</Button>
                </ColumnLeft>

                <ColumnRight data-aos="fade-right" reverse={reverse}>
                    <img src={image} alt={heading} />
                </ColumnRight>

            </Container>
        </Section>
    )
}

export default Info
