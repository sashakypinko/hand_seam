import React from "react";
import {Carousel} from "react-bootstrap";
import Skeleton from "@material-ui/lab/Skeleton";

import './products-carousel.css';

const ProductsCarousel = ({images}) => {
    return (
        <>
            {images.length ?

                <Carousel className="products-carousel">
                    {
                        images.map((image, idx) => {
                            return (
                                <Carousel.Item interval={3000}
                                               key={`${image}-${idx}`}>
                                    <div className="carousel-image">
                                        <img
                                            className=" w-100"
                                            src={image}
                                            alt={image}/>
                                    </div>
                                </Carousel.Item>
                            );
                        })
                    }
                </Carousel>
                : <Skeleton variant="rect" width={440} height={600}/>
            }
        </>
    );
};

export default ProductsCarousel;
