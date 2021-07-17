import {
    FETCH_FILTER_FIELDS_FAILURE,
    FETCH_FILTER_FIELDS_REQUEST,
    FETCH_FILTER_FIELDS_SUCCESS
} from "../actions/filter-fields";
import {FilterFieldsState} from "../init-state";

const filterFields = (state= FilterFieldsState, action) => {

    switch (action.type) {
        case FETCH_FILTER_FIELDS_REQUEST:
            return {
                ...state,
                fields: [],
                loading: true,
                error: null
            };

        case FETCH_FILTER_FIELDS_SUCCESS:
            return {
                ...state,
                fields: action.payload,
                loading: false,
                error: null
            };

        case FETCH_FILTER_FIELDS_FAILURE:
            return {
                ...state,
                fields: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default filterFields;
