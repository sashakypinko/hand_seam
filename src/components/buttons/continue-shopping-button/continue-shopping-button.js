import React from 'react';
import {Trans} from "react-i18next";
import {Link} from "react-router-dom";

const ContinueShoppingButton = ({hideModal}) => {

    return (
        <Link to="/products" className="card-link-secondary small text-uppercase"
              onClick={hideModal}>
            <Trans i18nKey="cart.modal.button.continue-shopping"/>
        </Link>
    );
};

export default ContinueShoppingButton;