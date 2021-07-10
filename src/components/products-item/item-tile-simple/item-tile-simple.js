import React from 'react';
import PriceLabel from "../price-label";
import AddToCartButton from "../../buttons/add-to-cart-button";
import {ProductPhoto} from "../../photos";

const ItemTileSimple = ({product}) => {
    const {id, name, price, old_price, primary_photo, secondary_photo, status} = product;

    return (
        <div className="col-md-6 col-lg-3 mb-5">
            <div>
                <ProductPhoto
                    productId={id}
                    primaryPhoto={primary_photo}
                    secondaryPhoto={secondary_photo}
                    badge={{text: status ? 'Sale' : ''}}/>
                <div className="pt-4 text-center">
                    <h5>{name}</h5>
                    <PriceLabel price={price} oldPrice={old_price}/>
                    <p/>
                    <AddToCartButton size={'md'}/>
                </div>
            </div>
        </div>
    );
};

export default ItemTileSimple;
