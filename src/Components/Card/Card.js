import React from 'react';
import { MainCard } from './CardStyle'

const Card = (props) => {
    return (
        <MainCard background={props.background} >
            <h2>{props.lable}</h2>
        </MainCard>
    )
}

export default Card;