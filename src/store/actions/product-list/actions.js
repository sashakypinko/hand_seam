import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS
} from './action-types';

export const fetchProducts = (data = {}) => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
        payload: data,
    };
};

export const productsLoaded = (newProducts) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: newProducts
    };
};

export const productsError = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    };
};
