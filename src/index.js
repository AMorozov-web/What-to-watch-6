import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';
import {requireAuthorization} from './store/reducers/user/action';
import {rootReducer} from './store/root-reducer';
import {redirect} from './store/middleware/redirect';
import {Router} from 'react-router-dom';
import {browserHistory} from "./browser-history";
import {AuthorizationStatus} from "./consts";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect),
});

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);
