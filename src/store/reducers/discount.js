import {
    ADD_DISCOUNT_CODE_FAILURE,
    ADD_DISCOUNT_CODE_REQUEST,
    ADD_DISCOUNT_CODE_SUCCESS,
    FETCH_DISCOUNTS_FAILURE,
    FETCH_DISCOUNTS_REQUEST,
    FETCH_DISCOUNTS_SUCCESS, GET_DISCOUNT_CODES_FAILURE, GET_DISCOUNT_CODES_REQUEST, GET_DISCOUNT_CODES_SUCCESS
} from '../actions/discount';
import {DiscountState} from "../init-state";

const discount = (state = DiscountState, action) => {

    switch (action.type) {
        case FETCH_DISCOUNTS_REQUEST:
            return {
                ...state,
                discounts: [],
                loading: true,
                error: null
            };

        case FETCH_DISCOUNTS_SUCCESS:
            return {
                ...state,
                onVisit: action.payload.VISIT,
                onPay: action.payload.PAYMENT,
                loading: false,
                error: null
            };

        case FETCH_DISCOUNTS_FAILURE:
            return {
                ...state,
                discounts: [],
                loading: false,
                error: action.payload
            };

        case GET_DISCOUNT_CODES_REQUEST:
            return {
                ...state,
                codes: [],
                loading: true,
                error: null
            };

        case GET_DISCOUNT_CODES_SUCCESS:
            return {
                ...state,
                codes: action.payload,
                loading: false,
                error: null
            };

        case GET_DISCOUNT_CODES_FAILURE:
            return {
                ...state,
                codes: [],
                loading: false,
                error: action.payload
            };

        case ADD_DISCOUNT_CODE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case ADD_DISCOUNT_CODE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };

        case ADD_DISCOUNT_CODE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default discount;
