import React from "react";
import styled from 'styled-components';
import {Carousel} from "react-bootstrap";
import Skeleton from "@material-ui/lab/Skeleton";

const StyledCarousel = styled(Carousel)`
    width: 100%;
    height: 600px;
`;

const Image = styled.img`
    width: 455px;
    height: 600px;
    object-fit: cover;
    width: 100%;
`;

const ImageContainer = styled.div`
    float: left;
`;

const ProductsCarousel = ({images}) => {
    return (
        <>
            {images.length ?
                <StyledCarousel>
                    {
                        images.map((image, idx) => {
                            return (
                                <Carousel.Item interval={3000}
                                               key={`${image}-${idx}`}>
                                    <ImageContainer>
                                        <Image src={image} alt={image}/>
                                    </ImageContainer>
                                </Carousel.Item>
                            );
                        })
                    }
                </StyledCarousel>
                : <Skeleton variant="rect" width="100%" height={600}/>
            }
        </>
    );
};

export default ProductsCarousel;
