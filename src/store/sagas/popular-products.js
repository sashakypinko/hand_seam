import {call, put} from 'redux-saga/effects';
import {ProductApi} from "../../services/product-service";
import {popularProductsError, popularProductsLoaded} from "../actions/popular-products";

export function* fetchPopularProducts({payload}) {
    try {
        const {data} = yield call(ProductApi.getPopularProducts, payload);
        yield put(popularProductsLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(popularProductsError(error));
    }
}
