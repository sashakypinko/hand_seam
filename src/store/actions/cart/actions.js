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
    REMOVE_CART_ITEM_SUCCESS, SHOW_ADDED_ITEM_MODAL
} from './action-types';

export const fetchCartList = () => {
    return {
        type: FETCH_CART_LIST_REQUEST
    }
};

export const cartListLoaded = (newCartList) => {
    return {
        type: FETCH_CART_LIST_SUCCESS,
        payload: newCartList
    };
};

export const cartListError = () => {
    return {
        type: FETCH_CART_LIST_FAILURE
    };
};

export const addCartItem = (item) => {
    return {
        type: ADD_CART_ITEM_REQUEST,
        payload: item
    }
};

export const cartItemAdded = () => {
    return {
        type: ADD_CART_ITEM_SUCCESS
    };
};

export const addCartItemError = () => {
    return {
        type: ADD_CART_ITEM_FAILURE
    };
};

export const removeCartItem = (id) => {
    return {
        type: REMOVE_CART_ITEM_REQUEST,
        payload: id
    }
};

export const cartItemRemoved = (newItemList) => {
    return {
        type: REMOVE_CART_ITEM_SUCCESS,
        payload: newItemList
    };
};

export const removeCartItemError = () => {
    return {
        type: REMOVE_CART_ITEM_FAILURE
    };
};

export const fetchCartItemsCount = () => {
    return {
        type: FETCH_CART_ITEMS_COUNT_REQUEST
    };
};

export const cartItemsCountLoaded = (newCartItemsCount) => {
    return {
        type: FETCH_CART_ITEMS_COUNT_SUCCESS,
        payload: newCartItemsCount
    };
};

export const cartItemsCountError = () => {
    return {
        type: FETCH_CART_ITEMS_COUNT_FAILURE
    };
};

export const changeCartItemCount = (id, count) => {
    return {
        type: CHANGE_CART_ITEM_COUNT_REQUEST,
        payload: {id, count}
    };
};

export const cartItemCountChanged = () => {
    return {
        type: CHANGE_CART_ITEM_COUNT_SUCCESS
    };
};

export const changeCartItemCountError = () => {
    return {
        type: CHANGE_CART_ITEM_COUNT_FAILURE
    };
};

export const showAddedItemModal = () => {
    return {
        type: SHOW_ADDED_ITEM_MODAL
    };
}

export const hideAddedItemModal = () => {
    return {
        type: HIDE_ADDED_ITEM_MODAL
    };
}
