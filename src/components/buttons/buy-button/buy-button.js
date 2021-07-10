import React from 'react';
import {Trans} from "react-i18next";

const BuyButton = ({size = 'sm'}) => {
    return (
        <button type="button" className={`btn btn-primary btn-${size} mr-1 mb-2`}>
            <Trans i18nKey="buttons.buy" />
        </button>
    );
};

export default BuyButton;
