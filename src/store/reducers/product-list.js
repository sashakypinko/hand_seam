import {FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS} from "../actions/product-list";
import {ProductListState} from "../init-state";

export const productList = (state = ProductListState, action) => {

    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                products: [],
                loading: true,
                error: null
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.data,
                pagesCount: action.payload.meta.last_page,
                loading: false,
                error: null
            };

        case FETCH_PRODUCTS_FAILURE:
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

export default productList;
