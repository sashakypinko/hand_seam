import React from 'react';
import PriceLabel from "../price-label";
import {ProductPhoto} from "../../../photos";
import AddToCartButton from "../../../buttons/add-to-cart-button";

const ItemTileSimple = ({product, handleAddToCart, handleClick}) => {
    const {id, name, price, old_price, primary_photo, secondary_photo, status} = product;

    return (
        <div className="col-md-6 col-lg-3 mb-5">
            <div>
                <ProductPhoto
                    productId={id}
                    handleClick={handleClick}
                    primaryPhoto={primary_photo}
                    secondaryPhoto={secondary_photo}
                    badge={{text: status ? 'Sale' : ''}}/>
                <div className="pt-4 text-center">
                    <h5>{name}</h5>
                    <PriceLabel price={price} oldPrice={old_price}/>
                    <p/>
                    <AddToCartButton size={'md'} handleClick={handleAddToCart}/>
                </div>
            </div>
        </div>
    );
};

export default ItemTileSimple;
