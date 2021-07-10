import {call, put} from 'redux-saga/effects';
import {ProductApi} from "../../services/product-service";
import {productsError, productsLoaded} from '../actions/product-list';

export function* fetchProducts({payload}) {
    try {
        const data = yield call(ProductApi.getProducts, payload);
        yield put(productsLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(productsError());
    }
}
