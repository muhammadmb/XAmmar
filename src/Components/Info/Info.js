import React from 'react'
import { Button } from '../Button/Button'
import { Container, Section, ColumnLeft, ColumnRight } from './InfoStyle'

const Info = ({ heading, paragraphOne, paragraphTwo, buttonLable, reverse, image }) => {
    return (
        <Section>
            <Container>
                <ColumnLeft reverse={reverse}>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" primary="true">{buttonLable}</Button>
                </ColumnLeft>

                <ColumnRight reverse={reverse}>
                    <img src={image} alt={heading} />
                </ColumnRight>

            </Container>
        </Section>
    )
}

export default Info
