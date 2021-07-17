import {
    ADD_DISCOUNT_CODE_FAILURE,
    ADD_DISCOUNT_CODE_REQUEST,
    ADD_DISCOUNT_CODE_SUCCESS,
    FETCH_DISCOUNTS_FAILURE,
    FETCH_DISCOUNTS_REQUEST,
    FETCH_DISCOUNTS_SUCCESS,
    GET_DISCOUNT_CODES_FAILURE,
    GET_DISCOUNT_CODES_REQUEST,
    GET_DISCOUNT_CODES_SUCCESS
} from './action-types';

export const fetchDiscounts = () => {
    return {
        type: FETCH_DISCOUNTS_REQUEST
    };
};

export const discountsLoaded = (newDiscounts) => {
    return {
        type: FETCH_DISCOUNTS_SUCCESS,
        payload: newDiscounts
    };
};

export const discountsError = (error) => {
    return {
        type: FETCH_DISCOUNTS_FAILURE,
        payload: error
    };
};

export const fetchDiscountCodes = () => {
    return {
        type: GET_DISCOUNT_CODES_REQUEST
    };
};

export const discountCodesLoaded = (newDiscountCodes) => {
    return {
        type: GET_DISCOUNT_CODES_SUCCESS,
        payload: newDiscountCodes
    };
};

export const discountCodesError = (error) => {
    return {
        type: GET_DISCOUNT_CODES_FAILURE,
        payload: error
    };
};

export const addDiscountCode = (id, code, accepted = true) => {
    return {
        type: ADD_DISCOUNT_CODE_REQUEST,
        payload: {id, code, accepted}
    };
};

export const discountCodeAdded = () => {
    return {
        type: ADD_DISCOUNT_CODE_SUCCESS
    };
}

export const addDiscountCodeError = (error) => {
    return {
        type: ADD_DISCOUNT_CODE_FAILURE,
        payload: error

    };
}
