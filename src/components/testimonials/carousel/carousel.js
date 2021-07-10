import React from 'react';
import {clamp} from 'react-touch-carousel';
import styled from 'styled-components';
import NonPassiveTouchTarget from './non-passive-touch-target';

const cardSize = 350;
const cardPadCount = 3;
const carouselWidth = clamp(window.innerWidth, 0, 960);

const CarouselContainer = styled(NonPassiveTouchTarget)`
    position: relative;
    height: 550px;
    max-width: 960px;
    margin: 0 auto;
    overflow: hidden;
    touch-action: pan-y;
`;

const CarouselTrack = styled(NonPassiveTouchTarget)`
    display: flex;
    height: 100%;
    transform: ${({translateX}) => `translate3d(${translateX}px, 0, 0)`};
`;

const Carousel = (props) => {
    const {cursor, carouselState, ...rest} = props;
    const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;

    return (
        <CarouselContainer>
            <CarouselTrack
                translateX={translateX}
                {...rest}
            />
        </CarouselContainer>
    );
};

export default Carousel;
