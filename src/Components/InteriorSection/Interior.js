import React from 'react';
import { Button } from '../Button/Button';
import { InteriorSection, Descriptions, Image } from './InteriorStyle'

const Interior = () => {
    return (
        <InteriorSection>
            <Descriptions>
                <h1>Stunning Interior</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae necessitatibus libero culpa suscipit dolorum sequi provident.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex suscipit ipsa adipisci mollitia? Eaque unde nobis inventore consequatur.</p>
                <Button to="/homes">Learn More</Button>
            </Descriptions>
            <Image src="https://images.unsplash.com/photo-1616046386594-c152babc9e15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Interior" />
        </InteriorSection>
    )
}

export default Interior;
