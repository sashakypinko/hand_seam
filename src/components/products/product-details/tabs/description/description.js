import React from 'react';
import PriceLabel from "../../../products-item/price-label";

const Description = ({product}) => {
    const {category = {}, price, old_price, description} = product;

    return (
        <div className="tab-pane fade show active" id="description" role="tabpanel"
             aria-labelledby="description-tab">
            <p className="small text-muted text-uppercase mb-2">{category.title}</p>
            <PriceLabel price={price} oldPrice={old_price}/>
            <p className="pt-1">{description}</p>
        </div>
    );
};

export default Description;
