import React, { useState } from 'react';
import {
    Card,
    Description,
    Details,
    HomeImg,
    MainDetails,
    Price,
    Status,
    ArrowUp
} from './HomeCardStyle';

const HomeCard = ({ content }) => {

    const [open, setOpen] = useState(false);
    const openDescription = () => {
        setOpen(!open)
    }

    return (
        <Card>
            <Status>{content.status}</Status>
            <HomeImg src={content.pic} />
            <ArrowUp open={open} onClick={openDescription} />
            <Details open={open}>
                <Price>${content.Price}</Price>
                <MainDetails>{content.data}</MainDetails>
                <Description >{content.description}</Description>
            </Details>

        </Card>
    )
}

export default HomeCard;
