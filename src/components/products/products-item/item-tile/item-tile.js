import React from 'react';
import styled from 'styled-components';
import PriceLabel from "../price-label";
import {ProductPhoto} from "../../../photos";
import AddToCartButton from "../../../buttons/add-to-cart-button";
import DetailsButton from "../../../buttons/details-button";
import AddToFavoritesButton from "../../../buttons/add-to-favorites-button";

const Tile = styled.div`
    box-shadow: 0 0 15px 0px #dedede;
    border-radius: 10px;
`;

const ItemTile = ({product, width, handleAddToCart}) => {
    const {id, name, price, old_price, category, primary_photo, secondary_photo, status} = product;

    return (
        <div className={`col-md-${width} mb-5`}>
            <Tile>
                <ProductPhoto
                    productId={id}
                    primaryPhoto={primary_photo}
                    secondaryPhoto={secondary_photo}
                    badge={{text: 'Sale'}}/>

                <div className="card-body text-center pt-4">
                    <h5>{name}</h5>
                    <p className="mb-2 text-muted text-uppercase small">{category.title}</p>
                    <hr/>
                    <p>
                        <PriceLabel price={price} oldPrice={old_price}/>
                    </p>
                    <AddToCartButton handleClick={handleAddToCart}/>
                    <DetailsButton productId={id}/>
                    <AddToFavoritesButton/>
                </div>
            </Tile>
        </div>
    );
};

export default ItemTile;
