import React from 'react';
import PriceLabel from "../../products-item/price-label";
import ProductsCountButton from "../products-count-button";
import BuyButton from "../../buttons/buy-button";
import AddToFavoritesButton from "../../buttons/add-to-favorites-button";
import SizePicker from "./size-picker";
import {Trans} from "react-i18next";

const Details = (props) => {
    const {
        name,
        price,
        oldPrice,
        description,
        category,
        color,
        sizes,
        count,
        handleChangeSize,
        handleAddCartItem,
        updateOrderCount
    } = props;

    return (
        <div className="col-md-6">
            <h5>{name}</h5>
            <p className="mb-2 text-muted text-uppercase small">{category}</p>
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
            <div className="table-responsive mb-2">
                <table className="table table-sm table-borderless">
                    <tbody>
                    <tr>
                        <td className="pl-0 pb-0 w-25">
                            <Trans i18nKey="product-details.quantity"/>
                        </td>
                        <td className="pb-0">
                            <Trans i18nKey="product-details.choose-size"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="pl-0">
                            <ProductsCountButton count={count} updateOrderCount={updateOrderCount}/>
                        </td>
                        <td>
                            <SizePicker sizes={sizes} onSelect={handleChangeSize}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <BuyButton size="md"/>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2"
                    onClick={handleAddCartItem}>
                <i className="fas fa-shopping-cart pr-2"/>
                <Trans i18nKey="buttons.add-to-cart"/>
            </button>
            <AddToFavoritesButton size="md"/>
        </div>
    );
};

export default Details;
