import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export {
  requireAuthorization,
};
