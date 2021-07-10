import {FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS} from "../actions/product";
import {ProductState} from "../init-state";

const product = (state = ProductState, action) => {

    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                product: {},
                loading: true,
                error: null
            };

        case FETCH_PRODUCT_SUCCESS:
            return {
                product: action.payload,
                loading: false,
                error: null
            };

        case FETCH_PRODUCT_FAILURE:
            return {
                product: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default product;
