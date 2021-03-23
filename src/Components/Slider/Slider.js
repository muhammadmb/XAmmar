import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../Button/Button';
import {
    SliderSection,
    SliderWrapper,
    SliderContent,
    SliderImg,
    Slide,
    MainSlider,
    Arrow,
    NextArrow,
    PrevArrow,
    SliderButtons
} from './SliderStyle'

const Slider = (props) => {


    const [current, SetCurrent] = useState(0);
    const length = props.slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            SetCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 5000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }

    }, [current, length])

    const nextSlide = () => {
        SetCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        SetCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }

    return (
        <SliderSection>
            <SliderWrapper>
                {props.slides.map((slide, index) => {
                    return (
                        <Slide key={index}>
                            {index === current && (
                                <MainSlider>
                                    <SliderImg src={slide.image} alt={slide.alt} />
                                    <SliderContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <Button
                                            to={slide.path}
                                            primary="true"
                                        >
                                            {slide.lable}
                                            <Arrow />
                                        </Button>
                                    </SliderContent>
                                </MainSlider>
                            )}
                        </Slide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </SliderWrapper>

        </SliderSection>
    )
}

export default Slider;
