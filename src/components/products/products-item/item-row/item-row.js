import React from 'react';
import {Col, Row} from "styled-bootstrap-grid";
import PriceLabel from "../price-label";
import {ProductPhoto} from "../../../photos";
import AddToCartButton from "../../../buttons/add-to-cart-button";
import DetailsButton from "../../../buttons/details-button";
import AddToFavoritesButton from "../../../buttons/add-to-favorites-button";

const ItemRow = ({product, handleAddToCart, handleClick}) => {
    const {
        id,
        name,
        price,
        old_price,
        category,
        description,
        primary_photo,
        secondary_photo,
        status
    } = product;

    return (
        <>
            <Row>
                <Col md={5} lg={3} xl={3}>
                    <ProductPhoto
                        productId={id}
                        handleClick={handleClick}
                        primaryPhoto={primary_photo}
                        secondaryPhoto={secondary_photo}
                        badge={{text: 'Sale'}}/>
                </Col>
                <Col md={7} lg={9} xl={9}>
                    <div className="row">
                        <div className="col-lg-7 col-xl-7">
                            <h5>{name}</h5>
                            <p className="mb-2 text-muted text-uppercase small">{category.title}</p>
                            <hr/>
                            <p className="mb-lg-0">
                                {description}
                            </p>
                        </div>
                        <div className="col-lg-5 col-xl-5">
                            <PriceLabel price={price} oldPrice={old_price}/>
                            <div className="my-4">
                                <AddToCartButton handleClick={handleAddToCart}/>
                                <DetailsButton productId={id}/>
                            </div>
                            <AddToFavoritesButton/>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr className="my-4" style={{width: '100%'}}/>
        </>
    );
};

export default ItemRow;
