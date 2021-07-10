import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE
} from './action-types';

export const fetchCategories = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST
    };
};

export const categoriesLoaded = (newCategories) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: newCategories
    };
};

export const categoriesError = (error) => {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    };
};
