import {applyMiddleware, combineReducers, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import * as reducers from './reducers';
import rootSaga from "./sagas";
import {connectRouter} from "connected-react-router";

const initStore = (history = {}) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
            ...reducers,
            router: connectRouter(history)
        }),
        applyMiddleware(
            sagaMiddleware,
            thunkMiddleware,
            routerMiddleware(history)
        ));

    sagaMiddleware.run(rootSaga);

    return store;
}

export default initStore;
