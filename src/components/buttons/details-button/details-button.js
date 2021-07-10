import React from 'react';
import {Link} from "react-router-dom";
import {Trans} from "react-i18next";

const DetailsButton = ({productId}) => {

    return (

        <Link to={`/products/${productId}`}
              className="btn btn-light btn-sm mr-1 mb-2 waves-effect waves-light">
            <i className="fas fa-info-circle pr-2"/>
            <Trans i18nKey="buttons.details"/>
        </Link>
    );
};

export default DetailsButton
