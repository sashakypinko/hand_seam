import React from 'react';
import {Slider} from "@material-ui/core";
import {Trans} from "react-i18next";

const PriceFilter = ({price, handleChange, priceRange}) => {

    const marks = [
        {
            value: price.min,
            label: `${price.min} грн.`,
        },
        {
            value: price.max,
            label: `${price.max} грн.`,
        }
    ];

    return (
        <section className="mb-4">
            <h6 className="font-weight-bold mb-3"><Trans i18nKey="filter.price"/></h6>
            <Slider
                value={[price.min, price.max]}
                onChangeCommitted={handleChange}
                min={priceRange.min}
                max={priceRange.max}
                marks={marks}/>
        </section>
    );
};

export default PriceFilter;
