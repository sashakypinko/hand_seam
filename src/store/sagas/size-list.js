import {call, put} from 'redux-saga/effects';
import {SizeApi} from "../../services/size-service";
import {sizesError, sizesLoaded} from "../actions/size-list";

export function* fetchSizes() {
    try {
        const data = yield call(SizeApi.getSizes);
        yield put(sizesLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(sizesError());
    }
}
