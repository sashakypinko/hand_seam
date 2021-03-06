import React from 'react';
import {Trans} from "react-i18next";
import {CircularProgress} from "@material-ui/core";

const AddToCartButton = ({handleClick, size = 'sm'}) => {

    return (
        <button className={`btn btn-primary btn-${size} mr-1 mb-2 waves-effect waves-light`}
                onClick={handleClick}>
            <i className="fas fa-shopping-cart pr-2"/>
            <Trans i18nKey="buttons.add-to-cart"/>
        </button>
    );
}

export default AddToCartButton;
