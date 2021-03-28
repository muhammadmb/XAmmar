import React from 'react';
import Info from '../../Components/Info/Info';
import Interior from '../../Components/InteriorSection/Interior';
import NewestHomes from '../../Components/NewestHomes/NewestHomes';
import Slider from '../../Components/Slider/Slider';
import { InfoData, InfoDataTwo } from '../../Data/InfoData';
import { SliderData } from '../../Data/SliderData';

const MAinPage = () => {
    return (
        <>
            <Slider slides={SliderData} />
            <Info {...InfoData} />
            <Info {...InfoDataTwo} />
            <Interior />
            <NewestHomes />
        </>
    )
}

export default MAinPage;
