import React from 'react';
import {Trans} from "react-i18next";
import {Link} from "react-router-dom";

const GoToCartButton = ({hideModal}) => {

    return (
        <Link to="/cart" className="btn btn-primary waves-effect waves-light"
              onClick={hideModal}>
            <Trans i18nKey="cart.modal.button.go-to-cart"/>
        </Link>
    );
};

export default GoToCartButton