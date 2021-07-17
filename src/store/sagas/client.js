import {call, put} from 'redux-saga/effects';
import {changeLanguageError, clientError, clientLoaded, languageChanged} from "../actions/client";
import {fetchClient as fetchClientAction} from './../actions/client'
import {ClientApi} from "../../services/client-service";

export function* fetchClient() {
    try {
        const data = yield call(ClientApi.getClient);
        yield put(clientLoaded(data));
    } catch (error) {
        console.log([error]);
        yield put(clientError(error));
    }
}

export function* changeLanguage({payload}) {
    try {
        yield call(ClientApi.changeLanguage, payload);
        yield put(languageChanged());
        yield put(fetchClientAction());
    } catch (error) {
        console.log([error]);
        yield put(changeLanguageError(error));
    }
}