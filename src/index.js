import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import initStore from './store';
import './config/i18n';
import {createBrowserHistory} from 'history';
import {ConnectedRouter} from "connected-react-router";

import './bootstrap';
import './main.css';
import ScrollToTop from "./components/scroll-to-top";

const browserHistory = createBrowserHistory();
const store = initStore(browserHistory);

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ConnectedRouter history={browserHistory}>
                <ScrollToTop/>
                <App/>
            </ConnectedRouter>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
