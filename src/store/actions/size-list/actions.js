import {
    FETCH_SIZES_REQUEST,
    FETCH_SIZES_SUCCESS,
    FETCH_SIZES_FAILURE
} from './action-types';

export const fetchSizes = () => {
    return {
        type: FETCH_SIZES_REQUEST
    };
};

export const sizesLoaded = (newSizes) => {
    return {
        type: FETCH_SIZES_SUCCESS,
        payload: newSizes
    };
};

export const sizesError = (error) => {
    return {
        type: FETCH_SIZES_FAILURE,
        payload: error
    };
};
