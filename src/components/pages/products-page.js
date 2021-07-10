import React from "react";
import Products from "../products";
import AddToCartModal from "../products/add-to-cart-modal";
import AddedItemModal from "../cart/added-item-modal";

const ProductsPage = () => {
    return (
        <div>
            <Products/>
            <AddToCartModal/>
            <AddedItemModal/>
        </div>
    );
};

export default ProductsPage;
