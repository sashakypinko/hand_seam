import React from 'react';
import {Trans} from "react-i18next";

const PaymentInfo = () => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="mb-4"><Trans i18nKey="cart.payment-info.title"/></h5>
                <img className="mr-2" width="45px"
                     src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                     alt="Visa"/>
                <img className="mr-2" width="45px"
                     src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                     alt="Mastercard"/>
            </div>
        </div>
    );
};

export default PaymentInfo;
