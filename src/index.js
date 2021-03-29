import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {App} from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {redirect} from './store/middleware/redirect';
import {checkAuth} from './store/api-actions';
import {browserHistory} from "./browser-history";

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);
