import {call, put} from 'redux-saga/effects';
import {CartApi} from "../../services/cart-service";
import {
    addCartItemError,
    cartItemAdded,
    cartItemCountChanged,
    cartItemRemoved,
    cartItemsCountError,
    cartItemsCountLoaded,
    cartListError,
    cartListLoaded,
    changeCartItemCountError,
    fetchCartItemsCount as fetchItemsCount,
    removeCartItemError,
    showAddedItemModal
} from "../actions/cart";

export function* fetchCartList() {
    try {
        const {data} = yield call(CartApi.getCartItems);
        yield put(cartListLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(cartListError());
    }
}

export function* addCartItem({payload}) {
    try {
        yield call(CartApi.addCartItem, payload);
        yield put(fetchItemsCount());
        yield put(cartItemAdded());
        yield put(showAddedItemModal(payload.order.product));
    } catch (error) {
        console.log([error]);
        yield put(addCartItemError());
    }
}

export function* removeCartItem({payload}) {
    try {
        const data = yield call(CartApi.removeCartItem, payload);
        yield put(cartItemRemoved(data));
        yield put(fetchItemsCount());
    } catch (error) {
        console.log([error]);
        yield put(removeCartItemError());
    }
}

export function* fetchCartItemsCount() {
    try {
        const data = yield call(CartApi.getItemsCount);
        yield put(cartItemsCountLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(cartItemsCountError());
    }
}

export function* changeCartItemsCount({payload}) {
    try {
        const data = yield call(CartApi.changeItemCount, payload);
        yield put(cartItemCountChanged(data));
    } catch (error) {
        console.log([error]);
        yield put(changeCartItemCountError());
    }
}
