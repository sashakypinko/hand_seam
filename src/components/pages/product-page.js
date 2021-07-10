import React from "react";
import ProductDetails from "../product-details/product-details";

const ProductPage = (props) => {
    return (
        <div>
            <ProductDetails id={props.match.params.id}/>
        </div>
    );
};

export default ProductPage;
