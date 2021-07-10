import React from 'react';
import moment from 'moment';
import {Trans} from "react-i18next";

const ExpectedDelivery = () => {

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="mb-4"><Trans i18nKey="cart.expected-delivery.title"/></h5>
                <p className="mb-0">
                    {moment().add(3, 'd').format('ddd DD.MM ')}
                    <span>  -  </span>
                    {moment().add(4, 'd').format(' ddd DD.MM')}
                </p>
            </div>
        </div>
    );
};

export default ExpectedDelivery;
