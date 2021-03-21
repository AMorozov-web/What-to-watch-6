import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_AUTH_INFO: `user/setAuthenticationInfo`,
};

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

const setAuthInfo = createAction(ActionType.SET_AUTH_INFO, (status) => {
  return {
    payload: status,
  };
});

export {
  requireAuthorization,
  setAuthInfo,
};
