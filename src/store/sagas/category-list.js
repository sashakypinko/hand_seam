import {call, put} from 'redux-saga/effects';
import {CategoryApi} from "../../services/category-service";
import {categoriesLoaded, categoriesError} from "../actions/category-list";

export function* fetchCategories() {
    try {
        const data = yield call(CategoryApi.getCategories);
        yield put(categoriesLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(categoriesError());
    }
}
