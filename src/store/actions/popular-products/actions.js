import {
    FETCH_POPULAR_PRODUCTS_FAILURE,
    FETCH_POPULAR_PRODUCTS_REQUEST,
    FETCH_POPULAR_PRODUCTS_SUCCESS
} from './action-types';

export const fetchPopularProducts = (limit) => {
    return {
        type: FETCH_POPULAR_PRODUCTS_REQUEST,
        payload: limit
    };
};

export const popularProductsLoaded = (newProducts) => {
    return {
        type: FETCH_POPULAR_PRODUCTS_SUCCESS,
        payload: newProducts
    };
};

export const popularProductsError = (error) => {
    return {
        type: FETCH_POPULAR_PRODUCTS_FAILURE,
        payload: error
    };
};
