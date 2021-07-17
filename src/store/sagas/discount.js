import {call, put} from 'redux-saga/effects';
import {DiscountApi} from "../../services/discount-service";
import {
    addDiscountCodeError,
    discountCodeAdded,
    discountCodesError,
    discountCodesLoaded,
    discountsError,
    discountsLoaded,
    fetchDiscounts as actionFetchDiscounts
} from "../actions/discount";

export function* fetchDiscounts() {
    try {
        const data = yield call(DiscountApi.getDiscounts);
        yield put(discountsLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(discountsError(error));
    }
}

export function* fetchDiscountCodes() {
    try {
        const data = yield call(DiscountApi.getDiscountCodes);
        yield put(discountCodesLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(discountCodesError(error));
    }
}

export function* addDiscountCode({payload}) {
    try {
        yield call(DiscountApi.addDiscount, payload);
        yield put(discountCodeAdded());
        yield put(actionFetchDiscounts());
    } catch (error) {
        console.log([error]);
        yield put(addDiscountCodeError(error));
    }
}
