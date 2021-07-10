import React from "react";
import ProductDetails from '../products/product-details';
import AddToCartModal from "../products/add-to-cart-modal";
import AddedItemModal from "../cart/added-item-modal";

const ProductPage = (props) => {
    return (
        <div>
            <ProductDetails id={props.match.params.id}/>
            <AddToCartModal/>
            <AddedItemModal/>
        </div>
    );
};

export default ProductPage;
