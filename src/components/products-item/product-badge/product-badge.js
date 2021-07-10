import React from 'react';
import {BASE_BLUE} from "../../../constants/colors";

const ProductBadge = ({color = BASE_BLUE, text = ''}) => {

    return (
        <h4 className="mb-0">
            <span className="badge badge-primary badge-pill badge-news">
                {text}
            </span>
        </h4>
    );
};

export default ProductBadge;
