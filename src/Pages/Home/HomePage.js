import React from 'react';
import HomeCard from '../../Components/HomeCard/HomeCard';
import { Cards, Container } from './HomePageStyle';
const HomePage = (props) => {
    return (
        <Cards>
            <Container>
                {
                    props.HomeForSale.map((item) => (
                        <HomeCard
                            key={item.id}
                            content={item}
                        />
                    ))
                }
            </Container>

        </Cards>
    )
}

export default HomePage
