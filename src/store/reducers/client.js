import {
    CHANGE_LANGUAGE_FAILURE,
    CHANGE_LANGUAGE_REQUEST,
    CHANGE_LANGUAGE_SUCCESS,
    FETCH_CLIENT_FAILURE,
    FETCH_CLIENT_REQUEST,
    FETCH_CLIENT_SUCCESS
} from "../actions/client";
import {ClientState} from "../init-state";


const sizeList = (state = ClientState, action) => {

    switch (action.type) {
        case FETCH_CLIENT_REQUEST:
            return {
                ...state,
                client: {},
                loading: true,
                error: null
            };

        case FETCH_CLIENT_SUCCESS:
            return {
                ...state,
                client: action.payload,
                loading: false,
                error: null
            };

        case FETCH_CLIENT_FAILURE:
            return {
                ...state,
                client: {},
                loading: false,
                error: action.payload
            };

        case CHANGE_LANGUAGE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case CHANGE_LANGUAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };

        case CHANGE_LANGUAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default sizeList;
