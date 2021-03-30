import React from 'react';
import { AboutDiv, Img, Content, Cards, Page, Wrapper } from './AboutStyle'
import { Button } from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <AboutDiv>
            <Img src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80" alt="about" />
            <Wrapper>
                <Page>
                    <Content>
                        <span>XAmmar</span>
                        <h3>Have an awsome Home. Have what you deserve</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse vero et autem cum tenetur atque totam quasi? Voluptates doloribus earum dolores incidunt rerum, dolor nesciunt corporis voluptate labore reprehenderit ex!</p>
                        <Button to="/contact" primary="true">Contact Us</Button>
                    </Content>

                    <Cards>
                        <Link to="/homes" >
                            <Card lable="Homes For Sale" background="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
                        </Link>
                        <Link to="rentals">
                            <Card lable="Homes For Rentals" background="https://images.unsplash.com/photo-1603862026698-d2e3215abad0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                        </Link>
                    </Cards>
                </Page>
            </Wrapper>

        </AboutDiv>
    )
}

export default About;