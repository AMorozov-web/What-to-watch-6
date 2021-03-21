import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../../consts';
import {requireAuthorization, setAuthInfo} from './action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setAuthInfo, (state, action) => {
    state.authInfo = action.payload;
  });
});

export {user};
