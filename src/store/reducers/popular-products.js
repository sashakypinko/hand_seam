import {
    FETCH_POPULAR_PRODUCTS_FAILURE,
    FETCH_POPULAR_PRODUCTS_REQUEST,
    FETCH_POPULAR_PRODUCTS_SUCCESS
} from "../actions/popular-products";
import {PopularProductsState} from "../init-state";

const popularProducts = (state = PopularProductsState, action) => {

    switch (action.type) {
        case FETCH_POPULAR_PRODUCTS_REQUEST:
            return {
                ...state,
                products: [],
                loading: true,
                error: null
            };

        case FETCH_POPULAR_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            };

        case FETCH_POPULAR_PRODUCTS_FAILURE:
            return {
                ...state,
                products: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default popularProducts;
