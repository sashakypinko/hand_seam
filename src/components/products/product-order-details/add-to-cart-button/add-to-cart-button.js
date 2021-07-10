import React from 'react';
import styled from 'styled-components';
import {CircularProgress} from "@material-ui/core";
import {Trans} from "react-i18next";

const Button = styled.button`
    text-transform: uppercase;
    word-wrap: break-word;
    white-space: normal;
    transition: color .15s;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 5%);
    font-weight: 500;
    border-radius: .25rem;
    border: none;
    color: #4f4f4f !important;
    background-color: #f2f2f2 !important;
    cursor: pointer;
    font-size: 10.24px;
    padding: 14px 25px 13px 25px;
    margin-right: 4px;
    width: 150px;
    line-height: 1.1;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    height: 38px;
    margin-bottom: 9px;
    font-size: 11px;
    padding: 0px 30px 0px 30px;
    
    &:hover {
        box-shadow: 0 5px 11px 0 rgb(0 0 0 / 14%), 0 4px 15px 0 rgb(0 0 0 / 12%);
    }
    
    &:active {
        background-color: #dedede !important;
        box-shadow: 0 5px 11px 0 rgb(0 0 0 / 14%), 0 4px 15px 0 rgb(0 0 0 / 12%);
    }
`;

const AddToCartButton = ({loading, handleAddCartItem}) => {

    return (
        <Button type="button"
                disabled={loading}
                onClick={handleAddCartItem}>
            {
                loading ?
                    <CircularProgress color="secondary" size="20px"/> :
                    <>
                        <i className="fas fa-shopping-cart pr-2"/>
                        <Trans i18nKey="buttons.add-to-cart"/>
                    </>
            }
        </Button>
    );
};

export default AddToCartButton;