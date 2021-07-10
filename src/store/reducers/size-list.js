import {FETCH_SIZES_FAILURE, FETCH_SIZES_REQUEST, FETCH_SIZES_SUCCESS} from "../actions/size-list";
import {SizeListState} from "../init-state";

const sizeList = (state = SizeListState, action) => {

    switch (action.type) {
        case FETCH_SIZES_REQUEST:
            return {
                sizes: [],
                loading: true,
                error: null
            };

        case FETCH_SIZES_SUCCESS:
            return {
                sizes: action.payload.data,
                loading: false,
                error: null
            };

        case FETCH_SIZES_FAILURE:
            return {
                sizes: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default sizeList;
