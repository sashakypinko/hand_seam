import {FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS} from "../actions/category-list";
import {CategoryListState} from "../init-state";

const categoryList = (state = CategoryListState, action) => {

    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                categories: [],
                loading: true,
                error: null
            };

        case FETCH_CATEGORIES_SUCCESS:
            return {
                categories: action.payload.data,
                loading: false,
                error: null
            };

        case FETCH_CATEGORIES_FAILURE:
            return {
                categories: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default categoryList;
