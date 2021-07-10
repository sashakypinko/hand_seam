import {call, put} from 'redux-saga/effects';
import {ProductApi} from "../../services/product-service";
import {productError, productLoaded} from '../actions/product';

export function* fetchProduct({payload}) {
    try {
        const {data} = yield call(ProductApi.getProduct, payload);
        yield put(productLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(productError());
    }
}
