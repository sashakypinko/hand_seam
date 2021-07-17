import {applyMiddleware, combineReducers, createStore} from 'redux';
import {routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import * as reducers from './reducers';
import rootSaga from "./sagas";
import {connectRouter} from "connected-react-router";

const initStore = (history = {}) => {
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&

        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25
        });

    const store = createStore(
        combineReducers({
            ...reducers,
            router: connectRouter(history)
        }),
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
                thunkMiddleware,
                routerMiddleware(history)
            )
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

export default initStore;
