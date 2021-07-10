import {
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS
} from './action-types';

export const fetchProduct = (data) => {
    return {
        type: FETCH_PRODUCT_REQUEST,
        payload: data
    };
};

export const productLoaded = (newProduct) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: newProduct
    };
};

export const productError = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    };
};
