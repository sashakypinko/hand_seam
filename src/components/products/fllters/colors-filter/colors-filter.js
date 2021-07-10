import React from 'react';
import {Trans} from "react-i18next";

const ColorsFilter = ({colors}) => {

    return (
        <section className="mb-4">
            <h6 className="font-weight-bold mb-3"><Trans i18nKey="filter.colors"/></h6>
            <div className="btn-group btn-group-toggle btn-color-group d-block mt-n2 ml-n2"
                 data-toggle="buttons">
                {
                    colors.map(({code}) => {
                        return (
                            <label className="btn rounded-circle border-inset-grey p-3 m-2"
                                   style={{background: code}}>
                                <input type="checkbox" autoComplete="off"/>
                            </label>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default ColorsFilter;
