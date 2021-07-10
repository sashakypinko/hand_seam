import React from 'react';
import TouchCarousel from 'react-touch-carousel';
import styled from 'styled-components';
import Carousel from './carousel';
import data from '../../mockData/testimonials';

const cardSize = 350;
const cardPadCount = 3;

const Image = styled.img`
    width: 256px;
    height: 500px;
    margin-top: -13px;
    margin-left: -17px;
`;

const renderCard = (index, modIndex, cursor) => {
    const {image} = data[modIndex];
    const rotate = 10 * (index + cursor);
    const onTop = Math.abs(index + cursor) < 0.5;

    return (
        <div key={index}
                style={{
                    flex: '0 0 300px',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    WebkitTapHighlightColor: 'transparent',
                    margin: '25px',
                    opacity: `${1 - Math.abs(rotate * 0.05)}`
                }}>
            <div
                style={{
                    position: 'relative',
                    flexDirection: 'column',
                    width: '225px',
                    height: '475px',
                    borderRadius: '20px',
                    backgroundSize: 'contain',
                    backgroundImage: `url(${image})`,
                    // transform: `rotate(${rotate}deg)`,
                    zIndex: onTop ? 1 : 0
                }}>
                <Image
                    className="mobile-frame"
                    src="http://shop.loc/images/mobileframe.png"/>
            </div>
        </div>
    )
};

const Testimonials = () => {
    return (
        <TouchCarousel
            component={Carousel}
            cardSize={cardSize}
            cardCount={data.length}
            cardPadCount={cardPadCount}
            autoplay={5000}
            renderCard={renderCard}/>
    );
};

export default Testimonials;
