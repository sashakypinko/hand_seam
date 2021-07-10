import React from 'react';
import PriceLabel from "../../products-item/price-label";
import {Trans} from "react-i18next";
import ProductOrderDetails from '../../product-order-details';

const Details = ({product}) => {
    const {
        name = '',
        price = 0,
        oldPrice = 0,
        description = '',
        category = {},
        color = {}
    } = product;

    return (
        <>
            <h5 className="mt-4">{name}</h5>
            <p className="mb-2 text-muted text-uppercase small">{category.title}</p>
            <PriceLabel price={price} oldPrice={oldPrice}/>
            <p className="pt-1">
                {description}
            </p>
            <div className="table-responsive">
                <table className="table table-sm table-borderless mb-0">
                    <tbody>
                    <tr>
                        <th className="pl-0 w-25 pt-4" scope="row">
                            <strong><Trans i18nKey="product-details.color"/>:</strong>
                        </th>
                        <td>
                            {color.name}
                            <label className="btn rounded-circle border-inset-grey p-3 m-2"
                                   style={{background: color.code}}>
                            </label>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <hr/>
            <ProductOrderDetails product={product}/>
        </>
    );
};

export default Details;
