import {FETCH_FILTER_FIELDS_FAILURE, FETCH_FILTER_FIELDS_REQUEST, FETCH_FILTER_FIELDS_SUCCESS} from './action-types';

export const fetchFilterFields = () => {
    return {
        type: FETCH_FILTER_FIELDS_REQUEST,
    };
};

export const filterFieldsLoaded = (newFilterFields) => {
    return {
        type: FETCH_FILTER_FIELDS_SUCCESS,
        payload: newFilterFields
    };
};

export const filterFieldsError = (error) => {
    return {
        type: FETCH_FILTER_FIELDS_FAILURE,
        payload: error
    };
};
