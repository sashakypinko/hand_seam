import {
    CHANGE_LANGUAGE_FAILURE,
    CHANGE_LANGUAGE_REQUEST,
    CHANGE_LANGUAGE_SUCCESS,
    FETCH_CLIENT_FAILURE,
    FETCH_CLIENT_REQUEST,
    FETCH_CLIENT_SUCCESS
} from './action-types';

export const fetchClient = () => {
    return {
        type: FETCH_CLIENT_REQUEST
    };
};

export const clientLoaded = (client) => {
    return {
        type: FETCH_CLIENT_SUCCESS,
        payload: client
    };
};

export const clientError = (error) => {
    return {
        type: FETCH_CLIENT_FAILURE,
        payload: error
    };
};

export const changeLanguage = (language) => {
    return {
        type: CHANGE_LANGUAGE_REQUEST,
        payload: language
    };
};

export const languageChanged = () => {
    return {
        type: CHANGE_LANGUAGE_SUCCESS
    };
};


export const changeLanguageError = (error) => {
    return {
        type: CHANGE_LANGUAGE_FAILURE,
        payload: error
    };
};
