import React from 'react';
import {Trans} from "react-i18next";
import PriceLabel from "../../../products/products-item/price-label";
import {BASE_DARK} from "../../../../constants/colors";

const OrderDetails = ({total}) => {

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="mb-3"><Trans i18nKey="cart.order-details.title"/></h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <Trans i18nKey="cart.order-details.products-price"/>
                        <PriceLabel price={total} priceColor={BASE_DARK}/>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        <Trans i18nKey="cart.order-details.delivery-price"/>
                        <span>~ <PriceLabel price={50} priceColor={BASE_DARK}/></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <strong><Trans i18nKey="cart.order-details.total-price"/></strong>
                        <PriceLabel price={total + 50} priceColor={BASE_DARK}/>
                    </li>
                </ul>
                <button type="button" className="btn btn-primary btn-block waves-effect waves-light">
                    <Trans i18nKey="cart.order-details.checkout"/>
                </button>
            </div>
        </div>
    );
};

const OrderDetailsContainer = ({total}) => {

    return <OrderDetails total={total}/>
}

export default OrderDetailsContainer;
