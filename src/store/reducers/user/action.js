import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../../consts';

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export {
  requireAuthorization,
};
