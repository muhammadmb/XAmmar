import React, { useEffect } from 'react';
import { Button } from '../Button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    InteriorSection,
    Descriptions,
    Image
} from './InteriorStyle';

const Interior = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <InteriorSection>
            <Descriptions data-aos="fade-left">
                <h1>Stunning Interior</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae necessitatibus libero culpa suscipit dolorum sequi provident.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex suscipit ipsa adipisci mollitia? Eaque unde nobis inventore consequatur.</p>
                <Button to="/homes">Learn More</Button>
            </Descriptions>
            <Image data-aos="fade-right" src="https://images.unsplash.com/photo-1616046386594-c152babc9e15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Interior" />
        </InteriorSection>
    )
}

export default Interior;