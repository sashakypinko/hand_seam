import React from 'react';
import {Link} from "react-router-dom";
import {Breadcrumbs} from "@material-ui/core";
import {Trans} from "react-i18next";

const CustomBreadcrumbs = () => {

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">
                <Trans i18nKey="breadcrumbs.home" />
            </Link>
            <Link to="/products">
                <Trans i18nKey="breadcrumbs.search" />
            </Link>
            <Link to="/products">
                Футболки
            </Link>
        </Breadcrumbs>
    );
};

export default CustomBreadcrumbs;
