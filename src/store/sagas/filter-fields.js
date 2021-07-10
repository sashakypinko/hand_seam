import {call, put} from 'redux-saga/effects';
import {filterFieldsLoaded, filterFieldsError} from '../actions/filter-fields';
import {FilterApi} from "../../services/filter-service";

export function* fetchFilterFields() {
    try {
        const data = yield call(FilterApi.getFilterFields);
        yield put(filterFieldsLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(filterFieldsError());
    }
}
