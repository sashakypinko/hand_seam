import React from 'react';
import {Link} from "react-router-dom";
import ProductBadge from "../products-item/product-badge";

const ProductPhoto = ({
                          productId = 0,
                          primaryPhoto = '',
                          secondaryPhoto = '',
                          badge = false
                      }) => {

    return (
        <div className="view zoom overlay z-depth-1 rounded">
            <img src={primaryPhoto}/>
            {badge && <ProductBadge color={badge.color} text={badge.text}/>}
            <Link className="product-link" to={`/products/${productId}`}>
                <div className="mask">
                    <img className="img-fluid w-100"
                         src={secondaryPhoto}/>
                    <div className="mask rgba-black-slight"/>
                </div>
            </Link>
        </div>
    );
};

export default ProductPhoto;
