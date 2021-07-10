import React from 'react';
import {Trans} from "react-i18next";
import {BASE_DARK, BASE_RED} from "../../../../constants/colors";

const PriceLabel = ({price, oldPrice, priceColor = BASE_RED, oldPriceColor = BASE_DARK}) => {

    return (
        <span>
            <span className="mr-1" style={{color: priceColor}}>
                <strong>
                    {price} <Trans i18nKey="currency"/>
                </strong>
            </span>
            {
                oldPrice &&
                <span className="text-grey" style={{color: oldPriceColor}}>
                    <strong>
                        <s>
                            {oldPrice} <Trans i18nKey="currency"/>
                        </s>
                    </strong>
                </span>
            }
        </span>
    );
};

export default PriceLabel;
