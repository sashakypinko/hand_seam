import {
    ADD_CART_ITEM_FAILURE,
    ADD_CART_ITEM_REQUEST,
    ADD_CART_ITEM_SUCCESS,
    CHANGE_CART_ITEM_COUNT_FAILURE,
    CHANGE_CART_ITEM_COUNT_REQUEST,
    CHANGE_CART_ITEM_COUNT_SUCCESS,
    FETCH_CART_ITEMS_COUNT_FAILURE,
    FETCH_CART_ITEMS_COUNT_REQUEST,
    FETCH_CART_ITEMS_COUNT_SUCCESS,
    FETCH_CART_LIST_FAILURE,
    FETCH_CART_LIST_REQUEST,
    FETCH_CART_LIST_SUCCESS, HIDE_ADDED_ITEM_MODAL,
    REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS, SHOW_ADDED_ITEM_MODAL,
} from "../actions/cart";
import {CartState} from "../init-state";

const updateCartItem = ({cartItems}, id, count) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    const item = cartItems[itemIndex];

    item.count = count;

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, itemIndex),
            ...cartItems.slice(itemIndex + 1)
        ];
    }

    return [
        ...cartItems.slice(0, itemIndex),
        item,
        ...cartItems.slice(itemIndex + 1)
    ];
};

const updateTotalCount = ({cartItems, cartItemsCount}, id, count) => {
    const item = cartItems.find((item) => item.id === id);

    return cartItemsCount - item.count + count;
};

const updateTotalPrice = ({cartItems, cartItemsTotalPrice}, id, count) => {
    const item = cartItems.find((item) => item.id === id);

    return cartItemsTotalPrice - (item.product.price * item.count) + (item.product.price * count);
};

const cart = (state = CartState, {type, payload}) => {

    switch (type) {
        case FETCH_CART_LIST_REQUEST:
            return {
                ...state,
                cartItems: [],
                loading: true,
                error: false
            };

        case FETCH_CART_LIST_SUCCESS:
            return {
                ...state,
                cartItems: payload,
                loading: false,
                error: false
            };

        case FETCH_CART_LIST_FAILURE:
            return {
                ...state,
                cartItems: [],
                loading: false,
                error: true
            };

        case ADD_CART_ITEM_REQUEST:
            return {
                ...state,
                cartItems: []
            };

        case ADD_CART_ITEM_SUCCESS:
            return {
                ...state
            };

        case ADD_CART_ITEM_FAILURE:
            return {
                ...state,
                error: true
            };

        case REMOVE_CART_ITEM_REQUEST:
            return {
                ...state,
                cartItems: [],
                loading: true,
                error: false
            };

        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                cartItems: payload,
                loading: false,
                error: false
            };

        case REMOVE_CART_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };

        case FETCH_CART_ITEMS_COUNT_REQUEST:
            return state

        case FETCH_CART_ITEMS_COUNT_SUCCESS:
            return {
                ...state,
                cartItemsCount: payload.count,
                cartItemsTotalPrice: payload.totalPrice
            };

        case FETCH_CART_ITEMS_COUNT_FAILURE:
            return {
                ...state,
                cartItemsCount: 0,
                cartItemsTotalPrice: 0
            };

        case CHANGE_CART_ITEM_COUNT_REQUEST:
            return {
                ...state,
                cartItemsCount: updateTotalCount(state, payload.id, payload.count),
                cartItemsTotalPrice: updateTotalPrice(state, payload.id, payload.count),
                cartItems: updateCartItem(state, payload.id, payload.count)
            };

        case CHANGE_CART_ITEM_COUNT_SUCCESS:
        case CHANGE_CART_ITEM_COUNT_FAILURE:
            return state;

        case SHOW_ADDED_ITEM_MODAL:
            return {
                ...state,
                addedItemModalStatus: true
            };

        case HIDE_ADDED_ITEM_MODAL:
            return {
                ...state,
                addedItemModalStatus: false
            };

        default:
            return state;
    }
};

export default cart;
